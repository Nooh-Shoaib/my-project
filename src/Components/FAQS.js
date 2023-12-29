import React, { useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import data from "./AccordionData"; // Adjust the path accordingly

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
        const contentHeight = useRef();

        return (
                <div className="mb-2">
                        <button
                                className={`flex w-full lg:h-16 h-24 items-center font-bold lg:px-4 hover:text-white hover:bg-[#202020] hover:transition-all hover:duration-300 duration-300 ${isOpen ? "bg-[#202020] rounded-lg text-white" : "shadow-gray-300 shadow-lg rounded-lg text-gray-800"
                                        }`}
                                onClick={onClick}
                        >
                                <p className="text-base flex-grow pr-4 text-center lg:text-left" dangerouslySetInnerHTML={{ __html: question }} />
                                <RiArrowDropDownLine
                                        className={`transform ${isOpen ? "rotate-180 text-white" : ""} text-black hover:text-white`}
                                />
                        </button>

                        <div
                                ref={contentHeight}
                                className="overflow-hidden transition-height duration-300"
                                style={isOpen ? { height: contentHeight.current.scrollHeight + "px" } : { height: "0" }}
                        >
                                <div className="lg:text-base text-sm" dangerouslySetInnerHTML={{ __html: answer }} />
                        </div>
                </div>
        );
};

const Accordion = () => {
        const [activeIndex, setActiveIndex] = useState(null);

        const handleItemClick = (index) => {
                setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
        };

        return (
                <div>
                        <h1 className="text-4xl font-semibold text-center my-16">Frequently Asked Questions</h1>

                        <div className="grid gap-y-4 gap-x-7 mx-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:mx-60 shadow-black">
                                <div>
                                        {data.slice(0, Math.ceil(data.length / 2)).map((item, index) => (
                                                <AccordionItem
                                                        key={index}
                                                        question={item.question}
                                                        answer={item.answer}
                                                        isOpen={activeIndex === index}
                                                        onClick={() => handleItemClick(index)}
                                                />
                                        ))}
                                </div>

                                <div>
                                        {data.slice(Math.ceil(data.length / 2)).map((item, index) => (
                                                <AccordionItem
                                                        key={Math.ceil(data.length / 2) + index}
                                                        question={item.question}
                                                        answer={item.answer}
                                                        isOpen={activeIndex === Math.ceil(data.length / 2) + index}
                                                        onClick={() => handleItemClick(Math.ceil(data.length / 2) + index)}
                                                />
                                        ))}
                                </div>
                        </div>
                </div>
        );
};

export default Accordion;
