import React, { useState } from 'react';
import { Link } from 'react-router-dom';

let advantages = [
        {
                imageUrl:
                        'https://thecustomwebsites.com/wp-content/uploads/2023/05/htpyxaicaqftygqbuwev_robvzn.svg',
                label: 'Custom&nbsp;Web&nbsp;Development',
                link: '/'
        },
        {
                imageUrl:
                        'https://thecustomwebsites.com/wp-content/uploads/2023/05/cpdw6fvcrjxq5icdanxy_gxxzyb.svg',
                label: 'UI&nbsp;&amp;&nbsp;UX&nbsp;Design ',
        },
        {
                imageUrl:
                        'https://thecustomwebsites.com/wp-content/uploads/2023/05/pskqvpgwfpvaxirnkflh_iaawf9.svg',
                label: 'SEM',
        },
        {
                imageUrl:
                        'https://thecustomwebsites.com/wp-content/uploads/2023/05/reg4ek2hoyu2p6xijshf_ohzbys.svg',
                label: 'AppDevelopment',
        },
        {
                imageUrl:
                        'https://thecustomwebsites.com/wp-content/uploads/2023/05/fd9amtrvdglzmm16surr_l3qqfs.svg',
                label: 'Graphics&nbsp;&amp;&nbsp;Branding',
        },
        {
                imageUrl:
                        'https://thecustomwebsites.com/wp-content/uploads/2023/05/sifwzze7kiehbwslcbrm_waex1r.svg',
                label: 'Quality&nbsp;Assurance',
        },
        {
                imageUrl:
                        'https://thecustomwebsites.com/wp-content/uploads/2023/05/ufryavrsvi0lysbio9z2_drbs0q.svg',
                label: 'DevOps',
        },
        {
                imageUrl:
                        'https://thecustomwebsites.com/wp-content/uploads/2023/05/fktzbjjevgohlyylbtpf.svg',
                label: 'CMS',
        },
        {
                imageUrl:
                        'https://thecustomwebsites.com/wp-content/uploads/2023/05/untk6q64u64b7iamu1dt.svg',
                label: 'SEO',
        },
];

const Services = () => {
        const [isArrowUp, setArrowUp] = useState(false);

        const toggleArrow = (e) => {
                e.stopPropagation();
                setArrowUp(!isArrowUp);
        };

        return (
                <div>

                        <body className="font-sans leading-normal tracking-normal">
                                <nav className="relative">
                                        <div className="container mx-auto flex justify-between">
                                                <ul className="flex">
                                                        <li className="hoverable relative">
                                                                <div className='flex items-center'>
                                                                        <div className="relative block">
                                                                                Services
                                                                        </div>
                                                                        <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                                version="1.1"
                                                                                x="0px"
                                                                                y="0px"
                                                                                viewBox="0 0 24 24"
                                                                                className="ml-2 h-6 w-4 text-gray-600 font-extrabold"
                                                                                onClick={(e) => {
                                                                                        toggleArrow(e);
                                                                                }}
                                                                        >
                                                                                <path d="M12 21.35l-1.45-1.41L4 12.47l1.41-1.41L12 18.47l6.59-6.59L20 12.47l-8 8.88z" />
                                                                        </svg>
                                                                </div>

                                                                <div
                                                                        className={`p-6 mega-menu mb-16 sm:mb-0 shadow-2xl bg-white text-black ${isArrowUp ? 'arrow-up' : ''}`}
                                                                        onClick={(e) => {
                                                                                e.stopPropagation();
                                                                        }}
                                                                >
                                                                        <div className="container mx-auto w-full flex flex-wrap justify-between ">
                                                                                <div className="bg-white font-medium overflow-x-auto">
                                                                                        <ul className="grid grid-cols-3 gap-4 mx-">
                                                                                                {advantages.map((v, i) => (
                                                                                                        <li key={i} className="w-16 py-6 mx-12 flex flex-col items-center">
                                                                                                                <div>
                                                                                                                        <Link to={v.link}>
                                                                                                                                <img
                                                                                                                                        src={v.imageUrl}
                                                                                                                                        alt={v.label}
                                                                                                                                        loading="lazy"
                                                                                                                                        className="mx-auto mb-2"
                                                                                                                                />
                                                                                                                                <h2
                                                                                                                                        className="py-1 text-[0.6rem] text-black font-medium inline"
                                                                                                                                        dangerouslySetInnerHTML={{ __html: v.label }}
                                                                                                                                />
                                                                                                                        </Link>
                                                                                                                </div>
                                                                                                        </li>
                                                                                                ))}
                                                                                        </ul>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div
                                                                        className={`absolute w-0 h-0 border-4 border-solid border-transparent border-black ${isArrowUp ? 'border-t-0 border-b-4' : 'border-t-4 border-b-0'
                                                                                }`}
                                                                        style={{ top: '50%', right: '15px', transform: 'translateY(-50%)' }}
                                                                        onClick={(e) => {
                                                                                toggleArrow(e);
                                                                        }}
                                                                ></div>
                                                        </li>
                                                </ul>
                                        </div>
                                </nav>
                        </body>
                </div>
        );
};

export default Services;