import React, { useState } from 'react';
import UploadFile from './UploadButton';
import { useForm } from 'react-hook-form';  // Import the useForm hook


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
        { id: 'number', label: 'Phone Number', type: 'text' },
        { id: 'url', label: 'Competitor URL', type: 'url' },
];

const SubmitForm = ({ backgroundUrl, heading }) => {
        const [currentStep, setCurrentStep] = useState(1);
        const { handleSubmit } = useForm('mwkgeggy'); // Destructure only what you need

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

        const renderInputFields = () => {
                return (
                        <div className="lg:grid lg:grid-cols-2 lg:gap-4 ">
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
                                                        className="ring-1 focus:outline-none  ring-gray-400 rounded px-5 py-2 lg:mb-0 mb-4"
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
                                        type="checkbox"
                                        id={`checkboxOption${index + 1}`}
                                        name="radioGroup"
                                        className="hidden"
                                        checked={selectedOptions[currentStep] === option}
                                        onChange={() => handleRadioChange(option)}
                                />
                                <label
                                        htmlFor={`checkboxOption${index + 1}`}
                                        className={`ml-2 text-gray-700 text-base checkbox-label ${selectedOptions[currentStep] === option ? 'checked' : ''
                                                }`}
                                >
                                        {option}
                                </label>
                        </div>
                ));
        };

        return (
                <div className="lg:my-20 my-12">
                        <form onSubmit={handleSubmit}>
                                {errorMessage && (
                                        <p className="text-red-500 flex justify-center">{errorMessage}</p>
                                )}
                                <fieldset
                                        className="rounded-xl shadow-xl bg-white mx-5 lg:mx-0 xl:mx-10 lg:w-96 md:w-52 max-w-96 lg:h-[66vh] h-[110vh]"
                                        style={{
                                                backgroundImage: `url('${backgroundUrl}')`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                        }}
                                >
                                        <div className="bg-[#202020] rounded-t-lg text-white lg:w-[520px] md:w-[208px] w-full mb-3 h-12 lg:h-14 items-center flex justify-center lg:font-medium text-xl lg:text-2xl">
                                                {heading}
                                        </div>
                                        {currentStep === 1 && (
                                                <>
                                                        <div className="lg:grid lg:grid-cols-2 gap-2 px-4 space-y-5">
                                                                <div className="col-span-2 space-y-2">
                                                                        <h2 className="text-2xl">
                                                                                Select Your Project Type
                                                                                <i className="fa-thin fa-asterisk text-red-500 text-3xl"></i>
                                                                        </h2>
                                                                </div>
                                                                {renderRadioOptions(projectTypes)}
                                                        </div>
                                                        <div className="flex justify-end px-3 lg:mt-16 mt-[52px]">
                                                                <button
                                                                        type="button"
                                                                        onClick={() => handleStepChange(2)}
                                                                        className="bg-black py-2.5 px-3.5 rounded-full"
                                                                >
                                                                        <i className="fa-solid fa-arrow-right text-white"></i>
                                                                </button>
                                                        </div>
                                                </>
                                        )}
                                        {currentStep === 2 && (
                                                <>
                                                        <div className="lg:grid lg:grid-cols-2 gap-2 px-4 space-y-5">
                                                                <div className="lg:col-span-2 space-y-2">
                                                                        <h2 className="text-2xl">
                                                                                Great, in which niche?
                                                                                <i className="fa-thin fa-asterisk text-red-500 text-3xl"></i>
                                                                        </h2>
                                                                </div>
                                                                {renderRadioOptions(niches)}
                                                        </div>
                                                        <div className="flex justify-center px-3 lg:space-x-[400px] space-x-[155px] lg:py-0 py-2 lg:mt-16">
                                                                <button
                                                                        type="button"
                                                                        onClick={() => handleStepChange(1)}
                                                                        className="bg-black py-2.5 px-3.5  rounded-full"
                                                                >
                                                                        <i className="fa-solid fa-arrow-left text-white"></i>
                                                                </button>
                                                                <button
                                                                        type="submit"
                                                                        onClick={() => handleStepChange(3)}
                                                                        className="bg-black py-2.5 px-3.5  rounded-full"
                                                                >
                                                                        <i className="fa-solid fa-arrow-right text-white"></i>
                                                                </button>
                                                        </div>
                                                </>
                                        )}
                                        {currentStep === 3 && (
                                                <>
                                                        <div>
                                                                <h2 className="text-center text-lg pb-8 pt-2 text-gray-500">
                                                                        Let us know you & your estimations
                                                                </h2>
                                                        </div>
                                                        <div className="flex justify-center space-x-8 py-4">
                                                                {renderInputFields()}
                                                        </div>
                                                        <UploadFile />
                                                        <div>
                                                                <textarea
                                                                        className="border placeholder:px-3 py-2 mx-2 w-[250px] md:w-48 h-24 lg:w-[502px] focus:outline-none"
                                                                        placeholder="Any Message? Write here...."
                                                                        name="message"
                                                                        value={formData.message}
                                                                        onChange={handleChange}
                                                                ></textarea>
                                                        </div>
                                                        <div className="flex justify-center  py-2 lg:space-x-80 space-x-28 ">
                                                                <button
                                                                        type="button"
                                                                        onClick={() => handleStepChange(2)}
                                                                        className="bg-black py-2.5 px-3.5  rounded-full"
                                                                >
                                                                        <i className="fa-solid fa-arrow-left text-white"></i>
                                                                </button>
                                                                <button
                                                                        type="submit"
                                                                        className="bg-black text-white py-1 px-3.5 text-lg"
                                                                >
                                                                        Submit
                                                                </button>
                                                        </div>
                                                </>
                                        )}
                                </fieldset>
                        </form>
                </div>
        );
};

export default SubmitForm;
