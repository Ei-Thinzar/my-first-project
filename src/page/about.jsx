import React from "react";
import Navbar from "../components/navbar";
import { BsBagPlusFill } from "react-icons/bs";
import { BsCup } from "react-icons/bs";
import { LuLightbulb } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

const About = () => {
  const icons = [
    {
      icon: <BsBagPlusFill />,
      add: "100+",
      name: "Flower",
    },
    {
      icon: <BsCup />,
      add: "650+",
      name: "Cups of Coffee",
    },
    {
      icon: <LuLightbulb />,
      add: "850+",
      name: "Branding",
    },
    {
      icon: <CgProfile />,
      add: "563+",
      name: "Client",
    },
  ];
  return (
    <div className="max-w-[1140px] mx-auto  px-4 sm:px-6 lg:px-8">
      <Navbar />

      <div className="text-center my-10 sm:my-15">
        <h2 className="text-red-600 text-2xl sm:text-3xl font-bold font-sans py-5">
          About Us
        </h2>
        <p className="font-small text-md">
          We Helps folls love lorem ipsum dolor sit amet.Lorem <br />
          ipsum dolor sit amet, consectetur adipisicing
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-10">
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold font-mono py-5">
            Welcome To SGK <span className="text-red-600">Flower</span> Store
          </h2>
          <p className="text-sm sm:text-base pb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            dicta ipsam cum ut exercitationem quidem ab est voluptatibus nihil
            deleniti quo, enim in nisi nostrum ipsum quam voluptates iusto!
            Quae!. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Numquam dicta ipsam cum ut
          </p>
          <p className="text-sm sm:text-base pb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            dicta ipsam cum ut exercitationem quidem ab est voluptatibus nihil
            deleniti quo, enim in nisi nostrum ipsum quam voluptates iusto!
            Quae!. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Numquam dicta ipsam cum ut
          </p>
          <button className="bg-red-600 rounded-md text-white p-2 px-7 hover:bg-gray-800">
            Shop now!
          </button>
        </div>
        <div className="mt-8 lg:mt-0">
          <img
            src="https://img.freepik.com/premium-photo/dried-flowers-white-vase_1249787-17383.jpg"
            alt=""
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-20 bg-gray-300 w-full p-5 sm:p-0 h-auto sm:h-[200px] items-center justify-items-center gap-y-8 sm:gap-y-0">
        {icons.map((icon, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-4xl sm:text-5xl px-2 sm:px-10 py-3 sm:py-5">
              {icon.icon}
            </div>
            <div className="text-2xl sm:text-3xl text-red-600 font-semibold">
              {icon.add}
            </div>
            <div className="py-1 sm:py-2 text-md sm:text-lg font-mono">
              {icon.name}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2>Team Member</h2>
      </div>
    </div>
  );
};

export default About;
