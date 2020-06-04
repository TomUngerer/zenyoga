import React from 'react'

import './Feature.scss'

const Feature = ({ feature, children }) => {
  const { icon, title, content } = feature
  return (
    <div className="feature">
      <h3 className="title">{title}</h3>
      <div className="content">{children}</div>
      <div
        className="icon uk-box-shadow-small"
        style={{ backgroundImage: `url(${icon})` }}
      />
    </div>
  );
}

export default Feature