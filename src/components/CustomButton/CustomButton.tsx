import React from 'react';
import s from './CustomButton.module.css';

type Props = {
	buttonText: string;
	onClick: () => void;
	isActive?: boolean;
	isDisabled?: boolean;
	addClassName?: string;
};

export default function CustomButton({
	buttonText,
	onClick,
	isActive,
	isDisabled,
	addClassName
}: Props) {
	return (
		<button
			className={`text-m ${s.button} ${isActive ? s.active : ''} ${
				addClassName ? addClassName : ''
			}`}
			onClick={onClick}
		>
			{buttonText.toUpperCase()}
		</button>
	);
}
