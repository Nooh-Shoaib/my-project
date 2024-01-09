import React from 'react';
import { Link } from 'react-router-dom';

const inputFields = [
        { id: 'name', label: 'Full Name*', type: 'text' },
        { id: 'email', label: 'Email Address*', type: 'email' },
        { id: 'number', label: 'Phone Number', type: 'text' },
];

const serviceOptions = [
        'Select Service',
        'Custom Web Development',
        'UI & UX Design',
        'SEM',
        'App Development',
        'Graphic Branding',
        'Quality Assurance',
        'DevOps',
        'CMS',
        'SEO',
        'Other',
];

const Contact = () => {
        const handleSubmit = (event) => {
                event.preventDefault();
                // Handle form submission logic here
        };

        const renderInputFields = () => {
                return (
                        <div className="lg:grid lg:grid-cols-2  md:grid md:grid-cols-2 md:gap-4 ">
                                {inputFields.map((field) => (
                                        <div key={field.id}>
                                                <input
                                                        type={field.type}
                                                        id={field.id}
                                                        name={field.id}
                                                        required
                                                        placeholder={field.label}
                                                        className="ring-1 focus:outline-none lg:w-[450px] md:w-[300px] w-[250px]  px-3 ring-gray-400 rounded lg:px-5 md:px-1 py-3 lg:mb-0 mb-4"
                                                />
                                        </div>
                                ))}
                                <select
                                        required
                                        className="ring-1 focus:outline-none lg:w-[450px] md:w-[300px] w-[250px] ring-gray-400 rounded lg:px-5 md:px-1 py-3 lg:mb-0 mb-4"
                                >
                                        {serviceOptions.map((option) => (
                                                <option key={option}>{option}</option>
                                        ))}
                                </select>
                        </div>
                );
        };

        return (
                <div className="my-9">
                        <h1 className="text-center font-semibold lg:text-[2.25rem] md:text-[2.25rem] text-3xl my-4 lg:mx-0 md:mx-0 mx-5">Contact Us For Expert Advice</h1>
                        <div className="text-center text-base py-1">
                                Call us at{' '}
                                <Link to="+1-213-416-7355" className="text-blue-600 hover:text-blue-700">
                                        +1-213-416-7355
                                </Link>{' '}
                                or fill in the form below, and our experts would reach you back in 24 Hrs.
                                <form onSubmit={handleSubmit}>
                                        <div className="flex justify-center space-x-8 py-4">{renderInputFields()}</div>

                                        <div className="md:flex md:justify-center">
                                                <textarea
                                                        className="border placeholder:px-3  px-4 py-2 mx-2 w-[250px]  md:w-[610px] ring-1 ring-gray-400  h-24 lg:w-[910px] focus:outline-none"
                                                        placeholder="Any Message? Write here...."
                                                        name="message"
                                                ></textarea>
                                        </div>
                                        <div className="flex justify-center">
                                                <button
                                                        type="submit"
                                                        className="bg-[#202020] text-white font-semibold  duration-500 md:w-[360px] w-[250px] mx-0.5 py-2 lg:w-[480px] lg:mx-3 rounded my-2 md:mx-2 hover:text-black hover:bg-white border-black border-2"
                                                >
                                                        Submit
                                                </button>
                                        </div>
                                </form>
                        </div>
                </div>
        );
};

export default Contact;
