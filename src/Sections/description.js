import React from "react";

const ServicesList = ({ heading, subheading, lists, text, replaceLinks }) => (
        <>
                <div className={`font-semibold ${subheading ? 'text-2xl' : 'text-4xl'}`}>
                        {heading && <h3 className="text-4xl text-center my-5">{heading}</h3>}
                        {subheading && <h4 className="text-2xl text-center">{subheading}</h4>}
                </div>

                <h2 className="text-2xl mx-36 my-3">{lists && lists[0].listheading}</h2>
                <ol className="mx-44">
                        {lists && lists.map((item, index) => (
                                <li key={index} className="list-decimal">{item}</li>
                        ))}
                </ol>

                <p
                        className={`mx-36 leading-7 text-[1.1rem] my-5 ${text ? 'text-center' : 'text-start'}`}
                        dangerouslySetInnerHTML={{ __html: replaceLinks(text) || text }}
                />
        </>
);

export default ServicesList;
