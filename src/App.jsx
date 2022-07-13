import React, { useState, useEffect } from 'react';

import Card from './components/Card';

function App() {
	const [content, setContent] = useState([
		{ id: 1, data: 10024, selected: false },
		{ id: 2, data: 10042, selected: false },
		{ id: 3, data: 10204, selected: false },
		{ id: 4, data: 10240, selected: false },
		{ id: 5, data: 10420, selected: false },
		{ id: 6, data: 10402, selected: false },
		{ id: 7, data: 12040, selected: false },
		{ id: 8, data: 12004, selected: false },
		{ id: 9, data: 14020, selected: false },
		{ id: 10, data: 14002, selected: false },
		{ id: 11, data: 12400, selected: false },
		{ id: 12, data: 14200, selected: false },
	]);

	const shuffleArray = (e) => {
		let arr = [...content];
		const index = arr.findIndex((object) => {
			return object.id === parseInt(e.target.id);
		});

		if (arr[index].selected) {
			alert('Already Selected');
		} else {
			arr[index].selected = true;

			arr.sort((a, b) => 0.5 - Math.random());

			setContent(arr);
			console.log(e.target.id);
			console.log(content);
		}
	};

	return (
		<div className="App">
			<div className="cardContainer">
				{content.map((data) => (
					<Card
						key={data.id}
						value={data.data}
						id={data.id}
						onClick={(e) => shuffleArray(e)}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
