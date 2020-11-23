import React from 'react';
import Project1Img from '../../assets/Project1_Img.jpg';
import homepage from '../../assets/project2/home_page.png';
import lockscreen from '../../assets/project2/notif_lockscreen.png';
import productPage from '../../assets/project2/product_feature.png';

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
          {/* add spacing */}
          <div className="text-2xl mb-8">
            Currently, merchants - the sellers of the stores, can send out
            newsletters to let their email list know when they drop sales.
          </div>
          {/* add spacing */}
          <div className="text-4xl font-semibold">However</div>
          {/* add bullet */}
          <div className="text-2xl mb-8">
            Merchants are busy people and don't always have the bandwidth to
            write and send out newsletters.
          </div>
          {/* add bullet */}
          <div className="text-2xl mb-8">
            Newsletters are often lost amidst other emails, and hence, are
            frequently unread. This causes customers to miss out on times when
            their desired products are on sale.
          </div>
          <div className="text-2xl mb-8">
            The only way for customers to snag these sales is to:
          </div>
          {/* add spacing */}
          <div className="text-2xl mb-8">a) Check their email often</div>
          {/* add spacing */}
          <div className="text-2xl mb-8">
            b) Frequently visit their favourite store's pages and check if the
            products they want are on sale yet
          </div>
          {/* add spacing */}
          <div className="text-2xl mb-8 mb-8">
            This can be a frustrating experience - to have to check multiple
            stores at once - and to find that things are always sold out by the
            time they learn about the sale.
          </div>
          <div className="text-4xl font-semibold">Goals</div>
          <div className="text-2xl mb-8 mb-8">
            1. Enable customers to keep up with their products at the prices
            they want.
          </div>
          <div className="text-2xl mb-8 mb-8">
            2. Create a channel for merchants to automate notifying their
            customers on when they drop sales
          </div>
          <div className="text-2xl mb-8 mb-8">
            3. Help customers discover other Shopify stores and sales happening
            in other stores
          </div>
          {/* bold */}
          <div className="text-4xl font-semibold">Solution</div>
          <div className="text-2xl mb-8 mb-8">
            Given that a lot of online stores are run by Shopify, and that users
            generally shop at more than one store, I decided to make a mobile
            app that allows users to visit all Shopify stores within one portal.
          </div>
          <div className="text-2xl mb-8 mb-8">
            It would be great if, at a single place, a user can be notified of
            all the sales going on at all their favourite stores ASAP.
          </div>
          <span className="mb-8">
            <img
              className="inline-block"
              src={homepage}
              alt="Discount refactor demo"
              height="109"
              width="263"
            />
            <img
              className="inline-block"
              src={lockscreen}
              alt="Discount refactor demo"
              height="109"
              width="263"
            />

            <img
              className="inline-block"
              src={productPage}
              alt="Discount refactor demo"
              height="109"
              width="263"
            />
          </span>
          <div className="text-2xl mb-8">
            Users of Dropwatch can browse all of their favourite stores and more
            ofrom the comfort of a single app.
          </div>
          <div className="text-2xl mb-8">
            At product pages, users can either choose to add the product to
            their cart, or they can&nbsp;
            <span className="font-semibold">
              add the product to their drop list
            </span>
            and <span className="font-semibold">get a push notification </span>
            for when the product's price drops.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
