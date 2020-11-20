import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Content from '../components/sections/Content';
import Content2 from '../components/sections/Content2';
import Content3 from '../components/sections/Content3';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
   <Hero className='illustration-section-01' />      
      <FeaturesTiles />
      <Content split />
      <Content2 split/>
      <Content3 split/>
    </div>
  );
};

export default Home;
