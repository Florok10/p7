import React from 'react';
import logo from '../../assets/LOGO_FOOTER.png';

import './index.css';

const Footer = () => (
  <footer className='page-footer d-flex flex-column justify-center align-center text-center'>
    <img src={logo} alt='Logo de Kasa' />
    <span>© 2020 Kasa. All rights reserved</span>
  </footer>
);

export default Footer;
