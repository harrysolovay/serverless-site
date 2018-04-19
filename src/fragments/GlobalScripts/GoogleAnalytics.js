/* eslint-disable no-console */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ga from 'react-google-analytics'
import pageView from '../../utils/analytics/page'
const InjectGoogleAnalytics = ga.Initializer
const isClient = typeof window !== 'undefined'
const googleAnalyticsUA = process.env.GOOGLE_ANALYTICS_UA

class GoogleAnalyticsTracker extends Component {

  componentWillMount() {
    if (isClient) {
      if (process.env.NODE_ENV === 'production') {
        ga('create', googleAnalyticsUA, 'auto')
      } else {
        console.info('ga.create', googleAnalyticsUA)
      }
      pageView()
    }
  }

  componentWillReceiveProps(props) {
    // if route is new, log pageview
    if (props.params.splat !== this.props.params.splat) {
      pageView()
    }
  }

  render() {
    return (
      <InjectGoogleAnalytics />
    )
  }
}

GoogleAnalyticsTracker.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  params: PropTypes.object.isRequired,
}

export default GoogleAnalyticsTracker
