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
		console.log(data);
		const gtin = this.parseBarcodeToGTIN(data);

		let url = `api/product/${gtin}`;

		fetch(url).then(res => res.json())
			.then(result => {
				console.log(result);
				const data = JSON.parse(result.data);

				// TODO: clean up data
				this.props.productHandler(data);
				const companyName = data.BSIN.name;
				this.scrapeRedditForStories(companyName);
			});
	}

	scrapeRedditForStories(searchTerm) {

		const sanitizedSearchTerm = searchTerm.replace(/é/g, 'e');
		let url = `api/reddit/${sanitizedSearchTerm}`;

		fetch(url).then(res => res.json())
			.then(result => {
				const data = JSON.parse(result.data);
				console.log(data);

				// TODO: clean up data
				this.props.storiesHandler(data.data.children);
				this.props.history.push('/product');
			});
	}

	componentDidMount() {
		this.barcodeScanner.start();
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<div id="barcodeScannerViewport"></div>
			</div>
		)
	}
}

export default BarcodeScanner;

