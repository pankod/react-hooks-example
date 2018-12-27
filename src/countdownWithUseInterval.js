import React, { useState, useEffect } from "react";

import useInterval from './useInterval';

export function CountdownWithUseInterval() {
	const [countDown, setCountdown] = useState(50);

	useInterval(function () {
		setCountdown(countDown - 1);
	}, 1000);

	return (
		<div>
			<p>{countDown} seconds</p>
			<button onClick={() => setCountdown(countDown + 10)}>
				Add to 10 seconds
      		</button>
		</div>
	);
}
