import React from 'react'
import { Link } from 'react-router-dom'

const ScheduleMeeting = () => {
        return (
                <section className='bg-black '>
                        <div className='lg:h-24 md:h-44 h-72 lg:flex md:flex lg:justify-around md:justify-between items-center  px-4 '>
                                <h2 className='text-2xl font-semibold text-white lg:text-start md:text-start text-center py-2  '>Don’t have a website or app? What are you waiting for?</h2>
                                <div className='lg:block  grid justify-items-center md:justify-items-end  md:grid'>
                                        <button className="py-4 px-7 md:py-3 lg:py-3.5 rounded-md font-semibold border-2 lg:mx-3  border-white bg-transparent my-1 md:my-2 text-white">Ask For Demo</button>
                                        <Link to='/schedule-a-meeting'>
                                                <button className="py-3.5 px-8 md:px-10 md:py-0 lg:px-5 lg:py-3.5 rounded-md font-semibold border-2 lg:mx-0 border-white bg-white text-black  lg:text-lg text-base">
                                                        Schedule a meeting
                                                </button>
                                        </Link>
                                </div>
                        </div>
                </section>
        )
}
export default ScheduleMeeting
