import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import React from "react";
import { Link } from "react-router-dom";


let whatsapp = "https://api.whatsapp.com/send/?phone=%2B14109468181&text&type=phone_number&app_absent=0";
let phone_number = "tel:+14108349965";
let mail = "mailto:support@sireprinting.com";

export default function SideIcons() {
        return (
                <section className="fixed top-44 right-0 my-10 space-y-1 z-10 ">
                        <div>
                                <Link to={whatsapp} target="_blank">
                                        <FontAwesomeIcon icon={faFacebookMessenger} className='sidebar-icons bg-blue-600 text-white text-2xl px-[10px] py-1' />
                                </Link>
                        </div>
                        <div>
                                <Link to={phone_number} target="_blank">
                                        <i className="fa-brands fa-whatsapp sidebar-icons bg-green-600 text-white text-2xl px-2.5 py-1"></i>
                                </Link>
                        </div>
                        <div>
                                <Link to={mail}>
                                        <FontAwesomeIcon icon={faPaperPlane} className='sidebar-icons bg-gray-600 text-white text-2xl px-2 py-1' />
                                </Link>
                        </div>
                </section>
        );
}
