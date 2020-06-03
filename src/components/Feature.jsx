import React from 'react'

const Feature = props => {
  return (
    <div className="feature">
      <div>
        <div className="icon">{props.icon}</div>
      </div>
      <div>
        <h3 className="title">{props.title}</h3>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
}

export default Feature