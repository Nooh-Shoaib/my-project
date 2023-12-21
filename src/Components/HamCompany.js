import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Accordion({ title, contents }) {
        const [isOpen, setIsOpen] = useState(false);
        const [visible, setVisible] = useState(false);

        const toggleAccordion = () => {
                setIsOpen(!isOpen);
        };

        useEffect(() => {
                if (isOpen) {
                        const timeoutId = setTimeout(() => {
                                setVisible(true);
                        }, 100);

                        return () => clearTimeout(timeoutId);
                } else {
                        setVisible(false);
                }
        }, [isOpen]);

        return (
                <div className="">
                        <button
                                className="text-left  flex transition-all duration-500"
                                onClick={toggleAccordion}
                        >
                                {title}
                                <svg
                                        className={`w-3 h-3 text-black transform ${isOpen ? 'rotate-180' : ''}`}
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                >
                                        <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clipRule="evenodd"
                                        />
                                </svg>
                        </button>

                        <div
                                className={`overflow-hidden rounded-md  transition-all duration-500 ${visible ? 'max-h-56' : 'max-h-0'}`}
                        >
                                {contents.map((content, index) => (
                                        <p className="border-b text-center py-2 items-center" key={index}>{content}</p>
                                ))}
                                <Link
                                        to="https://thecustomwebsites.com/wp-content/uploads/2023/05/Presentation-1.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='flex justify-center'
                                >
                                        <button
                                                type="button"
                                                className="px-9 py-2 rounded-lg font-semibold border-2 text-sm border-white text-white bg-black my-4"
                                        >
                                                Company Profile
                                        </button>
                                </Link>
                        </div>
                </div>
        );
}

function CompanyAccordion() {
        return (
                <div className="bg-white">
                        <Accordion
                                title="Company"
                                contents={[
                                        "About Us",
                                        "FAQs",
                                        "Customer Support",
                                        "Blog",

                                ]}
                        />
                </div>
        );
}

export default CompanyAccordion;
