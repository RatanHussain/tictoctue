/** @format */

import React from 'react';
import Squre from './squre';

export default function Board(props) {
	let rendSqure = (i) => (
		<Squre value={props.squars[i]} onClick={props.onClick(i)} />
	);

	return (
		<div className='mt-5 '>
			<div className='container m-auto justify-content-center'>
				<div className='d-flex'>
					{rendSqure(1)}
					{rendSqure(2)}
					{rendSqure(3)}
				</div>
				<div className='d-flex'>
					{rendSqure(4)}
					{rendSqure(5)}
					{rendSqure(6)}
				</div>
				<div className='d-flex'>
					{rendSqure(7)}
					{rendSqure(8)}
					{rendSqure(9)}
				</div>
			</div>
		</div>
	);
}
