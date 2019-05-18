import Quagga from 'quagga'; // ES6

class BarcodeScanner {
	constructor(mountingElement, detectionCB) {
		this.mountingElement = mountingElement;
		this.detectionCB = detectionCB;
		this.start = this.start.bind(this);
	}

	start() {
		console.log(this.mountingElement);

		Quagga.init({
			inputStream : {
				name : "Live",
				type : "LiveStream",
				target: document.querySelector(this.mountingElement),
			},
			decoder : {
				readers : [
					"code_128_reader",
					"upc_reader",
					"upc_e_reader",
					"ean_8_reader",
				]
			},
			locator: {
				halfSample: true,
				patchSize: "medium", // x-small, small, medium, large, x-large
				debug: {
					showCanvas: false,
					showPatches: true,
					showFoundPatches: true,
					showSkeleton: false,
					showLabels: false,
					showPatchLabels: false,
					showRemainingPatchLabels: false,
				}
			},
			locate: true
		}, function(err) {
			if (err) {
				console.log(err);
				return
			}
			console.log("Initialization finished. Ready to start");
			Quagga.start();
		});

		Quagga.onDetected((data) => {
			console.log(data);
			this.detectionCB(data)
			Quagga.stop();
		})
	}
}

export default BarcodeScanner;
