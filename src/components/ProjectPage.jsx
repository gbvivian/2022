import Grid from '@material-ui/core/Grid';
import NavBar from './Navbar';
import React from 'react';
import Project1Img from '../assets/Project1_Img.jpg';

export default function ProjectPage() {
	console.log('ProjectPage is called');
	return (
		<React.Fragment>
			<div className="md:mx-16 md:mt-16">
				<img src={Project1Img} alt="Project" />

				<div className="flex flex-col md:mx-32">
					<p className="text-6xl">I'm a title</p>
					<div className="text-2xl">
						Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic
						or web designs. The passage is attributed to an unknown typesetter in the 15th century who is
						thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type
						specimen book. It usually begins with:
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
