import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ImageModels from './ImageModels';

const Portfolio = () => {
        const categories = [
                'All',
                'E-commerce',
                'IT&Startups',
                'Education&E-learning',
                'ERP System',
                'Real Estate',
                'Jewelry',
                'Food & Restaurant',
                'Medical & Healthcare',
                'Gaming',
                'CBD',
        ];

        const [selectedCategory, setSelectedCategory] = useState(null);

        const handleClick = (index) => {
                setSelectedCategory(index === selectedCategory ? null : index);
        };

        return (
                <div>
                        <div className='flex justify-center my-4'>
                                <ul className='text-sm lg:flex  grid justify-items-center md:justify-center grid-cols-3 md:grid-cols-7 md:items-center px-5 md:px-3 lg:justify-center lg:space-x-10 rounded-full border lg:w-[1227px] w-[700px] lg:h-6 md:h-20 md:gap-y-1.5 items-center px-0.1'>
                                        {categories.map((category, index) => (
                                                <NavLink
                                                        to='/'
                                                        key={index}
                                                        onClick={() => handleClick(index)}
                                                        className={`cursor-pointer ${selectedCategory === index
                                                                ? 'bg-gray-300 rounded-full lg:px-1 px-0.5 lg:py-0.5 py-0'
                                                                : ''
                                                                }`}
                                                >
                                                        <li className='text-center md:text-center md:text-xs md:flex md:justify-center items-center'>{category}</li>
                                                </NavLink>
                                        ))}
                                </ul>
                        </div>
                        <ImageModels />
                </div>
        );
};

export default Portfolio;
