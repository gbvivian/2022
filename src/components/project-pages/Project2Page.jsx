import React from 'react';
import Project1Img from '../../assets/Project1_Img.jpg';

export default function Project2Page() {
  return (
    <React.Fragment>
      <div className="md:mx-16 md:mt-16">
        <img src={Project1Img} alt="Project" />

        <div className="flex flex-col md:mx-32">
          <p className="text-6xl">I'm a title</p>
          <div className="text-2xl">Project 2 description</div>
        </div>
      </div>
    </React.Fragment>
  );
}
