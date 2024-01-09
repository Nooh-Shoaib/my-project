import React from 'react';
import { Link } from 'react-router-dom';

const DemandDevelopersSection = ({ demandDevs }) => {
        return (
                <div className='lg:h-[460px]'
                        style={{
                                position: 'relative',
                                backgroundImage: `url(${demandDevs.backgroundimage})`,
                                padding: '20px',
                                textAlign: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                width: '100%',
                        }}
                >
                        <div className='hidden lg:block'>
                                <div className="lg:flex lg:justify-between lg:px-28 py-">
                                        <div className="mt-12 ">
                                                <h2
                                                        className="text-white lg:text-[44px] text-[32px] text-start"
                                                        dangerouslySetInnerHTML={{ __html: demandDevs.heading }}
                                                ></h2>
                                                <div className="lg:space-x-5 lg:flex justify-start">
                                                        <button className="lg:py-3 md:py-2.5 px-1 md:px-2 lg:px-6 rounded font-semibold border-2 mx-3 md:mx-0 lg:mx-0 border-white bg-transparent my-3 text-white lg:text-lg text-base ">
                                                                Hire Affordable Developers Now!
                                                        </button>

                                                        <Link to="/schedule-a-meeting" target="_blank" rel="noopener noreferrer">
                                                                <button className="py-3 px-3 md:px-2 lg:px-5 rounded border-2 mx-3 md:mx-0 lg:mx-0 border-white bg-white font-semibold text-black my-3 lg:text-lg text-base">
                                                                        Schedule a Meeting
                                                                </button>
                                                        </Link>
                                                </div>
                                        </div>

                                        {demandDevs.image && <img src={demandDevs.image} alt="work" className="lg:w-[500px] w-[300px] " />}
                                </div>
                        </div>

                        {/* mobile screen */}
                        <div className='lg:hidden'>
                                <div className="lg:flex lg:justify-between lg:px-28 py-">
                                        {demandDevs.image && <img src={demandDevs.image} alt="work" className="lg:w-[500px] w-[300px] " />}
                                        <div className="mt-12 ">
                                                <h2
                                                        className="text-white lg:text-[44px] text-[32px] text-start"
                                                        dangerouslySetInnerHTML={{ __html: demandDevs.heading }}
                                                ></h2>
                                                <div className="lg:space-x-5 lg:flex justify-start">
                                                        <button className="lg:py-3 md:py-2.5 px-1 md:px-2 lg:px-6 rounded font-semibold border-2 mx-3 md:mx-0 lg:mx-0 border-white bg-transparent my-3 text-white lg:text-lg text-base ">
                                                                Hire Affordable Developers Now!
                                                        </button>

                                                        <Link to="/schedule-a-meeting" target="_blank" rel="noopener noreferrer">
                                                                <button className="py-3 px-3 md:px-2 lg:px-5 rounded border-2 mx-3 md:mx-0 lg:mx-0 border-white bg-white font-semibold text-black my-3 lg:text-lg text-base">
                                                                        Schedule a Meeting
                                                                </button>
                                                        </Link>
                                                </div>
                                        </div>

                                </div>
                        </div>

                </div >
        );
};

export default DemandDevelopersSection;
