import React from 'react'
import { Link } from 'react-router'
import styles from './styles.css'
import { getCategoryNameFromPath } from '../util';

const FilterAndSearch = ({ category }) => (
  <div className={ styles.container }>
    <div>
      <div className={ styles.categories }>
        {
          [
            { to: '/blog', label : 'all' },
            { to: '/blog/category/application-development', label : 'application development' },
            { to: '/blog/category/operations-and-observability', label : 'operations & observability' },
            { to: '/blog/category/guides-and-tutorials', label : 'guides & tutorials' },
            { to: '/blog/category/engineering-culture', label : 'engineering culture' },
            { to: '/blog/category/news', label : 'news' }
          ].map(({ to, label }, i) => (
            <Link
              { ...{ to } }
              className={
                label === getCategoryNameFromPath(category) || label === 'all' && !!!category
                  ? styles.current
                  : styles.link
              }
              key={ i }
            >
              <div className={ styles.linkLabel }>{ label }</div>
            </Link>
          ))
        }
      </div>
      <div className={ styles.search }></div>
    </div>
  </div>
)

export default FilterAndSearch