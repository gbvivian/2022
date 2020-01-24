import React from 'react';
import Project1Img from '../../assets/Project1_Img.jpg';

export default function Project2Page() {
  return (
    <React.Fragment>
      <div className="md:mx-16 md:mt-16">
        <img src={Project1Img} alt="Project" />

        <div className="flex flex-col md:mx-64">
          <p className="text-6xl">Dropwatch</p>

          {/* bold */}
          <div className="text-4xl font-semibold">Problem</div>
          <div className="text-2xl mb-8">
            1. Customers who are loyal to certain Shopify stores want to
            know&nbsp;
            <span className="font-semibold">
              when products on their wishlist go on sale.
            </span>
          </div>

          <div className="text-2xl mb-8">
            2. There are a lot of Shopify stores that people don't know about.
          </div>

          {/* add spacing */}
          <div className="text-2xl mb-8">
            Currently, merchants - the sellers of the stores, can send out
            newsletters to let their email list know when sales are going on.
          </div>

          {/* add spacing */}
          <div className="text-4xl font-semibold">However</div>

          {/* add bullet */}
          <div className="text-2xl mb-8">
            Merchants are busy people and don't always have the bandwidth to
            write and send out newsletters
          </div>

          {/* add bullet */}
          <div className="text-2xl mb-8">
            Newsletters are often lost amidst other emails, and hence, are
            frequently unread. This causes customers to miss out on times when
            their favourite or desired product is on sale
          </div>

          {/* add spacing */}
          <div className="text-2xl mb-8">
            Given that a lot of online stores are run by Shopify, and that users
            generally shop at more than one store, I decided to make a mobile
            app that allows users to visit all Shopify stores within one portal.
          </div>

          {/* add spacing */}
          <div className="text-2xl mb-8">
            It would be great if, at a single place, a user can be notified of
            all the sales going on at their favourite stores.{' '}
          </div>

          {/* add spacing */}
          <div className="text-2xl mb-8 mb-8">
            What would be even better is if a user can be notified when products
            they want go on sale.
          </div>

          {/* bold */}
          <div className="text-4xl font-semibold">Solution</div>

          <div className="text-2xl mb-8">
            Users of Dropwatch can browse all of their favourite stores (and
            more) from the comfort of a single app. At product pages, users can
            either choose to add the product to their cart, or they can add the
            product to their drop list and get a push notification for when the
            product's price drops.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
