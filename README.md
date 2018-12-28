<div align="center" >
<img src="https://github.com/pankod/react-hooks-example/blob/master/example.png" alt="React Hooks Example" align="center" />
</div>

### `Hooks`

```
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

```

### `Class`

```
import React from "react";

export class CountdownClass extends React.Component {
	interval = 0;
	constructor(props) {
		super(props);
		this.state = {
			countDown: props.countDown
		};
	}

	componentDidMount() {
		this.setup();
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div>
				<p>{this.state.countDown} seconds</p>
				<button onClick={() => this.setState({ countDown: this.state.countDown + 10 })}>
					Add 10 seconds
      			</button>
			</div>
		);
	}

	setup() {
		this.interval = setInterval(function () {
			this.countdown();
		}.bind(this), 1000)
	}

	countdown() {
		this.setState({ countDown: this.state.countDown - 1 });
	}
}

```

### `Custom Hooks`

```
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
```

## Learn More

You can learn more in the [Introducing Hooks
](https://reactjs.org/docs/hooks-intro.html).
