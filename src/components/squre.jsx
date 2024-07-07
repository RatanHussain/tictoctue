/** @format */

import React from 'react';

export default function Squre(props) {
	return (
		<div>
            <button className='  squre ' onClick={props.onClick}>{props.value }</button>
		</div>
	);
}
