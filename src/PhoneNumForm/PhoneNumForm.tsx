import React, { useState, useEffect } from 'react';
import CustomButton from '../components/CustomButton/CustomButton';
import Checkbox from '../components/Checkbox/Checkbox';
import s from './PhoneNumForm.module.css';
import { checkPhoneNumber } from '../utils/checkPhoneNumber';

const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

function PhoneNumForm() {
	const [isAgreed, setIsAgreed] = useState(false);

	const [isSent, setIsSent] = useState(false);

	const [isValid, setIsValid] = useState(true);

	const [isSending, setIsSending] = useState(false);

	const [phoneNumber, setPhoneNumber] = useState('');

	useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);

		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, []);

	function handleKeyPress(e: KeyboardEvent) {
		if (e.key >= '0' && e.key <= '9') {
			handleClick(e.key);
		} else if (e.key === 'Backspace') {
			handleDelete();
		}
	}

	function handleClick(digit: string) {
		setPhoneNumber((prevPhoneNumber) => {
			if (prevPhoneNumber.length >= 10) {
				return prevPhoneNumber;
			}
			return prevPhoneNumber + digit;
		});
	}

	function handleDelete() {
		setPhoneNumber((prevPhoneNumber) => prevPhoneNumber.slice(0, -1));
	}

	function formatPhoneNumber(phoneNumber: string) {
		const phoneNumberLength = phoneNumber.length;
		let formattedPhoneNumber = '+7(';
		for (let i = 0; i < phoneNumberLength; i++) {
			if (i === 3) {
				formattedPhoneNumber += ') ';
			} else if (i === 6) {
				formattedPhoneNumber += '-';
			} else if (i === 8) {
				formattedPhoneNumber += '-';
			}
			formattedPhoneNumber += phoneNumber[i];
		}
		for (let i = phoneNumberLength; i < 10; i++) {
			if (i === 3) {
				formattedPhoneNumber += ') ';
			} else if (i === 6) {
				formattedPhoneNumber += '-';
			} else if (i === 8) {
				formattedPhoneNumber += '-';
			}
			formattedPhoneNumber += '_';
		}
		return formattedPhoneNumber;
	}

	async function handleSubmit() {
		const validRes = checkPhoneNumber(phoneNumber);
		if (await validRes) {
			setIsSent(!isSent);
			setIsSending((prevValue) => !prevValue);
		} else {
			setIsValid((prevValue) => !prevValue);
			setTimeout(() => {
				setIsValid((prevValue) => !prevValue);
			}, 3000);
			setIsSending((prevValue) => !prevValue);
		}
	}

	const numForm = (
		<form
			className={s.container}
			onSubmit={(e) => {
				e.preventDefault();
				setIsSending((prevValue) => !prevValue);
				handleSubmit();
			}}
		>
			<h2 className='text-l'>Введите ваш номер мобильного телефона</h2>
			<div className={`${isValid === false && s.invalid}`}>
				<p className='text-xl'>{formatPhoneNumber(phoneNumber)}</p>
				<input
					name='phoneNumberInput'
					style={{ display: 'none' }}
					type='text'
					value={phoneNumber}
					onChange={() => {}}
				/>
			</div>
			<p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
			<div className={s.buttons}>
				{buttons.map((num, index) => (
					<CustomButton
						key={index}
						buttonText={num}
						onClick={() => {
							handleClick(num);
						}}
					/>
				))}
				<CustomButton
					buttonText='стереть'
					onClick={() => {
						handleDelete();
					}}
					addClassName={s.delete}
				/>
				<CustomButton
					buttonText='0'
					onClick={() => {
						handleClick('0');
					}}
				/>
			</div>
			{isValid ? (
				<Checkbox
					name='phoneNumberCheckbox'
					label='Согласие на обработку персональных данных'
					isAgreed={isAgreed}
					onChange={() => {
						setIsAgreed(!isAgreed);
					}}
				/>
			) : (
				<p className={`${s.invalid} text-l`}>Неверно введён номер</p>
			)}
			<CustomButton
				isDisabled={!isAgreed || phoneNumber.length !== 10 || isSending}
				buttonType='submit'
				addClassName={s.submit}
				buttonText={`${isSending ? 'Проверяем' : 'Подтвердить номер'}`}
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

	return <>{!isSent ? numForm : success}</>;
}

export default PhoneNumForm;
