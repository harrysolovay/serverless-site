import React from 'react'
import PropTypes from 'prop-types'
import styles from './Checkbox.css'
// 😻 http://codepen.io/DavidWells/pen/PzvEWa

const propTypes = {
  children: PropTypes.any,
  checked: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
}

const Check = ({ name, label }) => {
  const value = label
  const id = (label) ? `form_${label.replace(/ /g, '_').toLowerCase()}` : null
  return (
    <div className={styles.checkbox}>
      <input type='checkbox' id={id} name={name} value={value} />
      <div className={styles.check} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

Check.propTypes = propTypes

export default Check
