import data from '../data';

import LodgingThumbList from '../components/LodgingThumbList';

import homeImage from '../assets/home_top_image.png';

import '../css/views/home.css';

const Home = () => (
  <>
    <div className='home-top-image-container relative d-flex align-center'>
      <h1 className='home-title d-flex'>
        <span>Chez vous,&nbsp;</span>
        <span>partout et ailleurs.</span>
      </h1>
      <img
        className='home-top-image flex-grow'
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
