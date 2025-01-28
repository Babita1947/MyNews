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

        <div className='w-full py-5'>
            <div className='w-full h-0.5 bg-slate-700'><hr /></div>

            <div className='h-24 w-52 border-2'>
                <img src={MyNews} alt="" />
            </div>
            <div className='flex justify-start items-center gap-1 pl-10'>
                {stringArray.map((item, index) => (
                    <button key={index}
                        onClick={() => setOption(item.toLowerCase())}
                        className={`font-semibold text-sm text-slate-700 ${item.toLowerCase() == option ? "underline" : "text-slate-700"} hover:underline px-3 py-2`}>{item}
                    </button>
                ))}
            </div>



            <div className='w-full h-1 pt-4'><hr /></div>

        </div>
    )
}

export default Footer