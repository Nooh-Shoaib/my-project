import React, { useEffect, useState } from 'react';

const ImageModels = () => {
        const [isLoading, setIsLoading] = useState(true);
        const [items, setItems] = useState([]);
        const [activeItemIndex, setActiveItemIndex] = useState(null);

        const fetchData = async () => {
                try {
                        const response = await fetch(
                                'https://my-json-server.typicode.com/Nooh-Shoaib/portfolio/portfolio'
                        );

                        if (!response.ok) {
                                throw new Error(`HTTP error! Status: ${response.status}`);
                        }

                        const data = await response.json();
                        console.log('Fetched Data:', data);
                        setItems(data || []);
                        setIsLoading(false);
                } catch (error) {
                        console.error('Error fetching data:', error);
                        setItems([]);
                        setIsLoading(false);
                }
        };

        useEffect(() => {
                fetchData();
        }, []);

        const openLightbox = (index) => {
                setActiveItemIndex(index);
                document.body.style.overflow = 'hidden';
        };

        const closeLightbox = () => {
                setActiveItemIndex(null);
                document.body.style.overflow = 'auto';
        };

        if (isLoading) {
                return null;
        }

        return (
                <div>
                        <div className="max-w-[1300px] mx-auto">
                                <div className="max-w-[1500px] grid lg:grid-cols-3 grid-cols-1 md:grid-cols-3 lg:px-28 md:px-20 px-7 lg:shadow-none shadow-2xl gap-6 py-10 space-y-4">
                                        {items.map((item, index) => (
                                                <div
                                                        key={index}
                                                        className="cursor-pointer relative"
                                                        onClick={() => openLightbox(index)}
                                                >
                                                        <div className="overflow-hidden h-96">
                                                                <img
                                                                        src={item.image}
                                                                        alt={`item ${index}`}
                                                                        className="w-full h-full object-cover object-top"
                                                                />
                                                        </div>
                                                        <h2 className='bg-[#202020] text-white lg:text-xl md:text-base  font-semibold py-2 px-4 rounded-b-lg absolute bottom-0 w-full'>
                                                                {item.heading}
                                                        </h2>
                                                </div>
                                        ))}
                                </div>
                        </div>

                        {activeItemIndex !== null && (
                                <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-30 overflow-auto">
                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50  space-y-4  bg-white rounded-lg">
                                                <div onClick={closeLightbox} className=" flex justify-between  cursor-pointer  px-2 py-2">
                                                        <h1 className="text-3xl font-semibold text-black ">{items[activeItemIndex]?.heading}</h1>
                                                        <i className="fa-solid fa-circle-xmark text-2xl text-gray-700 "></i>
                                                </div>

                                                <img
                                                        src={items[activeItemIndex]?.image}
                                                        alt={`Item ${activeItemIndex}`}
                                                        className="w-[500px]"
                                                />
                                        </div>
                                </div>
                        )}
                </div>
        );
};

export default ImageModels;
