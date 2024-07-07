/** @format */

import React from 'react';
import Board from './board';

export default function Game() {

    let [history,setHistory] = [{squars: Array(9).fill(null)}]


    // console.log(history)
    let onClick = i => {
        console.log(i)
    }
	return (
		<div className='mt-5'>
			<h1 className='fw-bold'>Tic Tic Tue Game</h1>

			<Board onClick={()=> onClick()} value={history.squars[0]} />
		</div>
	);
}
