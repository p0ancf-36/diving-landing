import React, { useRef, useState } from 'react';
import validator from 'validator';
import axios from 'axios';

import { default as section } from '../style.module.scss';
import style from './style.module.scss';

const RegistrationSection = () => {
   const [errorMessage, setErrorMessage] = useState([] as string[]);
	const form = useRef<HTMLFormElement>(null);

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

      var errStr: string[] = [];

      if (surname.length < 1) errStr.push("Фамилия не введена");
      if (fname.length < 1) errStr.push("Имя не введено");
      if (sname.length < 1) errStr.push("Отчество не введено");
      if (!validator.isMobilePhone(phone)) errStr.push("Телефон введён неправильно");
      if (!validator.isEmail(email)) errStr.push("Почта введена неправильно");

      if (errStr.length != 0) {
         setErrorMessage(errStr);
         return;
      }
		
		setErrorMessage([]);
		form.current?.reset();
		axios
			.post(window.location.href, {surname, fname, sname, phone, email})
			.then((response) => {

			});
   }

   return (
      <div className={[section.section, style.registration].join(' ')}>
         <h2>Регистрация на занятие</h2>
         <form action="" onSubmit={send} ref={form}>
            <input type="text" name='surname' placeholder='Фамилия' />
            <input type="text" name='fname' placeholder='Имя' />
            <input type="text" name='sname' placeholder='Отчество' />
            <input type="text" name='phone' placeholder='Номер телефона' />
            <input type="text" name='email' placeholder='Электронная почта' />
            <button type="submit">Отправить</button>

				{
					errorMessage.length !== 0 && <div className={style.error}>
						{errorMessage.map((value) => <div>{value}</div>)}
					</div>
				}
         </form>
         <div></div>
      </div>
   )
}

export default RegistrationSection