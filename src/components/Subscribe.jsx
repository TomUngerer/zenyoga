import React from 'react'

const Subscribe = props => {
  return (
    <div className={`subsribe-form ${props.className}`}>
      <form action="/">
        <div className="uk-margin" data-uk-margin>
          <div data-uk-form-custom="target: true">
            <input className="uk-input" type="email" placeholder="Your email" />
          </div>
          <button className="uk-button uk-button-default">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Subscribe