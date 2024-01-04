import React from 'react';

const SelectionCards = ({ cards, replaceLinks }) => {
        return (
                <div className="max-w-[1425px] mx-auto grid lg:grid-cols-2 grid-cols-2 md:grid-cols-4 lg:px-20 md:px-20 gap-x-12 gap-y-6 py-0 px-1">
                        {cards.map((card, index) => (
                                <div
                                        key={index}
                                        className="shadow-2xl inline-flex rounded-xl w- shadow-gray-400 py-10 px-6 h-80 justify-center align-middle"
                                >
                                        <img src={card.icon} alt={`icon-${index}`} className="max-h-20 w-24" />
                                        <div className="px-12">
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
