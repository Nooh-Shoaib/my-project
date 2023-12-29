import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = () => {
        const [projectFacts, setProjectFacts] = useState([
                { number: 0, end: 154, label: 'Projects done' },
                { number: 0, end: 25, label: 'Enterprise Clients' },
                { number: 0, end: 12, label: 'Enterprise Clients' },
                { number: 0, end: 98, label: 'Client Retention' },
        ]);

        const aboutMeImgRef = useRef(null);
        const authorWindowWrapperRef = useRef(null);

        const handleAuthorHover = () => {
                if (authorWindowWrapperRef.current) {
                        authorWindowWrapperRef.current.classList.toggle('trans');
                }
        };

        useEffect(() => {
                if (aboutMeImgRef.current) {
                        aboutMeImgRef.current.addEventListener('mouseenter', handleAuthorHover);
                        aboutMeImgRef.current.addEventListener('mouseleave', handleAuthorHover);
                }

                handleVisibilityChange();

                return () => {
                        if (aboutMeImgRef.current) {
                                aboutMeImgRef.current.removeEventListener('mouseenter', handleAuthorHover);
                                aboutMeImgRef.current.removeEventListener('mouseleave', handleAuthorHover);
                        }
                };
        }, []);
        const handleVisibilityChange = () => {
                projectFacts.forEach((fact, index) => {
                        let currentCount = 0;
                        const interval = setInterval(() => {
                                currentCount += Math.ceil((fact.end - currentCount) * 0.1);
                                setProjectFacts((prevFacts) => {
                                        const updatedFacts = [...prevFacts];
                                        updatedFacts[index].number = currentCount;
                                        return updatedFacts;
                                });

                                if (currentCount >= fact.end) {
                                        clearInterval(interval);
                                }
                        }, 100);
                });
        };

        return (
                <div>
                        {/* <div className="section-title text-center mb-8">
                                <h2 className="text-4xl font-bold">Projects Statistics</h2>
                                <span className="block w-20 h-1 bg-gray-800 mx-auto mt-4"></span>
                        </div> */}
                        <div className="">
                                <div className=" my-24">
                                        <div className="grid grid-cols-2 gap-6">
                                                {projectFacts.map((fact, index) => (
                                                        <div
                                                                key={index}
                                                                className="item wow fadeInUpBig animated animated text-center container py-16 rounded-2xl "
                                                                data-number={fact.end}
                                                                style={{
                                                                        visibility: 'visible',
                                                                        backgroundImage: 'url("https://thecustomwebsites.com/wp-content/uploads/2023/05/icon-bg.jpg"',
                                                                        backgroundPosition: 'bottom center',
                                                                        backgroundRepeat: 'no-repeat',
                                                                        backgroundSize: 'cover',
                                                                        width: '250px',
                                                                        height: '200px',

                                                                }}
                                                        >
                                                                <p className="text-3xl font-bold mb-2 text-white">{fact.number}</p>
                                                                <p className=" text-white">{fact.label}</p>
                                                        </div>
                                                ))}
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default AnimatedCounter;
