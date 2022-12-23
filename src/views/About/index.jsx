import AboutDropdownList from '../../components/AboutDropdownList';

import './index.css';

import aboutImage from '../../assets/about_top_image.png';

const About = () => (
  <>
    <div className='about-top-image-container relative d-flex align-center justify-center margin-auto'>
      <img
        className='about-top-image'
        src={aboutImage}
        alt='Paysage montagneux.'
      />
    </div>
    <AboutDropdownList />
  </>
);

export default About;
