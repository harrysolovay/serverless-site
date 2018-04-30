import React from 'react'
import styles from './styles.css'
import { Link } from 'react-router'
import Glitch from '../../components/Glitch'

const PreFooter = ({
  heading,
  subheadings,
  links
}) => (
  <div className={ styles.container }>
    <div>
      <div className={ styles.text }>

        <div>

          <div className={ styles.heading }>
            { heading }
          </div>

          {
            subheadings.map((text, i) => (
              <div
                className={ styles.subheading }
                key={ i }
              >
                { text }
              </div>
            ))
          }

        </div>

      </div>
      <div className={ styles.links }>

        <div>
          {
            links.map(({ external, to, label }, i) => (
              external
                ? (
                    <a
                      href={ to }
                      target='_blank'
                    >
                      <div className={ styles.link }>
                        { label }
                      </div>
                    </a>
                  )
                : (
                    <Link { ...{ to } }>
                      <div className={ styles.link }>
                        { label }
                      </div>
                    </Link>
                  )
            ))
          }
        </div>

      </div>
    </div>
  </div>
)

export default PreFooter