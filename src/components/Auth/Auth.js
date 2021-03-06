import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login, logout } from '../../redux/user'
import track from '../../utils/analytics/track'
import { getItemSync } from '../../utils/storage'

const AuthComponent = (props) => {
  const {
    login, // eslint-disable-line
    logout, // eslint-disable-line
    isAuthenticated,
    logoutOnClick,
    profile,
    loggedInComponent,
    className,
    children
  } = props
  let renderedContent = children

  const doLogin = () => {
    const user = getItemSync('profile')
    if (!user) {
      track('site:account_modalOpened', {
        label: 'Begin Account Signup'
      })
    }
    login()
  }
  let handleClick = (isAuthenticated) ? null : doLogin

  if (logoutOnClick && isAuthenticated) {
    // if logoutOnClick add logout clickhandler to wrapper
    handleClick = logout
  }

  if (isAuthenticated && loggedInComponent) {
    const childProps = {
      profile,
      handleLogout: logout
    }
    if (typeof loggedInComponent.type === 'string') {
      // if is normal DOM node
      renderedContent = loggedInComponent
    } else if (typeof loggedInComponent === 'object') {
      // if custom component. Clone it
      renderedContent = React.cloneElement(loggedInComponent, childProps)
    } else if (typeof loggedInComponent === 'function') {
      // if component class. Make it
      renderedContent = React.createElement(loggedInComponent, childProps)
    }
  }
  return (
    <div className={className} onClick={handleClick}>
      {renderedContent}
    </div>
  )
}

AuthComponent.propTypes = {
  children: PropTypes.any,
  loggedInComponent: PropTypes.any,
  login: PropTypes.func,
  logout: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
  profile: PropTypes.object,
  logoutOnClick: PropTypes.bool,
}

function mapStateToProps(state) {
  const { auth } = state
  const { isAuthenticated, profile, loading } = auth
  return {
    isAuthenticated,
    profile,
    loading
  }
}

export default connect(mapStateToProps, {
  login,
  logout
})(AuthComponent)
