import React from 'react';
import { Link } from 'react-router-dom';
import Project1Img from '../assets/Project1_Img.jpg';

const ProjectCard = (props) => {
	return (
		<React.Fragment>
			<div className="w-full sm:w-5/12 m-10 sm:m-6 md:m-15 lg:m-12 overflow-hidden">
				<Link to="/proj">
					<div className="image">
						<img className="w-full" to="/proj" src={Project1Img} alt="Project" />
					</div>
					<div className="hover:underline text-3xl mt-6">{props.projectName}</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default ProjectCard;
