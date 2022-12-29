import PropTypes from 'prop-types';

import './index.css';

const Tag = ({ className, content }) => (
  <strong
    className={`tag d-flex align-center justify-center ${className || ''}`}
  >
    {content}
  </strong>
);

Tag.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
};

export default Tag;
