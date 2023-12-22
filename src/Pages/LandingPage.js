import React from 'react'
import HeroSection from '../Components/HeroSection'
import Layout from '../Components/Layout'
import SubmitForm from '../Components/SubmitForm'
const Home = () => {
        return (
                <div>
                        <Layout>
                                <HeroSection />
                                <SubmitForm />
                        </Layout>
                </div>
        )
}

export default Home
