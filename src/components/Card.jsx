import React, { useState, useEffect } from 'react';

function Card(props) {
	return (
		<div className="bg-sky-400 m-1" id={props.id} onClick={props.onClick}>
			{props.value}
		</div>
	);
}

export default Card;
