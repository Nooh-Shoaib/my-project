import React from "react";

const ServicesList = ({ heading, subheading, lists, text, replaceLinks }) => (
        <>
                <div className={`font-semibold ${subheading ? 'lg:text-2xl' : 'lg:text-4xl'}`}>
                        {heading && <h3 className="lg:text-4xl text-2xl text-center my-5 lg:mx-0 mx-4">{heading}</h3>}
                        {subheading && <h4 className="lg:text-2xl text-center">{subheading}</h4>}
                </div>

                <h2 className="text-2xl mx-36 my-3">{lists && lists[0].listheading}</h2>
                <ol className="lg:mx-44 mx-6">
                        {lists && lists.map((item, index) => (
                                <li key={index} className="list-decimal">{item}</li>
                        ))}
                </ol>

                <p
                        className={`lg:mx-36 mx-4 lg:leading-7 lg:text-center text-start lg:text-[1.1rem] text-base my-5 ${text ? 'lg:text-center' : 'text-start'}`}
                        dangerouslySetInnerHTML={{ __html: replaceLinks(text) || text }}
                />
        </>
);

export default ServicesList;
