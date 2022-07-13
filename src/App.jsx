import React, { useState, useEffect } from 'react';

import Card from './components/Card';

function App() {
	const [score, setScore] = useState(0);
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

	//Randomize card onload
	useEffect(() => {
		let arr = [...content];
		arr.sort((a, b) => 0.5 - Math.random());
		setContent(arr);
	}, []);

	//Shuffle Cards
	const shuffleArray = (e) => {
		let scoreUpdate = score;
		let arr = [...content];
		const index = arr.findIndex((object) => {
			return object.id === parseInt(e.target.id);
		});

		if (arr[index].selected) {
			alert(`Your score is ${score}`);
			restart();
		} else {
			scoreUpdate++;
			arr[index].selected = true;
			arr.sort((a, b) => 0.5 - Math.random());
			setContent(arr);
			setScore(scoreUpdate);
		}
	};

	const restart = () => {
		let arr = [...content];
		arr.sort((a, b) => 0.5 - Math.random());

		arr.forEach((value) => {
			value.selected = false;
			console.log(value.selected);
		});

		console.log(arr);
		setContent(arr);
		setScore(0);
	};

	return (
		<div className="App">
			<div>{score}</div>
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
			<button onClick={restart}>Restart</button>
		</div>
	);
}

export default App;
