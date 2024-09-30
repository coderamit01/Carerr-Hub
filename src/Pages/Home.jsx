import React from 'react';
import Hero from '../Components/Hero/Hero';
import Categories from '../Components/Categories/Categories';
import FeaturedJobs from '../Components/FeaturedJobs/FeaturedJobs';

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedJobs />
    </>
  );
};

export default Home;