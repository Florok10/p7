import React from 'react';
import data from '../../data';
import './index.css';

import LodgingThumbList from '../../components/LodgingThumbList';

import homeImage from '../../assets/home_top_image.png';

const Home = () => (
  <>
    <div className='home-top-image-container relative d-flex align-center justify-center margin-auto'>
      <img
        className='home-top-image'
        src={homeImage}
        alt='Paysage rocheux en bord de mer.'
      />
    </div>

    <nav className='lodging-index-nav'>
      <LodgingThumbList data={data} />
    </nav>
  </>
);

export default Home;
