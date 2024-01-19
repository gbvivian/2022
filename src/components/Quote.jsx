import React from 'react';

const QuoteProfile = (props) => {
  return (
    <React.Fragment>
      <img className="float-left" src={props.quoteImg} alt="Image" />

      <span className="inline-block align-bottom">
        <p className="font-bold">{props.name}</p>
      </span>

      <div>{props.title}</div>
    </React.Fragment>
  );
};

export default QuoteProfile;
