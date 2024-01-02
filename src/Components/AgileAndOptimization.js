import React from 'react';


const EcommerceSolution = () => {
  const paragraphs = [
    "To make your business profitable, the expert team at The Custom Website can provide you with a complete ecommerce solution. Our services include custom ecommerce web development, wordpress ecommerce, wix ecommerce, magento ecommerce, shopify ecommerce, webflow ecommerce, multi-vendor ecommerce website, and saas ecommerce.",
    "Yes, we can provide you support in all the above-mentioned ecommerce themes and templates that will be 100% SEO-friendly and retina-ready. We do this job to provide you complete satisfaction because we know the worth of your time and money, and that makes us stand higher as the best web design company.",
    "You can contact us to get Social Media Marketing, Search engine optimization, Internet marketing, Custom Website development service since our team uses the latest technologies. We are well aware of the latest trends, techniques, and technologies. Get control of your e-commerce business and make your business a brand in the industry. Our team will provide your customers with a nice shopping experience to the end-user.",
  ];

  return (<>
    <h2 className='text-center lg:text-4xl text-3xl font-semibold'>Introducing Top E-Commerce Platforms For Your Business Success</h2>
    <div className='lg:flex md:flex md:justify-center justify-center mt-12 mb-5'>
      <div className="mb-6 ">
        <img
          src="https://thecustomwebsites.com/wp-content/uploads/2023/05/ecom-img-min.png"
          alt="Ecommerce Solution"
          className="lg:max-w-full max-w-52  h-auto lg:px-0 container lg:mx-0 mx-auto md:pt-24 lg:pt-14"
        />
        <button className='border-2 border-black lg:mx-0 mx-5 lg:px-3 px-7 py-2 lg:my-6 my-3 rounded transition-all font-semibold hover:bg-black hover:text-white'>
          Learn more about ecommerce services
        </button>
      </div>

      <div className=" my-10 lg:max-w-3xl md:max-w-lg lg:px-5 px-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className='py-3'>{paragraph}</p>
        ))}
      </div>
    </div>
  </>);
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

export { Agile, EcommerceSolution };
