import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.sass';
import cameraIcon from 'assets/camera.svg';
import settingsIcon from 'assets/settings.svg';

class Navbar extends React.Component {

	render() {
		return (
			<div>
				<nav>
					<span>Jelly</span>
					<div>
						{
							!this.props.hideScanButton &&
							<Link  to='/' className="scannerButton">
								<img className="cameraIcon" src={cameraIcon} alt="rescan barcode"/>
							</Link>
						}
					</div>
					<div className="settingsButton">
						<img className="settingsIcon" src={settingsIcon} alt="settings"/>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;

