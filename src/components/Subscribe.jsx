import React from "react";

const Subscribe = () => {
  return (
    <div className="mt-20 max-w-[1140px] mx-auto py-1 relative">
      <div className="relative">
        <img
          src="https://img.freepik.com/premium-photo/vibrant-purple-flowers-glowing-soft-light-with-sparkling-particles-drifting-around-dreamy-background_163305-338202.jpg"
          alt="flower background"
          className="w-full object-cover rounded-lg"
        />
      </div>
      <div className="absolute inset-0 rounded-lg"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white py-1 px-4 text-center">
        <h1 className="text-2xl font-medium font-mono">New Year Offer</h1>
        <p className="text-3xl font-mono py-8  line-clamp-4 leading-6">
          Fresh flower for any special occasion
        </p>
        <button
          className="uppercase text-md font-serif rounded-xl text-white border text-md-center px-12 py-2
            hover:text-red-700 hover:scale-105 duration-300 cursor-pointer"
        >
          discover now
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
