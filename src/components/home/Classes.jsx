import React from 'react'

const Classes = props => {
  return (
    <section id="classes">
      <div className="container">
        <h2>{props.title}</h2>
        {props.children}
      </div>
    </section>
  )
}

export default Classes