import React from 'react';
import ProjectCard from '../components/ProjectCard';
import shopifySplashScreen from '../assets/project1/shopify_splash_screen.png';
import dropWatchSplashScreen from '../assets/project2/dropwatch_splash_screen.png';

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col md:mx-64">
        <div className="sm:w-5/12 sm:m-6">
          <div className="text-3xl md:ml-8">
            Hi! My name is Vivian. Currently, I'm designing at&nbsp;
            <span className="font-semibold">Shopify</span>. I study Cognitive
            Systems and Computer Science at UBC.
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <ProjectCard
            projectName="Shopify Internship 2020"
            projectImg={shopifySplashScreen}
            projectLink="/proj1"
          />
          <ProjectCard
            projectName="Dropwatch"
            projectImg={dropWatchSplashScreen}
            projectLink="/proj2"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
