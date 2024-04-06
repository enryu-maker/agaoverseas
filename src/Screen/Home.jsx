import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Products />
      <Banner />
    </div>
  );
};

export default Home;
