import React from 'react'
import PropTypes from 'prop-types'
import styles from './Resource.css'

const Resource = (props) => {
  const params = props.params
  return (
    <div className={styles.page}>
      <h2>{'name of resource'}</h2>
      {params.id}
      <div>Image</div>
      <div>Tags</div>
    </div>
  )
}

Resource.propTypes = {
  params: PropTypes.object,
}

export default Resource
