import React from 'react'

const Service = props => {
  return (
    <div className="service">
      <div className="uk-card uk-box-shadow-hover-medium uk-text-center">
        <div className="uk-card-media-top">
          <img src={props.image.url} alt="" />
        </div>
        <div className="uk-card-body">
          <h4 className="uk-card-title">{props.title}</h4>
          <p>{props.excerpt}</p>
        </div>
      </div>
    </div>
  );
}

export default Service