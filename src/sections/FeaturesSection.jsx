import React from "react";

import Button from "../components/Button";
import Section from "../components/Section";
import Feature from "../components/Feature";

import imagePlaceholder from '../assets/placeholder2.jpg'

const FeaturesSection = (props) => {
  return (
    <Section
      title="Welcome to ZENyoga"
      id="features"
      className="uk-section-large"
    >
      <div class="uk-grid-large uk-flex-around uk-flex-middle" data-uk-grid>
        <div class="uk-width-3-5@m">
          <img src={imagePlaceholder} alt="" />
        </div>
        <div class="uk-width-2-5@m">
          <div>
            {props.features.map((feature) => (
              <Feature key={`feature_${feature.id}`} feature={feature}>
                {feature.content}
              </Feature>
            ))}
            <Button color="secondary">Explore More</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FeaturesSection