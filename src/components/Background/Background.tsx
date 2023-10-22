import React, { useRef, useState } from 'react';
import s from './Background.module.css';
import back from '../../assets/media/smeshariki.mp4';

type Props = {
	clickRef: any;
};

export default function Background({ clickRef }: Props) {
	const [onPause, setOnPause] = useState<boolean>(false);

	const videoRef = useRef<HTMLVideoElement>(null);

	function handlePlayPause() {
		if (onPause) {
			videoRef.current?.play();
		} else {
			videoRef.current?.pause();
		}
		setOnPause(!onPause);
	}

	return (
		<>
			<button
				style={{ display: 'none' }}
				ref={clickRef}
				onClick={() => {
					handlePlayPause();
				}}
			/>
			<video ref={videoRef} className={s.back} autoPlay loop muted>
				<source src={back} type='video/mp4' />
			</video>
		</>
	);
}
