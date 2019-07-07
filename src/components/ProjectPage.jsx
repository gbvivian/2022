import Grid from '@material-ui/core/Grid';
import NavBar from './Navbar';
import React from 'react';
import Project1Img from '../assets/Project1_Img.jpg';

export default function ProjectPage() {
	console.log('ProjectPage is called');
	return (
		<React.Fragment>
			<Grid container spacing={24} justify="center" alignItems="center">
				<NavBar />
				<div />
				<Grid item xs={12}>
					<img src={Project1Img} alt="Project1Img" width="1440px" height="1080px" fluid="true" />
				</Grid>
				<Grid item xs={6}>
					<h1>Title</h1>
				</Grid>
			</Grid>

			<Grid container spacing={24} justify="center" alignItems="center">
				<Grid item xs={6}>
					<p>Text</p>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
