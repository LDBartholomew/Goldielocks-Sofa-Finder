import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import { Goldielocks } from './components/Goldielocks';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Goldielocks />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

