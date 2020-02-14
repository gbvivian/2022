import React from 'react';
// import { Link } from 'react-router-dom';

const ProjectCard = props => {
  return (
    <React.Fragment>
      <div className="w-full sm:w-5/12 m-10 sm:m-6 md:m-15 lg:m-12 overflow-hidden">
        {/* <Link to="https://medium.com/@gbvivian/dropwatch-bc799f144292"> */}
        <a href="https://medium.com/@gbvivian/dropwatch-bc799f144292">
          <div className="image">
            <img
              className="w-full"
              to={props.projectLink}
              src={props.projectImg}
              alt="Project"
            />
          </div>
          <div className="hover:underline text-3xl mt-6">
            {props.projectName}
          </div>
          {/* </Link> */}
        </a>
      </div>
    </React.Fragment>
  );
};

export default ProjectCard;
