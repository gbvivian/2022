import React from 'react';
import ProjectCard from '../components/ProjectCard';
import atomicLoansThumbnail from '../assets/atomic-loans/thumbnail_atomic_loans.png';
import chimney from '../assets/chimney/thumbnail_chimney.png';
import shopifySplashScreen from '../assets/project1/shopify_splash_screen.png';
import dropWatchSplashScreen from '../assets/project2/dropwatch_splash_screen.png';
import shopPayThumbnail from '../assets/shop-pay/thumbnail_shop_pay.png';
import sonicThumbnail from '../assets/sonic/thumbnail_sonic.png';



// import designChallengeSplashScreen from '../assets/project3/design_challenge_splash_screen.png';

const HomePage = () => {
  return (
    <React.Fragment>
      <div className='flow-root'>
            {/* <div className="text-3xl mt-14">
              Product designer & Developer
            </div> */}

            <div className="text-4xl mt-16 mb-12">
                <b>Hi, I'm Vivian! 🌼</b>
            </div>
                <div className="text-2xl mt-4" style={{ maxWidth: '745px' }}>
                  Currently a designer at <span className="font-semibold">Shopify</span> and <span className="font-semibold">Chimney.ai</span>. In the past, I've worked as a developer at <span className="font-semibold">Shopify</span>, <span className="font-semibold">Motion Metrics</span> and <span className="font-semibold">IA Financial Group</span>.
                </div>

          <div className="grid my-20 grid-flow-col gap-y-24 gap-x-24 grid-cols-1 grid-rows-4 xl:grid-cols-2 xl:grid-rows-2">
            <div>
              <ProjectCard
                projectName="Chimney.ai"
                projectImg={chimney}
                projectLink="https://gbvivian.medium.com/chimney-ai-a1872aa1b8db"
              />
            </div>
            <div>
              <ProjectCard
                projectName="Shopify Web Performance"
                projectImg={sonicThumbnail}
                projectLink="https://gbvivian.medium.com/shopify-web-performance-report-cb240373a6ed"
              />
            </div>

            <div>
              <ProjectCard
                projectName="Shop Pay"
                projectImg={shopPayThumbnail}
                projectLink="https://gbvivian.medium.com/shop-pay-4fb5617a9db5"
              />
            </div>

            <div>
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
