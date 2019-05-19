import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import BarcodeScanner from 'components/BarcodeScanner/BarcodeScanner';
import RecentlyViewedTray from 'components/RecentlyViewedTray/RecentlyViewedTray';

class ScannerPage extends React.Component {

	render() {
		return (
			<div>
				<Navbar/>
				<BarcodeScanner/>
				<RecentlyViewedTray className="recentlyViewed"/>
			</div>
		)
	}
}

export default ScannerPage;

