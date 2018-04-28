import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import enhanceCollection from 'phenomic-serverless/lib/enhance-collection'
import Default from '../../layouts/Default'
import BlogPreview from './BlogPreview'
import FilterAndSearch from './FilterAndSearch'
import Pagination from './Pagination'
import Subscribe from '../../fragments/Subscribe'
import styles from './Blog.css'
import PreFooter from '../../fragments/PreFooter'
import FeaturedPostPreview from './FeaturedPostPreview'
import Glitch from '../../components/Glitch'

const numberOfPostsPerPage = 7

class BlogPage extends Component {

  static hasLoadingState = true // can we delete this, or does it somehow aid Phenomic?
  static propTypes = { isLoading: PropTypes.bool }
  static contextTypes = { collection: PropTypes.array.isRequired }

  render() {

    const { isLoading, params } = this.props

    const category = params && params.category
      ? params.category : null

    const categorySubstring = category
      ? `category/${ category }/` : ''

    let filter = { layout: 'Post' }
    if(params && params.category) {
      filter = Object.assign(filter, { category })
    }

    const
      pageNumber = (params && params.page) ? parseInt(params.page, 10) : 0,
      pagination = numberOfPostsPerPage * pageNumber,
      offset = pagination + numberOfPostsPerPage

    const featuredPosts = this.context.collection.filter((post) => {
      return ( !!!category && post.featured === 'all' || post.featured === category )
    })

    if(featuredPosts.length > 1) {

      let featuredPostTitles = featuredPosts.map(post => `'${ post.title }'`)
      const lastFeaturedPostTitle = featuredPostTitles.pop()
      const category = category ? category : 'all'
      console.log(featuredPosts)
      throw new Error(`There are multiple posts set to display as featured for category '${ category }'. The post titles are: ${ featuredPostTitles.join(', ') } and ${ lastFeaturedPostTitle }. Check console logs for more the post objects.`)

    }


    const featuredPost = featuredPosts && featuredPosts[0]
      ? (
          <FeaturedPostPreview
            image={ featuredPosts[0].hero ? featuredPosts[0].hero : featuredPosts[0].thumbnail }
            category={ featuredPosts[0].category }
            title={ featuredPosts[0].title }
            description={ featuredPosts[0].description }
            author={ featuredPosts[0].authors[0] }
            url={ featuredPosts[0].__url }
          />
        )
      : null


    const {
      latestPosts,
      numberOfPages
    } = (() => {

      const allPosts = enhanceCollection(
        this.context.collection,
        {
          filter,
          sort: 'date',
          reverse: true,
        }
      )

      /*
       * 1) use modulo to get the remainder of allPosts.length / numberOfPostsPerPage
       * 2) subtract that remainder from allPosts.length, then divide by numberOfPostsPerPage to get number of pages that are completely filled
       * 3) store whether has partially filled page
       * 4) if it does, then add 1 to numberOfPages (calculated in step 2)
       */

      const remainder = allPosts.length % numberOfPostsPerPage
      let numberOfPages = ( allPosts.length - remainder ) / numberOfPostsPerPage
      const hasPartiallyFilledPage = remainder > 0
      if(hasPartiallyFilledPage) {
        numberOfPages += 1
      }

      return {
        latestPosts: allPosts.slice(pagination, offset),
        numberOfPages
      }

    })()

    const searchAndFilter = <FilterAndSearch { ...{ category } } />

    const renderContent = isLoading
      ? (
          <div className={ styles.postList }>
            {
              ((numberOfDummyPosts) => {
                let dummyPosts = []
                for(let i = 0; i < numberOfDummyPosts; i++) {
                  dummyPosts.push(
                    <BlogPreview
                      isLoading
                      page={{
                        title: 'loading...',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mauris arcu, eu pretium nisi. Praesent fringilla ornare ullamcorper. Pellentesque diam orci, sodales in blandit ut, placerat quis felis.'
                      }}
                      key={ i }
                    />
                  )
                }
                return dummyPosts
              })(6)
            }
          </div>
        )
      : (
          <div className={ styles.postList }>
            { featuredPost }
            <Glitch mid />
            { searchAndFilter }
            {
              latestPosts.map((page, i) => {
                return (
                  <div>
                    { i === ( ( numberOfPostsPerPage - ( numberOfPostsPerPage % 2 ) ) / 2 ) && <Subscribe /> }
                    <BlogPreview key={ i } page={ page } />
                  </div>
                )
              })
            }
            <Pagination
              { ...{
                categorySubstring,
                pageNumber,
                numberOfPages
              } }
            />

            <PreFooter
              heading={ `New to Serverless?` }
              subheadings={[
                `To get started, pop open your terminal & run:`,
                `npm install serverless -g`
              ]}
              links={[{
                to: '/framework/docs/',
                label: 'documentation'
              }, {
                to: '/framework/docs/',
                label: 'serverless examples'
              }, {
                to: '/framework/docs/',
                label: 'serverless plugins'
              }]}
            />

          </div>
        )

    return (
      <Default
        {...this.props}
        fullWidth
        coloredHeader
        className={styles.blogPage}
      >
        <div className={styles.wrapper}>
          { renderContent }
        </div>
      </Default>
    )

  }
}

export default BlogPage