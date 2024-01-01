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
                        className="lg:h-[595px] h-[900px] "
                        style={{
                                backgroundImage: 'url("https://thecustomwebsites.com/wp-content/uploads/2023/05/custom-website-bg.jpg")',
                                backgroundPosition: 'bottom center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                        }}
                >
                        <div className="lg:py-48 md:py-40 pt-12 px-8 md:px-0 lg:px-32 ">
                                <h1 className="text-white text-3xl md:text-[2.2rem] xl:text-[40px]  lg:text-justify md:text-justify text-center lg:text-4xl leading-normal px-6 ">
                                        Let's Make <br />
                                        Your Project My{' '}<br className='lg:hidden' />
                                        <strong className="word-transition">{displayedText}</strong>
                                </h1>
                                <div className="lg:flex relative pt-3 px-4 lg:space-x-2">
                                        <div>
                                                <button className=" py-2.5 px-3 md:px-2 lg:px-5 rounded-md border-2 mx-3 md:mx-0 lg:mx-0 border-white bg-white text-black my-3 lg:text-lg text-base">
                                                        Schedule a meeting Now!
                                                </button>
                                        </div>
                                        <div>
                                                <Link
                                                        to="https://thecustomwebsites.com/wp-content/uploads/2023/05/Presentation-1.pdf"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                >
                                                        <button className="lg:py-2.5 md:py-2.5 px-4 md:px-2 lg:px-6 rounded-lg font-semibold border-2 mx-3 md:mx-0 lg:mx-0 border-white bg-transparent my-3 text-white lg:text-lg text-base">
                                                                Get On Demand Developers
                                                        </button>
                                                </Link>
                                        </div>
                                </div>
                        </div>
                        <div className="lg:absolute md:absolute  md:top-20 lg:top-48  md:right-0 lg:right-24">
                                <SubmitForm backgroundUrl={backgroundUrl} heading={heading} />
                        </div>
                </div>
        );
};

export default HeroSection;