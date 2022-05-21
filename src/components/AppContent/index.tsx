import React from 'react';
import Divider from '../Divider';
import HelloSection from './Sections/Hello';
import InfoSection from './Sections/Info';
import RegistrationSection from './Sections/Registration';
import style from './style.module.scss';

const AppContent: React.FC = () => {
   return (
      <main className={style.content}>
         <HelloSection />
         <Divider />
         <InfoSection />
         <Divider />
         <RegistrationSection />
      </main>
   )
}

export default AppContent