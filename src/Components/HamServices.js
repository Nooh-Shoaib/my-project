import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Accordion({ title, contents, openAccordion, setOpenAccordion }) {
        const isOpen = openAccordion === title;
        const [visible, setVisible] = useState(false);

        const toggleAccordion = () => {
                setOpenAccordion(isOpen ? null : title);
        };

        useEffect(() => {
                if (isOpen) {
                        const timeoutId = setTimeout(() => {
                                setVisible(true);
                        }, 100);

                        return () => clearTimeout(timeoutId);
                } else {
                        setVisible(false);
                }
        }, [isOpen]);

        return (
                <div className="">
                        <button
                                className="text-left focus:outline-none flex transition-all duration-500"
                                onClick={toggleAccordion}
                        >
                                {title}
                                <svg
                                        className={`w-3 h-3 text-black transform ${isOpen ? 'rotate-180' : ''}`}
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                >
                                        <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clipRule="evenodd"
                                        />
                                </svg>
                        </button>

                        <ul
                                className="overflow-hidden rounded-md shadow-2xl"
                                style={{
                                        maxHeight: visible ? '1520px' : '0', // Adjust the height value as needed
                                        transition: 'max-height 1s ease', // Adjust the duration (2s) and easing function as needed
                                }}
                        >
                                {contents.map((v, i) => (
                                        <li key={i} className="py-6 mx-12 flex flex-col items-center">
                                                <div>
                                                        <Link to={v.link}>
                                                                <img
                                                                        src={v.imageUrl}
                                                                        alt={v.label}
                                                                        loading="lazy"
                                                                        className="mx-auto mb-2 w-16"
                                                                />
                                                                <h2
                                                                        className="py-1 text-[0.6rem] text-black font-medium inline"
                                                                        dangerouslySetInnerHTML={{ __html: v.label }}
                                                                />
                                                        </Link>
                                                </div>
                                        </li>
                                ))}
                                <div className="bg-black text-white py-4 px-2">
                                        <h1 className="underline">
                                                Get on Demand Developer{' '}
                                                <i className="fa-solid fa-arrow-right text-sm px-1"></i>
                                        </h1>
                                        <p className="py-2 text-sm">
                                                Create your own team to get daily updates and progress as you
                                                want, so you can make your dream project real.
                                        </p>
                                        <button
                                                type="submit"
                                                className="border-2 rounded-md border-white bg-white text-black px-5 py-3 mt-3"
                                        >
                                                Schedule A meeting!
                                        </button>
                                </div>
                        </ul>
                </div>
        );
}

function ServicesAccordion({ services }) {
        const [openAccordion, setOpenAccordion] = useState(null);

        return (
                <div className="bg-white">
                        <Accordion
                                title="Services"
                                contents={services}
                                openAccordion={openAccordion}
                                setOpenAccordion={setOpenAccordion}
                        />
                </div>
        );
}

const services = [
        {
                imageUrl: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/htpyxaicaqftygqbuwev_robvzn.svg',
                label: 'Custom Web Development',
                link: '/service1',
        },
        {
                imageUrl: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/cpdw6fvcrjxq5icdanxy_gxxzyb.svg',
                label: 'UI & UX Design',
                link: '/ui-&-ux-design',
        },
        {
                imageUrl: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/pskqvpgwfpvaxirnkflh_iaawf9.svg',
                label: 'SEM',
                link: '/sem',
        },
        {
                imageUrl: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/reg4ek2hoyu2p6xijshf_ohzbys.svg',
                label: 'AppDevelopment',
                link: '/appdevelopment',
        },
        {
                imageUrl: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/fd9amtrvdglzmm16surr_l3qqfs.svg',
                label: 'Graphics & Branding',
                link: '/graphics-&-branding',
        },
        {
                imageUrl: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/sifwzze7kiehbwslcbrm_waex1r.svg',
                label: 'Quality Assurance',
                link: '/quality-assurance',
        },
        {
                imageUrl: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/ufryavrsvi0lysbio9z2_drbs0q.svg',
                label: 'DevOps',
                link: '/devops',
        },
        {
                imageUrl: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/fktzbjjevgohlyylbtpf.svg',
                label: 'CMS',
                link: '/cms',
        },
        {
                imageUrl: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/untk6q64u64b7iamu1dt.svg',
                label: 'SEO',
                link: '/seo',
        },
];

export default function App() {
        return <ServicesAccordion services={services} />;
}
