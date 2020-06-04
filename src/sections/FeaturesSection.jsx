import React from "react";

import Button from "../components/Button";
import Section from "../components/Section";
import Feature from "../components/Feature";

const FeaturesSection = (props) => {
  return (
    <Section title="Welcome to ZENyoga" id="features" container="small">
      {props.features.map((feature) => (
        <Feature
          key={`feature_${feature.id}`}
          icon={feature.icon}
          title={feature.title}
        >
          {feature.content}
        </Feature>
      ))}
      <Button>Explore More</Button>
    </Section>
  );
};

export default FeaturesSection