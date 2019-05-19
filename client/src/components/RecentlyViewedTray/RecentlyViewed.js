import React from 'react';

class RecentlyViewed extends React.Component {

	render() {
		return (
			<div className="recentlyViewedItem" >
				<img src={this.props.logo} alt="logo"/>
			</div>
		);
	}
}

export default RecentlyViewed;
