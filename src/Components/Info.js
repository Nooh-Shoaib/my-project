import React from 'react';
import { Link } from 'react-router-dom';

const Info = ({ heading }) => {
        const icons = [
                {
                        icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="19" viewBox="0 0 30 19">
                                        <path d="M 3.048 2.798 C -1.115 6.961, -1.163 11.991, 2.923 16.077 C 5.143 18.297, 6.774 19, 9.701 19 C 14.236 19, 18.757 16.357, 17.084 14.684 C 16.305 13.905, 15.662 13.938, 14.800 14.800 C 12.932 16.668, 6.557 16.272, 4.655 14.171 C 2.458 11.744, 2.550 6.717, 4.829 4.655 C 6.974 2.714, 12.203 2.485, 14.968 4.212 C 16.036 4.879, 17.240 5.093, 17.645 4.688 C 19.076 3.257, 15.146 0.771, 10.651 0.264 C 6.570 -0.196, 5.778 0.068, 3.048 2.798" stroke="none" fill="#040404" fillRule="evenodd"></path>
                                        <path d="M 28 7.023 L 28 14.046 25.474 12.391 C 23.840 11.320, 23.139 10.136, 23.489 9.035 C 23.917 7.686, 23.395 7.333, 20.971 7.333 C 18.685 7.333, 18.057 7.706, 18.481 8.811 C 18.793 9.624, 18.333 11.079, 17.459 12.045 C 15.306 14.424, 17.488 15.774, 19.923 13.570 C 21.604 12.048, 21.893 12.170, 24.411 15.472 C 28.973 21.454, 30 20.357, 30 9.500 C 30 3.833, 29.596 0, 29 0 C 28.428 0, 28 3.008, 28 7.023" stroke="none" fill="#2e59f6" fillRule="evenodd"></path>
                                </svg>
                        ),
                },
        ];


        return (
                <div className='py-7'>
                        <h1 className='text-center text-4xl mb-2 font-semibold'>{heading}</h1>
                        <div className='flex justify-center space-x-4 py-3'>
                                {icons.map(icon => (
                                        <React.Fragment key={icon}>
                                                <hr className='w-12 mt-2' />
                                                {icon.icon}
                                        </React.Fragment>
                                ))}
                                <hr className='w-12 mt-2' />
                        </div>
                        <p className='text-justify px-44 my-5 text-[1em] container mx-auto'>
                                Let us make your online visibility possible since a custom build website is compulsory for your business promotion. Our professional{' '}
                                <Link to='/' className='text-blue-500 hover:text-blue-700'>custom web design services</Link>{' '}
                                are the ultimate options to make your business a brand in the world of{' '}
                                <Link to='/' className='text-blue-500 hover:text-blue-700'>digital marketing</Link>{' '}.
                                Unique and amazing designs are at the core of <strong>The Custom Website</strong>. We know this fact that creativity is essential factor in designing. Creative developers are well-informed about the lure of the excellent finish, closeness of graphics and others. If you want to design your own website, The Custom Website is your right selection. Without web development, making your business a brand is not possible. With the creative and professional designs, all our developers can make your online visibility possible. They use the latest technologies to improve your website appearance. Yes, all our experts are well-aware of this factor that your website must be 100% responsive. It will contain SEO-friendly templates themes that can improve your visibility online. All the retina-ready templates will take less than three seconds to load. In this way, your audience will enjoy the best user experience. As a leading custom web development company, we know how to develop a website as per the nature of your business. It will contain an exclusive profile for your business. It is our pride that we always focus on designing creative images and graphics. It will attract more and more customers to your website. In this way, you will be able to present your business in a professional way.
                        </p>
                </div>
        );
};

export default Info;
