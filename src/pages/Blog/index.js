import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import enhanceCollection from 'phenomic-serverless/lib/enhance-collection'
import Default from '../../layouts/Default'
import BlogPreview from './BlogPreview'
import Sidebar from '../../layouts/Post/sidebar'
import styles from './Blog.css'

const numberOfLatestPosts = 25

export default class BlogPage extends Component {
  static hasLoadingState = true
  static propTypes = {
    isLoading: PropTypes.bool
  }
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }
  render() {
    const { isLoading, params } = this.props
    const pageNumber = (params && params.page) ? parseInt(params.page, 10) : 0
    const pagination = numberOfLatestPosts * pageNumber
    const offset = pagination + numberOfLatestPosts
    const latestPosts = enhanceCollection(this.context.collection, {
      filter: { layout: 'Post' },
      sort: 'date',
      reverse: true,
    })
    .slice(pagination, offset)
    let nextLink = <Link to={'/blog/page/1'}>Next Page</Link>
    let previousLink
    if (params && params.page) {
      const prevNum = ((pageNumber - 1) === 0) ? '' : `page/${pageNumber - 1}`
      nextLink = <Link to={`/blog/page/${pageNumber + 1}`}>Next Page</Link>
      previousLink = <Link to={`/blog/${prevNum}`}>Previous Page</Link>
    }
    let renderContent = (
      <div className={styles.postList}>
        {latestPosts.map((page, i) => (
          <BlogPreview key={i} page={page} />
        ))}
        <div className={styles.pageination}>
          {previousLink}
          {nextLink}
        </div>
      </div>
    )
    if (isLoading) {
      const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mauris arcu, eu pretium nisi. Praesent fringilla ornare ullamcorper. Pellentesque diam orci, sodales in blandit ut, placerat quis felis.'
      renderContent = (
        <div className={styles.postList}>
          <BlogPreview page={{ title: 'loading...', description: text }} isLoading />
          <BlogPreview page={{ title: 'loading....', description: text }} isLoading />
          <BlogPreview page={{ title: 'loading...', description: text }} isLoading />
          <BlogPreview page={{ title: 'loading...', description: text }} isLoading />
          <BlogPreview page={{ title: 'loading...', description: text }} isLoading />
        </div>
      )
    }
    return (
      <Default {...this.props} fullWidth coloredHeader className={styles.blogPage}>
        <div className={styles.wrapper}>
          {renderContent}
          <Sidebar />
        </div>
      </Default>
    )
  }
}
