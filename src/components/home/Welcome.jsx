import React from 'react'

const Welcome = props => {
  return (
    <div>
      <div className="container">
        <h2>{props.title}</h2>
        {props.children}
      </div>
    </div>
  )
}

export default Welcome