import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Confuse } from './confuse';

// import WeTransfer from './App';
// import Logs from './Logs';

const root = ReactDOM.createRoot(document.getElementById('sample_we_transsfer_view_'));
root.render(
  <React.StrictMode>
    <Confuse />
  </React.StrictMode>
);
reportWebVitals();
