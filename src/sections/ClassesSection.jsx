import React from "react";

import Button from "../components/Button";
import Section from "../components/Section";
import Class from "../components/Class";

const ClassesSection = (props) => {
  return (
    <Section
      title="Check out some of our classes"
      id="classes"
      container="full"
      className="uk-text-center uk-section-large"
    >
      <div
        className="uk-margin-large uk-position-relative uk-visible-toggle uk-light"
        tabIndex="-1"
        data-uk-slider
      >
        <ul className="uk-slider-items uk-grid">
          {props.classes.map((item) => (
            <li
              key={`class_${item.id}`}
              className="uk-width-1-3"
              style={{ padding: "1rem" }}
            >
              <div className="uk-panel">
                <Class item={item} />
              </div>
            </li>
          ))}
        </ul>
        <button
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          data-uk-slidenav-previous
          data-uk-slider-item="previous"
        ></button>
        <button
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          data-uk-slidenav-next
          data-uk-slider-item="next"
        ></button>
      </div>
      <Button color="secondary">See all available classes</Button>
    </Section>
  );
};

export default ClassesSection