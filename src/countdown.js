import React, { useState, useRef, useEffect } from "react";


export function Countdown() {
	const intervalRef = useRef();
	const [countDown, setCountdown] = useState(50);

	useEffect(() => {
		const id = setInterval(function () {
			setCountdown(countDown - 1);
		}, 1000);

		intervalRef.current = id;

		return () => {
			clearInterval(intervalRef.current);
		}
	}, [countDown]);

	return (
		<div>
			<p>{countDown} seconds</p>
			<button onClick={() => setCountdown(countDown + 10)}>
				Add to 10 seconds
      		</button>
		</div>
	);
}
