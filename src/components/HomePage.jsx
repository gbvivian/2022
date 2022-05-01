import React from 'react';
import ProjectCard from '../components/ProjectCard';
import atomicLoansThumbnail from '../assets/atomic-loans/thumbnail_atomic_loans.png';
import chimney from '../assets/chimney/thumbnail_chimney.png';
import shopifySplashScreen from '../assets/project1/shopify_splash_screen.png';
import dropWatchSplashScreen from '../assets/project2/dropwatch_splash_screen.png';
import sonicThumbnail from '../assets/sonic/thumbnail_sonic.png';
import shopPayThumbnail from '../assets/shop-pay/thumbnail_shop_pay.png';


// import designChallengeSplashScreen from '../assets/project3/design_challenge_splash_screen.png';

const HomePage = () => {
  return (
    <React.Fragment>
      <div className='flow-root'>
          <div className="flex mx-40 mt-20">
            <div className="text-2xl">
                Hi! My name is Vivian🌻 I'm a product designer who loves to ideate and develop for all audiences. I study Cognitive
              Systems and Computer Science at UBC.
            </div>
          </div>

          <div className="flex mx-40 mt-20 ">
            <div className="w-1/2 mr-16">
              <ProjectCard
                projectName="Chimney.ai"
                projectImg={chimney}
                projectLink="https://gbvivian.medium.com/chimney-ai-a1872aa1b8db"
              />
            </div>

            <div className="w-1/2">
              <ProjectCard
                projectName="Shopify Web Performance"
                projectImg={sonicThumbnail}
                projectLink="https://gbvivian.medium.com/shopify-web-performance-report-cb240373a6ed"
              />
            </div>
          </div>

          <div className="flex mx-40 mt-20">
            <div className="w-1/2 mr-16">
              <ProjectCard
                projectName="Shop Pay"
                projectImg={shopPayThumbnail}
                projectLink="https://gbvivian.medium.com/shop-pay-4fb5617a9db5"
              />
            </div>

            <div className="w-1/2">
              <ProjectCard
                projectName="Atomic Loans"
                projectImg={atomicLoansThumbnail}
                projectLink="https://gbvivian.medium.com/atomic-loans-landing-page-c8b7bd1829ac"
              />
            </div>
         </div>
        </div>
    </React.Fragment>
  );
};

export default HomePage;
