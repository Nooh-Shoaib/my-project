import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SubmitForm from './SubmitForm';

const backgroundUrl = 'https://thecustomwebsites.com/wp-content/uploads/2023/05/form-bg-1.png';
const heading = "Let's Discuss Your Project";

const HeroSection = () => {
        const words = ['Created', 'Redesigned', 'Boost Up'];
        const [wordIndex, setWordIndex] = useState(0);
        const [textIndex, setTextIndex] = useState(0);
        const [displayedText, setDisplayedText] = useState('');

        useEffect(() => {
                const updateText = () => {
                        const currentWord = words[wordIndex];
                        const currentText = currentWord.substring(0, textIndex + 1);

                        setTextIndex((prevIndex) => prevIndex + 1);

                        if (textIndex === currentWord.length) {
                                setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                                setTextIndex(0);
                                setDisplayedText('');
                        }

                        setDisplayedText(currentText);
                };

                const intervalId = setInterval(updateText, 350);

                return () => clearInterval(intervalId);
        }, [wordIndex, textIndex, words]);

        return (
                <div
                        className="lg:h-[595] h-[900px] "
                        style={{
                                backgroundImage: 'url("https://thecustomwebsites.com/wp-content/uploads/2023/05/custom-website-bg.jpg")',
                                backgroundPosition: 'bottom center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                        }}
                >
                        <div className="lg:py-48 pt-12 px-8 md:px-16 lg:px-32 ">
                                <h1 className="text-white text-3xl md:text-3xl font-semibold lg:text-justify text-center  lg:text-4xl leading-normal px-6 ">
                                        Let's Make <br />
                                        Your Project My{' '}<br />
                                        <strong className="word-transition">{displayedText}</strong>
                                </h1>
                                <div className="flex flex-col md:flex-row md:space-x-6 relative pt-6">
                                        <button className=" py-2.5 px-3 md:px-4 lg:px-5 rounded-md border-2 mx-3 lg:mx-0 border-white bg-white text-black my-3 lg:text-lg text-base">
                                                Schedule a meeting Now!
                                        </button>
                                        <Link
                                                to="https://thecustomwebsites.com/wp-content/uploads/2023/05/Presentation-1.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                        >
                                                <button className="lg:py-2.5 px-4 md:px-5 lg:px-6 rounded-lg font-semibold border-2 mx-3 lg:mx-0 border-white bg-transparent my-3 text-white lg:text-lg text-base">
                                                        Get On Demand Developers
                                                </button>
                                        </Link>
                                </div>
                        </div>
                        <div className="lg:absolute  md:top-40 lg:top-48 right-4 md:right-12 lg:right-24">
                                <SubmitForm backgroundUrl={backgroundUrl} heading={heading} />
                        </div>
                </div>
        );
};

export default HeroSection;
