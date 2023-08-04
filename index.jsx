import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Vans from './pages/Vans';
import About from './pages/About';

import './server.js';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className='site-logo' to='/'>
          #VanLife
        </Link>
        <nav>
          <Link to='/vans'>Vans</Link>
          <Link to='/about'>About</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
