import React from 'react';

// Optimization component
const Optimization = () => {
  return (
    <>
      <h1 className='text-center my-14 text-4xl font-semibold'>
        Website Speed and Optimization
      </h1>
      <section>
        <div className='lg:flex-col-1 md:flex-col-1'>
          <div className='lg:mx-[320px] '>
            <ul className='font-bold my-4 mx-6 lg:mx-0 md:mx-8'>
              <li className='list-disc'>Is your website taking time to load?</li>
              <li className='list-disc'>Is there any issue in your online visibility?</li>
              <li className='list-disc'>Is there a high bounce rate as per the website analytics?</li>
            </ul>
          </div>
          <div className='lg:flex lg:justify-center lg:space-x-16 lg:items-start mx-3 lg:mx-0 md:flex md:justify-center md:mx-4'>
            <p className='lg:max-w-md   '>
              Are you facing issues like a high bounce rate, lag in website visibility, or slow-loading web pages? If the answer is yes, it's essential to address these issues promptly. The Custom Website can help by creating a 100% responsive website that loads in less than 3 seconds, providing the best user experience. Improve traffic to your website and unlock more potential opportunities with our optimization services.
            </p>
            <img
              src='https://thecustomwebsites.com/wp-content/uploads/2023/05/graph.png'
              alt='Website Analytics Graph'
              className='lg:-mt-24 lg:w-[450px] md:w-72'
            />
          </div>
        </div>
      </section>
      <section className='bg-black my-16'>
        <div className='lg:h-24 lg:flex md:flex lg:justify-around lg:items-center lg:space-y-0 space-y-7'>
          <h2 className='lg:text-2xl text-3xl md:text-2xl font-semibold text-white lg:py-0 lg:px-0 px-4 py-5 md:py-10'>Don’t have a website or app? What are you waiting for?</h2>
          <div className='lg:space-x-5 lg:space-y-0 space-y-2 pb-2 lg:flex '>
            <button className="py-3.5 px-7 rounded-md font-semibold border-2 md:mx-0 mx-3 lg:mx-0 border-white bg-transparent text-white">Ask For Demo</button>
            <button className="py-3.5 px-6 md:px-9 md:py-2 lg:px-5 md:mx-0 mx-3 lg:mx-0 rounded-md font-semibold border-2  border-white bg-white text-black lg:text-lg text-base">
              Schedule a meeting
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

// We Are Agile ImageGallery component
const Agile = () => {
  const imagePaths = [
    'https://thecustomwebsites.com/wp-content/uploads/2023/05/1.png',
    'https://thecustomwebsites.com/wp-content/uploads/2023/05/2.png',
    'https://thecustomwebsites.com/wp-content/uploads/2023/05/3.png',
    'https://thecustomwebsites.com/wp-content/uploads/2023/05/4.png',
    'https://thecustomwebsites.com/wp-content/uploads/2023/05/5.png',
    'https://thecustomwebsites.com/wp-content/uploads/2023/05/6.png',
  ];

  return (
    <div>
      <h1 className='text-center text-3xl font-semibold py-2'>We are Agile</h1>
      <p className='text-center py-8 text-lg'>It is true since we use modern technology and modern methods to develop and design your business website.</p>
      <div className='flex justify-center'>
        <div className='lg:grid md:grid md:grid-cols-3 lg:grid-cols-3 lg:gap-8 md:gap-8 lg:space-y-0 md:space-y-0 space-y-3'>
          {imagePaths.map((imagePath, index) => (
            <div key={index}>
              <img
                src={imagePath}
                alt={` ${index + 1}`}
                className='lg:w-72 w-60 md:w-52'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Optimization, Agile };
