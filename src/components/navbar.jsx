import {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaCartArrowDown, FaUser, FaTimes, FaBars} from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItem = [
        {
            label : 'Home',
            path : '/'
        },
        {
            label : 'About',
            path : '/About'
        },
        {
            label : 'Contact',
            path : '/Contact'
        },
        {
            label : 'Review',
            path : '/Review'
        },
        {
            label : 'Login',
            path : '/Login'
        },
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <>
        <div className='bg-slate-200 text-black shadow-md'>
            <div className='max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center text-black py-4'>
                    <h1 className='text-2xl font-serif font-semibold py-2 cursor-pointer z-50'>
                        FLOWER <span className='text-red-500'>Shop</span></h1>
                    <nav className='hidden md:flex justify-around gap-7'>{
                        navItem.map((nav) => (
                            <Link 
                                to = {nav.path}
                                key = {nav.path}
                                className='font-medium cursor-pointer font-serif text-lg hover:text-red-600 hover:mt-[-5px] transition-all duration-300 '>

                                {nav.label}</Link>

                        ))}
                    </nav>
                    <div className='flex justify-around items-center gap-4'>
                        <FaHeart size={20} className='text-xl hover:text-red-600 cursor-pointer transition-all duration-300'/>
                        <FaCartArrowDown size={20} className='text-xl hover:text-red-600 cursor-pointer transition-all duration-300'/>
                        <FaUser size={20} className='text-xl hover:text-red-600 cursor-pointer transition-all duration-300'/>

                        <div className='md:hidden ml-4'>
                            <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar