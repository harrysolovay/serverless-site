import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Hero.css'
import classnames from 'classnames'

const propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  background: PropTypes.string,
}

export default class Hero extends Component {
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
  }
  render() {
    const { title, subTitle, background, className } = this.props

    let heroTitle = title
    let heroSubTitle = subTitle
    let heroBackground = background

    if (heroBackground) {
      if (heroBackground.match(/\.(jpe?g|png|gif)$/)) {
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

    return (
      <div className={styles.heroWrapper}>
        <div className={styles.navPadding} />
        <div className={classes} style={heroBackground}>
          <div className={styles.opacity}/>
          <h1 className={styles.title}>
            {heroTitle}
          </h1>
          <h2 className={styles.subtitle}>
            {heroSubTitle}
          </h2>
        </div>
      </div>
    )
  }
}

Hero.propTypes = propTypes
