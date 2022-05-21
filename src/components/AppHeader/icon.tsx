import React from 'react';
import mainLogo from '../../media/img/main-logo.png';
import style from './style.module.scss';

const Icon: React.FC = () => {
   return (
      <div>
         <img src={mainLogo} alt="" className={style.icon} />
      </div>
   )
}

export default Icon