import React from 'react';
import { Link } from 'react-router-dom';

const BreadcrumbsSection = ({ breadcrumbs }) => {
        return (
                <div
                        style={{
                                backgroundImage: `url(${breadcrumbs?.backgroundimage})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover", // Use object-fit equivalent for background images
                                height: "250px",
                        }}

                >
                        <div className="py-16">
                                <div className="flex justify-center">
                                        <h2 className="text-4xl text-white font-semibold">{breadcrumbs?.pageTitle}</h2>
                                </div>
                                <div className="flex justify-center mt-5">
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
