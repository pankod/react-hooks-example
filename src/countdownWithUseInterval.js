import React, { useState } from "react";

import useInterval from './useInterval';

export function CountdownWithUseInterval(props) {
	const [countDown, setCountdown] = useState(props.countDown);

	useInterval(function () {
		setCountdown(countDown => countDown - 1);
	}, 1000);

	return (
		<div>
			<p>{countDown} seconds</p>
			<button onClick={() => setCountdown(countDown + 10)}>
				Add 10 seconds
      		</button>
		</div>
	);
}
