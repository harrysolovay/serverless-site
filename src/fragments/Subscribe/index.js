import React from 'react'
import styles from './styles.css'

const Subscribe = props => (
  <div className={ styles.container }>
    <div>
      <div>
        <div className={ styles.text }>{ `Join 12,000+ other serverless devs & keep up to speed on the latest serverless trends.` }</div>
      </div>
      <div>
        <div className={ styles.enterEmail }>
          <div>
            <input
              className={ styles.input }
              name='email'
              type='email'
              placeholder='enter email address'
              required
            />
            <div
              className={ styles.button }
              onClick={ () => console.log('submit email') }
            >
              sign up
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Subscribe