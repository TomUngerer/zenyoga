import React from 'react'

import './Subscribe.scss'

import Button from './Button'

const Subscribe = props => {
  
  return (
    <div
      className={`subscribe-form${
        props.className ? " " + props.className : ""
      }`}
    >
      <form action="/">
        <div className="uk-margin" data-uk-margin>
          <div data-uk-form-custom="target: true">
            <input className="uk-input" type="email" placeholder="Your email" />
          </div>
          <Button color="secondary">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default Subscribe