import React from 'react';
import { Link } from 'react-router-dom';
import Services from "./Services";
import Company from './Company';

// Configurations
const contactInfo = [
        { icon: "fa fa-phone", link: "tel:(213)%20416-7355%20", text: "(213) 416-7355" },
        { icon: "fa fa-envelope", link: "mailto:sales@thecustomwebsites.com", text: "sales@thecustomwebsites.com" },
];

const navigationItems = [
        { text: 'Get Free Mockup Now!', link: '/' },
        { text: <Services /> }, // Assuming #services is the section ID
        { text: 'Portfolio', link: '/portfolio' },
        { text: <Company /> },
];

const locationInfo = { icon: 'fa-solid fa-location-dot', text: '750 West Hampden Avenue Denver CO' };

const logoUrl = 'https://thecustomwebsites.com/wp-content/uploads/2023/04/logo.png';

// Generic component for rendering a list of items
const ListItems = ({ items, renderItem }) => (
        <ul className="flex mt-4">
                {items.map((item, index) => (
                        <li key={index} className="px-5">
                                {renderItem(item)}
                        </li>
                ))}
        </ul>
);

const renderContactItem = (item) => (
        <Link to={item.link} target="_blank">
                <i className={`${item.icon} icon_nav text-xl`}></i>
                &nbsp; <span className="text-sm">{item.text}</span>
        </Link>
);

const renderNavigationItem = (item) => (
        <Link to={item.link}>{item.text}</Link>
);

export default function Header() {
        return (
                <>
                        <nav className="hidden lg:block border-b">
                                <div className="py-1">
                                        <div className="flex justify-between px-24 h-14 font-sans">
                                                <div>
                                                        <ListItems items={contactInfo} renderItem={renderContactItem} />
                                                </div>
                                                <div className="flex items-start mt-4">
                                                        <button>
                                                                <span className="input-group-text border-0">
                                                                        <i className={`fa-solid ${locationInfo.icon}`}></i>
                                                                </span>
                                                        </button>
                                                        <p className="text-sm">{locationInfo.text}</p>
                                                </div>
                                        </div>
                                </div>
                        </nav>

                        <nav className="hidden lg:block sticky top-0 bg-white z-20 shadow-md">
                                <div className="h-24 flex items-center justify-between px-6">
                                        <div className="text-black text-[15px] font-semibold flex items-center mx-20">
                                                <Link to='/'>
                                                        <img src={logoUrl} alt="The Custom Websites" className="" />
                                                </Link>
                                        </div>
                                        <div className='flex items-center '>
                                                <ListItems items={navigationItems} renderItem={renderNavigationItem} />
                                                <button className='bg-black py-2 px-3 mx-12 text-white rounded-md'>Get a Free Quote</button>
                                        </div>
                                </div>
                        </nav>
                </>
        );
}

// Header.propTypes = {
//         number: propTypes.string.isRequired,
//         email: propTypes.string,
// };

// Header.defaultProps = {
//         number: "(213) 416-7355",
//         email: "sales@thecustomwebsites.com",
// };