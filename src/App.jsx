import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Box from './components/Box'
import Home from './components/Home'
import useFetchData from './customhooks/useFetchData.js'


function App() {
  const [option, setOption]=useState("sports");
  const data = useFetchData(`https://newsapi.org/v2/everything?q=${option}&from=2024-12-28&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
  console.log("data = ",data);
  return (
    <>
      <Navbar/>
      <Home option={option} setOption={setOption}/>
      <div className='grid grid-cols-4 gap-2 px-8'>
        {
          data?.map((item,index) => {
            return (
              <Box key={index} item = {item}/>
            )
          })
        }
       
      </div>
    </>
  )
}

export default App
