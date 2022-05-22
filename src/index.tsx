import React from 'react';
import ReactDOM from 'react-dom/client';

import AOS from 'aos';
import 'aos/dist/aos.css';

// import 'antd/dist/antd.css';
import './index.css';
import './global.scss';

import App from './components/App';

AOS.init();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);