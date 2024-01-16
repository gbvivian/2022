import React from 'react';
import ProjectCard from '../components/ProjectCard';
import atomicLoansThumbnail from '../assets/atomic-loans/2024_Atomic_Finance_Thumbnail.png';
import chimneyThumbnail from '../assets/chimney/2024_Chimney_Thumbnail.png';
import shopPayThumbnail from '../assets/shop-pay/2024_Shop_Pay_Thumbnail.png';
import sonicThumbnail from '../assets/sonic/2024_Web_Performance_Thumbnail.png';

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="flow-root">
        {/* <div className="text-3xl mt-14">
              Product designer & Developer
            </div> */}

        <div className="text-4xl mt-16 mb-12">
          <b>Hi, my name is Vivian! 🌼</b>
        </div>
        <div className="text-2xl mt-4" style={{ maxWidth: '745px' }}>
          Currently a designer at <span className="font-semibold">Shopify</span>{' '}
          and <span className="font-semibold">Chimney.ai</span>. In the past,
          I've worked as a developer at{' '}
          <span className="font-semibold">Shopify</span>,{' '}
          <span className="font-semibold">Motion Metrics</span> and{' '}
          <span className="font-semibold">IA Financial Group</span>.
        </div>
        <div className="text-4xl mt-16 mb-12">
          <b>Work</b>
        </div>
        {/* <div className="grid my-20 grid-flow-col gap-y-24 gap-x-24 grid-cols-1 grid-rows-4 xl:grid-cols-2 xl:grid-rows-2"> */}
        <div className="grid grid-cols-4 gap-4">
          <div>
            <ProjectCard
              projectImg={chimneyThumbnail}
              projectLink="https://gbvivian.medium.com/chimney-ai-a1872aa1b8db"
            />
          </div>
          <div>
            <ProjectCard
              projectImg={sonicThumbnail}
              projectLink="https://gbvivian.medium.com/shopify-web-performance-report-cb240373a6ed"
            />
          </div>

          <div>
            <ProjectCard
              projectImg={shopPayThumbnail}
              projectLink="https://gbvivian.medium.com/shop-pay-4fb5617a9db5"
            />
          </div>

          <div>
            <ProjectCard
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
