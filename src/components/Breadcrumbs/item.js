import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

export default function BreadcrumbItem({ getUrlFromPathSegments, pathSegments, label }) {
  return (
    <Link to={getUrlFromPathSegments(pathSegments)}>
      {label}
    </Link>
  )
}

BreadcrumbItem.propTypes = {
  label: PropTypes.string.isRequired,
  pathSegments: PropTypes.array.isRequired,
  getUrlFromPathSegments: PropTypes.func,
}
