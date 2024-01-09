import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScheduleMeeting from '../Sections/ScheduleMeeting';

const businessSections = [
        {
                iconClass: 'handshake',
                title: 'Startup Business',
        },
        {
                iconClass: 'business-time',
                title: 'Small and Medium Scale Business',
        },
        {
                iconClass: 'city',
                title: 'Digital Agencies',
        },
        {
                iconClass: 'diagram-project',
                title: 'Enterprise',
        },
];

const LatestTechnologies = () => {
        const initialContentLength = window.innerWidth < 600 ? 150 : 300;
        const [showFullContent, setShowFullContent] = useState(false);
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
        const content =
                'Technology evolves quickly, therefore, web developers require to stay updated with the ongoing trends and developments, as it is one of the most crucial aspects for the success of business. Development Team at The Custom Website, use the most popular web development languages including PAWs and it acts like native mobile applications but are actually websites. This technology contains 36% higher conversion rates than other apps. The use of Dark-Theme UI makes your app and site 1005 responsive. We use it both in websites and mobile applications, since we know the fact that dark or night themed user interfaces are easy and safe for the eyes. Our team is skilled at using the most popular web development languages such as three main front-end coding languages including JavaScript, CSS, and HTML. Together, they produce the underlying scaffolding that web browsers use to render the web pages. Not only this, we are here to provide custom web design services to design a website on WordPress, PHP or other as per the need of the business. Our designers design your website with the 100% responsive and suitable themes of Joomla, Shopify, Drupal and many more.'

        const truncatedContent = showFullContent
                ? content
                : `${content.slice(0, initialContentLength)}`;

        const toggleContent = () => {
                setShowFullContent(!showFullContent);
        };

        return (
                <div className='py-7'>
                        <h1 className='text-center lg:text-4xl text-3xl mb-2 font-semibold'>
                                Latest Web Development Technologies 2023
                        </h1>
                        <div className='flex justify-center space-x-4 py-3'>
                                {icons.map((icon, index) => (
                                        <React.Fragment key={index}>
                                                <hr className='w-12 mt-2' />
                                                {icon.icon}
                                        </React.Fragment>
                                ))}
                                <hr className='w-12 mt-2' />
                        </div>
                        <div className='text-center lg:px-56 px-1 my-5 text-[1em] transition-max-height ease-in-out duration-300 overflow-hidden max-h-[500px]'>
                                {truncatedContent}
                        </div>
                        {content.length > initialContentLength && (
                                <div className='flex justify-center'>
                                        <button className='cursor-pointer' onClick={toggleContent}>
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

const HowWork = () => {
        return (
                <div className=''>
                        <h1 className='text-center lg:text-4xl text-2xl md:text-4xl lg:mb-2 lg:mt-10 md:mt-0 mt-72 font-semibold'>For whom we work?</h1>
                        <div className='flex justify-center space-x-4 py-3'>
                                <hr className='w-12 mt-2' />
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="19" viewBox="0 0 30 19"><path d="M 3.048 2.798 C -1.115 6.961, -1.163 11.991, 2.923 16.077 C 5.143 18.297, 6.774 19, 9.701 19 C 14.236 19, 18.757 16.357, 17.084 14.684 C 16.305 13.905, 15.662 13.938, 14.800 14.800 C 12.932 16.668, 6.557 16.272, 4.655 14.171 C 2.458 11.744, 2.550 6.717, 4.829 4.655 C 6.974 2.714, 12.203 2.485, 14.968 4.212 C 16.036 4.879, 17.240 5.093, 17.645 4.688 C 19.076 3.257, 15.146 0.771, 10.651 0.264 C 6.570 -0.196, 5.778 0.068, 3.048 2.798" stroke="none" fill="#040404" fillRule="evenodd"></path><path d="M 28 7.023 L 28 14.046 25.474 12.391 C 23.840 11.320, 23.139 10.136, 23.489 9.035 C 23.917 7.686, 23.395 7.333, 20.971 7.333 C 18.685 7.333, 18.057 7.706, 18.481 8.811 C 18.793 9.624, 18.333 11.079, 17.459 12.045 C 15.306 14.424, 17.488 15.774, 19.923 13.570 C 21.604 12.048, 21.893 12.170, 24.411 15.472 C 28.973 21.454, 30 20.357, 30 9.500 C 30 3.833, 29.596 0, 29 0 C 28.428 0, 28 3.008, 28 7.023" stroke="none" fill="#2e59f6" fillRule="evenodd"></path></svg>

                                <hr className='w-12 mt-2' />
                        </div>
                        <p className='text-center lg:px-44 my-5 lg:text-[1.1em] text-base px-5'>
                                The Custom Website is one of the famous{' '}
                                <Link to='/' className='text-blue-500 hover:text-blue-600'>
                                        Mobile App and Web Development
                                </Link>{' '}
                                organizations based in New York. A team of experts from a custom web development company welcomes all businesses from large enterprises to new startups across the globe. There are more than successful projects are on our credits since our goal is the satisfaction of our clients.
                        </p>
                        <div className='lg:flex md:grid md:grid-cols-2 lg:items-center lg:justify-center my-24 lg:space-x-7 md:gap-x-9  lg:space-y-0 md:space-y-3  space-y-10 container  px-2.5 md:justify-center md:px-20'>
                                {businessSections.map((section, index) => (
                                        <div
                                                key={index}
                                                className="rounded-xl shadow-xl bg-white lg:w-96 md:w-52 hover:scale-105 duration-500 md:my-3 cursor-pointer"
                                                style={{
                                                        backgroundImage: `url('https://thecustomwebsites.com/wp-content/uploads/2023/05/icon-bg.jpg')`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        backgroundRepeat: 'no-repeat',
                                                        height: '200px',
                                                        width: '300px',
                                                }}
                                                loading="lazy"
                                        >
                                                <i className={`fa-solid fa-${section.iconClass} text-white text-5xl flex justify-center pt-14`}></i>
                                                <p className='text-center text-white py-3 font-semibold text-[1.1rem]'>{section.title}</p>
                                        </div>
                                ))}
                        </div>
                </div>
        );
};

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
                        <h1 className='text-center lg:text-4xl text-3xl  mb-2 font-semibold'>{heading}</h1>
                        <div className='flex justify-center space-x-4 py-3'>
                                {icons.map(icon => (
                                        <React.Fragment key={icon}>
                                                <hr className='w-12 mt-2' />
                                                {icon.icon}
                                        </React.Fragment>
                                ))}
                                <hr className='w-12 mt-2' />
                        </div>
                        <p className='lg:text-justify text-start lg:px-44 px-5 my-5 lg:text-[1em] text-base container mx-auto'>
                                Let us make your online visibility possible since a custom build website is compulsory for your business promotion. Our professional{' '}
                                <Link to='/' className='text-blue-500 hover:text-blue-700'>custom web design services</Link>{' '}
                                are the ultimate options to make your business a brand in the world of{' '}
                                <Link to='/' className='text-blue-500 hover:text-blue-700'>digital marketing</Link>{' '}.
                                Unique and amazing designs are at the core of <strong>The Custom Website</strong>. We know this fact that creativity is essential factor in designing. Creative developers are well-informed about the lure of the excellent finish, closeness of graphics and others. If you want to design your own website, The Custom Website is your right selection. Without web development, making your business a brand is not possible. With the creative and professional designs, all our developers can make your online visibility possible. They use the latest technologies to improve your website appearance. Yes, all our experts are well-aware of this factor that your website must be 100% responsive. It will contain SEO-friendly templates themes that can improve your visibility online. All the retina-ready templates will take less than three seconds to load. In this way, your audience will enjoy the best user experience. As a leading custom web development company, we know how to develop a website as per the nature of your business. It will contain an exclusive profile for your business. It is our pride that we always focus on designing creative images and graphics. It will attract more and more customers to your website. In this way, you will be able to present your business in a professional way.
                        </p>
                </div>
        );
};


// Optimization component
const Optimization = () => {
        return (
                <>
                        <h1 className='text-center my-14 text-4xl font-semibold'>
                                Website Speed and Optimization
                        </h1>
                        <section>
                                <div className='lg:flex-col-1 md:flex-col-1'>
                                        <div className='lg:mx-[320px] '>
                                                <ul className='font-bold my-4 mx-6 lg:mx-0 md:mx-8'>
                                                        <li className='list-disc'>Is your website taking time to load?</li>
                                                        <li className='list-disc'>Is there any issue in your online visibility?</li>
                                                        <li className='list-disc'>Is there a high bounce rate as per the website analytics?</li>
                                                </ul>
                                        </div>
                                        <div className='lg:flex lg:justify-center lg:space-x-16 lg:items-start mx-3 lg:mx-0 md:flex md:justify-center md:mx-4'>
                                                <p className='lg:max-w-md   '>
                                                        Are you facing issues like a high bounce rate, lag in website visibility, or slow-loading web pages? If the answer is yes, it's essential to address these issues promptly. The Custom Website can help by creating a 100% responsive website that loads in less than 3 seconds, providing the best user experience. Improve traffic to your website and unlock more potential opportunities with our optimization services.
                                                </p>
                                                <img
                                                        src='https://thecustomwebsites.com/wp-content/uploads/2023/05/graph.png'
                                                        alt='Website Analytics Graph'
                                                        className='lg:-mt-24 lg:w-[450px] md:w-72'
                                                />
                                        </div>
                                </div>
                        </section>
                        <ScheduleMeeting />
                </>
        );
};





export { LatestTechnologies, HowWork, Info, Optimization };
