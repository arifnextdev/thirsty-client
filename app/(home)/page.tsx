import React from 'react';
import Slider from './_components/Slider';
import BeautyPackages from '../beauty-packages/_components/BeautyPackages';
import Specialists from '../specialists/_components/Specialists';

const HomePage = () => {
  return (
    <main>
      <Slider />
      <BeautyPackages />
      <Specialists />
    </main>
  );
};

export default HomePage;
