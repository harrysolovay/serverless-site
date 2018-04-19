/*eslint-disable */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Default from '../../layouts/Default'

export default class CommunityPage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }
  render() {
    return (
      <Default {...this.props} />
    )
  }
}
