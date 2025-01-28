import React from 'react'

const Box = ({item}) => {
    console.log(item);

  return (
    <div>
        <div className='px-3 mt-5 overflow-x-hidden'>
            <div className='h-50'>
              <img src={item?.urlToImage} alt="Image not found" className='h-44 w-full'/>
            </div>
            <h1 className='text-2xl font-semibold font-serif'>{item?.title}</h1>
            <p className='text-slate-800 font-serif mt-3'>{item?.description} 
            </p>

            <div className='flex justify-between items-center text-xs text-slate-700 mt-3'>
              <p>{item?.publishedAt}</p>
              <div className='h-3 w-[0.5px] bg-slate-700'></div>
              <button className='p-2 border-2'>Read more!</button>
            </div>
        </div>
    </div>
  )
}

export default Box