/** @format */

import React from 'react';

export default function Squre({ value, onSquareClick }) {
	return (
		<div>
			<button className='squre' onClick={onSquareClick}>
				{value}
			</button>
		</div>
	);
}
