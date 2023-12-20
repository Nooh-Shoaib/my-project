import React, { useState } from 'react';
import { Link } from 'react-router-dom';

let advantages = [
        {
                imageUrl:
                        'https://thecustomwebsites.com/wp-content/uploads/2023/05/htpyxaicaqftygqbuwev_robvzn.svg',
                label: 'Custom&nbsp;Web&nbsp;Development',
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




function Navbar() {
        const [isProductMenuOpen, setProductMenuOpen] = useState(false);

        const toggleProductMenu = () => {
                setProductMenuOpen(!isProductMenuOpen);
        };

        return (
                <header className="bg-white">
                        <div
                                className="flex justify-center lg:px-0 md:px-[74px] px-[67px] items-center font-semibold lg:font-med md:font-medium lg:text-base md:text-lg text-xl text-gray-900"
                                onClick={toggleProductMenu}
                        >
                                Services
                                <svg
                                        className="h-5 w-5 flex-none text-black "
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
                        </div>

                        {isProductMenuOpen && (
                                <div
                                        className="absolute lg:left-[835px] md:left-12 left-4 lg:top-20 z-10 lg:w-screen lg:max-w-[490px] md:max-w-2xl max-w-[280px] w-screen md:w-screen bg-white shadow-2xl rounded ring-1 ring-gray-200"
                                >
                                        <div className="bg-white font-medium overflow-x-auto">
                                                <ul className="grid grid-cols-3 gap-4 mx-">
                                                        {advantages.map((v, i) => (
                                                                <li key={i} className="w-16 py-6 mx-12 flex flex-col items-center">
                                                                        <Link to=''>
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
                                                                </li>
                                                        ))}
                                                </ul>
                                        </div>
                                </div>
                        )}
                </header>
        );
}

export default Navbar;