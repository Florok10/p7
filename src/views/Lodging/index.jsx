import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Collapse from './../../components/generic/Collapse';
import Gallery from '../../components/generic/Gallery';
import StarsList from '../../components/generic/StarsList';
import TagList from '../../components/generic/TagList';

import data from '../../data';

import './index.css';

const Lodging = () => {
  const { id } = useParams();
  const lodging = data.find((lod) => lod.id === id);
  const { host } = lodging;
  useEffect(() => {
    document.title = lodging.title;
  }, [lodging.title]);
  return (
    <section>
      <article>
        <figure className='lodging-figure d-flex justify-center margin-0'>
          <Gallery
            alt={lodging.title}
            className='lodging-gallery flex-grow'
            pictures={lodging.pictures}
          />
          <div className='lodging-title-tags d-flex align-center justify-between flex-grow'>
            <div>
              <figcaption className='d-flex flex-column medium'>
                <h1>{lodging.title}</h1>
                <span className='lodging-location'>{lodging.location}</span>
              </figcaption>
              <TagList tags={lodging.tags} />
            </div>
            <div className='lodging-host-infos d-flex'>
              <div className='host-container d-flex align-center justify-end'>
                <span className='host-name medium'>{host.name}</span>
                <img
                  className='host-picture'
                  src={host.picture}
                  alt='Propriétaire du lieu.'
                />
              </div>
              <StarsList stars={lodging.rating} />
            </div>
          </div>
        </figure>
      </article>
      <ul className='lodging-collapse-list d-flex width-100'>
        <li className='lodging-collapse-item flex-grow'>
          <Collapse
            title='Description'
            list={[
              {
                content: lodging.description,
              },
            ]}
          />
        </li>
        <li className='lodging-collapse-item flex-grow'>
          <Collapse
            title='Équipements'
            list={lodging.equipments.map((el) => ({ content: el }))}
          />
        </li>
      </ul>
    </section>
  );
};

export default Lodging;
