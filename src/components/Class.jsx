import React from 'react'

import './Class.scss'

const Class = ({ item }) => {
  const { id, title, video, category, excerpt, level } = item
  console.log(video);
  return (
    <div className="class">
      <div className="uk-card uk-card-default">
        <header className="uk-card-media-top">
          <img src={video.url} alt="video" />
        </header>
        <main className="uk-card-body">
          <h3 className="title uk-card-title">Media Top</h3>
          <div class="category">{category}</div>
          <p>
            {excerpt}
          </p>
        </main>
        <footer class="uk-card-footer">
          <div className="uk-flex-between" data-uk-grid>
            <div className="level"><strong>Level <span>{level}</span></strong></div>
            <div className="duration"><strong>Duration:</strong> <span>{video.duration}</span></div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Class