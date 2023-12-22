import React, { useState } from 'react';

const projectTypes = [
        'Custom Web Development',
        'UI and UX Design',
        'SEM',
        'App Development',
        'Graphics & Branding',
        'Quality Assurance',
        'DevOps',
        'CMS',
        'SEO',
];

const niches = [
        'Jewelry',
        'Medical & Health',
        'Real Estate',
        'E-Commerce',
        'CBD',
        'ERP System',
        'IT & Startups',
        'Food & Restaurant',
        'Education & E-Learning',
        'Other',
];

export default function SubmitForm() {
        const [currentStep, setCurrentStep] = useState(1);
        const [selectedOptions, setSelectedOptions] = useState({
                1: '',
                2: '',
        });

        const handleStepChange = (step) => {
                setCurrentStep(step);
        };

        const handleRadioChange = (option) => {
                setSelectedOptions((prevOptions) => ({
                        ...prevOptions,
                        [currentStep]: option,
                }));
        };

        const renderRadioOptions = (options) => {
                return options.map((option, index) => (
                        <div key={index} className="col-span-1 space-y-2">
                                <input
                                        type="radio"
                                        id={`radioOption${index + 1}`}
                                        name="radioGroup"
                                        className="form-radio h-4 w-4 transition duration-150 ease-in-out"
                                        checked={selectedOptions[currentStep] === option}
                                        onChange={() => handleRadioChange(option)}
                                />
                                <label htmlFor={`radioOption${index + 1}`} className="ml-2 text-gray-700 text-base">
                                        {option}
                                </label>
                        </div>
                ));
        };
        return (
                <div className="flex justify-center items-center my-20">
                        <form>
                                {currentStep === 1 && (
                                        <fieldset className="border rounded-xl border-black bg-white mx-1 lg:mx-10 lg:w-96 md:w-52 h-auto">
                                                <div className="bg-[#202020] rounded-t-xl text-white lg:w-[520px] md:w-[208px] w-full mb-3 h-12 lg:h-14 items-center flex justify-center lg:font-medium text-xl lg:text-2xl">
                                                        Let's Discuss Your Project
                                                </div>
                                                <div className="grid grid-cols-2 gap-2 px-4 space-y-5">
                                                        <div className="col-span-2 space-y-2">
                                                                <h2 className="text-2xl">Select Your Project Type</h2>
                                                        </div>
                                                        {renderRadioOptions(projectTypes)}
                                                </div>
                                                <div className='flex justify-end px-3 py-5'>
                                                        <button type='button' onClick={() => handleStepChange(2)} className='bg-black py-2.5 px-3.5 rounded-full'>
                                                                <i className="fa-solid fa-arrow-right text-white"></i>
                                                        </button>
                                                </div>
                                        </fieldset>
                                )}

                                {currentStep === 2 && (
                                        <fieldset className="border rounded-xl border-black bg-white mx-1 lg:mx-10 lg:w-96 md:w-52 h-auto">
                                                <div className="bg-[#202020] rounded-t-xl text-white lg:w-[520px] md:w-[208px] w-full mb-3 h-12 lg:h-14 items-center flex justify-center lg:font-medium text-xl lg:text-2xl">
                                                        Great, in which niche?
                                                </div>
                                                <div className="grid grid-cols-2 gap-2 px-4 space-y-5">
                                                        <div className="col-span-2 space-y-2">
                                                                <h2 className="text-2xl">Great, in which niche?</h2>
                                                        </div>
                                                        {renderRadioOptions(niches)}
                                                </div>
                                                <div className='flex justify-center px-3 py-5 space-x-96 pl-7'>
                                                        <button type='submit' onClick={() => handleStepChange(1)} className='bg-black py-2.5 px-3.5  rounded-full'>
                                                                <i className="fa-solid fa-arrow-left text-white"></i>
                                                        </button>
                                                        <button type='submit' className='bg-black py-2.5 px-3.5  rounded-full'>
                                                                <i className="fa-solid fa-arrow-right text-white"></i>
                                                        </button>
                                                </div>
                                        </fieldset>
                                )}
                        </form>
                </div>
        );
}
