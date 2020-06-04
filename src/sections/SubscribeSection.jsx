import React from "react";

import Section from "../components/Section";
import Subscribe from "../components/Subscribe";

const SubsrcibeSection = props => {
  return (
    <Section
      title="Subscribe to our newsletter"
      lead="Exlusive access to my monthly Spotify playlist"
      className="uk-text-center uk-section-large"
    >
      <Subscribe />
    </Section>
  );
}

export default SubsrcibeSection;