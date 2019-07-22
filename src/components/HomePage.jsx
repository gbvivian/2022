import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Project1Img from '../assets/Project1_Img.jpg';

const HomePage = () => {
	return (
		<React.Fragment>
			<div className="sm:w-5/12 sm:m-6">
				<div className="text-3xl md:ml-8">Hi! My name is Vivian.</div>
			</div>
			<div className="flex flex-wrap justify-center">
				<ProjectCard projectName="Project 1" projectImg={Project1Img} />
				<ProjectCard projectName="Project 2" projectImg={Project1Img} />
			</div>
		</React.Fragment>
	);
};

export default HomePage;
