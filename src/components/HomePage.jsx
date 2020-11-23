import React from 'react';
import ProjectCard from '../components/ProjectCard';
import atomicLoansThumbnail from '../assets/atomic-loans/thumbnail_atomic_loans.png';
import shopifySplashScreen from '../assets/project1/shopify_splash_screen.png';
import dropWatchSplashScreen from '../assets/project2/dropwatch_splash_screen.png';
import sonicThumbnail from '../assets/sonic/thumbnail_sonic.png';
import shopPayThumbnail from '../assets/shop-pay/thumbnail_shop_pay.png';


// import designChallengeSplashScreen from '../assets/project3/design_challenge_splash_screen.png';

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col md:mx-20">
        <div className="sm:w-7/12 sm:m-6">
          <div className="text-2xl md:ml-6">
              Hi! My name is Vivian🌻 I'm a product designer who loves to ideate and develop for all audiences. I study Cognitive
            Systems and Computer Science at UBC.
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {/* <ProjectCard
            projectName="Shopify Internship 2020"
            projectImg={shopifySplashScreen}
            projectLink="/proj1"
          /> */}
          <ProjectCard
            projectName="Shopify Web Performance"
            projectImg={sonicThumbnail}
            projectLink="https://gbvivian.medium.com/shopify-web-performance-report-cb240373a6ed"
          />
          <ProjectCard
            projectName="Shop Pay"
            projectImg={shopPayThumbnail}
            projectLink="https://gbvivian.medium.com/shop-pay-login-and-account-recovery-798ac3b971fb"
          />
          <ProjectCard
            projectName="Atomic Loans"
            projectImg={atomicLoansThumbnail}
            projectLink="https://gbvivian.medium.com/atomic-loans-landing-page-c8b7bd1829ac"
          />
          <ProjectCard
            projectName="Dropwatch"
            projectImg={dropWatchSplashScreen}
            projectLink="https://medium.com/@gbvivian/dropwatch-bc799f144292"
          />
          {/* <ProjectCard
            projectName="Google Design Challenge 2020"
            projectImg={designChallengeSplashScreen}
            projectLink="/proj2"
          /> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
