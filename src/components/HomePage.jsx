import React from 'react';
import ProjectCard from '../components/ProjectCard';
import QuoteProfile from './Quote';
import atomicLoansThumbnail from '../assets/atomic-loans/2024_Atomic_Finance_Thumbnail.png';
import chimneyThumbnail from '../assets/chimney/2024_Chimney_Thumbnail.png';
import shopPayThumbnail from '../assets/shop-pay/2024_Shop_Pay_Thumbnail.png';
import shopifyBulkEditorThumbnail from '../assets/shopify-bulk-editor/2024_BE_Shopify_thumbnail.png';
import sonicThumbnail from '../assets/sonic/2024_Web_Performance_Thumbnail.png';

import dt from '../assets/quotes/dt.png';
import rs from '../assets/quotes/rs.png';
import cm from '../assets/quotes/cm.png';

import DTQuote from './DTQuote';

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="flow-root">
        {/* <div className="text-3xl mt-14">
              Product designer & Developer
            </div> */}
        {/* 30px */}
        <div className="font-bold text-3xl mt-16">VIVIAN LAM</div>

        {/* 20px */}
        <div
          className="text-zinc-400 text-xl mt-4"
          style={{ maxWidth: '745px' }}
        >
          Currently a designer at <span className="font-semibold">Shopify</span>{' '}
          and <span className="font-semibold">Chimney.ai</span>. In the past,
          I've worked as a developer at{' '}
          <span className="bold-text">Shopify</span>,{' '}
          <span className="font-semibold">Motion Metrics</span> and{' '}
          <span className="font-semibold">IA Financial Group</span>.
        </div>

        <div className="font-bold text-2xl mt-16">WORK</div>
        {/* <div className="grid my-20 grid-flow-col gap-y-24 gap-x-24 grid-cols-1 grid-rows-4 xl:grid-cols-2 xl:grid-rows-2"> */}

        <div
          className="grid
                          mt-5
                          xl:grid-cols-3 gap-x-8 gap-y-2
                          md:grid-cols-2 gap-8"
        >
          <div>
            <ProjectCard projectImg={shopifyBulkEditorThumbnail} />
          </div>
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

        {/* QUOTES */}
        <div className="font-bold text-2xl mt-16">OTHERS HAVE SAID</div>

        <div
          className="grid
                          mt-5
                          xl:grid-cols-3 gap-x-8 gap-y-2
                          md:grid-cols-2 gap-8"
        >
          {/* QUOTE 1 */}
          <div>
            <div>
              <QuoteProfile
                quoteImg={dt}
                name={'Dan Tristan'}
                title={'Staff Product Designer, Shopify'}
              />
            </div>
            <DTQuote />
          </div>

          {/* QUOTE 2 */}
          <div>
            <div>
              <QuoteProfile
                quoteImg={rs}
                name={'Rafael Schulman'}
                title={'Senior Data Scientist, Shopify'}
              />
            </div>

            <div className="mt-6 text-[#C6C6C6]">
              I had the pleasure on working with Vivian on numerous projects.
              <div className="mt-6">
                She is an{' '}
                <span className="font-semibold">
                  incredibly effective collaborator-
                </span>
                <span className="font-semibold">
                  she is highly communicative, very detail oriented,{' '}
                </span>{' '}
                and produces the highest quality work.
              </div>
              <div className="mt-6">
                On numerous occasions,{' '}
                <span className="font-semibold">
                  she encountered roadblocks{' '}
                </span>
                and was able to{' '}
                <span className="font-semibold">
                  solution around those hurdles.
                </span>
              </div>
            </div>
          </div>

          {/* QUOTE 3 */}
          <div>
            <div>
              <QuoteProfile
                quoteImg={cm}
                name={'Chris Muratis'}
                title={'UX Manager, Shopify'}
              />
            </div>

            <div className="mt-6 text-[#C6C6C6]">
              <div className="mt-6">
                Vivian possesses a multitude of talents in her UX toolkit, from{' '}
                <span className="font-semibold">
                  research and prototyping to moderating and beyond.
                </span>
              </div>
              <div className="mt-6">
                She is a
                <span className="font-semibold">multi-faceted designer</span>{' '}
                who will undoubtedly bring instant value to any team lucky
                enough to have her on board.
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
