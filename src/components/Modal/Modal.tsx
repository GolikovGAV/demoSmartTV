import React, { useState } from 'react';
import s from './Modal.module.css';
import qrCode from '../../assets/images/qr-code.svg';
import close from '../../assets/icons/close.svg';
import PhoneNumForm from '../../PhoneNumForm/PhoneNumForm';

type Props = {
	onClick: () => void;
};

export default function Modal({ onClick }: Props) {
	return (
		<div className={s.container}>
			<div className={s.left}>
				<PhoneNumForm />
			</div>
			<div className={s.right}>
				<button className={s.close} onClick={onClick}>
					<img src={close} alt='Закрыть модальное окно' />
				</button>
				<div className={s.qrContainer}>
					<p className={`text-m ${s.qrText}`}>
						СКАНИРУЙТЕ QR-КОД ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
					</p>
					<img src={qrCode} alt='qr-code для перехода по ссылке' />
				</div>
			</div>
		</div>
	);
}
