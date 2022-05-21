import React from 'react';
import index from './index.module.css';
import './variables.scss';

import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';

const App: React.FC = () => {
  return (
    <div className={index.wrapper}>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </div>
  );
}

export default App;
