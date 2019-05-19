import Quagga from 'quagga'; // ES6

class BarcodeScannerController {
	constructor(mountingElement, detectionCB) {
		this.mountingElement = mountingElement;
		this.detectionCB = detectionCB;
		this.start = this.start.bind(this);
	}

	start() {
		Quagga.init({
			inputStream : {
				name : "Live",
				type : "LiveStream",
				target: document.querySelector(this.mountingElement),
				constraints: {
					width: 327,
					height: 536,
				}
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
			this.detectionCB(data)
			Quagga.stop();
		})
	}
}

export default BarcodeScannerController;
