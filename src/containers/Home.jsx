import React from 'react'

import Button from '../components/Button'
import Feature from "../components/Feature"
import Class from "../components/Class"

import Hero from '../components/home/Hero'
import Welcome from "../components/home/Welcome"
import Classes from "../components/home/Classes"

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
          <Button>Get Started</Button>
          <Button>Enroll Class</Button>
        </p>
      </Hero>
      <Welcome title="Welcome to ZENyoga">
        {
          data.features.map(feature => (
            <Feature key={`feature_${feature.id}`} icon={feature.icon} title={feature.title}>{feature.content}</Feature>
          ))
        }
        <Button>Explore More</Button>
      </Welcome>
      <Classes title="">
        {
          data.classes.map(item => (
            <Class key={`class_${item.id}`} title={item.title} />
          ))
        }
        <Button>See all available classes</Button>
      </Classes>
    </div>
  );
}

export default Home