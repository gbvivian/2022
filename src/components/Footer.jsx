import React from 'react';

const Footer = (props) => {
  return (
    <React.Fragment>
      {/* BANNER STYLE */}
      {/* <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3">
        <div className="font-bold text-center text-xl">Let's chat</div>
        <div className="text-center text-xl">gbvivianlam@gmail.com</div>
      </div> */}

      {/* Gradient line */}
      <span>
        {/* Let's chat */}
        <div className="font-bold text-center text-xl mt-12">Let's chat</div>

        {/* Gradient text */}
        <div className="flex justify-center">
          <div
            className="text-xl
                    bg-gradient-to-r from-purple-500 to-indigo-500
                    inline-block
                    bg-clip-text
                    text-transparent"
          >
            gbvivianlam@gmail.com
          </div>
        </div>

        <div
          className="text-xl
                    bg-gradient-to-r from-purple-500 to-indigo-500
                    w-full
                    h-[0.8px]
                    mt-12
                    "
        ></div>
      </span>
    </React.Fragment>
  );
};

export default Footer;
