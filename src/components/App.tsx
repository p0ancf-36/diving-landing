import React from 'react';
import './index.css';

import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <AppHeader />
      <AppContent />
      <AppFooter />
    </div>
  );
}

export default App;
