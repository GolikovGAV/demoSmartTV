import React, { useState } from 'react';
import s from './Modal.module.css';
import qrCode from '../../assets/images/qr-code.svg';
import PhoneNumForm from '../../PhoneNumForm/PhoneNumForm';
import IdleListener from '../IdleListener/IdleListener';
import CustomButton from '../CustomButton/CustomButton';

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
				<div className={s.close}>
					<CustomButton buttonText='X' onClick={onClick} />
				</div>
				<div className={s.qrContainer}>
					<p className={`text-m ${s.qrText}`}>
						СКАНИРУЙТЕ QR-КОД ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
					</p>
					<img src={qrCode} alt='qr-code для перехода по ссылке' />
				</div>
			</div>
			<IdleListener handleOnIdle={onClick} />
		</div>
	);
}
