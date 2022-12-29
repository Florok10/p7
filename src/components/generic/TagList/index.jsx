import PropTypes from 'prop-types';

import Tag from '../Tag';

import './index.css';

const TagList = ({ tags, className }) => (
  <ul className={`tag-list d-flex ${className || ''}`}>
    {tags.map((tag, i) => (
      <li key={`tag-${i}`}>
        <Tag content={tag} />
      </li>
    ))}
  </ul>
);

TagList.propTypes = {
  className: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TagList;
