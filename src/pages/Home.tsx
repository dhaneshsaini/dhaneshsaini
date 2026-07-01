import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default Home;
