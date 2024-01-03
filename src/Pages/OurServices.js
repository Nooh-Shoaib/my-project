import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ScheduleMeeting from '../Components/ScheduleMeeting';
import Layout from '../Components/Layout';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Contact from '../Components/Contact';


const OurServices = () => {
        const [data, setData] = useState({});
        const [enterpriseData, setEnterpriseData] = useState({});
        const [loading, setLoading] = useState(true);
        const { slug } = useParams();

        useEffect(() => {
                const mainApiUrl = `https://my-json-server.typicode.com/Nooh-Shoaib/OurServices/pagedata/${slug}`;
                const enterpriseApiUrl = `https://my-json-server.typicode.com/Nooh-Shoaib/AdditionalData/pagedata/${slug}`;

                Promise.all([
                        fetch(mainApiUrl),
                        fetch(enterpriseApiUrl)
                ])
                        .then(([mainResponse, enterpriseResponse]) => {
                                if (!mainResponse.ok || !enterpriseResponse.ok) {
                                        throw new Error(`HTTP error! Status: ${mainResponse.status} or ${enterpriseResponse.status}`);
                                }

                                return Promise.all([mainResponse.json(), enterpriseResponse.json()]);
                        })
                        .then(([mainData, enterpriseData]) => {
                                console.log('Main Data:', mainData);
                                console.log('Enterprise Data:', enterpriseData);

                                // Check if mainData is an object
                                if (typeof mainData === 'object' && mainData !== null) {
                                        setData(mainData);
                                        setEnterpriseData(enterpriseData);
                                        setLoading(false);
                                } else {
                                        console.error('Invalid main data format');
                                        setLoading(false);
                                }
                        })
                        .catch(error => {
                                console.error('Error fetching data:', error);
                                setLoading(false);
                        });
        }, [slug]);


        const mergeAndDestructure = (...objects) => {
                return objects.reduce((merged, obj) => ({ ...merged, ...obj }), {});
        };

        const {
                breadcrumbs,
                description,
                tech,
                demandDevs,
                selection,
                enterprise,
                portfolio
        } = mergeAndDestructure(data, enterpriseData);

        return (
                <>   {loading && <p className='text-5xl font-semibold flex justify-center items-center py-80'>Loading.....</p>}
                        {!loading && (
                                <Layout>
                                        {/* Display Breadcrumbs */}
                                        <div style={{ backgroundImage: `url(${breadcrumbs?.backgroundimage})`, padding: '20px', textAlign: 'center', height: '250px', backgroundPosition: "bottom" }}>
                                                <div className='py-16'>
                                                        <div className='flex justify-center'>
                                                                <h2 className='text-4xl text-white font-semibold'>{breadcrumbs?.pageTitle}</h2>
                                                        </div>
                                                        <div className='flex justify-center mt-5'>
                                                                <Link to='/' className='text-white text-base font-semibold'>
                                                                        Home &nbsp;
                                                                </Link>
                                                                <span className='text-white'><i class="fa-solid fa-arrow-right"></i></span>
                                                                &nbsp;
                                                                <span className='text-white text-base font-semibold'>
                                                                        {breadcrumbs?.category}
                                                                </span>

                                                        </div>
                                                </div>
                                        </div>


                                        {/* Display Description */}
                                        {description && (
                                                <div className='my-10'>
                                                        <h3 className='text-4xl font-semibold text-center'>{description[0].heading}</h3>
                                                        <p className='text-justify mx-36 leading-7 text-[1.1rem] my-5'>{description[0].text}</p>
                                                </div>
                                        )}
                                        <ScheduleMeeting />

                                        {/* Display Tech Information */}
                                        {tech.length >> 0 && (
                                                <div>
                                                        <h3 className='text-4xl font-semibold text-center py-3'>{tech[0].techHeading}</h3>
                                                        <p className='text-center mx-36 leading-7 text-[1.1rem] my-5'>{tech[0].techText}</p>

                                                        {/* Display Cards Information */}
                                                        <div className=' container mx-auto '>
                                                                {tech[0].cards && (
                                                                        <div className="max-w-[1425px] mx-auto grid lg:grid-cols-3 grid-cols-2 md:grid-cols-4 lg:px-20 md:px-20 gap-x-12 gap-y-6 py-0 px-1">
                                                                                {tech[0].cards.map((card, index) => (
                                                                                        <div key={index}>
                                                                                                <img src={card.icon} alt={`icon-${index}`} className='mx-auto' />
                                                                                                <h3 className='text-xl font-bold text-center py-5'>{card.heading}</h3>
                                                                                                <p className='text-center'>{card.text}</p>
                                                                                        </div>
                                                                                ))}
                                                                        </div>
                                                                )}
                                                        </div>
                                                </div>
                                        )}

                                        {/* Display Service Button */}
                                        <div className='flex justify-center'>
                                                <button className='py-3 px-6 bg-black text-white hover:text-black border-black border-2 my-12 hover:bg-transparent duration-300 font-semibold rounded'>Avail Service</button>
                                        </div>


                                        {/* Display DemandDevs Information */}
                                        {demandDevs && (
                                                <div style={{ backgroundImage: `url(${demandDevs.backgroundimage})`, padding: '20px', textAlign: 'center', height: '460px' }}>
                                                        <div className='flex justify-between px-28 py-32'>
                                                                <div className=' '>
                                                                        <h2 className='text-white text-[44px]  text-justify' dangerouslySetInnerHTML={{ __html: demandDevs.heading }}></h2>
                                                                        <div className='space-x-5 flex justify-start'>
                                                                                <button className="lg:py-3 md:py-2.5 px-4 md:px-2 lg:px-6 rounded font-semibold border-2 mx-3 md:mx-0 lg:mx-0 border-white bg-transparent my-3 text-white lg:text-lg text-base ">
                                                                                        Hire Affordable Developers Now!
                                                                                </button>

                                                                                <Link
                                                                                        to="/schedule-a-meeting"
                                                                                        target="_blank"
                                                                                        rel="noopener noreferrer"
                                                                                >
                                                                                        <button className="py-3 px-3 md:px-2 lg:px-5 rounded border-2 mx-3 md:mx-0 lg:mx-0 border-white bg-white font-semibold text-black my-3 lg:text-lg text-base">
                                                                                                Schedule a Meeting
                                                                                        </button>
                                                                                </Link>
                                                                        </div>
                                                                </div>

                                                                {demandDevs.image && (
                                                                        <img src={demandDevs.image} alt="work" className='w-[500px] ' />
                                                                )}
                                                        </div>
                                                </div>
                                        )}

                                        {/* Display Our Selection  */}
                                        {selection && (
                                                <div>
                                                        <h3>{selection[0].heading}</h3>

                                                        {/* Display Selection Cards */}
                                                        {selection[0].cards && (
                                                                <div>
                                                                        {selection[0].cards.map((card, index) => (
                                                                                <div key={index}>
                                                                                        <img src={card.icon} alt={`icon-${index}`} />
                                                                                        <h3>{card.heading}</h3>
                                                                                        <p>{card.text}</p>
                                                                                </div>
                                                                        ))}
                                                                </div>
                                                        )}

                                                </div>
                                        )}
                                        {enterprise && (
                                                <div>
                                                        <h3>{enterprise.heading}</h3>
                                                        <p>{enterprise.text1}</p>
                                                        <p>{enterprise.text2}</p>
                                                        <p>{enterprise.text3}</p>
                                                </div>
                                        )}
                                        {portfolio && (
                                                <div>
                                                        <h3 className='text-4xl font-semibold py-9 text-center'>Our Portfolio</h3>
                                                        <OwlCarousel
                                                                className="owl-theme mx-auto"
                                                                loop
                                                                margin={10}
                                                                nav
                                                                autoplay={true}
                                                                autoplayTimeout={3000}
                                                                style={{ width: '70%', height: 'full' }}
                                                        >
                                                                {portfolio.map((item, index) => (
                                                                        <div key={index} className="relative text-center shadow-2xl lg:shadow-none group">
                                                                                <img src={item.image} alt={`portfolio-${index}`} className='w-12' />
                                                                                <div className="absolute top-0 left-0 lg:w-full w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 duration-500">
                                                                                        <h4 className='text-xl font-semibold text-white mb-2'>{item.heading}</h4>
                                                                                        <div>
                                                                                                <button className="block border-2 border-white text-white py-2 px-4 rounded">Ask For Demo</button>
                                                                                        </div>
                                                                                </div>
                                                                        </div>

                                                                ))}
                                                        </OwlCarousel>
                                                </div>
                                        )}

                                        <Contact />

                                </Layout>)}
                </>
        );
};

export default OurServices;
