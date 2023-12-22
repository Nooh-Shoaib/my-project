import React, { useRef } from 'react';

const UploadFile = ({ handleFile }) => {
        const hiddenFileInput = useRef(null);

        const handleClick = (e) => {
                e.preventDefault();
                hiddenFileInput.current.click();
        };
        const Btn = "Upload a File/Artwork"
        const handleChange = async (e) => {
                const fileUploaded = e.target.files[0];

                try {

                        await uploadFileAsync(fileUploaded);
                        handleFile(fileUploaded);
                } catch (error) {
                        console.error('Error uploading file:', error.message);
                }
        };

        const uploadFileAsync = () => {
                return new Promise((resolve, reject) => {
                        setTimeout(() => {
                                resolve();
                                reject(new Error('File upload failed'));
                        }, 1500);
                });
        };

        return (
                <div className='flex lg:justify-center'>
                        <button
                                className="bg-[#202020] border text-white font-semibold md:w-[360px] w-[250px] mx-0.5 py-2 lg:w-full lg:mx-3 rounded-lg my-2 md:mx-2"
                                onClick={handleClick}>

                                {Btn}
                        </button>
                        <input
                                type="file"
                                accept=".pdf, .doc, .docx, .png, .jpg"
                                onChange={handleChange}
                                ref={hiddenFileInput}
                                className="hidden-file-input"
                                style={{ display: 'none' }}
                        />
                </div>
        );
};

export default UploadFile;