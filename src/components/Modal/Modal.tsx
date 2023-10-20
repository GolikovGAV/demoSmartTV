import React from 'react';
import s from './Modal.module.css';
import qrCode from '../../assets/images/qr-code.svg';
import close from '../../assets/icons/close.svg';
import CustomButton from '../CustomButton/CustomButton';

type Props = {
	onClick: () => void;
};

export default function Modal({ onClick }: Props) {
	return (
		<div className={s.container}>
			<div className={s.left}>
				<h2 className='text-l'>Введите ваш номер мобильного телефона</h2>
				<div>+7(___)___-__-__</div>
				<p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
				<div className={s.buttons}></div>
			</div>
			<div className={s.right}>
				<button className={s.button}>
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
