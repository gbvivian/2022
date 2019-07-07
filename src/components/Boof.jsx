import NavBar from './Navbar';
import React from 'react';

export default function Boof() {
	console.log('boof is called');
	return (
		<React.Fragment>
			<NavBar />
			<h1>boof</h1>
		</React.Fragment>
	);
}
