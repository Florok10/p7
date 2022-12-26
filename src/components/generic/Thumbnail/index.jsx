import PropTypes from 'prop-types';

import './index.css';

const Thumbnail = ({ alt, ariaLabel, className, href, src, title }) => (
  <a
    className={'thumbnail-link relative ' + className}
    href={href}
    aria-label={ariaLabel}
  >
    <strong className='thumbnail-title absolute'>{title}</strong>
    <div className='thumbnail-image-wrapper relative'>
      <img className='thumbnail-image relative' src={src} alt={alt} />
    </div>
  </a>
);

Thumbnail.propTypes = {
  alt: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Thumbnail;
