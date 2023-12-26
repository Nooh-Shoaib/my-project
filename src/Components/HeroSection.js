import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SubmitForm from './SubmitForm';


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
                        }, 2000); // 1-second delay before moving to the next word
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
                                backgroundImage: `url('https://thecustomwebsites.com/wp-content/uploads/2023/05/custom-website-bg.jpg')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '500px',
                        }}
                        className="hero-container"
                >
                        <div className="py-36 px-20">
                                <h1 className="text-white text-4xl leading-normal px-6 fade-in">
                                        Let's Make <br />
                                        Your Project My{' '}
                                        <strong className="word-transition">{displayedText}</strong>
                                </h1>
                                <div className="flex px-5 space-x-6 relative pt-6">
                                        <button className="btn py-2.5 px-2 rounded-md font-semibold border-2 mx-3 lg:mx-0 border-white bg-white text-black hover:bg-transparent hover:text-white my-3 text-lg">
                                                Schedule A meeting
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
                                <SubmitForm />
                        </div>
                </div>
        );
};

export default HeroSection;
