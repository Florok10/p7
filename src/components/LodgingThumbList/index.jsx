import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

import Thumbnail from '../generic/Thumbnail';

const LodgingThumbList = ({ data }) => (
  <ul className='thumbnail-list d-flex justify-center'>
    {data.map((lodging) => (
      <li className='thumbnail-item' key={lodging.id}>
        <Thumbnail
          className='thumbnail-link'
          title={lodging.title}
          src={lodging.cover}
          alt={lodging.title}
          href={`${'/lodging/' + lodging.id}`}
        />
      </li>
    ))}
  </ul>
);

LodgingThumbList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default LodgingThumbList;
