import React, { useState } from 'react';
import CustomButton from '../components/CustomButton/CustomButton';
import Checkbox from '../components/Checkbox/Checkbox';
import s from './PhoneNumForm.module.css';

export default function PhoneNumForm() {
	const [isAgreed, setIsAgreed] = useState(false);

	const [isSent, setIsSent] = useState(false);

	const numForm = (
		<form className={s.container}>
			<h2 className='text-l'>Введите ваш номер мобильного телефона</h2>
			<div>+7(___)___-__-__</div>
			<p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
			<div className={s.buttons}>
				<CustomButton buttonText='1' onClick={() => {}} />
				<CustomButton buttonText='2' onClick={() => {}} />
				<CustomButton buttonText='3' onClick={() => {}} />
				<CustomButton buttonText='4' onClick={() => {}} />
				<CustomButton buttonText='5' onClick={() => {}} />
				<CustomButton buttonText='6' onClick={() => {}} />
				<CustomButton buttonText='7' onClick={() => {}} />
				<CustomButton buttonText='8' onClick={() => {}} />
				<CustomButton buttonText='9' onClick={() => {}} />
				<CustomButton
					buttonText='стереть'
					onClick={() => {}}
					addClassName={s.delete}
				/>
				<CustomButton buttonText='0' onClick={() => {}} />
			</div>
			<Checkbox
				label='Согласие на обработку персональных данных'
				isAgreed={isAgreed}
				onChange={() => {
					setIsAgreed(!isAgreed);
				}}
			/>
			<CustomButton
				addClassName={s.submit}
				buttonText='подтвердить номер'
				onClick={() => {}}
			/>
		</form>
	);

	const success = (
		<div className={s.container}>
			<h2 className='text-xl'>ЗАЯВКА ПРИНЯТА</h2>
			<p className='text-s'>
				Держите телефон под рукой. Скоро с Вами свяжется наш менеджер.
			</p>
		</div>
	);

	return <>{isSent ? numForm : success}</>;
}
