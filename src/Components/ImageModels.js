import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ImageModels = () => {
        const categories = [
                'All',
                'E-commerce',
                'IT&Startups',
                'Education & E-learning',
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
                                <ul className='text-sm flex space-x-12 rounded-full border w-max py-1.5 px-2'>
                                        {categories.map((category, index) => (
                                                <NavLink
                                                        to='/'
                                                        key={index}
                                                        onClick={() => handleClick(index)}
                                                        className={`cursor-pointer ${selectedCategory === index
                                                                ? 'bg-gray-300 rounded-full px-2 '
                                                                : ''
                                                                }`}
                                                >
                                                        <li>{category}</li>
                                                </NavLink>
                                        ))}
                                </ul>
                        </div>
                        <div className='text-center text-4xl -rotate-45 mb-96 mt-32'>Draft</div>


                </div>
        );
};

export default ImageModels;
