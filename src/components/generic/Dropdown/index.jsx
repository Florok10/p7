import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ dropDownClassName, title, list }) => (
  <ul className={`dropdown ${dropDownClassName}`}>
    <li className='dropdown-title'>{title}</li>
    <li>
      <ul className='dropdown-content-list'>
        {list.map((el) => (
          <li>
            {el.href ? (
              <a className='dropdown-content' href={el.href}>
                {el.content}
              </a>
            ) : (
              <span className='dropdown-content'>{el.content}</span>
            )}
          </li>
        ))}
      </ul>
    </li>
  </ul>
);

Dropdown.propTypes = {
  dropDownClassName: PropTypes.string,
  title: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.any.isRequired,
      href: PropTypes.string,
    })
  ).isRequired,
};

export default Dropdown;
