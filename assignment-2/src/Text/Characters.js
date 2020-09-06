import React from 'react';
import './Characters.js';

const characters = (props) => {
	return (
		<div className='chars' onClick={props.clicked}>
			{props.char}
		</div>
	);
}

export default characters;