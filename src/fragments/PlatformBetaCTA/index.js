import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../../components/Button'
import Auth from '../../components/Auth'

const propTypes = {
  kind: PropTypes.string,
  text: PropTypes.string,
  loggedInComponent: PropTypes.element,
}
export default class PlatformBetaCTA extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    const { kind, text, loggedInComponent } = this.props
    return (
      <Auth loggedInComponent={loggedInComponent || <span />}>
        <Button kind={kind || 'redBordered'}>{text || 'Sign Up'}</Button>
      </Auth>
    )
  }
}

PlatformBetaCTA.propTypes = propTypes
