import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { BodyContainer } from 'phenomic-serverless'
import { Link } from 'react-router'
import Default from '../Default'
import ContentLoading from '../../components/ContentLoading/Paragraph'
import styles from './Learn.css'
import globalStyles from './Learn.global.css'

class Learn extends Component {
  static hasLoadingState = true
  renderNav() {
    // This is kind of janky but allows us to ignore Learn Nav if desired.
    if (!this.props.head.useLearnNav) {
      return null
    };
    return (
      <div className={styles.navWrapper}>
        <div className={styles.navInner} >
          <div className={styles.navLink}>
            <a href="/learn/">
              - Why Serverless?
            </a>
          </div>
          <div className={styles.navLink}>
            <a href="/learn/use-cases">
              - Use Cases
            </a>
          </div>
          <div className={styles.navLink}>
            <a href="/learn/comparisons">
              - Comparisons
            </a>
          </div>
          <div className={styles.navLink}>
            <a href="/learn/quick-start">
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
      <Default {...props} fullWidth className={styles.learnPage} >
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

Learn.propTypes = {
  head: PropTypes.object.isRequired,
  __url: PropTypes.string,
  phenomicLoading: PropTypes.bool,
}

export default Learn
