import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Hero.css'
import classnames from 'classnames'

const propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  contents: PropTypes.any,
  cta: PropTypes.any,
  icon: PropTypes.string,
  background: PropTypes.string,
}

const urlBase = process.env.S3_BUCKET

export default class Hero extends Component {
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
  }
  render() {
    const { title, subTitle, content, icon, cta, background, className } = this.props

    let heroTitle = title
    let heroSubTitle = subTitle
    let heroBackground = background

    if (heroBackground) {
      if (typeof heroBackground === 'object') {
        //
      } else if (heroBackground.match(/\.(jpe?g|png|gif|svg)$/)) {
        // set image BG
        heroBackground = {
          backgroundImage: `url(${heroBackground})`
        }
      } else if (heroBackground.match(/[0-9A-Fa-f]{6}/g)) {
        // set hex color BG
        const color = (heroBackground.match(/\#/)) ? heroBackground : `#${heroBackground}`
        heroBackground = {
          backgroundColor: `${color}`
        }
      }
    }

    const classes = classnames(
      className,
      styles.hero,
      // if no title or sub title hide background opacity and just show image
      {
        [styles.noTitle]: !title && !subTitle
      }
    )

    let iconRender
    if (icon) {
      iconRender = (
        <img
          className={styles.toolIcon}
          width={200}
          height={200}
          src={icon}
        />
      )
    }

    return (
      <div className={styles.toolHero} style={heroBackground}>
        <div className={styles.boundSmall}>
          {iconRender}
          <h1 className={styles.toolTitle}>
            {title}
          </h1>

          {content}

          {cta}
        </div>
      </div>
    )
  }
}

Hero.propTypes = propTypes
