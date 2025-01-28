import React from 'react'

const Box = ({ item }) => {
  console.log(item);

  const truncatedStr = item?.title?.substring(0, 60);
  const timestamp = item?.publishedAt;
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
    <div>
      <div className='px-3 mt-5 overflow-x-hidden'>
        <div className='h-50'>
          <img src={item?.urlToImage} alt="Image not found" className='h-44 w-full' />
        </div>
        <h1 className='text-2xl font-semibold font-serif'>{item?.title?.length > 60 ? truncatedStr + "...." : truncatedStr}</h1>
        <p className='text-slate-800 font-serif mt-3'>{item?.description}
        </p>

        <div className='flex justify-between items-center text-sm text-slate-700 mt-3'>
          <p>{formattedDate}</p>
          <div className='h-4 w-[1px] bg-slate-700'></div>
          <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Read more!</button>
        </div>
      </div>
    </div>
  )
}

export default Box