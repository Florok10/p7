import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Dropdown = ({ dropDownClassName, list, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleKeyDown = (e) => {
    if (e.keyCode === 9) return;
    if (e.keyCode === 13) {
      setIsOpen(!isOpen);
      return;
    }
    setIsTooltipVisible(true);
  };

  useEffect(() => {
    if (!isTooltipVisible) return;
    const timer = setTimeout(() => {
      setIsTooltipVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isTooltipVisible]);

  return (
    <div className='dropdown-container'>
      {isTooltipVisible && (
        <span>
          Pour ouvrir un menu déroulant, pressez entrer en l'ayant focus ou
          cliquer dessus.
        </span>
      )}
      <ul
        className={`dropdown d-flex flex-column ${
          !isOpen ? 'arrow-down' : 'arrow-up'
        } ${dropDownClassName || ''}`}
      >
        <li
          className='dropdown-title'
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          tabIndex='0'
        >
          {title}
        </li>
        {isOpen && (
          <li className='dropdown-content-container'>
            <ul className='dropdown-content-list'>
              {list.map((el, i) => (
                <li key={`${'dropdown-item-' + i}`}>
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
        )}
      </ul>
    </div>
  );
};

Dropdown.propTypes = {
  dropDownClassName: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.any.isRequired,
      href: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string,
};

export default Dropdown;
