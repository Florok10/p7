import data from '../../data';

import { useParams } from 'react-router-dom';

const Lodging = () => {
  const { id } = useParams();
  const lodging = data.find((lod) => lod.id === id);
  return (
    <section>
      <img alt={lodging.title} src={lodging.cover} />
      <div>{lodging.description} </div>
    </section>
  );
};

export default Lodging;
