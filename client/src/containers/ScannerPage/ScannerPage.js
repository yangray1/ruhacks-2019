import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import BarcodeScanner from 'components/BarcodeScanner/BarcodeScanner';
import RecentlyViewedTray from 'components/RecentlyViewedTray/RecentlyViewedTray';

import './ScannerPage.sass';

class ScannerPage extends React.Component {

	render() {
		const hideScanButton = this.props.location.pathname === '/';
		return (
			<div id="ScannerPage">
				<Navbar hideScanButton={hideScanButton}/>
				<BarcodeScanner {...this.props}/>
				<RecentlyViewedTray className="recentlyViewed"/>
			</div>
		);
	}
}

export default ScannerPage;

