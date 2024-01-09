import React from 'react';
import { Link } from 'react-router-dom';

const BreadcrumbsSection = ({ breadcrumbs }) => {
        return (
                <div className='lg:h-[250px]'
                        style={{
                                backgroundImage: `url(${breadcrumbs?.backgroundimage})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover", // Use object-fit equivalent for background images
                        }}

                >
                        <div className="lg:py-16 py-6  text-center">
                                <div className="flex justify-center">
                                        <h2 className="text-4xl text-white font-semibold container mx-auto lg:mx-0">{breadcrumbs?.pageTitle}</h2>
                                </div>
                                <div className="flex justify-center lg:mt-5 mt-2">
                                        <Link to="/" className="text-white text-base font-semibold">
                                                Home &nbsp;
                                        </Link>
                                        <span className="text-white">
                                                <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                        &nbsp;
                                        <span className="text-white text-base font-semibold">{breadcrumbs?.category}</span>
                                </div>
                        </div>
                </div >
        );
};

export default BreadcrumbsSection;
