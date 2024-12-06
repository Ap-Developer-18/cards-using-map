"use client"
import Image from 'next/image'
import logo from '../../../public/assets/images/png/logo.png';
import profile from '../../../public/assets/images/png/profile-header.jpg';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [navClick, setNavClick] = useState(true);
    function navbarHandler() {
        setNavClick(!navClick); // Corrected toggling of navClick state
    }
    return (
        <nav className='py-4 rounded-[50px] flex items-center justify-between container max-w-[1320px] w-full'>
            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center gap-1 xl:gap-14'>
                    <a href="#"> {/* Removed the invalid 'as="style"' */}
                        <Image src={logo} width={215} height={50.73} className='max-md:w-[138px] max-lg:w-[168px] lg:pr-6 xl:border-r xl:border-dark' alt='logo' priority />
                    </a>
                    <div className='max-w-[236px] w-full h-[44px] lg:h-12 bg-dark rounded-3xl flex items-center gap-2 px-3 max-lg:hidden'>
                        <i className="fa fa-search text-dark-light font-extrabold" aria-hidden="true"></i>
                        <input type="search" name='search' className='text-sm leading-150 placeholder:text-dark-light text-dark-light bg-transparent outline-none border-none' placeholder='Type Something' />
                    </div>
                </div>
                <div className='flex items-center gap-8'>
                    <div className={`flex items-center gap-6 md:gap-10 max-md:flex-col max-lg:fixed max-lg:left-0 max-lg:h-[100vh] max-lg:w-full max-lg:justify-center max-lg:bg-[#2929297d] max-lg:backdrop-blur-[9px] duration-[300ms] ${navClick ? 'max-lg:-top-[100vh]' : 'max-lg:top-0'}`}>
                        <Link href='#Home' className='text-sm leading-150 text-dark-light'>Home</Link>
                        <Link href='#Home' className='text-sm leading-150 text-dark-light'>Browse</Link>
                        <Link href='#Home' className='text-sm leading-150 text-dark-light'>Details</Link>
                        <Link href='#Home' className='text-sm leading-150 text-dark-light'>About us</Link>
                        <div className='max-w-[213px] w-full h-[44px] lg:h-12 bg-dark rounded-3xl flex items-center gap-2 px-3 lg:hidden'>
                            <i className="fa fa-search text-dark-light font-extrabold" aria-hidden="true"></i>
                            <input type="search" name='search' className='text-sm leading-150 placeholder:text-dark-light text-dark-light bg-transparent outline-none border-none' placeholder='Type Something' />
                        </div>
                        <div className='px-3 py-[7px] lg:py-[10px] bg-dark flex items-center gap-5 rounded-3xl md:hidden'>
                            <span className='text-dark-light text-sm leading-150'>Check Profile Here ...</span>
                            <Image src={profile} width={30} height={30} className='size-[30px] rounded-full' alt='profile' priority />
                        </div>
                    </div>
                    <div
                        className='lg:hidden w-9 h-8 flex flex-col items-center justify-center gap-2 z-30'
                        onClick={navbarHandler}>
                        <span
                            className={`w-full h-[3px] bg-white transition-transform duration-300 ${navClick ? '' : 'rotate-45 translate-y-2'}`}></span>
                        <span className={`w-9/12 h-[3px] bg-white transition-opacity duration-300 ${navClick ? 'opacity-100' : 'opacity-0'}`}
                        ></span>
                        <span
                            className={`w-full h-[3px] bg-white transition-transform duration-300 ${navClick ? '' : '-rotate-45 -translate-y-2'}`}></span>
                    </div>
                    <div className='px-3 py-[7px] lg:py-[10px] bg-dark flex items-center gap-3 rounded-3xl max-md:hidden'>
                        <span className='text-dark-light text-sm leading-150'>Profile</span>
                        <Image src={profile} width={30} height={30} className='size-[30px] rounded-full' alt='profile' priority />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar