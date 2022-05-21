import React from 'react';
import style from './style.module.scss';

const AppFooter: React.FC = () => {
   const year = new Date().getFullYear();

   return (
      <footer className={style.footer}>Дайвинг в Сибири © {year}</footer>
   )
}

export default AppFooter