import React from 'react';

const GradientText = (props) => {
  return (
    <React.Fragment>
      <span
        className="
                    bg-gradient-to-r from-purple-500 to-indigo-500
                    inline-block
                    bg-clip-text
                    text-transparent"
      >
        {props.t}
      </span>
    </React.Fragment>
  );
};

export default GradientText;
