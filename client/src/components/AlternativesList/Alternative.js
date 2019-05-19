import React from 'react';

class Alternative extends React.Component {

	render() {
		return (
			<div className="alternative" >
				<div className="count">
					{`${this.props.count} entries`}
				</div>
				<div className="name">
					{this.props.name}
				</div>
			</div>
		);
	}
}

export default Alternative;
