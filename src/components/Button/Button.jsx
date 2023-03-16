import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import css from './Button.module.css'

export default class Button extends Component {
  render() {
    const { btnName, updateState } = this.props;
    
    return (
          <button className={css.btn} type='button' onClick={() => updateState(btnName)}>{btnName}</button>
    )
  }
}

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
}


