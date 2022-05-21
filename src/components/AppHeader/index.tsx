import React from 'react';
import Logo from './logo';
import style from './style.module.scss';

const AppHeader: React.FC = () => {
   return (
      <header className={style.header}>
         <Logo />
      </header>
   )
}

export default AppHeader