import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LatestTechnologies = () => {
        const icons = [
                {
                        icon: (
                                <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="19"
                                        viewBox="0 0 30 19"
                                >
                                        <path
                                                d="M 3.048 2.798 C -1.115 6.961, -1.163 11.991, 2.923 16.077 C 5.143 18.297, 6.774 19, 9.701 19 C 14.236 19, 18.757 16.357, 17.084 14.684 C 16.305 13.905, 15.662 13.938, 14.800 14.800 C 12.932 16.668, 6.557 16.272, 4.655 14.171 C 2.458 11.744, 2.550 6.717, 4.829 4.655 C 6.974 2.714, 12.203 2.485, 14.968 4.212 C 16.036 4.879, 17.240 5.093, 17.645 4.688 C 19.076 3.257, 15.146 0.771, 10.651 0.264 C 6.570 -0.196, 5.778 0.068, 3.048 2.798"
                                                stroke="none"
                                                fill="#040404"
                                                fillRule="evenodd"
                                        ></path>
                                        <path
                                                d="M 28 7.023 L 28 14.046 25.474 12.391 C 23.840 11.320, 23.139 10.136, 23.489 9.035 C 23.917 7.686, 23.395 7.333, 20.971 7.333 C 18.685 7.333, 18.057 7.706, 18.481 8.811 C 18.793 9.624, 18.333 11.079, 17.459 12.045 C 15.306 14.424, 17.488 15.774, 19.923 13.570 C 21.604 12.048, 21.893 12.170, 24.411 15.472 C 28.973 21.454, 30 20.357, 30 9.500 C 30 3.833, 29.596 0, 29 0 C 28.428 0, 28 3.008, 28 7.023"
                                                stroke="none"
                                                fill="#2e59f6"
                                                fillRule="evenodd"
                                        ></path>
                                </svg>
                        ),
                },
        ];

        const heading = 'Latest Web Development Technologies 2023';
        const initialContentLength = 300;
        const [showFullContent, setShowFullContent] = useState(false);

        const content =
                'Technology evolves quickly, therefore, web developers require to stay updated with the ongoing trends and developments, as it is one of the most crucial aspects for the success of business. Development Team at The Custom Website, use the most popular web development languages including PAWs and it acts like native mobile applications but are actually websites. This technology contains 36% higher conversion rates than other apps. The use of Dark-Theme UI makes your app and site 1005 responsive. We use it both in websites and mobile applications, since we know the fact that dark or night themed user interfaces are easy and safe for the eyes. Our team is skilled at using the most popular web development languages such as three main front-end coding languages including JavaScript, CSS, and HTML. Together, they produce the underlying scaffolding that web browsers use to render the web pages. Not only this, we are here to provide custom web design services to design a website on WordPress, PHP or other as per the need of the business. Our designers design your website with the 100% responsive and suitable themes of Joomla, Shopify, Drupal and many more.';

        const truncatedContent = showFullContent
                ? content
                : `${content.slice(0, initialContentLength)}`;

        const toggleContent = () => {
                setShowFullContent(!showFullContent);
        };

        return (
                <div className='py-7'>
                        <h1 className='text-center text-4xl mb-2 font-semibold'>{heading}</h1>
                        <div className='flex justify-center space-x-4 py-3'>
                                {icons.map((icon) => (
                                        <React.Fragment key={icon}>
                                                <hr className='w-12 mt-2' />
                                                {icon.icon}
                                        </React.Fragment>
                                ))}
                                <hr className='w-12 mt-2' />
                        </div>
                        <div className='text-center px-56 my-5 text-[1em] transition-max-height ease-in-out duration-300 overflow-hidden max-h-[500px]'>
                                {truncatedContent}
                        </div>
                        {content.length > initialContentLength && (
                                <div className='flex justify-center'>
                                        <button
                                                className='cursor-pointer'
                                                onClick={toggleContent}
                                        >
                                                {showFullContent ? (
                                                        <>
                                                                Show Less <i className='fas fa-chevron-up'></i>
                                                        </>
                                                ) : (
                                                        <>
                                                                Show More <i className='fas fa-chevron-down'></i>
                                                        </>
                                                )}
                                        </button>
                                </div>
                        )}
                </div>
        );
};

export default LatestTechnologies;