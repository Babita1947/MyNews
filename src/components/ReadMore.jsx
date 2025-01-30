import React from 'react';
import { MdShare } from "react-icons/md";
import { FaRegBookmark, FaArrowRight } from "react-icons/fa";
import { useLocation } from 'react-router';
import Home from './Home';
import Navbar from './Navbar';

const ReadMore = () => {
    const { state } = useLocation();
    const { data } = state || {}; // Ensures state is not null

    console.log("data from route", data);

    // Function to navigate to the API's URL
    const continueReadBtn = () => {
        if (data?.url) {
            window.open(data.url, "_blank"); // Opens in a new tab
        } else {
            alert("No URL available for this article.");
        }
    };

    const timestamp = data?.publishedAt;
    const date = new Date(timestamp);

    // Format to dd/mm/yyyy hour:min
    const formattedDate = date.toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    return (
        <div className='w-full mx-auto flex flex-col'>
            <Navbar />
            <Home />
            <h1 className='w-[60%] mx-auto text-4xl font-bold text-center leading-snug'>{data?.title}</h1>
            <p className='w-[70%] mx-auto text-xl font-sans p-6'>{data?.description}</p>

            <div className='w-[70%] text-sm flex justify-between items-center mx-auto p-6'>
                <p>{formattedDate}</p>
                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-2'>
                        <p>Share</p>
                        <MdShare />
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>Save</p>
                        <FaRegBookmark />
                    </div>
                </div>
            </div>

            <div className='mx-auto text-center'>
                <img src={data?.urlToImage} alt="" className='w-[70%] h-[50%] mx-auto' />
            </div>

            <p className='w-[70%] mx-auto text-xl p-6'>{data?.content}</p>

            <button 
                onClick={continueReadBtn}
                className="w-[40%] mx-auto px-4 py-2 bg-slate-800 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-slate-700 transition duration-300 mt-5">
                <p className='text-center'>Continue Reading</p>
                <FaArrowRight />
            </button>
        </div>
    );
}

export default ReadMore;
