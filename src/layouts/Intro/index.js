import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { BodyContainer } from 'phenomic-serverless'
import { Link } from 'react-router'
import Default from '../Default'
import ContentLoading from '../../components/ContentLoading/Paragraph'
import styles from './Intro.css'
import globalStyles from './Intro.global.css'

class Intro extends Component {
  static hasLoadingState = true
  renderNav() {
    return (
      <div className={styles.navWrapper}>
        <div className={styles.navInner} >
          <div className={styles.navLink}>
            <a href="/intro/why-serverless">
              - Why Serverless?
            </a>
          </div>
          <div className={styles.navLink}>
            <a href="/intro/use-cases">
              - Use Cases
            </a>
          </div>
          <div className={styles.navLink}>
            <a href="/intro/comparisons">
              - Comparisons
            </a>
          </div>
          <div className={styles.navLink}>
            <a href="/intro/quick-start">
              - Quick Start
            </a>
          </div>
        </div>
      </div>
    )
  }
  render() {
    const { props } = this
    const { head, body, isLoading, loadingData } = props
    let markdownContent
    let title = (head) ? head.title : '...'

    if (loadingData && loadingData.title) {
      title = loadingData.title
    }

    if (!isLoading) {

      markdownContent = (
        <BodyContainer>
          {body}
        </BodyContainer>
      )

      title = head.title
    }

    if (isLoading) {
      markdownContent = (
        <div className={styles.loadingWrapper}>
          <ContentLoading numberOfLines={30} />
        </div>
      )
    }

    return (
      <Default {...props} fullWidth className={styles.introPage} >
        {this.renderNav()} 
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>
            {title}
          </h1>
          <div className={styles.postContent}>
            {markdownContent}
          </div>
        </div>
      </Default>
    )
  }
}

Intro.propTypes = {
  head: PropTypes.object.isRequired,
  __url: PropTypes.string,
  phenomicLoading: PropTypes.bool,
}

export default Intro 
