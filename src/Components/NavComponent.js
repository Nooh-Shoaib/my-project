import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { title: 'About Us', link: '/about-us' },
  { title: 'FAQs', link: '/faqs' },
  { title: 'Customer Support', link: '/customer-support' },
  { title: 'Blog', link: '/blog' },
];

const advantages = [
  {
    imageUrl:
      'https://thecustomwebsites.com/wp-content/uploads/2023/05/htpyxaicaqftygqbuwev_robvzn.svg',
    label: 'Custom&nbsp;Web&nbsp;Development',
    link: '/custom-web-development',
  },
  {
    imageUrl:
      'https://thecustomwebsites.com/wp-content/uploads/2023/05/cpdw6fvcrjxq5icdanxy_gxxzyb.svg',
    label: 'UI&nbsp;&amp;&nbsp;UX&nbsp;Design ',
    link: '/uiux-design',
  },
  {
    imageUrl:
      'https://thecustomwebsites.com/wp-content/uploads/2023/05/pskqvpgwfpvaxirnkflh_iaawf9.svg',
    label: 'SEM',
    link: '/sem',
  },
  {
    imageUrl:
      'https://thecustomwebsites.com/wp-content/uploads/2023/05/reg4ek2hoyu2p6xijshf_ohzbys.svg',
    label: 'AppDevelopment',
    link: '/quality-assurance',
  },
  {
    imageUrl:
      'https://thecustomwebsites.com/wp-content/uploads/2023/05/fd9amtrvdglzmm16surr_l3qqfs.svg',
    label: 'Graphics&nbsp;&amp;&nbsp;Branding',
    link: '/graphics-branding',
  },
  {
    imageUrl:
      'https://thecustomwebsites.com/wp-content/uploads/2023/05/sifwzze7kiehbwslcbrm_waex1r.svg',
    label: 'Quality&nbsp;Assurance',
    link: '/app-development',
  },
  {
    imageUrl:
      'https://thecustomwebsites.com/wp-content/uploads/2023/05/ufryavrsvi0lysbio9z2_drbs0q.svg',
    label: 'DevOps',
    link: '/devops',
  },
  {
    imageUrl:
      'https://thecustomwebsites.com/wp-content/uploads/2023/05/fktzbjjevgohlyylbtpf.svg',
    label: 'CMS',
    link: '/cms',
  },
  {
    imageUrl:
      'https://thecustomwebsites.com/wp-content/uploads/2023/05/untk6q64u64b7iamu1dt.svg',
    label: 'SEO',
    link: '/seo',
  },
];

const DropdownMenu = ({ items }) => (
  <div className="container mx-auto w-full flex flex-wrap justify-between">
    <div className="bg-white font-medium overflow-x-auto">
      <ul className="space-y-2">
        {items.map((item, index) => (
          <Link to={item.link} key={index}>
            <li className={`border-b w-full py-1 ${index === items.length - 1 ? '' : 'mb-2'}`}>
              {item.title}
            </li>
          </Link>
        ))}
        <div>
          <Link
            to="https://thecustomwebsites.com/wp-content/uploads/2023/05/Presentation-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="px-4 py-2 rounded-lg font-semibold border-2 text-sm border-white text-white bg-black my-1"
            >
              Company Profile
            </button>
          </Link>
        </div>
      </ul>
    </div>
  </div>
);

const DropdownAdvantages = ({ advantages }) => (
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
);

const Company = () => {
  const [isArrowUp, setArrowUp] = useState(false);

  const toggleArrow = (e) => {
    e.stopPropagation();
    setArrowUp(!isArrowUp);
  };

  return (
    <section className="font-sans leading-normal tracking-normal">
      <nav className="relative">
        <div className="container mx-auto flex justify-between">
          <ul className="flex">
            <li className="group relative">
              <div className="flex items-center">
                <div className="relative cursor-pointer block">Company</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  className={`ml-2 h-6 w-4 text-gray-600 font-extrabold ${isArrowUp ? 'transform rotate-180' : ''
                    }`}
                  onClick={(e) => {
                    toggleArrow(e);
                  }}
                >
                  <path d="M12 21.35l-1.45-1.41L4 12.47l1.41-1.41L12 18.47l6.59-6.59L20 12.47l-8 8.88z" />
                </svg>
              </div>
              <div
                className={`p-6 dropdown my-2 absolute top-10 right-full shadow-2xl bg-white text-black ${isArrowUp ? 'arrow-up' : ''
                  }`}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <DropdownMenu items={menuItems} />
                <div
                  className={`absolute w-0 h-0 border-4 border-solid border-transparent border-black ${isArrowUp ? 'border-t-0 border-b-4' : 'border-t-4 border-b-0'
                    }`}
                  style={{ top: '50%', left: '15px', transform: 'translateY(-50%)' }}
                  onClick={(e) => {
                    toggleArrow(e);
                  }}
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

const Services = () => {
  const [isArrowUp, setArrowUp] = useState(false);

  const toggleArrow = (e) => {
    e.stopPropagation();
    setArrowUp(!isArrowUp);
  };

  return (
    <section className="font-sans leading-normal tracking-normal">
      <nav className="relative">
        <div className="container mx-auto flex justify-between">
          <ul className="flex">
            <li className="hoverable relative">
              <div className="flex items-center">
                <div className="relative block">Services</div>
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
                className={`p-6 mega-menu mb-16 sm:mb-0 shadow-2xl bg-white text-black ${isArrowUp ? 'arrow-up' : ''
                  }`}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <DropdownAdvantages advantages={advantages} />
                <div
                  className={`absolute w-0 h-0 border-4 border-solid border-transparent border-black ${isArrowUp ? 'border-t-0 border-b-4' : 'border-t-4 border-b-0'
                    }`}
                  style={{ top: '50%', right: '15px', transform: 'translateY(-50%)' }}
                  onClick={(e) => {
                    toggleArrow(e);
                  }}
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export { Company, Services, DropdownMenu, DropdownAdvantages };
