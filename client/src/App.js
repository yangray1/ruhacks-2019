import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import ScannerPage from 'containers/ScannerPage/ScannerPage';
import BarcodeScanner from 'components/BarcodeScanner/BarcodeScanner';

class App extends React.Component {


	render() {
		return (
			<Switch>
				<div className="App">
					<Route exact path="/" component={ScannerPage}></Route>
					<header className="App-header">
						<BarcodeScanner/>
					</header>
				</div>
			</Switch>
		);
	}
}

export default App;
