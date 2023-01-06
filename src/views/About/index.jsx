import AboutCollapseList from '../../components/AboutCollapseList';

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
    <AboutCollapseList />
  </>
);

export default About;
