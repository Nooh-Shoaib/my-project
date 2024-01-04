import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BreadcrumbsSection from "../Components/BreadCrumbs";
import Contact from "../Components/Contact";
import DemandDevelopersSection from "../Components/DemandDevelopers";
import LatestTechnologiesSection from "../Components/LatestTechnologies";
import Layout from "../Components/Layout";
import ScheduleMeeting from "../Components/ScheduleMeeting";
import ServiceQuestions from "../Components/ServiceQuestions";
import SelectionCards from "../Components/WhyChooseUs";
import {
        setData,
        setEnterpriseData,
        setLoading,
} from "../ReduxToolKit/action";
import {
        getData,
        getEnterpriseData,
        getLoading,
} from "../ReduxToolKit/selectors";

const OurServices = () => {
        const dispatch = useDispatch();
        const { slug } = useParams();

        const { data, enterpriseData, loading } = useSelector(
                (state) => ({
                        data: getData(state),
                        enterpriseData: getEnterpriseData(state),
                        loading: getLoading(state),
                })
        );

        useEffect(() => {
                const fetchData = async () => {
                        try {
                                dispatch(setLoading(true));

                                const mainApiUrl = `https://my-json-server.typicode.com/Nooh-Shoaib/OurServices/pagedata/${slug}`;
                                const enterpriseApiUrl = `https://my-json-server.typicode.com/Nooh-Shoaib/AdditionalData/pagedata/${slug}`;

                                const [mainResponse, enterpriseResponse] = await Promise.all([
                                        fetch(mainApiUrl),
                                        fetch(enterpriseApiUrl),
                                ]);

                                if (!mainResponse.ok || !enterpriseResponse.ok) {
                                        throw new Error(
                                                `HTTP error! Status: ${mainResponse.status} or ${enterpriseResponse.status}`
                                        );
                                }

                                const [mainData, enterpriseData] = await Promise.all([
                                        mainResponse.json(),
                                        enterpriseResponse.json(),
                                ]);

                                console.log("Main Data:", mainData);
                                console.log("Enterprise Data:", enterpriseData);

                                if (typeof mainData === "object" && mainData !== null) {
                                        dispatch(setData(mainData));
                                        dispatch(setEnterpriseData(enterpriseData));
                                        dispatch(setLoading(false));
                                } else {
                                        console.error("Invalid main data format");
                                        dispatch(setLoading(false));
                                }
                        } catch (error) {
                                console.error("Error fetching data:", error);
                                dispatch(setLoading(false));
                        }
                };

                fetchData();
        }, [dispatch, slug]);

        const mergeAndDestructure = (...objects) => {
                return objects.reduce((merged, obj) => ({ ...merged, ...obj }), {});
        };
        const replaceLinks = (text) => {
                return text
                        .replace(
                                /<Link to='(.+?)' className='text-blue-500 hover:text-blue-600'>/g,
                                (_, p1) =>
                                        `<a href="${p1}" className="text-blue-500 hover:text-blue-600">`
                        )
                        .replace(/<\/Link>/g, "</a>");
        };



        const {
                breadcrumbs,
                description,
                tech,
                demandDevs,
                selection,
                enterprise,
                portfolio,
        } = mergeAndDestructure(data, enterpriseData);
        const isLoading = loading && (
                <p className="text-5xl font-semibold flex justify-center items-center py-80">
                        Loading.....
                </p>
        );
        const renderContent = () => (
                <>
                        {" "}
                        {loading && (
                                <p className="text-5xl font-semibold flex justify-center items-center py-80">
                                        Loading.....
                                </p>
                        )}
                        {!loading && (
                                <Layout>
                                        {/* Display Breadcrumbs */}
                                        {breadcrumbs && <BreadcrumbsSection breadcrumbs={breadcrumbs} />}


                                        {/* Display Main Information */}
                                        {description && (
                                                <div className="my-10">
                                                        <h3 className="text-4xl font-semibold text-center">
                                                                {description[0].heading}
                                                        </h3>
                                                        <p
                                                                className="text-justify mx-36 leading-7 text-[1.1rem] my-5"
                                                                dangerouslySetInnerHTML={{
                                                                        __html: replaceLinks(description[0].text),
                                                                }}
                                                        />
                                                </div>
                                        )}
                                        <ScheduleMeeting />

                                        {/* Display Latest Technologies */}
                                        {tech.length > 0 && <LatestTechnologiesSection tech={tech} />}

                                        {/* Display Service Button */}
                                        <div className="flex justify-center">
                                                <button className="py-3 px-6 bg-black text-white hover:text-black border-black border-2 my-12 hover:bg-transparent duration-300 font-semibold rounded">
                                                        Avail Service
                                                </button>
                                        </div>

                                        {/* Display Demand Developers? */}
                                        {demandDevs && <DemandDevelopersSection demandDevs={demandDevs} />}

                                        {/* Display Why Choose 'The Custom Websites'*/}
                                        {selection && (
                                                <div className="py-24">
                                                        <h3 className="text-[2.20rem] font-semibold text-center pb-12 ">
                                                                {selection[0].heading}
                                                        </h3>

                                                        {/* Use the SelectionCards component here */}
                                                        <SelectionCards cards={selection[0].cards} replaceLinks={replaceLinks} />
                                                </div>
                                        )}
                                        {/* Display Small Business/Enterprise */}
                                        {enterprise && (
                                                <div className="py-12">
                                                        <h3 className="text-3xl font-semibold text-center">
                                                                {enterprise.heading}
                                                        </h3>
                                                        {enterprise.texts.map((text, index) => (
                                                                <p
                                                                        key={index}
                                                                        className="text-[1rem] py-4 text-justify mx-36"
                                                                        dangerouslySetInnerHTML={{ __html: replaceLinks(text) }}
                                                                />
                                                        ))}
                                                </div>
                                        )}
                                        {/* Display Frequently Asked Questions */}
                                        <div>
                                                <ServiceQuestions />
                                        </div>

                                        {/* Display Portfolio */}
                                        {portfolio && (
                                                <div>
                                                        <h3 className="text-4xl font-semibold py-9 text-center">
                                                                Our Portfolio
                                                        </h3>
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
                                </Layout>
                        )}
                </>
        );
        return <>{loading ? isLoading : renderContent()}</>;
};

export default OurServices;