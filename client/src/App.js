import React from 'react';
import logo from './logo.svg';
import './App.css';

import BarcodeScanner from './utils/BarcodeScanner';

class App extends React.Component {

	constructor() {
		super();

		this.parseBarcodeToGTIN = this.parseBarcodeToGTIN.bind(this);
		this.barcodeDetectionHandler = this.barcodeDetectionHandler.bind(this);
		this.barcodeScanner = new BarcodeScanner('#barcodeScannerViewport', this.barcodeDetectionHandler);
	}



	parseBarcodeToGTIN(data) {
		const upc = data.codeResult.code;
		const gtin = upc.padStart(13, '0');

		return gtin;
	}



	barcodeDetectionHandler(data) {
		console.log(this);

		const code = this.parseBarcodeToGTIN(data);

		let url = `https://product-open-data.com/api/gtin/${code}/?format=json`;

		fetch(url, {
			mode: "no-cors"
		}).then((res) => {
			console.log(res);

			// res.json()
		});
			// .then(result => this.setState({ users: result.users }))
	}



	componentDidMount() {
		this.barcodeScanner.start();
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to save.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>

					<div id="barcodeScannerViewport"></div>
					<button onClick={this.barcodeScanner.start}>RESET</button>
				</header>
			</div>
		);
	}
}

export default App;
