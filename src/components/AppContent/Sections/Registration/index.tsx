import React, { useState } from 'react';
import validator from 'validator';
import { default as section } from '../style.module.scss';
import style from './style.module.scss';


const RegistrationSection = () => {
   const [errorMessage, setErrorMessage] = useState("");

   const send = (e: React.SyntheticEvent) => {
      e.preventDefault();

      const target = e.target as typeof e.target & {
         surname: { value: string };
         fname: { value: string };
         sname: { value: string };
         phone: { value: string };
         email: { value: string };
      };

      const surname = target.surname.value;
      const fname = target.fname.value;
      const sname = target.sname.value;
      const phone = target.phone.value;
      const email = target.email.value;

      var errStr = "";

      if (surname.length < 1) errStr += "Фамилия не введена\n";
      if (fname.length < 1) errStr += "Иня не введено\n";
      if (sname.length < 1) errStr += "Отчество не введено\n";
      if (!validator.isMobilePhone(phone)) errStr += "Телефон введён неправильно\n";
      if (!validator.isEmail(email)) errStr += "Почта введена неправильно\n";

      if (errStr !== "") {
         setErrorMessage(errStr);
         return;
      }
   }

   return (
      <div className={[section.section, style.registration].join(' ')}>
         <h2>Регистрация на занятие</h2>
         <form action="" onSubmit={send}>
            <input type="text" name='surname' placeholder='Фамилия' />
            <input type="text" name='fname' placeholder='Имя' />
            <input type="text" name='sname' placeholder='Отчество' />
            <input type="text" name='phone' placeholder='Номер телефона' />
            <input type="text" name='email' placeholder='Электронная почта' />
            <button type="submit">Отправить</button>

            {errorMessage !== "" && <div>{errorMessage}</div>}
         </form>
         <div></div>
      </div>
   )
}

export default RegistrationSection