import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Import your main App component
import reportWebVitals from './reportWebVitals';

import './index.css';

ReactDOM.render(
  
    <Router> {/* Wrap your App component with BrowserRouter */}
      <App />
    </Router>
,
  document.getElementById('root')
);

reportWebVitals();
