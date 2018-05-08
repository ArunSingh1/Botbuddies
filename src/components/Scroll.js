import React from 'react'

const Scrool = (props) => {
	return (
			<div style = { { overflowY: 'scroll', border: '3px solid lightblue', height: '500px' } }>
				{props.children} 
			</div>

		);
};

export default Scrool;