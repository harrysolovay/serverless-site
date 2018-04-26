import React from 'react'
import styles from './styles.css'
import { Link } from 'react-router'

const PreFooter = props => (
  <div className={ styles.container }>
    <div>
      <div>

        <div className={ styles.text }>

          <div className={ styles.heading }>
            New to Serverless?
          </div>

          <div className={ styles.instruction }>
            { `To get started, pop open your terminal & run:` }
          </div>

          <div className={ styles.command }>
            npm install serverless -g
          </div>

        </div>

      </div>
      <div className={ styles.links }>

        <div>
          {
            [{
              to: '/framework/docs/',
              label: 'documentation'
            }, {
              to: '/framework/docs/',
              label: 'serverless examples'
            }, {
              to: '/framework/docs/',
              label: 'serverless plugins'
            }].map(({ to, label }, i) => (
              <Link { ...{ to } }>
                <div className={ styles.link }>
                  { label }
                </div>
              </Link>
            ))
          }
        </div>

      </div>
    </div>
  </div>
)

export default PreFooter