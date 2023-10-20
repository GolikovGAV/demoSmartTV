import React, { useRef, useState } from 'react';
import s from './App.module.css';
import Background from '../Background/Background';
import Modal from '../Modal/Modal';
import Banner from '../Banner/Banner';

function App() {
	const playPauseRef = useRef<HTMLButtonElement>(null);

	const [isModal, setIsModal] = useState<boolean>(false);

	function handleModal() {
		setIsModal(!isModal);
		playPauseRef.current?.click();
	}

	return (
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
	);
}

export default App;
