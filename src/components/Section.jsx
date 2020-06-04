import React from "react"

import './Section.scss'

const Section = (props) => {
  const container =
    props.container && props.container !== "full"
      ? `uk-container uk-container-${props.container}`
      : props.container === "full"
      ? ""
      : `uk-container uk-container-${props.container}`;
  
  return (
    <section
      className={`uk-section${props.className ? " " + props.className : ""}`}
      id={props.id}
    >
      <header className="section-header">
        <div className="uk-container">
          <h2>{props.title}</h2>
          <span data-uk-icon="heart"></span>
          {props.lead ? <div className="uk-text-lead">{props.lead}</div> : ""}
        </div>
      </header>
      <main>
        <div className={container}>{props.children}</div>
      </main>
    </section>
  );
};

export default Section;
