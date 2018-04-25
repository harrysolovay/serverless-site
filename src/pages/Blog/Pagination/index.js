
import React from 'react'
import { Link } from 'react-router'
import styles from './styles.css'

const Pagination = ({
  categoryString,
  pageNumber,
  numberOfPages
}) => {

  let nextLink = (
    <Link to={`/blog/${ categoryString }page/1`}>
      <div className={ styles.nextLink }>next</div>
    </Link>
  )

  let previousLink

  const prevNum = ((pageNumber - 1) === 0) ? '' : `page/${ pageNumber - 1 }`

  if(pageNumber === numberOfPages) {
    nextLink = null
  } else {
    nextLink = (
      <Link to={ `/blog/${ categoryString }page/${ pageNumber + 1 }` }>
        <div className={ styles.nextLink }>next</div>
      </Link>
    )
  }

  if(pageNumber === 1) {
    previousLink = null
  } else {
    previousLink = (
      <Link to={ `/blog/${ categoryString }${ prevNum }` }>
        <div className={ styles.previousLink }>previous</div>
      </Link>
    )
  }

  let
    pageNumberLinkIndices = [],
    pageNumberLinks = []

  if(numberOfPages > 7) {

    if(pageNumber < 5) {
      pageNumberLinkIndices = [
        1,
        2,
        3,
        4,
        5,
        '..',
        numberOfPages
      ]
    }
    
    else if(pageNumber >= 5 && pageNumber < numberOfPages - 4) {
      pageNumberLinkIndices = [
        1,
        '..',
        pageNumber - 2,
        pageNumber - 1,
        pageNumber,
        pageNumber + 1,
        pageNumber + 2,
        '..',
        numberOfPages
      ]
    }
    
    else if(pageNumber >= numberOfPages - 4) {
      pageNumberLinkIndices = [
        1,
        '..',
        numberOfPages - 5,
        numberOfPages - 4,
        numberOfPages - 3,
        numberOfPages - 2,
        numberOfPages - 1,
        numberOfPages
      ]
    }

  }

  else {
    for(let i = 0; i < numberOfPages.length; i++) {
      pageNumberLinkIndices.push(i)
    }
  }

  pageNumberLinkIndices.forEach(e => {
    pageNumberLinks.push(
      e === '..'
        ? <div className={ styles.pageNumberLinkSeparator }>..</div>
        : (
            <Link to={ `/blog/${ categoryString }page/${ e }` }>
              <div
                className={
                  e === pageNumber
                    ? styles.currentPageNumberLink
                    : styles.pageNumberLink
                }
              >
                { e }
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