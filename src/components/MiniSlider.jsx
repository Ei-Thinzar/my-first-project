import React from "react";

const MiniSlider = () => {
  return (
    <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between gap-5 mt-[-50px] md:mt-[-75px]">
        <div className="relative w-full md:w-1/3 h-[150px] md:h-[200px] rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://i.pinimg.com/736x/44/9f/f9/449ff9a1bf22e349d270a27e53a7e155.jpg"
            alt="flower"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white py-1 px-4 text-center">
            <h1 className="text-xl sm:text-2xl cursor-pointer font-semibold uppercase mb-2">
              bottle brush
            </h1>
            <button
              className="uppercase text-md font-serif rounded-xl text-white text-md px-12
                    py-2 underline underline-offset-8 hover:text-red-600 hover:scale-105 duration-300 cursor-pointer"
            >
              Shop now
            </button>
          </div>
        </div>

        <div className="relative w-full md:w-1/3 h-[150px] md:h-[200px] rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://www.nurserymag.com/remote/aHR0cHM6Ly9naWVjZG4uYmxvYi5jb3JlLndpbmRvd3MubmV0L2ZpbGV1cGxvYWRzL2ltYWdlLzIwMjMvMDIvMTAvcm9zZS1zdG9jay13ZWIuZ2lm.PfyxNP44W5M.gif?format=webp"
            alt="flower"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white py-1 px-4 text-center">
            <h1 className="text-xl sm:text-2xl cursor-pointer font-semibold uppercase mb-2">
              bergamot
            </h1>
            <button
              className="uppercase text-md font-serif rounded-xl text-white text-md px-12
                    py-2 underline underline-offset-8 hover:text-red-600 hover:scale-105 duration-300 cursor-pointer"
            >
              Shop now
            </button>
          </div>
        </div>

        <div className="relative w-full md:w-1/3 h-[150px] md:h-[200px] rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://theflora.in/cdn/shop/articles/pexels-brett-sayles-992734_1.jpg?v=1738243273&width=2048"
            alt="flower"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white py-1 px-4 text-center">
            <h1 className="text-xl sm:text-2xl cursor-pointer font-semibold uppercase mb-2">
              camellats
            </h1>
            <button
              className="uppercase text-md font-serif rounded-xl text-white text-md px-12
                    py-2 underline underline-offset-8 hover:text-red-600 hover:scale-105 duration-300 cursor-pointer"
            >
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniSlider;
