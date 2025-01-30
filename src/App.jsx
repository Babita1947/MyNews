import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Box from './components/Box'
import Home from './components/Home'
import useFetchData from './customhooks/useFetchData.js'
import Loader from './components/Loader.jsx'
import Footer from './components/Footer.jsx'
import ReadMore from './components/ReadMore.jsx'


function App() {
  const [option, setOption] = useState("sports");
  const { data, loading } = useFetchData(`https://newsapi.org/v2/everything?q=${option}&from=2025-01-29&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
  
  console.log("data = ", data);
  return (
    <>
      <Navbar />
      <Home option={option} setOption={setOption} />
      {
        loading ? <div>
          <Loader />
        </div> : <div className='grid grid-cols-4 gap-2 px-8'>
          {
            data?.map((item, index) => {
              return (
                <Box key={index} item={item} />
              )
            })
          }

        </div>
      }

      <Footer option={option} setOption={setOption}/>

      
    </>
  )
}

export default App
