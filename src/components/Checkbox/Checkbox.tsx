import React from 'react';
import s from './Checkbox.module.css';

type Props = {
	label: string;
	isAgreed: boolean;
	onChange: () => void;
};

export default function Checkbox({ label, isAgreed, onChange }: Props) {
	return (
		<div className={s.wrapper}>
			<label className={s.customCheckbox}>
				<input
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
