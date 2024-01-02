import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ScheduleMeeting from '../Components/ScheduleMeeting';
import Layout from '../Components/Layout';

const OurServices = () => {
        const [data, setData] = useState({});
        const { slug } = useParams();

        useEffect(() => {
                const apiUrl = `https://my-json-server.typicode.com/Nooh-Shoaib/OurServices/pagedata?slug=${slug}`;

                fetch(apiUrl)
                        .then(response => {
                                if (!response.ok) {
                                        throw new Error(`HTTP error! Status: ${response.status}`);
                                }
                                return response.json();
                        })
                        .then(data => {
                                const pageData = data.find(page => page.slug === slug);

                                if (pageData) {
                                        setData(pageData);
                                } else {
                                        console.error('Page not found');
                                }
                        })
                        .catch(error => {
                                console.error('Error fetching data:', error);
                        });
        }, [slug]);

        return (
                <>
                        <Layout>
                                <div>
                                        <div>
                                                <h2>{data.pageTitle}</h2>
                                        </div>

                                        {/* Display Description */}
                                        {data.description && (
                                                <div>
                                                        <h3>{data.description[0].heading}</h3>
                                                        <p>{data.description[0].text}</p>
                                                </div>
                                        )}
                                        <ScheduleMeeting />

                                        {data.tech && (
                                                <div>
                                                        <h3>{data.tech[0].techHeading}</h3>
                                                        <p>{data.tech[0].techText}</p>

                                                        {/* Display Cards */}
                                                        {data.tech[0].cards && (
                                                                <div>
                                                                        {data.tech[0].cards.map((card, index) => (
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
                                        <button className='py-3 px-4 bg-transparent text-black border-black border-2 hover:text-white hover:bg-black duration-300 font-semibold rounded-lg '>Avail Service</button>
                                </div>
                        </Layout>
                </>
        );
};

export default OurServices;
