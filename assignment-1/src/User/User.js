import React from 'react';
import './User.css';

const user = ( props ) => {
	return (
		<div className='user'>
			<div className='inputComponent'>
				<input type='text' onChange={props.changed}/>
			</div>
			<div className='outputComponent'>
				<p onClick={props.clicked}>Welcome {props.username}!</p>
			</div>
		</div>
	);
}

export default user;