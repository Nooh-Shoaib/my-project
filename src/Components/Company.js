import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Company = () => {
        const [isArrowUp, setArrowUp] = useState(false);

        const toggleArrow = (e) => {
                e.stopPropagation(); // Prevents the click event from reaching the body
                setArrowUp(!isArrowUp);
        };

        const menuItems = [
                { title: 'About Us', link: '/about-us' },
                { title: 'FAQs', link: '/faqs' },
                { title: 'Customer Support', link: '/customer-support' },
                { title: 'Blog', link: '/blog' },
        ];

        return (
                <div>
                        <body className="font-sans leading-normal tracking-normal">
                                <nav className="relative">
                                        <div className="container mx-auto flex justify-between">
                                                <ul className="flex">
                                                        <li className="group relative">
                                                                <div className="flex items-center">
                                                                        <Link to="#" className="relative block">
                                                                                Company
                                                                        </Link>
                                                                        <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                                version="1.1"
                                                                                x="0px"
                                                                                y="0px"
                                                                                viewBox="0 0 24 24"
                                                                                className={`ml-2 h-6 w-4 text-gray-600 font-extrabold ${isArrowUp ? 'transform rotate-180' : ''}`}
                                                                                onClick={(e) => {
                                                                                        toggleArrow(e);
                                                                                }}
                                                                        >
                                                                                <path d="M12 21.35l-1.45-1.41L4 12.47l1.41-1.41L12 18.47l6.59-6.59L20 12.47l-8 8.88z" />
                                                                        </svg>
                                                                </div>

                                                                <div
                                                                        className={`p-6 dropdown mb-16 sm:mb-0 shadow-2xl bg-white text-black ${isArrowUp ? 'arrow-up' : ''}`}
                                                                        onClick={(e) => {
                                                                                e.stopPropagation();
                                                                        }}
                                                                >
                                                                        <div className="container mx-auto w-full flex flex-wrap justify-between ">
                                                                                <div className="bg-white font-medium overflow-x-auto">
                                                                                        <ul className="space-y-2">
                                                                                                {menuItems.map((item, index) => (
                                                                                                        <Link to={item.link} key={index}>
                                                                                                                <li className={`border-b w-full py-1 ${index === menuItems.length - 1 ? '' : 'mb-2'}`}>
                                                                                                                        {item.title}
                                                                                                                </li>
                                                                                                        </Link>
                                                                                                ))}
                                                                                                <div>
                                                                                                        <a
                                                                                                                href="https://thecustomwebsites.com/wp-content/uploads/2023/05/Presentation-1.pdf"
                                                                                                                target="_blank"
                                                                                                                rel="noopener noreferrer"
                                                                                                        >
                                                                                                                <button
                                                                                                                        type="button"
                                                                                                                        className="px-4 py-2 rounded-lg font-semibold border-2 text-sm border-white text-white bg-black my-1"
                                                                                                                >
                                                                                                                        Company Profile
                                                                                                                </button>
                                                                                                        </a>
                                                                                                </div>
                                                                                        </ul>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div
                                                                        className={`absolute w-0 h-0 border-4 border-solid border-transparent border-black ${isArrowUp ? 'border-t-0 border-b-4' : 'border-t-4 border-b-0'}`}
                                                                        style={{ top: '50%', right: '15px', transform: 'translateY(-50%)' }}
                                                                        onClick={(e) => {
                                                                                toggleArrow(e);
                                                                        }}
                                                                ></div>
                                                        </li>
                                                </ul>
                                        </div>
                                </nav>
                        </body>
                </div>
        );
};

export default Company;
