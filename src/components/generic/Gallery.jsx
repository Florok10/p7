import { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import '../../css/components/generic/gallery.css';

const Gallery = ({ alt, className, pictures }) => {
  const [index, setIndex] = useState(0);
  const maxIndex = useMemo(() => pictures.length - 1, [pictures]);

  const handlePictureChange = useCallback(
    (number) => {
      const definedNumber = Math.sign(number);
      if (isNaN(definedNumber) || definedNumber === 0)
        throw new Error('Given number is NaN');
      const isIndexZero = index === 0;
      const isLastIndex = index === maxIndex;
      if (definedNumber === 1) {
        isLastIndex ? setIndex(0) : setIndex(index + 1);
      }
      if (definedNumber === -1) {
        isIndexZero ? setIndex(maxIndex) : setIndex(index - 1);
      }
    },
    [index, maxIndex]
  );

  useEffect(() => {
    const timeout =
      pictures.length > 1 &&
      setTimeout(() => {
        handlePictureChange(1);
      }, 5000);
    return () => clearTimeout(timeout);
  }, [index, handlePictureChange, pictures]);

  return (
    <div className={`gallery relative ${className || ''}`}>
      {pictures.length > 1 && (
        <>
          <button
            aria-controls='gallery-img'
            className='gallery-controls prev'
            onClick={() => handlePictureChange(-1)}
          ></button>
          <button
            aria-controls='gallery-img'
            className='gallery-controls next'
            onClick={() => handlePictureChange(1)}
          ></button>
        </>
      )}
      <img id='gallery-img' src={pictures[index]} alt={alt} />
    </div>
  );
};

Gallery.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  pictures: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Gallery;
