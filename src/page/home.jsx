import React from "react";
import Navbar from "../components/navbar.jsx";
import MySlider from "../components/MySlider.jsx";
import MiniSlider from "../components/MiniSlider.jsx";
import FeatureProduct from "../components/FeatureProduct.jsx";
import Photo from "../components/Photo.jsx";
import Subscribe from "../components/Subscribe.jsx";
import BestProducts from "../components/BestProducts.jsx";
import HotFlower from "../components/HotFlower.jsx";
import Location from "../components/Location.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <MySlider />
        <MiniSlider />
        <FeatureProduct />
        <Photo />
        <BestProducts />
        <HotFlower />
        <Subscribe />
        <Location />
        <Footer />
      </div>
    </>
  );
};

export default Home;
