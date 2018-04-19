import React from 'react'
import PropTypes from 'prop-types'
import Newsletter from '../Newsletter'
import styles from './styles.css'

const NewsletterCTA = (props) => {
  return (
    <div className={props.className} style={props.style}>
      <h3>
        Stay up to date<br />
        Subscribe to the Newsletter
      </h3>
      <Newsletter className={styles.stacked} black={props.black} />
    </div>
  )
}

NewsletterCTA.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  black: PropTypes.bool,
}
export default NewsletterCTA
