import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../Components/HeroSection';
import Layout from '../Components/Layout';
import OurOffers from '../Components/OurOffers';
import Portfolio from '../Components/Portfolio';
import OwlCasrousel from '../Components/OwlCarousel';
import { EcommerceSolution, HowWork, Info, LatestTechnologies } from '../Components/BussinessSection';
import { Agile, Optimization } from '../Components/AgileAndOptimization';
import FAQS from '../Components/FAQS'
import AnimatedCounter from '../Components/AnimatedCounter';
import Testimonials from '../Components/Testimonials';
const Home = () => {
        return (
                <div>
                        <Helmet>
                                <title>Home - Create Custom Websites</title>
                        </Helmet>
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
                                {/* <AnimatedCounter /> */}
                                <Testimonials />
                        </Layout>
                </div>
        );
}

export default Home;
