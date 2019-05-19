import React from 'react';
import Alternative from './Alternative';

import './AlternativesList.sass';

class AlternativesList extends React.Component {


	render() {
		const alternativesConfig = [
			{ name: 'Reusable water bottle', count: 42 },
			{ name: 'Tap water', count: 23 },
			{ name: 'Hydro Flask', count: 6 },
			{ name: 'Klean Kanteen', count: 4 },
		]
		const alternatives = alternativesConfig.map((el, idx) => (<Alternative key={idx} {...el}/>));

		return (
			<div>
				<div className="suggestionButton">Add Suggestion</div>
				<div className="alternativesList" >
					{ alternatives }
				</div>
			</div>
		);
	}
}

export default AlternativesList;
