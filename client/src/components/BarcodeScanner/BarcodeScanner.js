import React from 'react';
import BarcodeScannerController from 'utils/BarcodeScannerController';
import './BarcodeScanner.sass';

class BarcodeScanner extends React.Component {
	constructor() {
		super();

		this.parseBarcodeToGTIN = this.parseBarcodeToGTIN.bind(this);
		this.barcodeDetectionHandler = this.barcodeDetectionHandler.bind(this);
		this.barcodeScanner = new BarcodeScannerController('#barcodeScannerViewport', this.barcodeDetectionHandler);
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
			<div>
				<button onClick={this.barcodeScanner.start}>RESET</button>
				<div id="barcodeScannerViewport"></div>
			</div>
		)
	}
}

export default BarcodeScanner;

