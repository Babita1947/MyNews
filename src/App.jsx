import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Box from './components/Box'
import Home from './components/Home'
import useFetchData from './customhooks/useFetchData.js'
import Loader from './components/Loader.jsx'
import Footer from './components/Footer.jsx'



function App() {
  const [option, setOption] = useState("general");
  const [input , setInput]=useState("");
  const { data, loading } = useFetchData(`https://saurav.tech/NewsAPI/top-headlines/category/${option}/in.json`);

const filteredBooks = data?.filter(val => val?.title?.toLowerCase().includes(input));
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
