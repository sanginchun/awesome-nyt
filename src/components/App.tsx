import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from '../pages/Home';
import Bookmarks from '../pages/Bookmarks';

const App: FC = () => {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1>Awesome New York Times</h1>
        </Link>
        <Link to="/bookmarks">Bookmarks</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </Router>
  );
};

export default App;
