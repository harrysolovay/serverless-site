import React from 'react'
import { Link } from 'react-router'
import Default from '../../layouts/Default'
import styles from './styles.css'
import Glitch from '../../components/Glitch'
import PreFooter from '../../fragments/PreFooter'

import simpleServerlessApiGraphic from '../../assets/images/event-gateway/simple-serverless-apis.png'
import subscribeFunctionsToWebhooksGraphic from '../../assets/images/event-gateway/subscribe-functions-to-webhooks.png'
import multiProviderService from '../../assets/images/event-gateway/multi-provider-service.png'

import apiGatewayGraphic from '../../assets/images/event-gateway/api-gateway.png'
import pubSubGraphic from '../../assets/images/event-gateway/pub-sub.png'
import connectorFunctionsGraphic from '../../assets/images/event-gateway/connector-functions.png'
import platformAgnosticGraphic from '../../assets/images/event-gateway/platform-agnostic.png'
import streamingEventsGraphic from '../../assets/images/event-gateway/streaming-events.png'
import shareableEventsGraphic from '../../assets/images/event-gateway/sharable-events.png'

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

          <div className={ styles.sectionHeadingAndSubtitle }>
            <div className={ styles.sectionHeading }>Event Gateway Use Cases</div>
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

      <Glitch mid />

      <div className={ styles.section }>
        <div>
        
          <div className={ styles.sectionHeadingAndSubtitle }>
            <div className={ styles.sectionHeading }>Features</div>
          </div>

          <div className={ styles.featuresGrid }>
            {
              [{
                graphic: apiGatewayGraphic,
                title: `API Gateway`,
                body: `Easily subscribe FaaS functions to HTTP endpoints. Set up multiple Serverless services under a single domain, even across AWS accounts.`
              }, {
                graphic: pubSubGraphic,
                title: `Pub/Sub`,
                body: `Take advantage of pub/sub functionality by utilizing custom events. This allows you to process the same event with multiple systems.`
              }, {
                graphic: connectorFunctionsGraphic,
                title: `Connector Functions`,
                body: `Automatically route events to external systems like Kinesis, Firehose, SQS, etc.`
              }, {
                graphic: platformAgnosticGraphic,
                title: `Platform Agnostic`,
                body: `All your cloud services are now compatible with one another. Share cross-cloud functions and events with AWS Lambda, Microsoft Azure, IBM OpenWhisk and Google Cloud Platform.`
              }, {
                graphic: streamingEventsGraphic,
                title: `Streaming Events`,
                body: `Data streams in you application become events. Centralize events from any cloud provider to get a bird’s eye view of all the data flowing through your cloud.`
              }, {
                graphic: shareableEventsGraphic,
                title: `Shareable events`,
                body: `Share events and functions to other parts of the application. Your teammates can find them and utilize them in their own services.`
              }].map(({ graphic, title, body }, i) => (
                <div
                  className={ styles.feature }
                  key={ i }
                >
                  <img src={ graphic } />
                  <div>
                    <div>0{ i + 1 }</div>
                    <div>{ title }</div>
                  </div>
                  <div>{ body }</div>
                </div>
              ))
            }
          </div>

        </div>
      </div>

      <PreFooter
        heading={ `Ready to get started?` }
        subheadings={[
          `Dig deeper into Event Gateway use cases, or check out the example in our open source repo.`
        ]}
        links={[{
          to: '/framework/docs/',
          label: 'getting started'
        }, {
          to: '/framework/docs/',
          label: 'learn more'
        }, {
          to: '/framework/docs/',
          label: 'examples'
        }]}
      />

    </Default>
  )
}

EventGatewayPage.hasLoadingState = true

export default EventGatewayPage
