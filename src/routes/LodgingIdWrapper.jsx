import { Navigate, Outlet, useParams } from 'react-router-dom';

import data from '../data';

const LodgingIdWrapper = () => {
  const { id } = useParams();
  const lodging = data.find((lod) => lod.id === id);

  return lodging ? <Outlet /> : <Navigate to='/error' replace />;
};

export default LodgingIdWrapper;
