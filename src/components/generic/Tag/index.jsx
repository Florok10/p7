import PropTypes from 'prop-types';

const Tag = ({ className, content }) => (
  <span className={`tag ${className}`}>{content}</span>
);

Tag.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
};

export default Tag;
