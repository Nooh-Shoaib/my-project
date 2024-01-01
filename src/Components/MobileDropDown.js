import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './DropDownComponents';
import CompanyAccordion from './MobilebarCompany'

const MobileDropDown = () => {
        const [sidenavWidth, setSidenavWidth] = useState(0);

        const openNav = () => {
                setSidenavWidth(250);
        };

        const closeNav = () => {
                setSidenavWidth(0);
        };

        const sidebarStyle = {
                width: sidenavWidth === 0 ? '0' : '100%',
                backgroundImage: "url('https://thecustomwebsites.com/wp-content/uploads/2023/05/form-bg-1.png')",
                backgroundSize: 'cover',
                height: '100vh',
                position: 'fixed',
                zIndex: '1',
                top: '0',
                left: '0',
                overflowX: 'hidden',
                transition: '0.5s',
                color: 'black',
                overflowY: 'auto',
                scrollbarWidth: 'thin',
                scrollbarColor: 'transparent transparent',
        };



        return (
                <div className='bg-white sticky top-0 z-50'>
                        <div className='flex lg:hidden  space-x-36 md:space-x-[570px]   justify-center items-center h-20'>
                                <img src='https://thecustomwebsites.com/wp-content/uploads/2023/04/logo.png' alt='' className='w-28 md:w-36 h-8 md:h-10 ' />
                                <i className="fa-solid fa-bars text-2xl" onClick={openNav}></i>
                        </div>
                        <div id="mySidenav" className="sidenav text-sm" style={{ ...sidebarStyle }}>
                                <div className='bg-white'>
                                        <div className='flex justify-center space-x-28 md:space-x-[510px] py-6'>
                                                <Link to='/'>
                                                        <img src='https://thecustomwebsites.com/wp-content/uploads/2023/04/logo.png' alt='' className='w-52' />
                                                </Link>
                                                <div className=" cross  text-3xl" onClick={closeNav}><i className="fa-solid fa-xmark "></i></div>
                                        </div>
                                        <div className='mt-10 mx-4 leading-[70px]  '>
                                                <Link to="/" className='text-base font-semibold'>Get Free Mockup Now!</Link>
                                                <div className='text-base'><Service /></div>
                                                <Link to="/" className='text-base'>Portfolio</Link>
                                                <div className='text-base'><CompanyAccordion /></div>
                                        </div>
                                        <button className='bg-black py-2 px-9 text-white rounded-md mx-3 my-6 font-bold text-lg'>Get a Free Quote</button>
                                </div>
                        </div>
                </div>
        );
};

export default MobileDropDown;
