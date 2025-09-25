import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FeatureProduct = () => {
    const settings = {
        infinite:true,
        speed:500,
        slidesToShow:4,
        slidesToScroll:1,
        autoPlay:true,
        autoPlaySpeed:2000,
        nextArrow:<CustomArrow direction="next"/>,
        prevArrow:<CustomArrow direction="prev"/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true, 
                    arrows: false,
                }
            }
        ]
    }

    const featuredProductData = [
        {
            id: 1,
            img: 'https://images.woodenstreet.de/image/cache/data/China+Lights/Plant/WSARTIFICIAL-76764/Looks/1-750x650.jpg',
            name: 'Tulip',
            price: 1500
        },
        {
            id: 2,
            img: 'https://img.joomcdn.net/05b21a89b3a6b2d9720cf8c45e4e51655089bae0_original.jpeg',
            name: 'Tiger Lilies',
            price: 1500
        },
        {
            id: 3,
            img: 'https://thefauxflowercompany.com/cdn/shop/files/artificial-flowers-luxury-lifelike-faux-artificial-foliage-fantastic-arrangement-realistic-silk-bouquet-buy-online-from-the-faux-flower-company-1154934215.jpg?v=1745962037',
            name: 'Artificial',
            price: 1500
        },
        {
            id: 4,
            img: 'https://img.freepik.com/premium-photo/flower-yellow-matthiola-little-glass-vase-pink-table_90258-3745.jpg',
            name: 'Yellow Matthiola',
            price: 1500
        },
        {
            id: 5,
            img: 'https://qareenaymanzil.com/cdn/shop/files/IMG_3830.jpg?v=1738663595',
            name: 'Pink Rose',
            price: 1500
        },
        {
            id: 6,
            img: 'https://assets.ajio.com/medias/sys_master/root/20230628/ht5I/649bf4a7a9b42d15c90f2684/-473Wx593H-465855774-white-MODEL.jpg',
            name: 'Honeysuckle Resin',
            price: 1500
        },
    ]
  return (
    <div className='bg-white py-8'>
        <div className='max-w-[1140px] mx-auto py-6 px-4 sm:px-6 lg:px-8'>
            <h1 className='font-sans text-2xl md:text-3xl font-bold py-4 text-black'>Hot Flower</h1>
            <Slider {...settings} className='w-full'>
                {featuredProductData.map((data) => (
                    <div key={data.id} className='px-2'>
                        <div className='bg-white text-black rounded-lg flex flex-col items-center shadow-md overflow-hidden'>
                            <div className='w-full h-[250px] flex items-center justify-center overflow-hidden'>
                                <img src={data.img} alt="" className='w-full h-full object-cover rounded-t-lg hover:scale-105 transition-all duration-300 hover:cursor-pointer'/>
                            </div>
                            <div className='flex flex-col items-center text-center p-4'>
                                <h1 className='text-lg cursor-pointer font-semibold mb-2 hover:underline hover:underline-offset-4 hover:text-red-600'>{data.name}</h1>
                                <p className='text-xl font-bold text-gray-800'>{data.price}</p>
                            </div>
                        </div>
                    </div>
                )
                )}
            </Slider>
        </div>

    </div>
  )
}

const CustomArrow = ({direction, onClick})=>{
    return(
        <div onClick={onClick}
        className={`absolute z-10 cursor-pointer text-white bg-black
        p-2 py-2 rounded-md shadow-lg top-[-50px] ${direction === "next" ? "right-6" : "right-20"}`}
        style={{fontSize:"20px"}}>
            {direction === "next" ? ">" : "<"}
        </div>
    )
}
export default FeatureProduct