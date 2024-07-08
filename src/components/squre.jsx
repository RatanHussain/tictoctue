/** @format */

import React from 'react';

function Square({ value, onSquareClick }) {
	return (
		<button className='square btn btn-outline-info' onClick={onSquareClick}>
			{value}
		</button>
	);
}

export default Square