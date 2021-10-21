  
import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';
import Cards from '../Cards';



function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
      
    </>
  );
}

export default Home;