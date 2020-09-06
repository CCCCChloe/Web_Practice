import React from 'react';

const length = (props) => {
	return (
		<div>
			{
				props.length < 5 ?
				<p>Text too short</p> : null
			}
			{
				props.length > 20 ?
				<p>Text long enough</p> : null
			}
		</div>
	);
}

export default length;