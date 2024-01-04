import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../Components/HeroSection';
import Layout from '../Components/Layout';
import OurOffers from '../Components/OurOffers';
import Portfolio from '../Components/Portfolio';
import OwlCasrousel from '../Components/OwlCarousel';
import { HowWork, Info, LatestTechnologies, Optimization } from '../Components/BussinessSection';
import { Agile, EcommerceSolution } from '../Components/AgileAndOptimization';
import FAQS from '../Components/FAQS';
import Testimonials from '../Components/Testimonials';
import Contact from '../Components/Contact';
import LoadingBar from '../Components/LinearProgressBar';
import AdvancedErrorBoundary from '../Components/ErrorBoundry';

const Home = () => {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
                const timeoutId = setTimeout(() => {
                        setLoading(false);
                }, 2000);

                // Cleanup the timeout to avoid memory leaks
                return () => clearTimeout(timeoutId);
        }, []);

        return (<AdvancedErrorBoundary>
                <div>
                        <Helmet>
                                <title>Home - Create Custom Websites</title>
                        </Helmet>
                        <LoadingBar loading={loading} />
                        {!loading && (
                                <Layout>
                                        <HeroSection />
                                        <HowWork />
                                        <OurOffers />
                                        <Info heading="Custom Website Development Company" />
                                        <Portfolio />
                                        <LatestTechnologies />
                                        <OwlCasrousel />
                                        <Optimization />
                                        <EcommerceSolution />
                                        <Agile />
                                        <FAQS />
                                        <Testimonials />
                                        <Contact />
                                </Layout>
                        )}
                </div>
        </AdvancedErrorBoundary>
        );
};

export default Home;
