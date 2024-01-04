import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';


const data = [

        {
                question: "What Is Custom Website Development?",
                answer: "Custom website development is a process where a website is built from scratch to meet a client’s specific requirements. Unlike template-based websites, The Custom Websites offers more flexibility in design, functionality, and scalability, providing a unique digital presence tailored to your business.."
        },
        {
                question: "How Long Does It Take To Develop A Custom Website?",
                answer: "The time taken to develop a custom website depends on the complexity of the design, the number of pages, and the required functionalities. On average, a full-scale custom web development can take anywhere between 6 to 10 weeks. However, this timeline may vary based on your specific needs and revisions."
        },
        {
                question: "Can I Update My Website Content After It's Developed?",
                answer: "Yes, absolutely. Once your custom website is developed, you will have the ability to update the content. We also provide a user-friendly content management system (CMS) training to help you manage your website updates independently."
        },
        {
                question: "Can I Add E-Commerce Functionality To My Custom Website?",
                answer: "Yes, we can integrate e-commerce functionality into your custom website development. Whether you need a simple online store or a more complex e-commerce system, our team can customize the solution to meet your specific needs."
        },
        {
                question: "What Is Custom WordPress Development?",
                answer: "Custom WordPress development involves creating a unique WordPress website from scratch. It includes creating a custom theme and plugins tailored specifically for your website. Unlike off-the-shelf themes, a custom WordPress website allows for more control over the design, functionality, and performance."
        },
        {
                question: "What Are The Benefits Of Having A Custom Website?",
                answer: "A custom website provides several benefits. It offers a unique design that aligns with your brand, improving your online presence. It is also more adaptable to your company’s needs and can grow as your business grows. A custom website is also optimized for search engines, offering better SEO performance."
        },
        {
                question: "What Is The Difference Between WordPress And Custom Website?",
                answer: "WordPress is a content management system (CMS) that allows you to create and manage a website using pre-built themes and plugins. On the other hand, a custom website is built from scratch using various coding languages like HTML, CSS, and JavaScript. While WordPress is easier to manage and update, a custom website provides more flexibility and uniqueness in design and functionality."
        },
];


const AccordionItem = ({ question, answer, isOpen, onClick }) => {
        const contentHeight = useRef();

        return (
                <div className="">
                        <button
                                className={`flex w-full lg:h-12 h-24 items-center font-bold lg:px-4  duration-300 rounded-lg text-gray-800`}
                                onClick={onClick}
                        >
                                <FontAwesomeIcon
                                        icon={faCaretRight}
                                        className={`transform ${isOpen ? "rotate-90 " : ""} text-black px-3`}
                                />
                                <p className="text-base flex-grow pr-4 text-center lg:text-left" dangerouslySetInnerHTML={{ __html: question }} />

                        </button>

                        <div
                                ref={contentHeight}
                                className="overflow-hidden transition-height duration-300"
                                style={isOpen ? { height: contentHeight.current.scrollHeight + "px" } : { height: "0" }}
                        >
                                <div className="lg:text-base text-sm mx-12" dangerouslySetInnerHTML={{ __html: answer }} />
                        </div>
                        <hr />
                </div>
        );
};

const ServiceQuestions = () => {
        const [activeIndex, setActiveIndex] = useState(null);

        const handleItemClick = (index) => {
                setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
        };

        return (
                <div className="my-12">
                        <h1 className="text-4xl font-semibold text-center my-10">Frequently Asked Questions</h1>

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

export default ServiceQuestions;
