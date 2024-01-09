import React from 'react';

const SelectionCards = ({ cards, replaceLinks }) => {
        return (
                <div className="max-w-[1425px] lg:mx-auto grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 lg:px-20 md:px-0 gap-x-12 lg:gap-y-6 py-0 px-1 mx-4">
                        {cards.map((card, index) => (
                                <div
                                        key={index}
                                        className=" lg:inline-flex rounded-xl w-full lg:w-full shadow-gray-400 py-10 px-6 h-auto lg:justify-center lg:align-middle mb-8 lg:mb-0 border"
                                >
                                        <img src={card.icon} alt={`icon-${index}`} className="max-h-20 w-24 " />
                                        <div className="lg:px-12 px-4">
                                                <h3 className="text-xl font-semibold py-2">{card.heading}</h3>
                                                <p
                                                        className="text-justify text-[1rem]"
                                                        dangerouslySetInnerHTML={{
                                                                __html: replaceLinks(card.text),
                                                        }}
                                                />
                                        </div>
                                </div>
                        ))}
                </div>
        );
};

export default SelectionCards;
