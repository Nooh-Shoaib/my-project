import React from 'react';
import { Link } from 'react-router-dom';
import Company from './Company';
import Services from './Services';
import PropTypes from 'prop-types';

const Header = ({ services, company }) => {
        const contactInfo = [
                { type: 'phone', value: '(213) 416-7355', link: 'tel:(213)%20416-7355%20' },
                { type: 'email', value: 'sales@thecustomwebsites.com', link: 'mailto:sales@thecustomwebsites.com' },
        ];

        return (
                <>
                        <nav className="hidden lg:block border-b border-gray-400">
                                <div className="">
                                        <div className="flex justify-center items-center space-x-[720px] font-sans">
                                                <div className='my-3'>
                                                        {contactInfo.map((info, index) => (
                                                                <Link key={index} to={info.link} target="_blank" className='pr-3'>
                                                                        {info.type === 'email' && (
                                                                                <>
                                                                                        <i className="fa-solid fa-envelope"></i>
                                                                                        &nbsp;
                                                                                </>
                                                                        )}
                                                                        <i className={`fa-solid fa-${info.type} fa-xl`}></i>
                                                                        <span className="text-xs ">{info.value}</span>
                                                                </Link>
                                                        ))}
                                                </div>
                                                <div className="flex my-4">
                                                        <button>
                                                                <span className="input-group-text border-0">
                                                                        <i className="fa-sharp fa-solid fa-location-dot fa-xl"></i>
                                                                </span>
                                                        </button>
                                                        <p className="text-xs mt-0.5 px-1">750 West Hampden Avenue Denver CO</p>
                                                </div>
                                        </div>
                                </div>
                        </nav>


                        <nav className="hidden lg:block sticky top-0 bg-white z-20 shadow-md">
                                <div className="flex items-center justify-between space-x px-28 py-4">
                                        <div className="text-black text-[15px] font-semibold flex items-center mx-14">
                                                <Link to='/'>
                                                        <img src="https://thecustomwebsites.com/wp-content/uploads/2023/04/logo.png" alt="The Custom Websites" className="w-48" />
                                                </Link>
                                        </div>
                                        <div className="ml-2 font-sans">
                                                <div className='my-3 flex justify-center items-center '>
                                                        <Link to='/' className='px-5 font-bold text-base'>Get Free Mockup Now!</Link>
                                                        <span className='px-5 text-base cursor-pointer'><Services {...services} /></span>
                                                        <Link to='/portfolio' className='px-5 text-base'>Portfolio</Link>
                                                        <span className='px-5 text-base cursor-pointer'><Company {...company} /></span>
                                                        <button className='bg-black py-3 px-8 mx-5 font-bold text-white rounded-md'>Get a Free Quote</button>
                                                </div>
                                        </div>
                                </div>
                        </nav>
                </>
        );
};

Header.propTypes = {
        services: PropTypes.object,
        company: PropTypes.object,
};

export default React.memo(Header);