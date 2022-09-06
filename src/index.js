import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,  Routes } from 'react-router-dom';
import './scss/app.scss';

import App from './App';
import { Header } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>
);

