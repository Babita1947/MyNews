import React from 'react'
import MyNews from '../assets/mynewsblue.png';

const Footer = ({ option, setOption }) => {
    const stringArray = ["Home",
        "News",
        "Sports",
        "Business",
        "Innovation",
        "Culture",
        "Travel",
        "Earth",
        "Live"];
    return (

        <div className='w-full p-10'>
            <div className='w-full h-0.5 bg-slate-700'><hr /></div>

            <div className='h-24 w-52 '>
                <img src={MyNews} alt="" />
            </div>
            <div className='flex justify-start items-center gap-1 pl-9'>
                {stringArray.map((item, index) => (
                    <button key={index}
                        onClick={() => setOption(item.toLowerCase())}
                        className={`font-semibold text-sm text-slate-700 ${item.toLowerCase() == option ? "underline" : "text-slate-700"} hover:underline px-3 py-2`}>{item}
                    </button>
                ))}
            </div>


            <div className='text-xs text-black pl-12 py-10'>Copyright 2025 MyNews. All rights reserved.  <span className='italic'> The MyNews is not responsible for the content of external sites.</span> <span className='font-bold '>Read about our approach to external linking.</span>
            </div>

            <div className='w-full h-0.5 bg-slate-700'><hr /></div>

        </div>
    )
}

export default Footer