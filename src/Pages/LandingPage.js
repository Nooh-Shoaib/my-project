import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../Components/HeroSection';
import Layout from '../Components/Layout';
import HowWork from '../Components/HowWork';
import OurOffers from '../Components/OurOffers';
import Info from '../Components/Info';
import Portfolio from '../Components/Portfolio';
import LatestTechnologies from '../Components/LatestTechnologies';
import OwlCasrousel from '../Components/OwlCarousel';
import Optimization from '../Components/Optimization';

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
                        </Layout>
                </div>
        );
}

export default Home;
