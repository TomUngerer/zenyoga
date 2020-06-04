import React from 'react'

import './Button.scss'

const Button = props => {
  const { color } = props
  return (
    <button className={`uk-button uk-button-${color ? color : 'default'}`}>
      {props.children}
    </button>
  );
}

export default Button