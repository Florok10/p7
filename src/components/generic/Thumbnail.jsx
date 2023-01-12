import PropTypes from 'prop-types';

import '../../css/components/generic/thumbnail.css';

const Thumbnail = ({ alt, ariaLabel, className, href, src, title }) => (
  <a
    className={'thumbnail-link relative ' + className}
    href={href}
    aria-label={ariaLabel}
  >
    <h2 className='thumbnail-title medium absolute'>{title}</h2>
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
