/**
 * Base Intro template
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BodyContainer } from 'phenomic-serverless'
import { Link } from 'react-router'
import Svg from 'react-svg-inline'
import Helmet from 'react-helmet'
import debounce from 'lodash.debounce'
import { getParentUrl, getCurrentUrl } from '../../utils/url'
import gitHubSvg from '../../assets/icons/github.svg'
import generatedMenu from './generated-menu-items'
import Default from '../Default'
import Breadcrumbs from '../../components/Breadcrumbs'
import ContentLoading from '../../components/ContentLoading/Paragraph'
// Global styles are used to style html classes from github markdown files
import globalStyles from './Intro.global.css' // eslint-disable-line
import styles from './Intro.css'

const preventDefault = (e) => e.preventDefault()

class Intro extends Component {
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
  }
  renderList() {
    const menu = [
      {
        "title": "What is Serverless?",
        "path": "/intro/what-is-serverless",
      },
      {
        "title": "Use Cases",
        "path": "/intro/use-cases",
      },
      {
        "title": "Quick Start",
        "path": "/intro/quick-start",
      }
    ]
    let items;
    if (menu && menu.length > 0) {
      items = menu.map((item, i) => {
        return (
          <li key={i} className={styles.subPageLink}>
            <Link to={item.path}>
              {item.title}
            </Link>
          </li>
        )
      })
    }
    return items
  }
  renderIntroNav() {
    const items = this.renderList()
    return (
      <div className={styles.introNav}>
        <div className={styles.introNavInner}>
          <div className={styles.subPages}>
            <ul>
              {items}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  render() {
    const { body, isLoading } = this.props
    let markdownContent;

    if (isLoading) {
      markdownContent = (
        <div style={{ maxWidth: '650px' }}>
          <ContentLoading numberOfLines={30} />
        </div>
      )
    } else {
      markdownContent = (
        <BodyContainer>
          {body}
        </BodyContainer>
      )
    };

    return (
      <Default {...this.props} fullWidth className={`${styles.introPage}`} >
        <div className={styles.introContainer}>
          <div className={styles.introWrapper}>

            {this.renderIntroNav()}

            <div className={styles.content}>
              {markdownContent}
            </div>
          </div>
        </div>
      </Default>
    )
  }
}


Intro.propTypes = {
  /** if true, page will be full width */
  fullWidth: PropTypes.bool,
  /** set loading set **/
  isLoading: PropTypes.bool,
  __url: PropTypes.string,
  head: PropTypes.object,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element
}

export default Intro
