import Grid from '@material-ui/core/Grid';
import NavBar from './Navbar';
import React from 'react';
import Project1Img from '../assets/Project1_Img.jpg';

export default function ProjectPage() {
	console.log('ProjectPage is called');
	return (
		<React.Fragment>
			<div className="w-screen md:mx-16 md:mt-16">
				<img src={Project1Img} alt="Project" />
			</div>
		</React.Fragment>
	);
}
