import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.sass';

import ScannerPage from 'containers/ScannerPage/ScannerPage';
import ProductPage from 'containers/ProductPage/ProductPage';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			product: null,
			stories: null
		};

		this.updateProduct = this.updateProduct.bind(this);
		this.updateStories = this.updateStories.bind(this);
	}


	updateProduct(product) {
		this.setState({product: product});
	}

	updateStories(stories) {
		this.setState({stories: stories});
	}


	render() {
		return (
			<Switch>
				<div className="App">
					<Route
						exact path="/"
						render={(routeProps) => (
							<ScannerPage
								{...routeProps}
								productHandler={this.updateProduct}
								storiesHandler={this.updateStories}
							/>
						)}>
					</Route>
					<Route
						path="/product"
						render={(routeProps) => (
							<ProductPage
								{...routeProps}
								product={this.state.product}
								stories={this.state.stories}
							/>
						)}>
					</Route>
				</div>
			</Switch>
		);
	}
}

export default App;
