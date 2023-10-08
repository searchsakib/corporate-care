import React from 'react';

const Coupon = () => {
  return (
    <div className="bg-gray-100 py-20 flex items-center justify-center px-6 md:px-0 lg:px-0">
      <div className=" bg-white py-[72px] rounded-lg shadow-lg text-center px-6 md:px-12 lg:px-12">
        <h2 className="text-4xl font-extrabold mb-8">
          Exclusive Offer for Registered Users
        </h2>
        <div>
          <p className="text-2xl text-gray-700 mb-6 font-sans">
            Welcome to the Savings Celebration!
          </p>
          <p className="text-3xl  mb-8">
            Enjoy <span className="font-bold text-blue-600">25% discount</span>{' '}
            on your Event Booking!
          </p>
          {/* Display coupon code */}
          <div className="bg-blue-600 text-white py-4 px-8 rounded-lg text-3xl mb-6 font-light">
            Your Coupon Code: <span className="font-semibold">COUPON25</span>
          </div>
          <p className="text-gray-600 text-xl">
            Use this coupon code during checkout to apply the discount.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
