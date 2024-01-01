import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AnimatedCounter from './AnimatedCounter';

const TestimonialsSection = () => {
        useEffect(() => {
                // Initialize Owl Carousel here if needed
                // For example:
                // $('#testimonial .owl-carousel').owlCarousel({
                //   loop: true,
                //   margin: 10,
                //   nav: true, // Set to true to show navigation arrows
                //   dots: true,
                //   autoplay: true,
                //   autoplayHoverPause: true,
                //   responsive: {
                //     0: {
                //       items: 1
                //     },
                //     600: {
                //       items: 1
                //     },
                //     1000: {
                //       items: 1
                //     }
                //   }
                // });

                // Note: Make sure to include the Owl Carousel jQuery and initialize it properly.
                // This is just an example, and it might not work without proper jQuery initialization.
                // You might need to find a suitable React carousel library if you prefer a more React-friendly approach.
        }, []);

        const testimonialData = [
                {
                        image: "https://thecustomwebsites.com/wp-content/uploads/2023/05/tania.jpg",
                        author: "Tania",
                        quote: "Working with the team Of  &rdquo;THE CUSTOM WEBSITES &ldquo; was an excellent experience. Very responsive and very knowledgeable. Helped me to understand how to proceed on my own after the project was completed. 100% Recommended",
                },
                {
                        image: "https://thecustomwebsites.com/wp-content/uploads/2023/05/jerry.jpg",
                        author: "Jerry",
                        quote: "Very Cooperative and understanding Team. Easily understands and develop complex logics. Highly recommended to work with him Thank you",
                },
                {
                        image: "https://thecustomwebsites.com/wp-content/uploads/2023/05/victor.jpg",
                        author: "Victor",
                        quote: "Very good development team and support. This developer searches solutions for you or create the solutions and implements it successfully. I highly recommend.",
                },
        ];

        return (<>
                <h2 className='text-3xl font-semibold text-center mt-16'>Testimonials</h2>
                <div className=" lg:flex md:flex md:justify-around lg:justify-around my-12">
                        <div className=" lg:max-w-[700px]  md:max-w-[410px] max-w-[300px] max-h-[350px] shadow-2xl rounded-2xl my-12 ">
                                <div className="" data-aos="zoom-in">
                                        <OwlCarousel
                                                className=""
                                                loop
                                                margin={10}
                                                nav
                                                dots
                                                autoplay
                                                navText={['<i class="fa-solid fa-chevron-left absolute top-40 -left-10 text-5xl hidden lg:block"></i>', '<i class="fa-solid  text-5xl -right-10 fa-chevron-right absolute top-40 hidden lg:block"></i>']}
                                                responsive={{
                                                        0: {
                                                                items: 1,
                                                        },
                                                        600: {
                                                                items: 1,
                                                        },
                                                        1000: {
                                                                items: 1,
                                                        },
                                                }}
                                        >
                                                {testimonialData.map((testimonial, index) => (
                                                        <div key={index} className="py-6 px-5">
                                                                <img src={testimonial.image} alt="Client" className="lg:max-w-[100px] lg:h-[100px] max-w-[70px] h-[70px] container mx-auto rounded-full" />
                                                                <h6 dangerouslySetInnerHTML={{ __html: testimonial.author }} className="text-center font-semibold text-2xl my-2" />
                                                                <div className="flex justify-center my-2">
                                                                        {Array(5)
                                                                                .fill(null)
                                                                                .map((_, index) => (
                                                                                        <svg key={index} xmlns="http://www.w3.org/2000/svg" width="29" height="27" viewBox="0 0 29 27" fill="none"><path d="M14.5 0L17.7555 10.0193L28.2903 10.0193L19.7674 16.2115L23.0229 26.2307L14.5 20.0385L5.97711 26.2307L9.23257 16.2115L0.709681 10.0193L11.2445 10.0193L14.5 0Z" fill="#F0BC01"></path></svg>
                                                                                ))}
                                                                </div>
                                                                <p dangerouslySetInnerHTML={{ __html: testimonial.quote }} className="text-center lg-text-base text-sm mt-5" />
                                                        </div>
                                                ))}
                                        </OwlCarousel>
                                </div>
                        </div>

                        <AnimatedCounter />
                </div>

        </>);
};

export default TestimonialsSection;
