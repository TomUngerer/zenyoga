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
    >
      {props.classes.map((item) => (
        <Class key={`class_${item.id}`} title={item.title} />
      ))}
      <Button color="secondary">See all available classes</Button>
    </Section>
  );
};

export default ClassesSection