import React, { useState, useRef, useEffect } from "react";


export function Countdown(props) {
	const intervalRef = useRef();
	const [countDown, setCountdown] = useState(props.countDown);

	useEffect(() => {
		const id = setInterval(function () {
			setCountdown(countDown => countDown - 1);
		}, 1000);

		intervalRef.current = id;

		return () => {
			clearInterval(intervalRef.current);
		}

	}, []);

	return (
		<div>
			<p>{countDown} seconds</p>
			<button onClick={() => setCountdown(countDown + 10)}>
				Add 10 seconds
      		</button>
		</div>
	);
}
