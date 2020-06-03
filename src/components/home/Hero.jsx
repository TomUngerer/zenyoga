import React from 'react'

const Hero = props => {
  return (
    <div>
      <div className="container">
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </div>
  )
}

export default Hero