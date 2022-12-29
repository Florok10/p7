import './index.css';

import PropTypes from 'prop-types';

const StarsList = ({ className, stars }) => {
  stars =
    typeof stars === 'string'
      ? parseInt(stars)
      : typeof stars === 'number' && stars;

  let starElements = [];

  for (let i = 1; i <= 5; i++) {
    starElements.push(
      <svg
        className='star-svg'
        viewBox='0 0 36 36'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_8_189)'>
          <path
            d='M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z'
            className={`star ${i <= stars ? 'active' : ''}`}
          />
        </g>
        <defs>
          <clipPath id='clip0_8_189'>
            <rect width='36' height='36' fill='white' />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <ul className={`star-list d-flex ${className || ''}`}>
      {starElements.map((el, i) => (
        <li className='star-item' key={`star-${i}`}>
          {el}
        </li>
      ))}
    </ul>
  );
};

StarsList.propTypes = {
  className: PropTypes.string,
  stars: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default StarsList;
