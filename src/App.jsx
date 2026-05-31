import React from 'react'
import Box from './components/box'
import { useState, useEffect } from 'react'
import image from './images/abstract-background-with-gradient-purple-border-vintage-grunge-background-texture-old-distressed-spo_1258-82804.avif'
import {motion} from  'framer-motion'
const App = () => {
  const [data, setData] = useState([])
  const [city, setCity] = useState('')
  const [searchCity, setSearchCity] = useState('')
  const cityname = data.location?.name
  const last_update = data.current?.last_updated
  const temp_c = data.current?.temp_c
  const country = data.location?.country  
  const visibility = data.current?.vis_km
  const feelslike = data.current?.feelslike_c
  const humidity = data.current?.humidity
  const windspeed = data.current?.wind_kph
  useEffect(() => {
    if (city) {
      const fetchData = async () => {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}`)
        const resdata = await response.json()
        setData(resdata)
      }
      fetchData()
    }
  }, [city])
  return (
    <>
      <motion.div className='flex' initial = {{opacity: 0 , y: 50}} animate = {{opacity: 1, y: 0}} >
        <div className='w-250'>
          <div className='text-white mt-30 mx-70 bg-gray-700 w-52 p-4 py-2 rounded-2xl backdrop-blur-4xl'>Live Weather Dashboard</div>
          <div><p className='text-white text-7xl font-bold w-150 mx-70 leading-20'>Check the sky before the day checks you </p></div>
          <p className='text-white text-sm leading-5 w-150 mt-5 ml-2 ml-70'>You can see here the real time temperature of any city around the world this will help you a lot because you can get realtime weather information at your fingertips. Whenever you required.</p>
          <div className='bg-gray-800 w-107 h-16 rounded-2xl mt-10 py-2 px-2 mx-70 flex'>
            <label>
              <input type="text" placeholder='Enter the city' value={searchCity} onChange={(e) => { setSearchCity(e.target.value) }} className='bg-gradient-to-r text-white from-gray-600 to-gray-800 rounded-2xl ml-0 mt-0 text-center py-3 px-8 w-80 opacity-50 my-15' />
            </label>

            <button onClick={() => setCity(searchCity)} className='bg-blue-900 px-5 py-2 rounded-xl h-12 ml-1 bg-gradient-to-r from-blue-400 to-purple-800 hover:border-2 active:w-22'>Search</button>
          </div>
        </div>
        <div>
          <div className='h-120 mt-30 w-100 bg-gradient-to-r from-gray-800 to-gray-950 rounded-4xl '>
            <div className='p-5 text-white'>
              <p className='absolute right-40'>{last_update}</p>
              <p>Current Weather</p>
              <p className='text-5xl font-bold'>{cityname}</p>
              <p className='text-2xl'> {country} </p>
              <p className='text-5xl font-bold'> {temp_c}°C </p>
            </div>
            <div className='flex gap-7 flex-wrap ml-11 mt-10'>
              <div className='flex flex-wrap gap-5'>
                <div style={{ backgroundImage: `url(${image})` }} className='h-20 w-35 bg-gray-900 rounded-3xl bg-cover border-black'>
                  <p className='text-white mx-3 my-1 text-'> Wind Speed</p>
                  <p className='text-white font-bold text-4xl ml-10'>{windspeed}</p>
                </div>
                <div style={{ backgroundImage: `url(${image})` }} className='h-20 w-35 bg-gray-900 rounded-3xl bg-cover border-black'>
                  <p className='text-white mx-3 my-1 text-'> Humidity</p>
                  <p className='text-white font-bold text-4xl ml-10'>{humidity}</p>
                </div>
                <div style={{ backgroundImage: `url(${image})` }} className='h-20 w-35 bg-gray-900 rounded-3xl bg-cover border-black'>
                  <p className='text-white mx-3 my-1 text-'> Feels Like</p>
                  <p className='text-white font-bold text-4xl ml-5'>{feelslike}°C</p>
                </div>
                <div style={{ backgroundImage: `url(${image})` }} className='h-20 w-35 bg-gray-900 rounded-3xl bg-cover border-black'>
                  <p className='text-white mx-3 my-1 text-'> Visibility (km)</p>
                  <p className='text-white font-bold text-4xl ml-10'>{visibility}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default App