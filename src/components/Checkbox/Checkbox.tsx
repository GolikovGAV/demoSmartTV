import React from 'react';
import s from './Checkbox.module.css';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

type Props = {
	name: string;
	label: string;
	isAgreed: boolean;
	onChange: () => void;
};

export default function Checkbox({ name, label, isAgreed, onChange }: Props) {
	const { ref, focused } = useFocusable({
		onEnterPress: () => {
			onChange();
		}
	});

	return (
		<div className={s.wrapper}>
			<label ref={ref} className={`${s.customCheckbox} ${focused && s.focus}`}>
				<input
					name={name}
					type='checkbox'
					className={s.checkbox}
					checked={isAgreed}
					onChange={onChange}
				/>
				<span className={s.check}></span>
			</label>
			<p className={`text-s ${s.label}`}>{label}</p>
		</div>
	);
}
