import './App.scss';
import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from '../routes/Home';
import Bookmarks from '../routes/Bookmarks';

const App: FC = () => {
  return (
    <Router>
      <header className="main-header container">
        <div>
          <Link to="/">
            <h1 className="logo">Awesome New York Times</h1>
          </Link>
        </div>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/bookmarks">Bookmarks</Link>
        </nav>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
