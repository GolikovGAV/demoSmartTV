import React, { useCallback, useEffect, useState } from 'react';

export default function IdleListener({
	handleOnIdle
}: {
	handleOnIdle: () => void;
}) {
	const [lastActive, setLastActive] = useState(Date.now());

	const handleUpdate = useCallback(() => {
		setLastActive(Date.now());
	}, []);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			handleOnIdle();
		}, 10000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [lastActive, handleOnIdle]);

	useEffect(() => {
		window.addEventListener('mousemove', handleUpdate);
		window.addEventListener('keydown', handleUpdate);

		return () => {
			window.removeEventListener('mousemove', handleUpdate);
			window.removeEventListener('keydown', handleUpdate);
		};
	}, [handleUpdate]);

	return <></>;
}
