import React from 'react'

import Button from '../components/Button'

import Hero from '../components/Hero'
import FeaturesSection from "../sections/FeaturesSection";
import ClassesSection from '../sections/ClassesSection'
import ServicesSection from "../sections/ServicesSection";
import SubscribeSection from "../sections/SubscribeSection";

const Home = props => {
  const { data } = props
  return (
    <div>
      <Hero title="Experience The Health Benefits of Yoga">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          eveniet cum voluptate possimus architecto earum unde dolorum id quae,
          esse magni nam recusandae nihil molestias minus neque, vitae odit
          cupiditate.
        </p>
        <p>
          <Button color="secondary">Get Started</Button>{" "}
          <Button>Enroll Class</Button>
        </p>
      </Hero>
      <FeaturesSection features={data.features} />
      <ClassesSection classes={data.classes} />
      <ServicesSection services={data.services} />
      <SubscribeSection />
    </div>
  );
}

export default Home