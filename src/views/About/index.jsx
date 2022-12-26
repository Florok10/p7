import AboutDropdownList from '../../components/AboutDropdownList';

import './index.css';

import aboutImage from '../../assets/about_top_image.png';

const About = () => (
  <>
    <div className='about-top-image-container relative d-flex align-center justify-center'>
      <img
        className='about-top-image flex-grow'
        src={aboutImage}
        alt='Paysage montagneux.'
      />
    </div>
    <AboutDropdownList />
  </>
);

export default About;
