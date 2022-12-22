import React from 'react';

import './index.css';

const Error = () => (
  <div className='padding'>
    <div className='error-container d-flex flex-column align-center justify-center'>
      <span className='error-code'>404</span>
      <span className='error-message text-center'>
        Oups! La page que vous demandez n'existe pas.
      </span>
    </div>
    <a className='return-home-link d-block text-center' href='/'>
      Retourner sur la page d'accueil
    </a>
  </div>
);

export default Error;
