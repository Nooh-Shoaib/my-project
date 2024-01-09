import React from 'react';

const LatestTechnologiesSection = ({ tech }) => {
        return (
                <div className='my-16'>
                        {tech && Array.isArray(tech) && tech.length > 0 && (
                                <>
                                        <h3 className="text-4xl font-semibold text-center py-3">{tech[0]?.techHeading}</h3>
                                        <p className="text-center mx-5 lg:mx-36 leading-7 text-[1.1rem] my-5">{tech[0]?.techText}</p>

                                        {/* Display Latest Technologies Cards*/}
                                        <div className="container mx-auto">
                                                {tech[0].cards && tech[0].cards.length > 0 && (
                                                        <div className="max-w-[1425px] mx-auto grid lg:grid-cols-3 grid-cols-1 md:grid-cols-3 lg:px-20 md:px-3 gap-x-12 gap-y-6 py-0 px-1">
                                                                {tech[0].cards.map((card, index) => (
                                                                        <div key={index}>
                                                                                <img src={card.icon} alt={`icon-${index}`} className="mx-auto" />
                                                                                <h3 className="text-xl font-bold text-center py-5">{card.heading}</h3>
                                                                                <p className="text-center">{card.text}</p>
                                                                        </div>
                                                                ))}
                                                        </div>
                                                )}

                                                {/* Display Testing Cards */}
                                                {tech[0].testing && tech[0].testing.length > 0 && (
                                                        <div className="l;gmax-w-[1425px] mx-auto grid lg:grid-cols-4 grid-cols-1 md:grid-cols-4 lg:px-20 md:px-5 gap-x-12 gap-y-6 py-0 px-1">
                                                                {tech[0].testing.map((testing, index) => (
                                                                        <div key={index}>
                                                                                <img src={testing.icon} alt={`icon-${index}`} className="mx-auto" />
                                                                                <h3 className="text-xl font-bold text-center py-5">{testing.heading}</h3>
                                                                                <p className="text-center">{testing.text}</p>
                                                                        </div>
                                                                ))}
                                                        </div>
                                                )}
                                        </div>
                                </>
                        )}
                </div>
        );
};

export default LatestTechnologiesSection;
