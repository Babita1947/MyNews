import React from 'react'

const Home = ({option, setOption}) => {
    const stringArray = ["Home", 
                         "News", 
                         "Sports", 
                         "Business", 
                         "Innovation", 
                         "Culture", 
                         "Travel", 
                         "Earth", 
                         "Video", 
                         "Live"];
  return (

    <div className='w-full'>
        <div className='flex justify-center items-center gap-1 mt-3'>
            {stringArray.map((item, index) => (
                <button key={index}
                    onClick={()=>setOption(item.toLowerCase())}
                    className={`font-semibold text-slate-700 rounded-md hover:bg-slate-900 hover:text-white ${item.toLowerCase()==option ? "bg-slate-900 text-white" : "bg-transparent text-slate-700"} hover:bg-slate-100  px-3 py-2`}>{item}
                </button>
            ))}
        </div>
        <div className='w-full h-1 pt-4'><hr /></div>
    </div>
  )
}

export default Home