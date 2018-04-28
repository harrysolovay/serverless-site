import React from 'react'
import styles from './styles.css'
import glitch from '../../assets/images/glitch.png'
import midGlitch from '../../assets/images/mid-glitch.png'

const Glitch = props => {

  const style = (() => {
    if(props.top || props.bottom)
      return { backgroundImage : `url(${ glitch })` }
    else if(props.mid)
      return { backgroundImage : `url(${ midGlitch })` }
  })()

  const className = (() => {
    if(props.bottom) {
      return styles.verticallyFlipped
    } else {
      return styles.container
    }
  })()

  return (
    <div { ...{
      ...{
        style : { ...style, ...props.style }
      },
      className
    } } ></div>
  )
}

export default Glitch