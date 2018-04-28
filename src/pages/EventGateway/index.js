import React from 'react'
import { Link } from 'react-router'
import Default from '../../layouts/Default'
import GridSection from '../../components/GridSection'
import Hero from '../../fragments/HeroProduct'
import styles from './EventGateway.css'

const urlBase = process.env.S3_BUCKET

const EventGatewayPage = (props) => {
  const img = `${urlBase}images/event-gateway-ground.svg`
  const bg = `${urlBase}images/toolkit-ground.png`

  const content = (
    <div className={styles.contents}>
      <p>BLAH React to any event, with any function, on any provider. Break away from the single cloud experience.'</p>
    </div>
  )

  const ctaButton = (
    <div className={styles.ctaWrapper}>
      <a className={`${styles.btn} ${styles.btnGrey}`} href='https://github.com/serverless/event-gateway'>
        <img width={24} height={24} src={`${urlBase}images/github-icon.svg`} />
        Github
      </a>
      <Link to='/event-gateway/enterprise/' className={`${styles.btn} ${styles.btnGrey}`}>
        Gateway Enterprise
      </Link>
    </div>
  )

  return (
    <Default className={styles.page} {...props} fullWidth whiteLogo coloredHeader={false}>
      <Hero
        background={{
          backgroundColor: '#159BBA',
          backgroundImage: `url(${bg}), url(${img})`,
          backgroundPosition: 'center top, center 65%',
          backgroundSize: '100%, 94%'
        }}
        icon={`${urlBase}icons/gateway.svg`}
        title='Event Gateway'
        content={content}
        cta={ctaButton}
      />
      <GridSection
        items={[
          {
            title: 'API gateway + pub/sub',
            text: 'A single piece of infrastructure for any type of serverless application.'
          },
          {
            title: 'Extendable through middleware',
            text: 'Perform data transforms, authorizations, serializations, and other custom computes straight from the Gateway.'
          },
          {
            title: 'Platform agnostic',
            text: 'All your cloud services are now compatible with one another: share cross-cloud functions and events with AWS Lambda, Microsoft Azure, IBM OpenWhisk and Google Cloud Platform.'
          },
          {
            title: 'Send events from any cloud',
            text: 'Data streams in your application become events. Centralize events from any cloud provider to get a bird’s eye view of all the data flowing through your cloud.'
          },
          {
            title: 'React to cross-cloud events',
            text: 'You aren’t locked in to events and functions being on the same provider: Any event, on any cloud, can trigger any function. Set events and functions up like dominoes and watch them fall.'
          },
          {
            title: 'Expose events to your team',
            text: 'Share events and functions to other parts of the application. Your teammates can find them and utilize them in their own services.'
          },
        ]}
      />
    </Default>
  )
}
EventGatewayPage.hasLoadingState = true

export default EventGatewayPage
