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

        const updateText = () => {
                const currentWord = words[wordIndex];
                const currentText = currentWord.substring(0, textIndex + 1);

                setTextIndex((prevIndex) => prevIndex + 1);

                if (textIndex === currentWord.length) {
                        setTimeout(() => {
                                setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                                setTextIndex(0);
                                setDisplayedText('');
                        }, 2000);
                }

                setDisplayedText(currentText);
        };

        useEffect(() => {
                const intervalId = setInterval(updateText, 350);

                return () => clearInterval(intervalId);
        }, [wordIndex, textIndex]);
        return (
                <div
                        style={{
                                backgroundImage: 'url("https://thecustomwebsites.com/wp-content/uploads/2023/05/custom-website-bg.jpg")',
                                backgroundPosition: 'bottom center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                height: '595px',
                        }}

                        className="hero-container"
                >
                        <div className="py-48 px-32">
                                <h1 className="text-white text-[2.6rem] leading-normal px-6 fade-in">
                                        Let's Make <br />
                                        Your Project My{' '}
                                        <strong className="word-transition">{displayedText}</strong>
                                </h1>
                                <div className="flex px-5 space-x-6 relative pt-6">
                                        <button className="btn py-2.5 px-3 rounded-md font-semibold border-2 mx-3 lg:mx-0 border-white bg-white text-black  my-3 text-lg">
                                                Schedule a meeting Now!
                                        </button>
                                        <Link
                                                to="https://thecustomwebsites.com/wp-content/uploads/2023/05/Presentation-1.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                        >
                                                <button className="py-2.5 px-4 rounded-lg font-semibold border-2 mx-3 lg:mx-0 border-white bg-transparent my-3 text-white">
                                                        Get On Demand Developers
                                                </button>
                                        </Link>
                                </div>
                        </div>
                        <div className="absolute top-32 right-24">
                                <SubmitForm backgroundUrl={backgroundUrl} heading={heading} />
                        </div>
                </div>
        );
};

export default HeroSection;
