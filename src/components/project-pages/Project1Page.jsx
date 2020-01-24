import React from 'react';
import Project1Img from '../../assets/Project1_Img.jpg';
import challenge from '../../assets/project1/challenge.png';
import discount_refactor_demo from '../../assets/project1/discount_refactor_demo.gif';

export default function Project1Page() {
  return (
    <React.Fragment>
      <div className="md:mx-16 md:mt-16">
        <img src={Project1Img} alt="Project" />

        <div className="flex flex-col md:mx-32">
          <p className="text-6xl">Shopify Internship 2020</p>
          <div className="text-4xl">Challenge</div>
          <div className="text-2xl">
            When a user enters a discount code that gives free shipping, the
            information is reflected in the&nbsp;
            <span className="text-2xl font-semibold">
              Order summary section{' '}
            </span>
            <span className="text-2xl">but not the&nbsp;</span>
            <span className="text-2xl font-semibold">Shipping details.</span>
          </div>

          <div className="text-2xl">
            The lack of consistent information may leave the user confused as to
            whether the shipping is free or not, which in turn can affect
            whether they decide to complete their purchase.
          </div>

          <div className="text-2xl">
            Additionally, it is not obvious that the discount code applies to
            the shipping fees.
          </div>

          <div className="text-2xl">
            How might we associate the discount code with the shipping fee, and
            how might we convey consistent information about shipping fees
            across the page?
          </div>

          <div className="text-4xl">Solution</div>
          <img src={discount_refactor_demo} alt="Discount refactor demo" />
        </div>
      </div>
    </React.Fragment>
  );
}
