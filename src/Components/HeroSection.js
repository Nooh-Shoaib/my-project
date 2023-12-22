import React from 'react';
import { Link } from 'react-router-dom';
import SubmitForm from './SubmitForm';

const HeroSection = () => {
        const heroStyle = {
                backgroundImage: `url('https://thecustomwebsites.com/wp-content/uploads/2023/05/custom-website-bg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px',
        };

        return (<>
                <div style={heroStyle}>
                        <h1 className='text-white text-4xl'>Let's Make <br />Your Project My Created</h1>
                        <div className='flex px-5 space-x-6 relative'>
                                <button className="btn py-2.5 px-2 rounded-md font-semibold border-2 mx-3 lg:mx-0 border-white bg-white text-black hover:bg-transparent hover:text-white my-3 text-lg">Schedule A meeting</button>
                                <Link
                                        to="https://thecustomwebsites.com/wp-content/uploads/2023/05/Presentation-1.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                >
                                        <button className=" py-2.5 px-4 rounded-lg font-semibold border-2 mx-3 lg:mx-0 border-white bg-transparent  my-3 text-white"><i className="fa-solid fa-cloud-arrow-down pr-2"></i>Company Profile</button>
                                </Link>
                        </div>
                        <div className='absolute top-32 right-10'>
                                <SubmitForm />
                        </div>
                </div>
        </>
        );
};

export default HeroSection;
