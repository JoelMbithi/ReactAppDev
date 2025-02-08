import React from 'react';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import MainContent from '../components/MainContent';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const Projects = () => {
  return (
    <div>
      <Navbar />
     <MainContent heading="PROJECTS." text="Some of my most recent works" />
     <Work />
     <PricingCard />
    
      <Footer />
    </div>
  );
};

export default Projects;