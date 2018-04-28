import authorData from './generated-authors.json'

const categoryNames = {
  'application-development' : 'application development',
  'operations-and-observability' : 'operations & observability',
  'guides-and-tutorials' : 'guides & tutorials',
  'engineering-culture' : 'engineering-culture'
}

const categoryPaths = {
  'application development' : 'application-development',
  'operations & observability' : 'operations-and-observability',
  'guides & tutorials' : 'guides-and-tutorials',
  'engineering-culture' : 'engineering-culture'
}

// returns the same function, but referencing the dictionary specified as the sole argument
const getCategory = (dictionary) => (key) => {
  return Object.keys(dictionary).includes(key)
    ? dictionary[key]
    : console.error(`no such key '${ key }'`)
}

const getCategoryNameFromPath = getCategory(categoryNames)
const getCategoryPathFromName = getCategory(categoryPaths)

const createAuthorshipLabel = (arrayOfAuthorNames) => {
  arrayOfAuthorNames = arrayOfAuthorNames.map(e => authorData[e].name)
  return `Written by ${ arrayOfAuthorNames.length > 1
    ? (() => {
        const last = arrayOfAuthorNames.pop()
        return `${ arrayOfAuthorNames.join(', ') } and ${ last }`
      })()
    : arrayOfAuthorNames[0] }`
}

export {
  getCategoryNameFromPath,
  getCategoryPathFromName,
  createAuthorshipLabel
}