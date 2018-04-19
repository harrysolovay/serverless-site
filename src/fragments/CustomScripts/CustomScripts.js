/*
  Injects CSS and JS defined in Markdown YAML
*/
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

export default function CustomScripts(head) {
  if (!head) {
    return null
  }
  const Scripts = getExternalScripts(head)
  const InlineCSS = getInlineCSS(head)
  const InlineJS = getInlineJS(head)
  return (
    <div>
      {Scripts}
      {InlineCSS}
      {InlineJS}
    </div>
  )
}

CustomScripts.propTypes = {
  children: PropTypes.any
}

function getExternalScripts(head) {
  /* if scripts field defined, inject it */
  if (head.scripts && typeof head.scripts === 'string') {
    // add single script
    return (
      <Helmet script={[{ src: head.scripts, type: 'text/javascript' }]} />
    )
  } else if (head.scripts && typeof head.scripts === 'object') {
    // add multiple scripts
    return head.scripts.map((script, i) => {
      return (
        <Helmet key={i} script={[{ src: script, type: 'text/javascript' }]} />
      )
    })
  }
  return null
}

function getInlineCSS(head) {
  /* if inlineCSS defined, inject it */
  if (head.inlineCSS) {
    return <Helmet style={[{ cssText: head.inlineCSS }]} />
  }
  return null
}

function getInlineJS(head) {
  /* if inlineJS defined, inject it */
  if (head.inlineJS) {
    return <Helmet script={[{ type: 'text/javascript', innerHTML: head.inlineJS }]} />
  }
  return null
}
