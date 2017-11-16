import React, { PropTypes, Component } from 'react'
import Button from '../../components/Button'
import Default from '../../layouts/Default'
import styles from './Homepage.css'
import NewsletterStrip from '../../fragments/NewsletterStrip'
import ClientsLogos from '../../fragments/ClientsLogos'
import PlatformBetaCTA from '../../fragments/PlatformBetaCTA'
import Terminal from '../../components/Terminal'
import terminalCommands from '../Framework/terminalCommands'

export default class Homepage extends Component {
  static propTypes = {
    phenomicLoading: PropTypes.bool
  }
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <Default {...this.props} fullWidth coloredHeader={false} headerHideCTA={true}>
        <div className={styles.wrapper}>
          <div className={`${styles.hero} ${styles.boundLarge}`}>
            <div className={styles.heroHalf}>
              <h1 className={styles.tagline}>A single developer experience for every cloud.</h1>
              <p className={styles.heroDescription}>Serverless is the quickest way to develop & deploy applications to AWS, Azure, Google Cloud Platform and more.</p>
              <p className={styles.heroDescription}>Focus on your code, not your infrastructure.</p>
              <div className={`${styles.heroCTAs}`}>
                <Button href='/framework/docs/getting-started/' kind='red'>Quick Start Docs</Button>
                <PlatformBetaCTA kind='redBordered' text='Sign Up'/>
              </div>
            </div>
            <div className={styles.heroHalf}>
              <Terminal commands={terminalCommands} />
            </div>
          </div>
          <div className={`${styles.providersWrapper} ${styles.boundMedium}`}>
            <img className={styles.providerLogo} src={'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/aws-black.png'} alt='Amazon web services' />
            <img className={styles.providerLogo} src={'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/gcf-black.png'} alt='Google Cloud Platform' />
            <img className={styles.providerLogo} src={'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/azure-black.png'} alt='Microsoft Azure' />
            <img className={styles.providerLogo} src={'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/openwhisk-black.png'} alt='IBM OpenWhisk' />
          </div>
          <div className={`${styles.section} ${styles.toolkitSection}`}>
            <div className={styles.boundMedium}>
              <div className={`${styles.toolCard} ${styles.toolCardFramework}`}>
                <div>
                  <div className={styles.toolCardTop}>
                    <h3 className={styles.toolCardTitle}>Serverless Framework</h3>
                    <img  className={styles.toolCardIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/platform.svg' />
                  </div>
                  <h4 className={styles.toolCardTagline}>Rapid serverless deployment</h4>
                  <p>Turn 200 lines of code into 4. At 18,000 stars on GitHub, the Framework started a movement.</p>
                </div>
                <Button kind='red' href='/framework/'>Learn more</Button>
              </div>
              <div className={`${styles.toolCard} ${styles.toolCardEventGateway}`}>
                <div>
                  <div className={styles.toolCardTop}>
                    <h3 className={styles.toolCardTitle}>Event Gateway</h3>
                    <img className={styles.toolCardIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/gateway.svg' />
                  </div>
                  <h4 className={styles.toolCardTagline}>Centralize events & data</h4>
                  <p>Span the cloud. React to any event, with any function, on any provider.</p>
                </div>
                <Button kind='blue' href='/event-gateway/'>Learn more</Button>
              </div>
            </div>
          </div>
          <div className={`${styles.introSecondary} ${styles.boundMedium}`}>
            <h2 className={styles.sectionHeading}>Build faster with serverless architectures.</h2>
            <p className={`${styles.boundMedium} ${styles.introSecondaryText}`}>Develop, test and deploy in a single environment, to any cloud provider. You don’t have to provision infrastructure or worry about scale. Serverless teams cut time to market in half.</p>
          </div>
          <div className={styles.featuresColumns}>
            <div className={styles.feature}>
              <img className={styles.featureIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/automatic-scaling.svg' />
              <h3 className={styles.featureName}>Automatic Scaling</h3>
              <p className={styles.featureDescription}>Serverless backends expand and contract with demand. Go get on the front page of HackerNews, we dare you.</p>
            </div>
            <div className={styles.feature}>
              <img className={styles.featureIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/provider-agnostic.svg' />
              <h3 className={styles.featureName}>Provider Agnostic</h3>
              <p className={styles.featureDescription}>Build, test and deploy cloud functions to any provider. Skip the setup; deploy your function right now.</p>
            </div>
            <div className={styles.feature}>
              <img className={styles.featureIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/rapid-deployment.svg' />
              <h3 className={styles.featureName}>Rapid deployment</h3>
              <p className={styles.featureDescription}>Serverless cuts weeks off development cycles. Don’t spend time provisioning unused infrastructure.</p>
            </div>
          </div>
          <div className={styles.sectionBreak} />
          <div className={`${styles.section} ${styles.testimonialSection}`}>
            <div className={styles.boundMedium}>
              <ClientsLogos />
            </div>
            <div className={`${styles.testimonial} ${styles.boundMedium}`}>
              <div className={styles.testimonialTextBlock}>
                <div className={styles.testimonialGround} />
                <p className={styles.testimonialText}>“The Serverless Framework is a core component of The Coca-Cola Company's initiative to reduce IT operational costs and deploy services faster.”</p>
              </div>
              <div className={styles.testimonialMeta}>
                <h3 className={styles.testimonialAuthor}>Patrick Brandt</h3>
                <p className={styles.testimonialAuthorTitle}>Solutions Architect at The Coca-Cola Company</p>
              </div>
            </div>
          </div>
          <div className={`${styles.boundMedium} ${styles.newsletterSection}`}>
            <NewsletterStrip />
          </div>
        </div>
      </Default>
    )
  }
}
