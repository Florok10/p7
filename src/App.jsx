import { Route, Routes } from 'react-router-dom';

import LodgingIdWrapper from './routes/LodgingIdWrapper';

import About from './views/About';
import Error from './views/Error';
import Footer from './components/Footer';
import Home from './views/Home';
import Lodging from './views/Lodging';
import Navbar from './components/Navbar';

import './App.css';

const App = () => (
  <>
    <Navbar />
    <main
      aria-roledescription='Contenu principal'
      className='d-flex flex-column justify-around align-center flex-auto'
    >
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route element={<LodgingIdWrapper />}>
          <Route exact path='/lodging/:id' element={<Lodging />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
