// src/Pages/OurServices.js
import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Contact from "../Components/Contact";
import Layout from "../Components/Layout";
import ScheduleMeeting from "../Components/ScheduleMeeting";
import { setData, setLoading } from "../ReduxToolKit/action";
import BreadcrumbsSection from "../Sections/BreadCrumbs";
import DemandDevelopersSection from "../Sections/DemandDevelopers";
import LatestTechnologiesSection from "../Sections/LatestTechnologies";
import ServiceQuestions from "../Sections/ServiceQuestions";
import SelectionCards from "../Sections/WhyChooseUs";
import AdvancedErrorBoundary from '../Components/ErrorBoundry';
import Loadingspinner from "../Components/Loadingspinner";
import ServicesList from "../Sections/description";
import { Helmet } from "react-helmet";

const OurServices = () => {
        const dispatch = useDispatch();
        const { slug } = useParams();

        const { data, enterpriseData, loading } = useSelector((state) => state);

        const fetchData = async (apiUrls, setDataCallback) => {
                try {
                        dispatch(setLoading(true));

                        let mergedData = {};

                        for (const apiUrl of apiUrls) {
                                const response = await fetch(apiUrl);

                                if (response.ok) {
                                        const jsonData = await response.json();

                                        console.log(`API Response for ${apiUrl}:`, jsonData);

                                        if (typeof jsonData === "object" && jsonData !== null) {
                                                // Merge the data
                                                mergedData = { ...mergedData, ...jsonData };
                                        } else {
                                                console.error("Invalid data format");
                                        }
                                } else {
                                        console.error(`HTTP error! Status: ${response.status}`);
                                }
                        }

                        // Set the merged data
                        setDataCallback(mergedData);

                        dispatch(setLoading(false));
                } catch (error) {
                        console.error("Error fetching data:", error);
                        dispatch(setLoading(false));
                }
        };



        useEffect(() => {
                const mainApiUrl = `https://my-json-server.typicode.com/Nooh-Shoaib/OurServices/pagedata/${slug}`;
                const enterpriseApiUrl = `https://my-json-server.typicode.com/Nooh-Shoaib/AdditionalData/data/${slug}`;
                const restofApiUrl = `https://my-json-server.typicode.com/Nooh-Shoaib/RestOfData/app/${slug}`;
                const remainingApiUrl = `https://my-json-server.typicode.com/Nooh-Shoaib/RemainingApiData/graphic/${slug}`;
                const nextApiUrl = `https://my-json-server.typicode.com/Nooh-Shoaib/CategoriesApi/category/${slug}`;
                const componentsApiUrl = `https://my-json-server.typicode.com/Nooh-Shoaib/components/sem/${slug}`;
                const serviceApiUrl = `https://my-json-server.typicode.com/Nooh-Shoaib/restfulservices/data/${slug}`;

                const apiUrls = [mainApiUrl, enterpriseApiUrl, restofApiUrl, remainingApiUrl, nextApiUrl, componentsApiUrl, serviceApiUrl];

                fetchData(apiUrls, (mainData) => dispatch(setData(mainData)));
        }, [dispatch, slug]);






        const mergeAndDestructure = (...objects) => {
                return objects.reduce((merged, obj) => ({ ...merged, ...obj }), {});
        };
        const replaceLinks = (text) => {
                try {
                        if (Array.isArray(text)) {
                                // If it's an array, join its elements into a string
                                text = text.join(' ');
                        }

                        if (typeof text !== 'string') {
                                return text;
                        }

                        // Replace all anchor tags with the specified classes
                        text = text.replace(/<a/g, '<a class="text-blue-500 hover:text-blue-600"');

                        return text;
                } catch (error) {
                        console.error('Error in replaceLinks:', error.message);
                        return text;
                }
        };

        const { breadcrumbs, description, tech, demandDevs, selection, enterprise, portfolio, info } = mergeAndDestructure(data, enterpriseData);

        const isLoading = loading && (
                <Loadingspinner loading={loading} />
        );


        const renderContent = () => (

                <>
                        <Helmet>
                                <title>{`${breadcrumbs?.category ?? 'No Page'} - The Custom Website`}</title>
                        </Helmet>
                        {loading && (

                                <Loadingspinner loading={loading} />

                        )}
                        {!loading && (
                                <Layout>
                                        {breadcrumbs && <BreadcrumbsSection breadcrumbs={breadcrumbs} />}
                                        <div className="my-10">
                                                {description && <ServicesList {...description[0]} replaceLinks={replaceLinks} />}
                                        </div>
                                        <div className="my-10 grid grid-cols-3 gap-x-11 mx-24">
                                                {info && Array.isArray(info) && info.length > 0 && info.map((section, index) => (
                                                        <div key={index} className={`shadow-xl shadow-gray-400 mt-5 p-5 rounded-md ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                                                <h3 className="text-4xl font-semibold text-center">{section.heading}</h3>
                                                                <div className="text-center leading-7 text-base my-5">
                                                                        <p dangerouslySetInnerHTML={{ __html: replaceLinks(section.about) }} className="mb-5" />
                                                                        <p dangerouslySetInnerHTML={{ __html: replaceLinks(section.specifications) }} />
                                                                </div>
                                                        </div>
                                                ))}
                                        </div>


                                        <ScheduleMeeting />

                                        {tech && tech.length > 0 && (
                                                <>
                                                        <LatestTechnologiesSection tech={tech} />
                                                        <div className="flex justify-center">
                                                                <button className="py-3 px-6 bg-black text-white hover:text-black border-black border-2 mb-12 hover:bg-transparent duration-300 font-semibold rounded">
                                                                        Avail Service
                                                                </button>
                                                        </div>
                                                </>
                                        )}


                                        {demandDevs && Object.keys(demandDevs).length > 0 && <DemandDevelopersSection demandDevs={demandDevs} />}

                                        {selection && selection.length > 0 && (
                                                <div className="py-24">
                                                        <h3 className="text-[2.20rem] font-semibold text-center pb-12 ">{selection[0].heading}</h3>
                                                        {selection[0].cards && <SelectionCards cards={selection[0].cards} replaceLinks={replaceLinks} />}
                                                </div>
                                        )}
                                        {enterprise && enterprise.texts && enterprise.texts.length > 0 && (
                                                <>
                                                        <div className="">
                                                                {/* Display the heading */}
                                                                <h3 className="text-3xl font-semibold text-center">{enterprise.heading}</h3>

                                                                {/* Display each text in the enterprise section */}
                                                                {enterprise.texts.map((text, index) => (
                                                                        <p
                                                                                key={index}
                                                                                className="text-[1rem] py-4 text-center mx-36"
                                                                                dangerouslySetInnerHTML={{ __html: replaceLinks(text) }}
                                                                        />
                                                                ))}
                                                        </div>

                                                        {/* Display the grid of dedicated DevOps developers */}
                                                        {enterprise.grid && enterprise.grid.length > 0 && (
                                                                <div className="grid grid-cols-2 gap-x-24 mt-8 mx-44">
                                                                        {enterprise.grid.map((item, index) => (
                                                                                <div key={index} className="text-start my-10">
                                                                                        <h4 className="text-xl font-semibold mb-2">{item.heading}</h4>
                                                                                        <p>{item.text}</p>
                                                                                </div>
                                                                        ))}
                                                                </div>
                                                        )}   <div className="flex justify-center">
                                                                <button className="py-3 px-6 bg-black text-white hover:text-black border-black border-2 my-12 hover:bg-transparent duration-300 font-semibold rounded">
                                                                        Lets's Discuss Your Project
                                                                </button>
                                                        </div>
                                                </>
                                        )}


                                        {slug === 'custom-web-development' && (
                                                <div>
                                                        <ServiceQuestions />
                                                </div>
                                        )}

                                        {portfolio && portfolio.length > 0 && (
                                                <div>
                                                        <h3 className="text-4xl font-semibold py-9 text-center">Our Portfolio</h3>
                                                        <OwlCarousel
                                                                className="owl-theme mx-auto"
                                                                loop={false}
                                                                margin={10}
                                                                autoplay={true}
                                                                autoplayTimeout={3000}
                                                                style={{ width: "70%", height: "full" }}
                                                        >
                                                                {portfolio.map((item, index) => (
                                                                        <div key={index} className="relative text-center shadow-2xl lg:shadow-none group">
                                                                                <img src={item.image} alt={`portfolio-${index}`} className="w-12" />
                                                                                <div className="absolute top-0 left-0 lg:w-full w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 duration-500">
                                                                                        <h4 className="text-xl font-semibold text-white mb-2">{item.heading}</h4>
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
                                        <section className='bg-black '>
                                                <div className='h-24 flex justify-around  items-center  '>
                                                        <h2 className='text-2xl font-semibold text-white '>Don’t have a website or app? What are you waiting for?</h2>
                                                        <div className='space-x-5'>
                                                                <button className=" py-4 px-7 rounded-md font-semibold border-2 mx-3 lg:mx-0 border-white bg-transparent  my-3 text-white">Get A Free Proposal</button>
                                                                <Link to='/schedule-a-meeting'>
                                                                        <button className=" py-3.5 px-1.5 md:px-4 lg:px-5 rounded-md font-semibold border-2  lg:mx-0 border-white bg-white text-black my-3 lg:text-lg text-base">
                                                                                Schedule a Meeting

                                                                        </button></Link>
                                                        </div>
                                                </div>
                                        </section>
                                </Layout>
                        )}
                </>
        );

        return (<><AdvancedErrorBoundary>
                {loading ? isLoading : renderContent()}</AdvancedErrorBoundary>
        </>);
};

export default OurServices;
