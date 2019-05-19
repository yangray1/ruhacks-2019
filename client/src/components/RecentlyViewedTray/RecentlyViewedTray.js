import React from 'react';
import RecentlyViewed from './RecentlyViewed';
import './RecentlyViewedTray.sass';

import forever21Logo from 'assets/forever21.png';
import doleLogo from 'assets/dole.png';
import nestle from 'assets/nestle.png';

class RecentlyViewedTray extends React.Component {

	render() {

		const logoArray = [nestle, forever21Logo, doleLogo];
		const recentlyViewedItems = logoArray.map(el => {
			return (<RecentlyViewed logo={el} />)
		})

		return (
			<div>
				<h3>Recently viewed</h3>
				<div className="recentlyViewedTray">
					{recentlyViewedItems}
				</div>
			</div>
		)
	}
}

export default RecentlyViewedTray;

