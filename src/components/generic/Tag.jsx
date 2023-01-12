import PropTypes from 'prop-types';

import '../../css/components/generic/tag.css';

const Tag = ({ className, content }) => (
  <strong
    className={`tag medium d-flex align-center justify-center ${
      className || ''
    }`}
  >
    {content}
  </strong>
);

Tag.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
};

export default Tag;
