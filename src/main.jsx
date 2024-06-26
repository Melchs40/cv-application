window.global ||= window;
import React from 'react';
import ReactDOM from 'react-dom/client';
import Info from './Info';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Info />
  </React.StrictMode>
);
