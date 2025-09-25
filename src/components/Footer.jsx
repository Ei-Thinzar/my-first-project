import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='bg-sky-100'>
            <div className='max-w-[1140px] mx-auto py-8'>
                <div className='flex justify-between items-center gap-5'>
                    <div className='flex flex-col justify-center gap-1'>
                        <h1 className='text-xl font-sans font-semibold cursor-pointer text-black py-5'>About Us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}<br/>
                            Laudantium doloremque asperiores,commodi iure optio.
                        </p>
                        <br />

                        <p className='text-md py-2 cursor-pointer text-mono font-light'>Address: 123 Main Street,12345 - Mdy</p>
                        <p className='text-md py-2 cursor-pointer text-mono font-light'>Telephone: 09 - 123 456 789</p>
                        <p className='text-md py-2 cursor-pointer text-mono font-light'>Email: youremail@gmail.com</p>

                    </div>

                    <div className='flex flex-col justify-center'>
                        <h1 className='text-xl font-sans font-semibold cursor-pointer text-black py-4'>Information</h1>
                        <ul className='flex flex-col gap-5'>
                            <li className='font-medium cursor-pointer font-serif text-lg transition-all duration-300 hover:text-red-600'>About Us</li>
                            <li className='font-medium cursor-pointer font-serif text-lg transition-all duration-300 hover:text-red-600'>Delivery Information</li>
                            <li className='font-medium cursor-pointer font-serif text-lg transition-all duration-300 hover:text-red-600'>Privacy & Conditions</li>
                            <li className='font-medium cursor-pointer font-serif text-lg transition-all duration-300 hover:text-red-600'>Customer Service</li>
                            <li className='font-medium cursor-pointer font-serif text-lg transition-all duration-300 hover:text-red-600'>Return Policy</li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-xl font-sans font-semibold cursor-pointer text-black py-4'>My Account</h1>
                        <ul className='flex flex-col gap-5'>
                            <li className='font-medium cursor-pointer font-serif text-lg transition-all duration-300 hover:text-red-600'>Account History</li>
                            <li className='font-medium cursor-pointer font-serif text-lg transition-all duration-300 hover:text-red-600'>Order History</li>
                            <li className='font-medium cursor-pointer font-serif text-lg transition-all duration-300 hover:text-red-600'>WishList</li>
                            <li className='font-medium cursor-pointer font-serif text-lg transition-all duration-300 hover:text-red-600'>NewsLetter</li>
                            <li className='font-medium cursor-pointer font-serif text-lg transition-all duration-300 hover:text-red-600'>Order List</li>
                            <li className='font-medium cursor-pointer font-serif text-lg transition-all duration-300 hover:text-red-600'>International Orders</li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-center gap-[45px]'>
                        <h1 className='text-xl font-sans font-semibold cursor-pointer text-black py-4'>Join Our NewsLetter Now</h1>
                        <p className='text-md text-black cursor-pointer text-mono font-light'>Get E-mail update about our latest shop and epical</p>
                        <input type="text" className='text-md text-black cursor-pointer text-mono font-light overscroll-none border-b-2 h-[40px] border-slate-100 bg-slate-100 outline-none'/>
                        <div className='flex justify-start'>
                            <button className='text-white bg-red-600 cursor-pointer px-10 rounded-md py-2 hover:bg-sky-800'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center py-2'>
            <p className='text-md font-mono font-light'>&copy;CopyRight by ProjectWithSGK.Design By SGK</p>
        </div>
    </div>
  )
}

export default Footer