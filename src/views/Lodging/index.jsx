import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Gallery from '../../components/generic/Gallery';
import TagList from '../../components/generic/TagList';

import data from '../../data';

import './index.css';

const Lodging = () => {
  const { id } = useParams();
  const lodging = data.find((lod) => lod.id === id);
  const { host } = lodging;
  useEffect(() => {
    document.title = lodging.title;
  }, []);
  return (
    <section>
      <article>
        <figure className='lodging-figure d-flex justify-center margin-0'>
          <Gallery
            alt={lodging.title}
            className='lodging-gallery flex-grow'
            pictures={lodging.pictures}
          />
          <div className='lodging-infos d-flex align-center justify-between flex-grow'>
            <div>
              <figcaption className='d-flex flex-column'>
                <h1>{lodging.title}</h1>
                <span className='lodging-location'>{lodging.location}</span>
              </figcaption>
              <TagList tags={lodging.tags} />
            </div>
            <div className='host-container d-flex align-center'>
              <span className='host-name'>{host.name}</span>
              <img
                className='host-picture'
                src={host.picture}
                alt='Propriétaire du lieu.'
              />
            </div>
          </div>
        </figure>
      </article>
    </section>
  );
};

export default Lodging;
