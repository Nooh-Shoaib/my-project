import React, { useState } from 'react';
import HamServices from './HamServices';
import HamCompany from './HamCompany';
import { Link } from 'react-router-dom';

const SidebarMenu = () => {
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
                // paddingTop: '60px',
                color: 'black',
        };

        return (
                <>
                        <div className='flex lg:hidden space-x-36  justify-center items-center h-20'>
                                <img src='https://thecustomwebsites.com/wp-content/uploads/2023/04/logo.png' alt='' className='w-28 h-8 ' />
                                <i className="fa-solid fa-bars text-2xl" onClick={openNav}></i>
                        </div>
                        <div id="mySidenav" className="sidenav text-sm" style={sidebarStyle}>
                                <div className='bg-white'>
                                        <div className='flex justify-center space-x-28 py-3'>
                                                <Link to='/'>
                                                        <img src='https://thecustomwebsites.com/wp-content/uploads/2023/04/logo.png' alt='' className='w-40' />
                                                </Link>
                                                <Link to="javascript:void(0)" className=" cross  text-2xl" onClick={closeNav}><i className="fa-solid fa-xmark "></i></Link>
                                        </div>
                                        <div className='mt-10 mx-4 leading-[70px]  '>
                                                <Link to="#" className='text-base font-semibold'>Get Free Mockup Now!</Link>
                                                <div className='text-base'><HamServices /></div>
                                                <Link to="#" className='text-base'>Portfolio</Link>
                                                <div className='text-base'><HamCompany /></div>


                                        </div>
                                        <button className='bg-black py-2 px-9 text-white rounded-md mx-3 my-6 font-bold text-lg'>Get a Free Quote</button>
                                </div>
                        </div>
                </>
        );
};

export default SidebarMenu;
