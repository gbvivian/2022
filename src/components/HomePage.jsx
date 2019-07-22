import React from 'react';
import ProjectCard from '../components/ProjectCard';

const HomePage = () => {
	return (
		<React.Fragment>
			<div className="sm:w-5/12 sm:m-6">
				<div className="text-3xl md:ml-8">Hi! My name is Vivian.</div>
			</div>
			<div className="flex flex-wrap justify-center">
				<ProjectCard projectName="Project 1" />
				<ProjectCard projectName="Project 2" />
			</div>
		</React.Fragment>
	);
};

export default HomePage;
