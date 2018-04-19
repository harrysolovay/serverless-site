import React from 'react'
import PropTypes from 'prop-types'
import AutoForm from 'react-auto-form'


function fixScroll(){
  // http://bit.ly/2gQ6jFJ
  this.scrollIntoView(false)
}

export default class Form extends React.Component {
  componentDidMount() {
    // console.log('refs', this.refs)
    //console.log('this._reactInternalInstance._currentElement', this._reactInternalInstance._currentElement._owner)
    const list = this.node.querySelectorAll('input,select,textarea');
    for (var i = 0; i < list.length; i++) {
      list[i].addEventListener('invalid', fixScroll)
    }
  }
  componentWillUnmount() {
    const list = this.node.querySelectorAll('input,select,textarea');
    for (var i = 0; i < list.length; i++) {
      list[i].removeEventListener('invalid', fixScroll)
    }
  }


  handleSubmit = (event, data) => {
    const { onSubmit, id, onChange, trimOnSubmit, children } = this.props
    event.preventDefault()
    if (onSubmit) {
      onSubmit(event, data)
    }
  }

  render() {
    const { onSubmit, id, onChange, trimOnSubmit, children } = this.props
    return (
      <div ref={(node) => { this.node = node }}>
        <AutoForm ref='form' id={id} className='form-node' trimOnSubmit={trimOnSubmit} onChange={onChange} onSubmit={this.handleSubmit}>
          {children}
        </AutoForm>
      </div>
    )
  }
}


Form.propTypes = {
  children: PropTypes.any,
  // event, name, data, change
  onChange: PropTypes.func,
  // event, data
  onSubmit: PropTypes.func,
  // onBlur: PropTypes.func,
  // onFocus: PropTypes.func,
  // onKeyPress: PropTypes.func,
}
