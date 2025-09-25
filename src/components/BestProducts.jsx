import React from 'react'

const BestProducts = () => {
  return (
    <div className='py-8 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold py-8 font-serif text-black'>Best Selling Products</h1>
        <div>
          <div className='flex flex-col lg:flex-row items-center justify-center gap-8'>
            <div className='w-full lg:w-1/2 flex justify-center'>
              <img src='https://img.freepik.com/premium-photo/basket-pink-tulips-with-pink-ribbon-tied-around-it_786255-13093.jpg' alt="flower basket" 
              className='max-h-[400px] max-w-full object-contain rounded-lg shadow-lg'/>
            </div>
            <div className='w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0'>
              <img src="https://thumbs.dreamstime.com/b/hurry-up-154424269.jpg" alt="hurry up text" 
              className='mmx-auto lg:mx-0 h-[150px] sm:h-[200px] object-contain mb-4'/>
              <h1 className='text-3xl font-extrabold text-pink-600 mb-4'>
                Hot Deal ! Sale Up To <span className='text-red-700'>20% Off</span>
              </h1>
              <p className='text-gray-700 leading-relaxed mb-6 px-4 lg:px-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, et molestias quo ea explicabo deserunt itaque obcaecati similique
                sit at.
              </p>
              <div className='flex justify-center lg:justify-start gap-4 sm:gap-8 mt-6 '>
                <div className='bg-pink-100 border border-pink-300 py-3 px-2 w-20 rounded-lg shadow-sm text-center cursor-pointer'>
                  <h2 className='text-3xl font-bold text-pink-700 mb-1'>0</h2>
                  <div></div>
                  <p className='text-sm text-gray-600'>Days</p>
                </div>
                <div className='bg-pink-100 border border-pink-300 py-3 px-2 w-20 rounded-lg shadow-sm text-center cursor-pointer'>
                  <h2 className='text-3xl font-bold text-pink-700 mb-1'>0</h2>
                  <div></div>
                  <p className='text-sm text-gray-600'>Hour</p>
                </div>
                <div className='bg-pink-100 border border-pink-300 py-3 px-2 w-20 rounded-lg shadow-sm text-center cursor-pointer'>
                  <h2 className='text-3xl font-bold text-pink-700 mb-1'>0</h2>
                  <div></div>
                  <p className='text-sm text-gray-600'>Min</p>
                </div>
                <div className='bg-pink-100 border border-pink-300 py-3 px-2 w-20 rounded-lg shadow-sm text-center cursor-pointer'>
                  <h2 className='text-3xl font-bold text-pink-700 mb-1'>0</h2>
                  <div></div>
                  <p className='text-sm text-gray-600'>Sec</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default BestProducts