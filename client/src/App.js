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
		const gtin = this.parseBarcodeToGTIN(data);

		let url = `api/product/${gtin}`;

		fetch(url).then(res => res.json())
			.then(result => {
				const data = JSON.parse(result.data);
				console.log(data);
			});
	}

	scrapeRedditForStories(searchTerm) {
		let url = `api/reddit/${searchTerm}`;

		fetch(url).then(res => res.json())
			.then(result => {
				const data = JSON.parse(result.data);
				console.log(data);
			});
	}

	componentDidMount() {
		this.barcodeScanner.start();

		// this.scrapeRedditForStories('nestle');
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to save.
					</p>
					<button onClick={this.barcodeScanner.start}>RESET</button>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>

					<div id="barcodeScannerViewport"></div>
				</header>
			</div>
		);
	}
}

export default App;
