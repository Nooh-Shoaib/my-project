import React, { useState, useEffect, useRef } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

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

        const handleVisibilityChange = (isVisible, index) => {
                if (isVisible) {
                        let currentCount = 0;
                        const interval = setInterval(() => {
                                currentCount += Math.ceil((projectFacts[index].end - currentCount) * 0.1);
                                setProjectFacts((prevFacts) => {
                                        const updatedFacts = [...prevFacts];
                                        updatedFacts[index].number = currentCount;
                                        return updatedFacts;
                                });

                                if (currentCount >= projectFacts[index].end) {
                                        clearInterval(interval);
                                }
                        }, 100);
                }
        };

        useEffect(() => {
                if (aboutMeImgRef.current) {
                        aboutMeImgRef.current.addEventListener('mouseenter', handleAuthorHover);
                        aboutMeImgRef.current.addEventListener('mouseleave', handleAuthorHover);
                }

                return () => {
                        if (aboutMeImgRef.current) {
                                aboutMeImgRef.current.removeEventListener('mouseenter', handleAuthorHover);
                                aboutMeImgRef.current.removeEventListener('mouseleave', handleAuthorHover);
                        }
                };
        }, []);

        return (
                <div>
                        <div className="">
                                <div className=" lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-6 container lg:px-0 md:px-0 px-6  lg:space-y-0 md:space-y-0 space-y-7 lg:mx-0">
                                        {projectFacts.map((fact, index) => (
                                                <VisibilitySensor
                                                        key={index}
                                                        onChange={(isVisible) => handleVisibilityChange(isVisible, index)}
                                                >
                                                        <div
                                                                className="text-center container py-16 rounded-2xl lg:w-[250px] lg:h-[200px]"
                                                                data-number={fact.end}
                                                                style={{
                                                                        visibility: 'visible',
                                                                        backgroundImage: 'url("https://thecustomwebsites.com/wp-content/uploads/2023/05/icon-bg.jpg"',
                                                                        backgroundPosition: 'bottom center',
                                                                        backgroundRepeat: 'no-repeat',
                                                                        backgroundSize: 'cover',
                                                                }}
                                                        >
                                                                <p className="text-3xl font-bold mb-2 text-white">{fact.number}</p>
                                                                <p className="text-white px-1">{fact.label}</p>
                                                        </div>
                                                </VisibilitySensor>
                                        ))}
                                </div>
                        </div>
                </div>
        );
};

export default AnimatedCounter;
