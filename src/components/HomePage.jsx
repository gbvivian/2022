import React from 'react';
import ProjectCard from '../components/ProjectCard';

const HomePage = () => {
	return (
		<React.Fragment>
            <div className="text-3xl sm:w-5/12 m-10 sm:m-6">Hi! My name is Vivian.</div>
			<div className="flex flex-wrap justify-center">
				<ProjectCard />
				<ProjectCard />
			</div>
		</React.Fragment>
	);
};

export default HomePage;
