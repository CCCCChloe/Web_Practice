import React from 'react';

const text = ( props ) => {

	return (
		<div>
			<input onChange={props.changed} value={props.content}/>
			<p>Total length is: {props.content.length}</p>
		</div>
	)
}

export default text;