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
