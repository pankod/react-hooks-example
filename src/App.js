import React, { Component } from 'react';
import './App.css';

import { Countdown } from './countdown'
import { CountdownClass } from './countdownClass'
import { CountdownWithUseInterval } from './countdownWithUseInterval'
import { CountdownFunctional } from './countdownFunctional'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<CountdownFunctional countDown={300} />
					<CountdownClass countDown={300} />
					<Countdown countDown={300} />
					<CountdownWithUseInterval countDown={300} />
				</header>
			</div>
		);
	}
}

export default App;
