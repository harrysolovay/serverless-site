import React from 'react'
import { Link } from 'react-router'
import Default from '../../layouts/Default'
import styles from './styles.css'

import simpleServerlessApiGraphic from '../../assets/images/event-gateway/simple-serverless-apis.png'
import subscribeFunctionsToWebhooksGraphic from '../../assets/images/event-gateway/subscribe-functions-to-webhooks.png'
import multiProviderService from '../../assets/images/event-gateway/multi-provider-service.png'

const EventGatewayPage = (props) => {

  return (
    <Default className={ styles.page } {...props} fullWidth whiteLogo coloredHeader={ true }>
      
      <div className={ styles.firstSection }>
        <div>

          <div className={ styles.nav }>
            <div>
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
            <div></div>
          </div>

          <div className={ styles.headingAndCallToAction }>
            <div className={ styles.heading }>React to any event<br />on any cloud.</div>
            <div className={ styles.callToAction }>
              <Link to='/blog'>
                <div>sign up</div>
              </Link>
              <Link to='/blog'>
                <div>contact sales</div>
              </Link>
            </div>
          </div>

          <div className={ styles.features }>
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

          <div className={ styles.headingBlurbAndGraphic }>
            <img
              src={ require('../../assets/images/event-gateway/folds.png') }
            />
            <div>
              <div>Serverless Event Gateway</div>
              <div>{ `The Event Gateway is an event router designed for event-driven, serverless architectures. It makes it easy to wire functions to http endpoints, react to business events with serverless functions, and to share event subscriptions with others.` }</div>
            </div>
            <img
              src={ require('../../assets/images/event-gateway/providers.png') }
            />
          </div>

        </div>
      </div>

      <div className={ styles.section }>
        <div>

          <div className={ styles.useCasesHeadingAndSubtitle }>
            <div>Event Gateway Use Cases</div>
            <div>These are the 3 main use cases for Event Gateway that you should know about.</div>
          </div>

          {
            [{
              title: `Simple, serverless APIs`,
              body:  `Use the Event Gateway alongside the Serverless Framework to get the simplest, most productive developer experience possible for developing APIs. A single configuration file allows you to list your functions and define the endpoints that they’re subscribed to. Hit deploy and you’re live.`,
              graphic: simpleServerlessApiGraphic,
              link: {
                to: '/blog',
                label: 'view example'
              }
            }, {
              title: `Subscribe functions to webhooks`,
              body:  `The Event Gateway makes it dead simple to wire functions to any customer event, including webhooks.`,
              graphic: subscribeFunctionsToWebhooksGraphic,
              link: {
                to: '/blog',
                label: 'view example'
              }
            }, {
              title: `Multi-provider service`,
              body:  `The Event Gateway is cloud agnostic, allowing for more vendor choice and flexibility.`,
              graphic: multiProviderService,
              link: {
                to: '/blog',
                label: 'view example'
              }
            }].map(({ title, body, graphic, link : { to, label } }, i) => (
              <div
                className={ styles.useCaseSection }
                key={ i }
              >
                <div>
                  <div>{ title }</div>
                  <div>{ body }</div>
                  <Link { ...{ to } }>
                    <div>{ label }</div>
                  </Link>
                </div>
                <div>
                  <img src={ graphic } />
                </div>
              </div>
            ))
          }

        </div>
      </div>

    </Default>
  )
}

EventGatewayPage.hasLoadingState = true

export default EventGatewayPage
