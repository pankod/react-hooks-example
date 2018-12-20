### `Hooks`

```
import React, { useState, useRef, useEffect } from "react";

export function Countdown(props) {
    const intervalRef = useRef();
    const [countDown, setCountdown] = useState(50);

    console.log("asda", countDown)
    useEffect(() => {
        console.log("useEffect", countDown)
        const id = setInterval(function () {
            const newSecond = countDown - 1;

            setCountdown(newSecond);
        }, 1000);

        intervalRef.current = id;

        return () => {
            clearInterval(intervalRef.current);
        }
    });

    return (
        <div>
            <p>{countDown} seconds</p>
            <button onClick={() => setCountdown(countDown + 10)}>
                Add to 10 seconds
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
           		 	Add to 10 seconds
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
		const newSecond = this.state.countDown - 1;

		this.setState({ countDown: newSecond });
	}
}


```

## Learn More

You can learn more in the [Introducing Hooks
](https://reactjs.org/docs/hooks-intro.html).
