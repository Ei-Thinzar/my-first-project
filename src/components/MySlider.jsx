import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MySlider = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    dots: false,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
  };

  const data = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/44/9f/f9/449ff9a1bf22e349d270a27e53a7e155.jpg",
    },
    {
      id: 2,
      img: "https://www.nurserymag.com/remote/aHR0cHM6Ly9naWVjZG4uYmxvYi5jb3JlLndpbmRvd3MubmV0L2ZpbGV1cGxvYWRzL2ltYWdlLzIwMjMvMDIvMTAvcm9zZS1zdG9jay13ZWIuZ2lm.PfyxNP44W5M.gif?format=webp",
    },
    {
      id: 3,
      img: "https://theflora.in/cdn/shop/articles/pexels-brett-sayles-992734_1.jpg?v=1738243273&width=2048",
    },
  ];
  return (
    <div className="bg-pink-300 h-[550px] w-full flex justify-center items-center">
      <div className="max-w-[1140px]">
        <Slider {...settings}>
          {data.map((data) => (
            <div key={data.id} className="flex justify-center items-center">
              <img
                src={data.img}
                alt="flower"
                className="w-[1140px] h-[550px] object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
const CustomArrow = ({ direction, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`absolute top-[250px] z-10 cursor-pointer text-black bg-white
        p-3 rounded-md ${direction === "next" ? "right-4" : "left-4"}`}
      style={{ fontSize: "20px" }}
    >
      {direction === "next" ? ">" : "<"}
    </div>
  );
};

export default MySlider;
