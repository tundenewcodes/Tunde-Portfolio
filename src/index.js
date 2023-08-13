import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import ReactDOM from 'react-dom/client';
// Bootstrap
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { BrowserRouter } from "react-router-dom";
import App from "./App";


const root = ReactDOM.createRoot(
    document.getElementById('root') 
  );

// createRoot(container!) if you use TypeScript
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
