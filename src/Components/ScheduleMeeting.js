import React from 'react'
import { Link } from 'react-router-dom'

const ScheduleMeeting = () => {
        return (
                <section className='bg-black my-16'>
                        <div className='h-24 flex justify-around  items-center  '>
                                <h2 className='text-2xl font-semibold text-white '>Don’t have a website or app? What are you waiting for?</h2>
                                <div className='space-x-5'>
                                        <button className=" py-4 px-7 rounded-md font-semibold border-2 mx-3 lg:mx-0 border-white bg-transparent  my-3 text-white">Ask For Demo</button>
                                        <Link to='/schedule-a-meeting'>
                                                <button className=" py-3.5 px-1.5 md:px-4 lg:px-5 rounded-md font-semibold border-2  lg:mx-0 border-white bg-white text-black my-3 lg:text-lg text-base">
                                                        Schedule a meeting
                                                </button></Link>
                                </div>
                        </div>
                </section>
        )
}

export default ScheduleMeeting
