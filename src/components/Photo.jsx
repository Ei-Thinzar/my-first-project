import React from "react";
import { GiFlowerPot } from "react-icons/gi";

const Photo = () => {
  return (
    <div className="">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex flex-col md:flex-row justify-around gap-5">
          <div className="w-full md:w-1/2 flex justify-center ">
            <img
              src="https://t3.ftcdn.net/jpg/01/90/10/82/360_F_190108212_k9ZpAbBkA5O4Wij5ecoRdHuXhate40Ke.jpg"
              alt="Woman holding flowers"
              className="rounded-md cursor-pointer hover:scale-105 duration-300"
            />
          </div>
          <div className="flex flex-col gap-5 py-2 justify-center items-center text-black ">
            <GiFlowerPot size={80} className="text-black" />
            <p className="text-md font-sans cursor-pointer font-small">
              When a beautifuk design is combined with powerfull technology.It
              truly is an artwork.I lover how my website operates and looks with
              this theme.
              <br />
              Thanks you for the awesome product
            </p>
            <h1 className="text-center text-xl font-mono cursor-pointer font-medium">
              Samia Robiul Islam
            </h1>
            <button
              className="px-4 py-1 cursor-pointer uppercase border-2 border-solid
                     border-black rounded-md hover:text-white hover:bg-slate-300"
            >
              more offers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
