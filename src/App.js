import React, { Component } from 'react';
import './App.css';

import { Countdown } from './countdown'
import { CountdownClass } from './countdownClass'
import { CountdownWithUseInterval } from './countdownWithUseInterval'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Countdown countDown={300} />
					<CountdownClass countDown={300} />
					<CountdownWithUseInterval countDown={300} />
				</header>
			</div>
		);
	}
}

export default App;
