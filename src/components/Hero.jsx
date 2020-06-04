import React from 'react'

import './Hero.scss'

const Hero = props => {
  return (
    <div className="uk-section" id="hero">
      <div className="uk-container">
        <div data-uk-grid>
          <div className="content">
            <h1>{props.title}</h1>
            {
              props.lead
                ? <div className="uk-text-lead">{props.lead}</div>
                : ''
            }
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero