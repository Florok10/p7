import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from './views/About';
import Error from './views/Error';
import Footer from './components/Footer';
import Home from './views/Home';
import Navbar from './components/Navbar';

import './App.css';

const App = () => (
  <>
    <Navbar />
    <main aria-roledescription='Contenu principal'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
