import React from 'react';
import { Link } from 'react-router-dom';
import Project1Img from '../assets/Project1_Img.jpg';

const ProjectCard = () => {
	return (
		<React.Fragment>
			<div className="w-full sm:w-5/12 m-10 sm:m-6 md:m-15 lg:m-12 overflow-hidden">
				<Link to="/proj">
					<div className="image">
						<img className="w-full" to="/proj" src={Project1Img} alt="Project" />
					</div>
					<div className="hover:underline text-3xl">Project</div>
				</Link>
				<p className="text-gray-700 text-base">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
					perferendis eaque, exercitationem praesentium nihil.
				</p>
			</div>
		</React.Fragment>
	);
};

export default ProjectCard;
