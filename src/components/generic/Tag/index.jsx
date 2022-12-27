import PropTypes from 'prop-types';

import './index.css';

const Tag = ({ className, content }) => (
  <span className={`tag ${className}`}>{content}</span>
);

Tag.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
};

export default Tag;
