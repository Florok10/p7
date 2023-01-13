import PropTypes from 'prop-types';

import '../../css/components/generic/tag.css';

const Tag = ({ className, content }) => (
  <span
    className={`tag medium d-flex align-center justify-center ${
      className || ''
    }`}
  >
    {content}
  </span>
);

Tag.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
};

export default Tag;
