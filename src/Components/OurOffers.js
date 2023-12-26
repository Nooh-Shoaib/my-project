import React from 'react';

const sections = [
        {
                title: 'USER EXPERIENCE DESIGN',
                image: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/ux-desi.jpg',
                content: [
                        'Information Architecture',
                        'Interaction Design',
                        'Content Inventory',
                        'Graphic/User Interface Design',
                ],
                button: 'More On UX Design',

        },
        {
                title: 'APPLICATION DEVELOPMENT',
                image: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/app-deve.jpg',
                content: [
                        'Mobile Development',
                        'Full Stack Development',
                        'Hardware Based Compatibility Development',
                        'Agile | Scrum Development',
                        'Web Applications',
                        'Quality Assurance',
                        'Manual, Automated & Load Testing',
                ],
                button: 'More On App Development',

        },
        {
                title: 'TECHNOLOGY STRATEGY',
                image: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/technology-arch.jpg',
                content: [
                        'Technical Architecture',
                        'Interaction Design',
                        'Big Data Organization',
                        'Analytics & Intelligence',
                        'Deployment & Integration',
                        'Cloud Deployment',
                        'Engineering Evaluations',
                        'Code Reviews',
                        'Database Audits',
                ],
                button: 'More On Tech Strategy',

        },
        {
                title: 'DEDICATED TEAMS',
                image: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/dedicated-team-developers.jpg',
                content: [
                        'Onsite Teams',
                        'Near Shore Teams',
                        'Hybrid Teams',
                        'Process Development',
                        'Agile Management',
                        'Training to Team (T2T)',
                ],
                button: 'More On Dedicated Teams',
        },
];



const OurOffers = () => {
        return (
                <div className='bg-[#F1F1F1] py-5'>
                        <h1 className='text-center font-semibold text-4xl py-5'>What We Do?</h1>
                        {sections.map((section, index) => (
                                <div className='flex justify-center py-3' key={index}>
                                        <div
                                                style={{
                                                        order: index % 2 === 0 ? 1 : 2,
                                                        backgroundImage: `url(${section.image})`,
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        height: '400px',
                                                        width: '550px',
                                                }}
                                        ></div>

                                        <div
                                                style={{
                                                        order: index % 2 === 0 ? 2 : 1,
                                                }}
                                                className='bg-white border-r-2 border-black w-[550px]  items-center relative'
                                        >
                                                <h2 className='text-center py-4 font-semibold text-xl'>{section.title}</h2>
                                                <hr style={{ width: '100%', height: '2px', background: 'gray', margin: '10px 0' }} />
                                                <ul className='px-12 list-disc pt-0 my-3'>
                                                        {section.content.map((item, i) => (
                                                                <li key={i}>{item}</li>
                                                        ))}
                                                </ul>
                                                <div className='text-center absolute bottom-7 container mx-auto'>
                                                        <button className='border-2 border-black px-16 py-2 rounded transition-all font-semibold hover:font-bold hover:bg-black hover:text-white'>
                                                                {section.button}
                                                        </button>
                                                </div>
                                        </div>
                                </div>
                        ))
                        }
                </div >
        );
};

export default OurOffers;       