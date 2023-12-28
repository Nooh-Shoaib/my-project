import React from 'react';

export default function Optimization() {
        return (
                <>
                        <h1 className='text-center my-14 text-4xl font-semibold'>
                                Website Speed and Optimization
                        </h1>
                        <section>
                                <div className='flex-col-1'>
                                        <div className='mx-[320px]'>
                                                <ul className='font-bold my-4'>
                                                        <li className='list-disc'>Is your website taking time to load?</li>
                                                        <li className='list-disc'>Is there any issue in your online visibility?</li>
                                                        <li className='list-disc'>Is there a high bounce rate as per the website analytics?</li>
                                                </ul>
                                        </div>
                                        <div className='flex justify-center space-x-16 items-start'>
                                                <p className='max-w-md md:max-w-[440px]'>
                                                        Are you facing issues like a high bounce rate, lag in website visibility, or slow-loading web pages? If the answer is yes, it's essential to address these issues promptly. The Custom Website can help by creating a 100% responsive website that loads in less than 3 seconds, providing the best user experience. Improve traffic to your website and unlock more potential opportunities with our optimization services.
                                                </p>
                                                <img
                                                        src='https://thecustomwebsites.com/wp-content/uploads/2023/05/graph.png'
                                                        alt='Website Analytics Graph'
                                                        className='-mt-24'
                                                />
                                        </div>
                                </div>
                        </section>
                        <section className='bg-black my-16'>
                                <div className='h-24 flex justify-around  items-center  '>
                                        <h2 className='text-2xl font-semibold text-white '>Don’t have a website or app? What are you waiting for?</h2>
                                        <div className='space-x-5'>
                                                <button className=" py-4 px-7 rounded-md font-semibold border-2 mx-3 lg:mx-0 border-white bg-transparent  my-3 text-white">Ask For Demo</button>
                                                <button className=" py-3.5 px-1.5 md:px-4 lg:px-5 rounded-md font-semibold border-2  lg:mx-0 border-white bg-white text-black my-3 lg:text-lg text-base">
                                                        Schedule a meeting
                                                </button>
                                        </div>
                                </div>
                        </section>
                </>
        );
}
