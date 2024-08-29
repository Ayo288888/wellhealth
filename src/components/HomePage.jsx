import React from 'react';
import Layout from './Layout';
import CoreValues from './CoreValues/CoreValues';
import Hero from './Hero/Hero';
import MissionVision from './MissionVision/MissionVision';
import Services from './Service/Services';
import styles from './HomePage.module.css'; 

const HomePage = () => {
  return (
    <Layout>
      <div className={styles.homePage}>
        <Hero />
        <CoreValues />
        <MissionVision />
        <Services />
      </div>
  </Layout>
  );
};

export default HomePage;
