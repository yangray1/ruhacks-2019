import React from 'react';
import Story from './Story';
import './StoriesList.sass';

class StoriesList extends React.Component {

	render() {
		console.log(this.props.stories)

		const stories = this.props.stories && this.props.stories.map((el, idx) => (
			<Story
				title={el.data.title}
				url={el.data.url}
				key={idx}
			/>
		))


		return (
			<div className="storiesList" >
				{stories}
			</div>
		);
	}
}

export default StoriesList;
