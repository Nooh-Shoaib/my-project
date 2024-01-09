import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout';
import { Agile } from '../Components/AgileAndOptimization';
import TestimonialsSection from '../Components/Testimonials';

const AboutUs = () => {
        const [aboutdata, setaboutdata] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
                const fetchData = async () => {
                        try {
                                const response = await fetch('https://my-json-server.typicode.com/Nooh-Shoaib/AboutUs/aboutdata');
                                if (!response.ok) {
                                        throw new Error('Network response was not ok');
                                }

                                const data = await response.json();
                                console.log('Fetched Data:', data);

                                if (data && data.length > 0) {
                                        setaboutdata(data[0]);
                                } else {
                                        console.error('No data found in the response.');
                                }

                                setLoading(false);
                        } catch (error) {
                                console.error('Error fetching data:', error);
                                setLoading(false);
                        }
                };

                fetchData();
        }, []);

        if (loading) {
                return <div>Loading...</div>;
        }

        if (!aboutdata) {
                return <div>No data available.</div>;
        }

        return (
                <>
                        <Layout>
                                <div className='lg:h-[250px]' style={{
                                        backgroundImage: `url(https://thecustomwebsites.com/wp-content/uploads/2023/05/page-title.jpg)`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                }}>
                                        <div className="lg:py-16 py-6 text-center">
                                                <h1 className='text-4xl text-white font-semibold lg:mx-0 text-center'>About Us</h1>
                                                <div>
                                                        <div className="flex justify-center lg:mt-5 mt-2">
                                                                <Link to="/" className="text-white text-base font-semibold">
                                                                        Home &nbsp;
                                                                </Link>
                                                                <span className="text-white">
                                                                        <i className="fa-solid fa-arrow-right"></i>
                                                                </span>
                                                                &nbsp;
                                                                <h2 className='text-white text-base font-semibold'>About Us</h2>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="lg:flex justify-center container mx-auto">
                                        <div className="lg:w-2/5 md:w-2/3 mx-3 my-24">
                                                <h1 className='text-4xl font-semibold lg:mx-0 text-start'>{aboutdata.mainheading}</h1>


                                                <p dangerouslySetInnerHTML={{ __html: (aboutdata.info) }} />
                                                {aboutdata.description.map((description, index) => (
                                                        <div key={index}>
                                                                <div className='py-6'>
                                                                        <h2 className='text-3xl font-semibold'>{description.heading}</h2>
                                                                        {description.list && (
                                                                                <ul className='grid grid-cols-2 leading-7 custom-list list-disc  px-5 py-5'>
                                                                                        {description.list.map((item, listIndex) => (
                                                                                                <li className='' key={listIndex}>{item}</li>
                                                                                        ))}
                                                                                </ul>
                                                                        )}
                                                                        {description.choose && (
                                                                                <ul className='grid grid-cols-1 leading-7 custom-list list-disc  px-5 py-5'>
                                                                                        {description.choose.map((item, chooseIndex) => (
                                                                                                <li className='' key={chooseIndex}>{item}</li>
                                                                                        ))}
                                                                                </ul>
                                                                        )}
                                                                        <p className='pt-5' dangerouslySetInnerHTML={{ __html: description.text }} />
                                                                </div>
                                                                {description.additionalText && <p className='py-2' dangerouslySetInnerHTML={{ __html: description.additionalText }} />}
                                                        </div>
                                                ))}
                                        </div>
                                        <div className="lg:sticky lg:top-40 md:sticky lg:left-20 md:top-40 px-24 md:right-0 lg:h-full md:h-full lg:mt-36 md:mt-36 mt-6">
                                                <img src='https://thecustomwebsites.com/wp-content/uploads/2023/05/ecom-img-min.png' alt='about' className='' />
                                        </div>
                                </div>
                                <div>
                                        {/* <div>
                                                <h1 className='text-center text-3xl font-semibold py-2'>We are Agile</h1>
                                                <p className='text-center py-8 text-lg'>It is true since we use modern technology and modern methods to develop and design your business website.</p>
                                                <div className='flex justify-center'>
                                                        <div className='lg:grid md:grid md:grid-cols-3 lg:grid-cols-3 lg:gap-8 md:gap-8 lg:space-y-0 md:space-y-0 space-y-3'>
                                                                {imagePaths.map((imagePath, index) => (
                                                                        <div key={index}>
                                                                                <img
                                                                                        src={imagePath}
                                                                                        alt={` ${index + 1}`}
                                                                                        className='lg:w-72 w-60 md:w-52'
                                                                                />
                                                                        </div>
                                                                ))}
                                                        </div>
                                                </div>
                                        </div> */}
                                </div>
                                <TestimonialsSection />
                                <div className='bg-black '>
                                        <div className='lg:h-24 md:h-44 h-72 lg:flex md:flex lg:justify-around md:justify-between items-center  px-4 py-6 '>
                                                <h2 className='text-2xl font-semibold text-white text-start  py-2  '>Don’t have a website or app? What are you waiting for?</h2>
                                                <div className='lg:grid lg:grid-cols-2  grid justify-items-center md:justify-items-end  md:grid'>
                                                        <button className="py-3.5 px-8 lg:py-3 md:px-10 md:py-0 lg:px-5 rounded-md font-semibold border-2 lg:mx-3  border-white bg-transparent lg:my-0 my-1 md:my-2 text-white">Get A Free Proposal</button>
                                                        <Link to='/schedule-a-meeting'>
                                                                <button className="py-3.5 px-8 lg:py-3 md:px-10 md:py-0 lg:px-5 rounded-md font-semibold border-2 lg:mx-0 border-white bg-white text-black  lg:text-lg text-base">
                                                                        Schedule a meeting
                                                                </button>
                                                        </Link>
                                                </div>
                                        </div>
                                </div>
                        </Layout>
                </>
        );
};

export default AboutUs;


<strong></strong>