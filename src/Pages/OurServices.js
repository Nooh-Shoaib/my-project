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

                const apiUrls = [mainApiUrl, enterpriseApiUrl, restofApiUrl, remainingApiUrl, nextApiUrl];

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

                        return text
                                .replace(
                                        /<Link to='(.+?)' className='text-blue-500 hover:text-blue-600'>/g,
                                        (_, p1) => `<a href="${p1}" class="text-blue-500 hover:text-blue-600">`
                                )
                                .replace(/<\/Link>/g, "</a>");
                } catch (error) {
                        console.error('Error in replaceLinks:', error.message);
                        return text;
                }
        };

        const { breadcrumbs, description, tech, demandDevs, selection, enterprise, portfolio } = mergeAndDestructure(data, enterpriseData);

        const isLoading = loading && (
                <p className="text-5xl font-semibold flex justify-center items-center py-80">
                        Loading.....
                </p>
        );

        const renderContent = () => (
                <>
                        {loading && (
                                <p className="text-5xl font-semibold flex justify-center items-center py-80">
                                        Loading.....
                                </p>
                        )}
                        {!loading && (
                                <Layout>
                                        {breadcrumbs && <BreadcrumbsSection breadcrumbs={breadcrumbs} />}

                                        <div className="my-10">
                                                {description && (<>
                                                        <h3 className="text-4xl font-semibold text-center">{description[0].heading}</h3>
                                                        <h3
                                                                className="text-2xl font-semibold my-5 text-center"
                                                                dangerouslySetInnerHTML={{ __html: replaceLinks(description[0].subheading) }}
                                                        ></h3><p
                                                                className="text-center mx-36 leading-7 text-[1.1rem] my-5"
                                                                dangerouslySetInnerHTML={{ __html: replaceLinks(description[0].text) }}
                                                        />

                                                </>)} {description && (<p
                                                        className="text-center mx-36 leading-7 text-[1.1rem] my-5"
                                                        dangerouslySetInnerHTML={{ __html: replaceLinks(description[0].cmstext) }}
                                                />)}
                                        </div>
                                        <ScheduleMeeting />

                                        {tech && tech.length > 0 && (
                                                <>
                                                        <LatestTechnologiesSection tech={tech} />
                                                        <div className="flex justify-center">
                                                                <button className="py-3 px-6 bg-black text-white hover:text-black border-black border-2 my-12 hover:bg-transparent duration-300 font-semibold rounded">
                                                                        Avail Service
                                                                </button>
                                                        </div>
                                                </>
                                        )}


                                        {demandDevs && Object.keys(demandDevs).length > 0 && <DemandDevelopersSection demandDevs={demandDevs} />}

                                        {selection && (
                                                <div className="py-24">
                                                        <h3 className="text-[2.20rem] font-semibold text-center pb-12 ">{selection[0].heading}</h3>
                                                        {selection[0].cards && <SelectionCards cards={selection[0].cards} replaceLinks={replaceLinks} />}
                                                </div>
                                        )}

                                        {enterprise && (<>
                                                <div className="">
                                                        <h3 className="text-3xl font-semibold text-center">{enterprise.heading}</h3>
                                                        {enterprise.texts.map((text, index) => (
                                                                <p
                                                                        key={index}
                                                                        className="text-[1rem] py-4 text-justify mx-36"
                                                                        dangerouslySetInnerHTML={{ __html: replaceLinks(text) }}
                                                                />
                                                        ))}
                                                </div>
                                                <div className="flex justify-center">
                                                        <button className="py-3 px-6 bg-black text-white hover:text-black border-black border-2 my-12 hover:bg-transparent duration-300 font-semibold rounded">
                                                                Lets's Discuss Your Project
                                                        </button>
                                                </div>   </>
                                        )}


                                        {slug === 'custom-web-development' && (
                                                <div>
                                                        <ServiceQuestions />
                                                </div>
                                        )}

                                        {portfolio && (
                                                <div>
                                                        <h3 className="text-4xl font-semibold py-9 text-center">Our Portfolio</h3>
                                                        <OwlCarousel
                                                                className="owl-theme mx-auto"
                                                                loop
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

        return <>{loading ? isLoading : renderContent()}</>;
};

export default OurServices;
