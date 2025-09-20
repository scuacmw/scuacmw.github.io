import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Board from './pages/Board';
import Events from './pages/Events';
import Newsletter from './pages/Newsletter';
import H4H from './pages/H4H';
import Navbar from './components/Navbar'; 

function App() {
  return (
    <Router>
      <div>
        {/* Define routes for each page */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/events" element={<Events />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/h4h" element={<H4H/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
