import React from 'react'
import { Link } from 'react-router'
import Default from '../../layouts/Default'
import styles from './styles.css'

const EventGatewayPage = (props) => {

  return (
    <Default className={ styles.page } {...props} fullWidth whiteLogo coloredHeader={ true }>
      
      <div className={ styles.firstSection }>
        <div>

          <div className={ styles.nav }>
            {
              [{
                to: `/blog`,
                label: `overview`
              }, {
                to: `/blog`,
                label: `framework`
              }, {
                to: `/blog`,
                label: `dashboard`
              }, {
                to: `/blog`,
                label: `event gateway`
              }].map(({ to, label }, i) => (
                <Link
                  to={ to }
                  key={ i }
                >
                  <div
                    className={
                      i === 3
                        ? styles.selectedNavItem
                        : styles.navItem
                    }
                  >
                    { label }
                  </div>
                </Link>
              ))
            }
          </div>

          <div className={ styles.headingAndCallToAction }>
            <div className={ styles.heading }>React to any event on<br />any cloud.</div>
            <div className={ styles.callToAction }>
              <Link to='/blog'>
                <div>sign up</div>
              </Link>
              <Link to='/blog'>
                <div>contact sales</div>
              </Link>
            </div>
          </div>

          <div>
            {
              [{
                heading: `Simplify API development`,
                body: `Simplify API The Event Gateway is the simplest developer experience for wiring Serverless functions to http endpoints.`
              }, {
                heading: `React to custom events`,
                body: `Expand your Serverless use-cases by reacting to any custom event with Serverless functions.`
              }, {
                heading: `Vendor Choice`,
                body: `The Event Gateway is open source and cloud agnostic, allowing for more choice and flexibility.`
              }].map(({ heading, body }, i) => (
                <div
                  className={ styles.featureHighlight }
                  key={ i }
                >
                  <div>{ heading }</div>
                  <div>{ body }</div>
                </div>
              ))
            }
          </div>

        </div>
      </div>

    </Default>
  )
}

EventGatewayPage.hasLoadingState = true

export default EventGatewayPage
