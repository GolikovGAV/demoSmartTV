import React, { useEffect, useRef, useState } from 'react';
import s from './App.module.css';
import Background from '../Background/Background';
import Modal from '../Modal/Modal';
import Banner from '../Banner/Banner';
import {
	useFocusable,
	FocusContext
} from '@noriginmedia/norigin-spatial-navigation';

function App() {
	const playPauseRef = useRef<HTMLButtonElement>(null);

	const [isModal, setIsModal] = useState<boolean>(false);

	const { focusKey, focusSelf } = useFocusable();

	function handleModal() {
		setIsModal(!isModal);
		playPauseRef.current?.click();
	}
	useEffect(() => {
		focusSelf();
	}, [focusSelf]);

	return (
		<FocusContext.Provider value={focusKey}>
			<main className={s.main}>
				<Background clickRef={playPauseRef} />
				{!isModal && (
					<div className={s.banner}>
						<Banner
							onClick={() => {
								handleModal();
							}}
						/>
					</div>
				)}
				{isModal && (
					<Modal
						onClick={() => {
							handleModal();
						}}
					/>
				)}
			</main>
		</FocusContext.Provider>
	);
}
export default App;
