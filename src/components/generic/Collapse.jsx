import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import '../../css/components/generic/collapse.css';

const Collapse = ({ collapseClassName, list, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const keysAccepted = [9, 13, 17, 18, 32];

  const handleKeyDown = (e) => {
    if (!keysAccepted.find((key) => key === e.keyCode))
      return setIsTooltipVisible(true);
  };

  useEffect(() => {
    if (!isTooltipVisible) return;
    const timer = setTimeout(() => {
      setIsTooltipVisible(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, [isTooltipVisible]);

  return (
    <section className='collapse-container relative d-flex justify-center'>
      {isTooltipVisible && (
        <span
          onClick={() => setIsTooltipVisible(false)}
          className='collapse-tooltip absolute'
          aria-label='Astuce pour utiliser les menus déroulants au clavier.'
        >
          Pour interragir avec un menu déroulant, pressez la touche "Entrer" ou
          "Espace" en l'ayant focus ou cliquer dessus.
        </span>
      )}
      <ul
        className={`collapse d-flex flex-column ${collapseClassName || ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <li className='collapse-title relative'>
          <span
            className={`arrow ${!isOpen ? 'arrow-down' : 'arrow-up'}`}
            onClick={() => setIsOpen(!isOpen)}
          ></span>
          <button
            className='medium'
            aria-controls={title}
            onKeyDown={handleKeyDown}
          >
            {title}
          </button>
        </li>
        {isOpen && (
          <li className='collapse-content-container' id={title}>
            <ul className='collapse-content-list d-flex flex-column'>
              {list.map((el, i) => (
                <li key={`${'collapse-item-' + i}`}>
                  {el.href ? (
                    <a className='collapse-content' href={el.href}>
                      {el.content}
                    </a>
                  ) : (
                    <span className='collapse-content'>{el.content}</span>
                  )}
                </li>
              ))}
            </ul>
          </li>
        )}
      </ul>
    </section>
  );
};

Collapse.propTypes = {
  collapseClassName: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.any.isRequired,
      href: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string,
};

export default Collapse;
