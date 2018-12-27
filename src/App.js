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
					<Countdown countDown={50} />
					<CountdownClass countDown={50} />
					<CountdownWithUseInterval countDown={50} />
				</header>
			</div>
		);
	}
}

export default App;
