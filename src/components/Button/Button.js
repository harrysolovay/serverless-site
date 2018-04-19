import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import styles from './Button.css' // eslint-disable-line

const propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  children: PropTypes.any,
  kind: PropTypes.oneOf(['dark', 'black', 'yellow', 'blue', 'red', 'redBordered', 'whiteBordered']),
  style: PropTypes.object,
  /** if href provided to button, button will be a link */
  href: PropTypes.string,
  /** target of href */
  target: PropTypes.string,
  className: PropTypes.string,
}

const defaultProps = {
  kind: 'dark',
}

export default function Button({ onClick, label, children, kind, style, href, target, className }) {
  const text = label || children
  const kindStyle = styles[kind]
  const classes = className || ''
  if (href) {
    return (
      <Link
        className={`${styles.btn} ${kindStyle} ${classes}`}
        to={href}
        target={target}
        onClick={onClick} style={style}
      >
        <span className={styles.background} />
        <span>{text}</span>
      </Link>
    )
  }

  return (
    <button className={`${styles.btn} ${kindStyle}`} onClick={onClick} style={style}>
      <div>{text}</div>
    </button>
  )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps
