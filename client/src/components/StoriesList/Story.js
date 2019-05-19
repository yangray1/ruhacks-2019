import React from 'react';

class Story extends React.Component {

	render() {
		const storyClickHandler = () => {
			window.open(this.props.url, "_blank");
		}

		return (
			<div className="story" onClick={storyClickHandler}>
				<div className="title">
					{this.props.title}
				</div>
			</div>
		);
	}
}

export default Story;
