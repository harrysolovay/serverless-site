import React from 'react'
import PropTypes from 'prop-types'
import Svg from 'react-svg-inline'
import twitterSVG from '../../assets/icons/twitter.svg'
import GithubSVG from '../../assets/icons/github.svg'
import { twitterShare } from '../../utils/social/share'
import styles from './FixedSocialButtons.css'

const FixedSocialButtons = (props) => {
  const twitterURL = twitterShare(props.title, props.url, props.hashtags)
  let editLink
  if (props.editLink) {
    editLink = (
      <a href={props.editLink} title='edit this post' target='_blank' rel='noopener noreferrer'>
        <Svg svg={GithubSVG} cleanup />
      </a>
    )
  }
  return (
    <div className={styles.social}>
      <a href={twitterURL} className={styles.twitter} title='tweet this post' target='_blank' rel='noopener noreferrer'>
        <Svg svg={twitterSVG} cleanup />
      </a>
      {editLink}
    </div>
  )
}

FixedSocialButtons.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  hashtags: PropTypes.array,
  editLink: PropTypes.string,
}

export default FixedSocialButtons
