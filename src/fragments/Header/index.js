import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import handleClickAway from '../../utils/handleClickAway'
import styles from './Header.css'
import classnames from 'classnames'
import PlatformBetaCTA from '../../fragments/PlatformBetaCTA'
const logo = process.env.LOGO

const propTypes = {
  whiteLogo: PropTypes.bool,
  colored: PropTypes.bool,
  fullWidth: PropTypes.bool,
  hideCTA: PropTypes.bool,
}

export default class Header extends Component {
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
    this.state = {
      sideNavOpen: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.closeNav = this.closeNav.bind(this)
    this.handleScroll = this.handleScroll.bind(this)

    this.scrolling = false
  }
  componentDidMount() {
    document.body.addEventListener('click', this.closeNav)
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    document.body.removeEventListener('click', this.closeNav)
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll(e) {
    if (this.scrolling) {
      return
    }
    requestAnimationFrame(() => {
      this.scrolling = true

      let st = window.pageYOffset || document.documentElement.scrollTop

      if (st > 10) {
        this.header.classList.add(styles.coloredHeader)
        if (this.props.whiteLogo) {
          this.logo.src = this.logo.src.includes('#white') ? this.logo.src.substr(0, this.logo.src.length - 6) : this.logo.src
        }
        if (this.props.hideCTA) {
          this.cta.classList.remove(styles.mobileOnly)
        }
      } else {
        if (!this.props.colored) {
          this.header.classList.remove(styles.coloredHeader)
        }
        if (this.props.whiteLogo) {
          this.logo.src = this.logo.src.includes('#white') ? this.logo.src : this.logo.src + '#white'
        }
        if (this.props.hideCTA) {
          this.cta.classList.add(styles.mobileOnly)
        }
      }
      this.scrolling = false
    })
  }
  closeNav(e) {
    const toggleNode = this.refs.toggle
    const isOutsideClick = handleClickAway(toggleNode, e)
    if (toggleNode && isOutsideClick) {
      this.setState({
        sideNavOpen: false
      })
    }
  }
  handleClick() {
    this.setState({
      sideNavOpen: !this.state.sideNavOpen
    })
  }
  render() {
    const { fullWidth, whiteLogo, colored, hideCTA } = this.props
    const { sideNavOpen } = this.state
    const mobileNav = (sideNavOpen) ? styles.open : ''
    const openClass = (sideNavOpen) ? styles.animate : ''
    const containerStyle = (fullWidth) ? styles.fullWidth : ''
    let headerClasses = colored ? classnames(styles.header, styles.coloredHeader) : styles.header
        headerClasses = whiteLogo ? classnames(headerClasses, styles.whiteLogo) : headerClasses
    return (
      <header id='header' className={headerClasses} ref={header => { this.header = header }}>
        <div className={`${styles.navWrapper} ${containerStyle} ${styles.bound}`}>
          <div className={styles.navLeft}>
            <Link to='/' className={styles.logo}>
              <img
                id='logo'
                width={28}
                height={23}
                src={logo.ICON + (whiteLogo ? '#white' : '')}
                className={styles.logoIcon}
                ref={logo => { this.logo = logo }}
              />
              <span className={styles.logoText}>
                serverless
              </span>
            </Link>
          </div>
          <div ref='toggle' onClick={this.handleClick} className={styles.toggle}>
            <div className={styles.ham}>
              <div className={`${styles.bar} ${openClass}`} />
            </div>
          </div>
          <nav className={`${styles.navRight} ${mobileNav}`}>
            <ul className={styles.navItems}>
              <li className={styles.navItem}>
                <Link to='/' className={`${styles.link} ${styles.mobileOnly}`}>Home</Link>
              </li>
              <li className={styles.navItem}>
                <Link to='/learn/' className={styles.link}>
                  Learn
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to='/framework/docs/' className={styles.link}>
                  Docs
                </Link>
              </li>
              <li className={styles.navItem}>
                <a href='javascript:' className={`${styles.link} ${styles.noMobile}`}>
                  Toolkit <svg className={styles.caret} width='8' height='4' viewBox='62 7 10 6'><path d='M71.884 7.698l-4.56 5.116c-.013.022-.008.05-.026.07-.083.084-.192.12-.3.116-.106.004-.214-.033-.295-.117-.02-.02-.014-.047-.028-.068L62.115 7.7c-.154-.16-.154-.42 0-.58.156-.16.408-.16.563 0L67 11.97l4.322-4.85c.155-.16.406-.16.56 0 .157.16.157.418.002.578z' fill='#fff' /></svg>
                </a>
                <ul className={styles.subNavItems}>
                  <li>
                    <Link to='/framework/' className={styles.link}>
                      Framework
                    </Link>
                  </li>
                  <li>
                    <Link to='/event-gateway/' className={styles.link}>
                      Event Gateway
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={styles.navItem}>
                <a href='javascript:' className={`${styles.link} ${styles.noMobile}`}>
                  Community <svg className={styles.caret} width='8' height='4' viewBox='62 7 10 6'><path d='M71.884 7.698l-4.56 5.116c-.013.022-.008.05-.026.07-.083.084-.192.12-.3.116-.106.004-.214-.033-.295-.117-.02-.02-.014-.047-.028-.068L62.115 7.7c-.154-.16-.154-.42 0-.58.156-.16.408-.16.563 0L67 11.97l4.322-4.85c.155-.16.406-.16.56 0 .157.16.157.418.002.578z' fill='#fff' /></svg>
                </a>
                <ul className={styles.subNavItems}>
                  <li>
                    <Link to='/community/meetups/' className={styles.link}>
                      Meetups
                    </Link>
                  </li>
                  <li>
                  <Link to='/workshops/' className={styles.link}>Workshops</Link>
                  </li>
                  <li>
                    <Link to='/community/champions/' className={styles.link}>
                      Champions
                    </Link>
                  </li>
                  <li>
                    <a
                      target='_blank'
                      href='https://forum.serverless.com/'
                      className={styles.link}>
                      Forum
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href='https://join.slack.com/t/serverless-contrib/shared_invite/MjI5NzY1ODM2MTc3LTE1MDM0NDIyOTUtMDgxNTcxMTcxNg' className={styles.link}>Slack</a>
                  </li>
                </ul>
              </li>
              <li className={styles.navItem}>
                <Link to='/blog/' className={styles.link}>
                  Blog
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to='/enterprise/' className={styles.link}>
                  Enterprise
                </Link>
              </li>
              <li
                  className={`${styles.navItem} ${styles.cta} ${styles.mobileOnly}` + (hideCTA ? '' : styles.mobileOnly)}
                  ref={cta => { this.cta = cta }}
              ><PlatformBetaCTA kind={colored ? 'redBordered' : 'whiteBordered'} text='Sign Up'/></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

Header.propTypes = propTypes
