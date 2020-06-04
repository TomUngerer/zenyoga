import React from "react";

import Section from "../components/Section";
import Service from "../components/Service";

const ServicesSection = (props) => {
  return (
    <Section
      title="Our yoga services"
      id="services"
      lead="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      className="uk-text-center"
      container="small"
    >
      <div className="uk-grid-collapse" data-uk-grid>
        {props.services.map((service) => (
          <div
            key={`service_${service.id}`}
            className="uk-width-1-2@s uk-width-1-3@m"
          >
            <Service
              title={service.title}
              excerpt={service.excerpt}
              image={service.image}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ServicesSection