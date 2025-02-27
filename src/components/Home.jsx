import React from 'react'
import { useNavigate } from 'react-router';

const stringArray = [
    "General", 
    "Business", 
    "Entertainment", 
    "Health", 
    "Science", 
    "Sports", 
    "Technology", 
];
const Home = ({option, setOption}) => {
  return (

    <div className='max-w-full pt-3 sticky top-0 z-40 bg-white'>
        <div className='hidden sm:flex justify-center items-center gap-1 mt-3'>
            {stringArray.map((item, index) => (
                <button key={index}
                    onClick={()=>setOption(item.toLowerCase())}
                    className={`font-semibold text-sm text-slate-700 rounded-md hover:bg-slate-900 hover:text-white ${item.toLowerCase()==option ? "bg-slate-900 text-white" : "bg-transparent text-slate-700"} hover:bg-slate-100  px-3 py-2`}>{item}
                </button>
            ))}
        </div>
        <div className='w-full h-1 pt-4'><hr /></div>
    </div>
  )
}

export default Home