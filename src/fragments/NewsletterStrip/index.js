import React from 'react'
import PropTypes from 'prop-types'
import Newsletter from '../Newsletter'
import styles from './NewsletterStrip.css'
import { getItemSync } from '../../utils/storage'
const logo = process.env.LOGO

const NewsletterStrip = (props) => {
  if (getItemSync('newsletterSubscribed') === true) {
    return <div />
  }
  return (
    <div className={styles.container}>
      <div className={styles.descriptionBlock}>
        <img className={styles.logo} width={52} height={35} src={logo.ICON} />
        <p className={styles.description}>
          Join our newsletter and get the latest news about Serverless products and happenings. #noSpamWePromise
        </p>
      </div>
      <Newsletter className={styles.newsletter} />
    </div>
  )
}

NewsletterStrip.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}
export default NewsletterStrip
