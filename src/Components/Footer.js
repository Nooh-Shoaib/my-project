import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";



let categories = [
        { label: 'Custom Web Development', link: '/' },
        { label: 'UI and Ux Design', link: '/' },
        { label: 'SEM', link: '/' },
        { label: 'App Development', link: '/' },
        { label: 'Graphics & Branding', link: '/' },
        { label: 'Quality Assurance', link: '/' },
        { label: 'DevOps', link: '/' },
        { label: 'CMS', link: '/' },
        { label: 'SEO', link: '/' },
];

const Footercategories = () => {
        return (
                <div>
                        <ul>
                                {categories.map((v, i) => {
                                        return (
                                                <li
                                                        key={i}
                                                        className="text-white font-semibold mx-2 md:text-center mb-3 lg:text-start text-center "
                                                >
                                                        <Link to={v.link}>{v.label}</Link>
                                                </li>
                                        );
                                })}
                        </ul>
                </div>
        );
};

const informationLinks = [
        { label: 'About Us', link: '/' },
        { label: 'FAQ', link: '/' },
        { label: 'Blogs', link: '/' },
        { label: 'Portfolio', link: '/' },
        { label: 'Career', link: '/' },
        { label: 'Privacy Policy', link: '/' },
];

const Footer = ({ category, info }) => {
        const text = "Get in touch today, and w'll help you build your dream project real soon.";
        const CWLink = "/";
        const playstoreImg = "https://thecustomwebsites.com/wp-content/uploads/2023/05/app-download.png";

        return (
                <footer className="bg-[#202020]">
                        <div className="flex justify-start space-x-[360px] py-12 px-56 border-b border-gray-500">
                                <div>
                                        <div className="flex space-x-3 py-1.5">
                                                <img src="https://thecustomwebsites.com/wp-content/uploads/2023/05/usa.png" alt="" className="w-10 h-7" />
                                                <span className="text-white font-medium text-2xl">USA</span>
                                        </div>
                                        <p className="text-white font-normal text-lg py-1.5">(213) 416-7355</p>
                                        <p className="text-white font-normal text-lg py-1.5">750 West Hampden Avenue Denver CO</p>
                                </div>
                                <div className="">
                                        <div className="flex space-x-3 py-1.5 ">
                                                <img src="https://thecustomwebsites.com/wp-content/uploads/2023/05/uk.png" alt="" className="w-10 h-7" />
                                                <span className="text-white font-medium text-2xl">UK</span>
                                        </div>
                                        <p className="text-white font-normal text-lg py-1.5">+447425471610</p>
                                        <p className="text-white font-normal text-lg py-1.5">27 Saint Andrews Drive Flat no. 3/4, Glasgow, G41 5JN</p>
                                </div>
                        </div>
                        <section className="lg:grid md:grid grid-cols-4 px-48">
                                <ul className="px-12">
                                        <li>
                                                <Link to="/">
                                                        <img
                                                                src="https://thecustomwebsites.com/wp-content/uploads/2023/05/rkqdw0cjnqukbl7cal0x.svg"
                                                                alt=""
                                                                className="px-12 py-5 md:px-0 md:py-5 md:w-52 lg:px-2 lg:py-5 w-24 "
                                                        />
                                                </Link>
                                        </li>
                                        <p className="text-white py-1 font-semibold">Subscribe us!</p>
                                        <section className="flex md-block justify-center ">
                                                <input
                                                        type="email"
                                                        placeholder="Email here"
                                                        className="px-3 py-3 md:w-24 w-60 lg:w-60 focus outline-none focus:ring-1 placeholder-slate-500 rounded-l"
                                                />
                                                <button className="bg-white px-3  py-3 rounded-r">
                                                        <span>
                                                                <i className="fa-sharp fa-solid fa-paper-plane "></i>
                                                        </span>
                                                </button>
                                        </section>
                                        <p className="mt-6 text-white md:text-center lg:text-start text-center text-sm lg:text-base md:text-base">
                                                Follow us on social media to get more updates about our services.
                                        </p>
                                        <li className="lg:space-x-6 space-x-6 md:space-x-4 mt-4  flex justify-center lg:justify-normal">
                                                <Link to="https://www.facebook.com/TheCustomWebsites/" target="_blank">
                                                        <i className="fa-brands fa-facebook-f text-white text-3xl "></i>
                                                </Link>
                                                <Link to="https://twitter.com/thecustomwebs" target="_blank">
                                                        <i className="fa-brands fa-twitter text-white text-3xl "></i>
                                                </Link>
                                                <Link to="https://www.instagram.com/thecustomwebsites/" target="_blank">
                                                        <i className="fa-brands fa-instagram text-white text-3xl "></i>
                                                </Link>
                                        </li>
                                </ul>
                                <div>
                                        <ul>
                                                <h2 className="lg:text-3xl text-3xl md:text-3xl lg:text-start text-center font-medium mx-2 md:text-center text-white mt-5 mb-5">
                                                        Information
                                                </h2>
                                                {informationLinks.map((link, index) => (
                                                        <li key={index} className="flex lg:justify-normal justify-center mt-3">
                                                                <Link to={link.link}>
                                                                        <div className="text-white ">{link.label}</div>
                                                                </Link>
                                                        </li>
                                                ))}
                                        </ul>
                                        <button className="btn py-2.5 px-2 rounded-md font-semibold border-2 border-white bg-white text-black hover:bg-transparent hover:text-white my-3 text-lg">Schedule A meeting</button>
                                        <div>
                                                <button className=" py-2.5 px-4 rounded-lg font-semibold border-2 border-white bg-transparent  my-3 text-white"><i className="fa-solid fa-cloud-arrow-down pr-2"></i>Company Profile</button>
                                        </div>
                                </div>
                                <div>
                                        <h2 className="text-3xl text-white font-medium mt-5 mb-7 md:text-center lg:text-start text-center">
                                                {category}
                                        </h2>
                                        <ul>
                                                {categories.map((category, index) => (
                                                        <li key={index} className="text-white font-semibold mx-2 md:text-center mb-3 lg:text-start text-center">
                                                                <Link to={category.link}>{category.label}</Link>
                                                        </li>
                                                ))}
                                        </ul>
                                </div>
                                <div>
                                        <h2 className="text-3xl text-white font-medium mt-5 mb-5 mx-2 md:text-center lg:text-start text-center">
                                                {info}
                                        </h2>
                                        <div className="text-white pb-8" dangerouslySetInnerHTML={{ __html: text }}></div>
                                        <button className="py-2 px-2 rounded-lg font-semibold border-2 border-white bg-white text-black hover:bg-transparent hover:text-white my-5">
                                                Customer Service
                                        </button>
                                        <Link to='https://play.google.com/store/apps/details?id=com.thecustomwebsites&pli=1'>
                                                <img src={playstoreImg} alt="playstore" className="py-5" />
                                        </Link>
                                </div>
                        </section>
                        <div className="text-center py-10 text-white">
                                <p>
                                        Copyright © 2023&nbsp;
                                        <Link to={CWLink} target="_blank">
                                                <span>|  The Custom Websites |</span>
                                        </Link>
                                        &nbsp;Use of Cookies
                                </p>
                        </div>
                </footer>
        );
};



Footer.defaultProps = {
        category: "Our Services",
        info: "Contact Us",
};

export default Footer;