import React from 'react';
import PropTypes from 'prop-types';

import Picture from '../components/generic/Picture';

const Lodging = ({ data }) => (
  <section>
    <Picture src={data.cover} />
    <div></div>
  </section>
);

Picture.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    description: PropTypes.string.isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }),
};

export default Lodging;
