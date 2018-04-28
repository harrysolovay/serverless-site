
import React from 'react'
import { Link } from 'react-router'
import styles from './styles.css'

import nextPageArrow from '../../../assets/images/next-page-arrow.png'
import previousPageArrow from '../../../assets/images/previous-page-arrow.png'

const Pagination = ({
  categorySubstring,
  pageNumber=0,
  numberOfPages
}) => {

  let nextLink = (
    <Link to={`/blog/${ categorySubstring }page/1`}>
      <div className={ styles.containsArrowImage }>
        <img className={ styles.arrowImage } src={ nextPageArrow } />
      </div>
    </Link>
  )

  let previousLink

  const prevNum = ((pageNumber - 1) === 0) ? '' : `page/${ pageNumber - 1 }`

  if(pageNumber + 1 === numberOfPages || pageNumber === 0 && numberOfPages === 1) {
    nextLink = null
  } else {
    nextLink = (
      <Link to={ `/blog/${ categorySubstring }page/${ pageNumber + 1 }` }>
        <div className={ styles.containsArrowImage }>
          <img className={ styles.arrowImage } src={ nextPageArrow } />
        </div>
      </Link>
    )
  }

  if(pageNumber === 0) {
    previousLink = null
  } else {
    previousLink = (
      <Link to={ `/blog/${ categorySubstring }${ prevNum }` }>
        <div className={ styles.containsArrowImage }>
          <img className={ styles.arrowImage } src={ previousPageArrow } />
        </div>
      </Link>
    )
  }

  let
    pageNumberLinkIndices = [],
    pageNumberLinks = []

  if(numberOfPages > 7) {

    if(pageNumber < 4) {
      pageNumberLinkIndices = [
        0,
        1,
        2,
        3,
        4,
        '..',
        numberOfPages - 1
      ]
    }
    
    else if(pageNumber >= 4 && pageNumber < numberOfPages - 4) {
      console.log(true)
      pageNumberLinkIndices = [
        0,
        '..',
        pageNumber - 2,
        pageNumber - 1,
        pageNumber,
        pageNumber + 1,
        pageNumber + 2,
        '..',
        numberOfPages - 1
      ]
    }
    
    else if(pageNumber >= numberOfPages - 5) {
      pageNumberLinkIndices = [
        0,
        '..',
        numberOfPages - 6,
        numberOfPages - 5,
        numberOfPages - 4,
        numberOfPages - 3,
        numberOfPages - 2,
        numberOfPages - 1
      ]
    }

  }

  else {
    for(let i = 0; i < numberOfPages; i++) {
      pageNumberLinkIndices.push(i)
    }
  }

  pageNumberLinkIndices.forEach(e => {
    pageNumberLinks.push(
      e === '..'
        ? <div className={ styles.pageNumberLinkSeparator }>..</div>
        : (
            <Link to={ `/blog/${ categorySubstring }page/${ e }` }>
              <div
                className={
                  e === pageNumber || e === 0 && pageNumber === 0
                    ? styles.currentPageNumberLink
                    : styles.pageNumberLink
                }
              >
                { e + 1 }
              </div>
            </Link>
          )
    )
  })

  return (
    <div className={ styles.container }>
      { previousLink }
      { pageNumberLinks }
      { nextLink }
    </div>
  )

}

export default Pagination