import './styles/index.scss';
import { IconContext } from 'react-icons';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
