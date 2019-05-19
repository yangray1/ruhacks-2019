import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import ScannerPage from 'containers/ScannerPage/ScannerPage';
import ProductPage from 'containers/ProductPage/ProductPage';

class App extends React.Component {
	state = {
		product: {}
	};

	render() {
		return (
			<Switch>
				<div className="App">
					<Route exact path="/" component={ScannerPage}></Route>
					<Route exact path="/product" component={ProductPage}></Route>
				</div>
			</Switch>
		);
	}
}

export default App;
