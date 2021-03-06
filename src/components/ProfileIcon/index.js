import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  profile: PropTypes.object
}
export default class ProfileIcon extends Component {
  render() {
    const { profile } = this.props
    return (
      <div>
        <img src={profile.picture} height='40px' role='presentation' />
      </div>
    )
  }
}

ProfileIcon.propTypes = propTypes
