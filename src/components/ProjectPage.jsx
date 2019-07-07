import Grid from '@material-ui/core/Grid';
import NavBar from './Navbar';
import React from 'react';

export default function ProjectPage() {
	console.log('ProjectPage is called');
	return (
		<React.Fragment>
			<Grid container spacing={24} justify="center" alignItems="center">
				<NavBar />
				<Grid item xs={6}>
					<h1>boof</h1>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
