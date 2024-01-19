import React from 'react';

const QuoteProfile = (props) => {
  return (
    <React.Fragment>
      <div className="flex items-center gap-x-5">
        <img className="max-w-[70px]" src={props.quoteImg} alt="Image" />

        <span>
          <p className="text-[#EEEEEE] font-bold">{props.name}</p>
          <div className="text-[#ADADAD]">{props.title}</div>
        </span>
      </div>
    </React.Fragment>
  );
};

export default QuoteProfile;
