import React from 'react';
import { default as section } from '../style.module.scss';
import style from './style.module.scss';
import background from '../../../../media/img/main1.jpg';

const HelloSection = () => {
   return (
      <div className={[section.section, style.hello].join(' ')} style={{ backgroundImage: `url(${background})` }}>
         <span>Дайвинг в Сибири</span>
      </div>
   )
}

export default HelloSection