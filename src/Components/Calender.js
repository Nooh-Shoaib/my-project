import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Layout from './Layout';
import { Link } from 'react-router-dom';

const CalendlyInlineWidget = () => {
        useEffect(() => {
                // Lazy load Calendly script
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://assets.calendly.com/assets/external/widget.js';
                script.async = true;
                script.loading = 'lazy';

                document.body.appendChild(script);

                return () => {
                        document.body.removeChild(script);
                };
        }, []);

        const backgroundImageStyle = {
                backgroundImage: `url('https://thecustomwebsites.com/wp-content/uploads/2023/05/contact-us-banner-min.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
        };

        return (
                <>
                        <Helmet>
                                <title>Get Free Mockup - The Custom Websites</title>
                        </Helmet>
                        <Layout>
                                <div style={backgroundImageStyle} className='w-full h-72'>
                                        <div className='py-24'>
                                                <div className='flex justify-center'>
                                                        <h1 className='text-4xl text-white font-semibold'>Schedule a Meeting</h1>
                                                </div>
                                                <div className='flex justify-center mt-5'>
                                                        <Link to='/' className='text-white text-base font-semibold'>
                                                                Home &nbsp;
                                                        </Link>
                                                        <span className='text-white'><i className="fa-solid fa-arrow-right"></i></span>
                                                        &nbsp;
                                                        <span className='text-white text-base font-semibold'>
                                                                Schedule a Meeting
                                                        </span>
                                                </div>
                                        </div>
                                </div>
                                <div
                                        className="calendly-inline-widget"
                                        data-url="https://calendly.com/nooh19978/book-a-meeting-3"
                                        style={{ minWidth: '320px', height: '700px' }}
                                />
                        </Layout>
                </>
        );
};

export default CalendlyInlineWidget;
