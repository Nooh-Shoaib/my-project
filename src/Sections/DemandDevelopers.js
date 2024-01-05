import React from 'react';
import { Link } from 'react-router-dom';

const DemandDevelopersSection = ({ demandDevs }) => {
        return (
                <div
                        style={{
                                position: 'relative',
                                backgroundImage: `url(${demandDevs.backgroundimage})`,
                                padding: '20px',
                                textAlign: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                height: '460px',
                                width: '100%',
                        }}
                >

                        <div className="flex justify-between px-28 py-">
                                <div className="mt-12 ">
                                        <h2
                                                className="text-white text-[44px] text-start"
                                                dangerouslySetInnerHTML={{ __html: demandDevs.heading }}
                                        ></h2>
                                        <div className="space-x-5 flex justify-start">
                                                <button className="lg:py-3 md:py-2.5 px-4 md:px-2 lg:px-6 rounded font-semibold border-2 mx-3 md:mx-0 lg:mx-0 border-white bg-transparent my-3 text-white lg:text-lg text-base ">
                                                        Hire Affordable Developers Now!
                                                </button>

                                                <Link to="/schedule-a-meeting" target="_blank" rel="noopener noreferrer">
                                                        <button className="py-3 px-3 md:px-2 lg:px-5 rounded border-2 mx-3 md:mx-0 lg:mx-0 border-white bg-white font-semibold text-black my-3 lg:text-lg text-base">
                                                                Schedule a Meeting
                                                        </button>
                                                </Link>
                                        </div>
                                </div>
                                <div
                                        style={{
                                                position: 'relative',
                                                backgroundImage: `url(${demandDevs.image})`,
                                                backgroundRepeat: 'no-repeat',

                                        }}
                                >
                                        {demandDevs.image && <img src={demandDevs.maskimage} alt="work" className="w-[500px]" />}
                                </div>
                        </div>
                </div >
        );
};

export default DemandDevelopersSection;
