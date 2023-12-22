import React, { useState } from 'react';
import UploadFile from './UploadButton';

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

const inputFields = [
        { id: 'name', label: 'Full Name*', type: 'text' },
        { id: 'email', label: 'Email Address*', type: 'email' },
        { id: 'number', label: 'Phone Number*', type: 'text' },
        { id: 'url', label: 'Competitor URL*', type: 'url' },
];

export default function SubmitForm() {
        const [currentStep, setCurrentStep] = useState(1);
        const [selectedOptions, setSelectedOptions] = useState({
                1: '',
                2: '',
        });


        const [formData, setFormData] = useState({
                name: '',
                email: '',
                number: '',
                url: '',
                message: '',
        });

        const [errorMessage, setErrorMessage] = useState('');

        const handleStepChange = (step) => {
                const isOptionSelected = selectedOptions[currentStep] !== '';

                if (!isOptionSelected) {
                        setErrorMessage('Please select a field before proceeding.');
                        return;
                }

                setErrorMessage('');

                setCurrentStep(step);
        };

        const handleRadioChange = (option) => {
                setSelectedOptions((prevOptions) => ({
                        ...prevOptions,
                        [currentStep]: option,
                }));
        };

        const handleChange = (e) => {
                const { name, value } = e.target;
                setFormData((prevData) => ({
                        ...prevData,
                        [name]: value,
                }));
        };

        const handleSubmit = (e) => {
                e.preventDefault();
                // You can handle the form submission here, e.g., send the data to the server
                console.log('Form Data:', formData);
        };



        const renderInputFields = () => {
                return (
                        <div className="grid grid-cols-2 gap-4">
                                {inputFields.map((field) => (
                                        <div key={field.id}>
                                                <input
                                                        type={field.type}
                                                        id={field.id}
                                                        name={field.id}
                                                        value={formData[field.id]}
                                                        onChange={handleChange}
                                                        required
                                                        placeholder={field.label}
                                                        className="ring-1 ring-gray-400 rounded px-5 py-2"
                                                />
                                        </div>
                                ))}
                        </div>
                );
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
                <div className=" my-20">
                        <form onSubmit={handleSubmit}>
                                {errorMessage && <p className="text-red-500 flex justify-center">{errorMessage}</p>}
                                {currentStep === 1 && (
                                        <fieldset
                                                className="rounded-xl shadow-xl bg-white mx-1 lg:mx-10 lg:w-96 md:w-52 h-[500px]"
                                                style={{
                                                        backgroundImage: `url('https://thecustomwebsites.com/wp-content/uploads/2023/05/form-bg-1.png')`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        backgroundRepeat: 'no-repeat',
                                                        height: '70vh',
                                                }}
                                        >                                                <div className="bg-[#202020]  rounded-t-lg text-white lg:w-[520px] md:w-[208px] w-full mb-3 h-12 lg:h-14 items-center flex justify-center lg:font-medium text-xl lg:text-2xl">
                                                        Let's Discuss Your Project
                                                </div>
                                                <div className="grid grid-cols-2 gap-2 px-4 space-y-5">
                                                        <div className="col-span-2 space-y-2">
                                                                <h2 className="text-2xl">Select Your Project Type</h2>
                                                        </div>
                                                        {renderRadioOptions(projectTypes)}
                                                </div>
                                                <div className="flex justify-end px-3 py-5">
                                                        <button type="button" onClick={() => handleStepChange(2)} className="bg-black py-2.5 px-3.5 rounded-full">
                                                                <i className="fa-solid fa-arrow-right text-white"></i>
                                                        </button>
                                                </div>
                                        </fieldset>
                                )}
                                {currentStep === 2 && (
                                        <fieldset
                                                className="rounded-xl shadow-xl bg-white mx-1 lg:mx-10 lg:w-96 md:w-52 h-[500px]"
                                                style={{
                                                        backgroundImage: `url('https://thecustomwebsites.com/wp-content/uploads/2023/05/form-bg-1.png')`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        backgroundRepeat: 'no-repeat',
                                                        height: '70vh',
                                                }}
                                        >                                             <div className="bg-[#202020] rounded-t-lg text-white lg:w-[520px] md:w-[208px] w-full mb-3 h-12 lg:h-14 items-center flex justify-center lg:font-medium text-xl lg:text-2xl">
                                                        Let's Discuss Your Project
                                                </div>
                                                <div className="grid grid-cols-2 gap-2 px-4 space-y-5">
                                                        <div className="col-span-2 space-y-2">
                                                                <h2 className="text-2xl">Great, in which niche?</h2>
                                                        </div>
                                                        {renderRadioOptions(niches)}
                                                </div>
                                                <div className="flex justify-center px-3 py-5 space-x-96 pl-7">
                                                        <button type="submit" onClick={() => handleStepChange(1)} className="bg-black py-2.5 px-3.5  rounded-full">
                                                                <i className="fa-solid fa-arrow-left text-white"></i>
                                                        </button>
                                                        <button type="submit" onClick={() => handleStepChange(3)} className="bg-black py-2.5 px-3.5  rounded-full">
                                                                <i className="fa-solid fa-arrow-right text-white"></i>
                                                        </button>
                                                </div>
                                        </fieldset>
                                )}
                                {currentStep === 3 && (
                                        <>
                                                <fieldset
                                                        className="rounded-xl shadow-xl bg-white mx-1 lg:mx-10 lg:w-96 md:w-52 h-[500px]"
                                                        style={{
                                                                backgroundImage: `url('https://thecustomwebsites.com/wp-content/uploads/2023/05/form-bg-1.png')`,
                                                                backgroundSize: 'cover',
                                                                backgroundPosition: 'center',
                                                                backgroundRepeat: 'no-repeat',
                                                                height: '70vh',
                                                        }}
                                                >
                                                        <div className="bg-[#202020] rounded-t-lg text-white lg:w-[520px] md:w-[208px] w-full mb-3 h-12 lg:h-14 items-center flex justify-center lg:font-medium text-xl lg:text-2xl">
                                                                Let's Discuss Your Project
                                                        </div>
                                                        <div>
                                                                <h2 className="text-center text-lg pb-8 pt-2 text-gray-500">Let us know you & your estimations</h2>
                                                        </div>
                                                        <div className="flex justify-center space-x-8 py-4">
                                                                {renderInputFields()}
                                                        </div>
                                                        <UploadFile />
                                                        <div>
                                                                <textarea
                                                                        className=" border placeholder:px-3 py-2 mx-2 w-[270px] md:w-48 h-24 lg:w-[502px]"
                                                                        placeholder="Any Message? Write here...."
                                                                        name="message"
                                                                        value={formData.message}
                                                                        onChange={handleChange}
                                                                ></textarea>
                                                        </div>
                                                        <div className="flex justify-center px-3 py-5 space-x-80 p">
                                                                <button type="submit" onClick={() => handleStepChange(2)} className="bg-black py-2.5 px-3.5  rounded-full">
                                                                        <i className="fa-solid fa-arrow-left text-white"></i>
                                                                </button>
                                                                <button type="submit" className="bg-black text-white py-1 px-3.5 text-lg">
                                                                        Submit
                                                                </button>
                                                        </div>
                                                </fieldset>
                                        </>
                                )}
                        </form>
                </div>
        );
}