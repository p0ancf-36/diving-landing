import React from 'react'
import { default as section } from '../style.module.scss';
import diver from '../../../../media/img/diver.svg';

import style from './style.module.scss';

const InfoSection = () => {
   return (
      <div className={[section.section, style.info].join(' ')}>
         <div className={["square"].join(' ')} data-aos="zoom-in">
            <div className={["square__content", style.text_content].join(' ')}>
               <h2>Почувствуй лед с другой стороны</h2>
               <p>Предоставляем уникальную возможность потрогать лед с другой стороны. Получи удивительный опыт дайвинга в Сибири!</p>
            </div>
         </div>
         <div className="square" data-aos="zoom-in">
            <div className="square__content">
               <img src={diver} alt="" />
            </div>
         </div>
      </div>
   )
}

export default InfoSection