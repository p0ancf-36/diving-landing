import React from 'react';
import Icon from './icon';
import style from './style.module.scss';

const Logo = () => {
   return (
      <div className={style.logo}>
         <Icon />
         <span>Дайвинг в Сибири</span>
      </div>
   )
}

export default Logo