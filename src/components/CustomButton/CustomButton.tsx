import React from 'react';
import s from './CustomButton.module.css';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
type Props = {
	buttonText: string;
	onClick?: () => void;
	isActive?: boolean;
	isDisabled?: boolean;
	buttonType?: 'button' | 'submit' | 'reset';
	addClassName?: string;
};

function CustomButton({
	buttonText,
	onClick,
	isActive,
	isDisabled = false,
	buttonType = 'button',
	addClassName
}: Props) {
	const { ref, focused } = useFocusable({
		focusable: !isDisabled,
		onEnterPress: () => {
			if (onClick) {
				onClick();
			}
			if (buttonType === 'submit') {
				ref.current.click();
			}
		}
	});
	return (
		<button
			ref={ref}
			disabled={isDisabled}
			type={buttonType}
			className={`text-m ${s.button} ${isActive ? s.active : ''} ${
				addClassName ? addClassName : ''
			} ${focused && s.focused}`}
			onClick={onClick}
		>
			{buttonText.toUpperCase()}
		</button>
	);
}

export default CustomButton;
