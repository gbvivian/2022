import React from 'react';

const BoldText = (props) => {
  return (
    <React.Fragment>
      <span className="font-semibold">{props.t}</span>
    </React.Fragment>
  );
};

export default BoldText;
