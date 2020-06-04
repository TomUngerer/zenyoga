import React from 'react'

const Button = props => {
  return (
    <button className="uk-button uk-button-default">{props.children}</button>
  );
}

export default Button