import React, { useEffect, useState } from 'react';
import qrCode from '../../assets/images/qr-code.svg';
import CustomButton from '../CustomButton/CustomButton';
import s from './Banner.module.css';

type Props = {
	onClick: () => void;
};

function Banner({ onClick }: Props) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 5000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<div className={`${s.banner} ${isVisible && s.visible}`}>
				<h2 className='text-m'>
					ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! <br />
					ПОДАРИТЕ ЕМУ СОБАКУ!
				</h2>
				<img
					className={s.qr}
					src={qrCode}
					alt='qr-code для перехода по ссылке'
				/>
				<p className='text-s'>
					Сканируйте QR-код <br />
					или нажмите ОК
				</p>
				<CustomButton buttonText='ok' onClick={onClick} />
			</div>
		</>
	);
}

export default Banner;
