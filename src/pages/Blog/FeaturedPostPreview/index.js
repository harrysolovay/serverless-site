import React from 'react'
import styles from './styles.css'
import { Link } from 'react-router'
import { getCategoryNameFromPath } from '../util.js'

const FeaturedPost = ({
  image,
  category,
  title,
  description,
  authorshipLabel,
  url
}) => {

  const PostLink = props => (
    <Link
      to={ url }
      { ...props }
    />
  )

  return (
    <div className={ styles.container }>
      <div>
        <PostLink>
          <div
            className={ styles.image }
            style={{ backgroundImage : `url(${ image })` }}
          ></div>
        </PostLink>
        <div className={ styles.category }>
          <Link to={ `/blog/category/${ category }` }>
            <div>{ getCategoryNameFromPath(category) }</div>
          </Link>
        </div>
        <div className={ styles.title }>
          <PostLink>
            <div>{ title }</div>
          </PostLink>
        </div>
        <div className={ styles.description }>
          { description }
        </div>
        <div className={ styles.authorshipLabel }>
          { authorshipLabel }
        </div>
      </div>
    </div>
  )
}

export default FeaturedPost