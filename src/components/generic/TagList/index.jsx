import Tag from '../Tag';

import './index.css';

const TagList = ({ tags, className }) => (
  <ul className={`tag-list d-flex ${className || ''}`}>
    {tags.map((tag) => (
      <li>
        <Tag content={tag} />
      </li>
    ))}
  </ul>
);

export default TagList;
