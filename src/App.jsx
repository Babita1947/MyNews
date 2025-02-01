import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Box from './components/Box'
import Home from './components/Home'
import useFetchData from './customhooks/useFetchData.js'
import Loader from './components/Loader.jsx'
import Footer from './components/Footer.jsx'



function App() {
  const [option, setOption] = useState("sports");
  const [input , setInput]=useState("");
  const { data, loading } = useFetchData(`https://newsapi.org/v2/everything?q=${option}&from=2025-01-14&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);

const filteredBooks = data?.filter(val => val.title.toLowerCase().includes(input));
console.log(filteredBooks);
  
  // console.log("data = ", data);
  return (
    <>
      <Navbar input={input} setInput={setInput} />
      <Home option={option} setOption={setOption} />
      {
        loading ? <div><Loader /></div> : 
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 sm:px-8 px-3'>
          {
            filteredBooks?.map((item, index) => {
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
