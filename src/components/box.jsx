import React from 'react'
import image from '../images/abstract-background-with-gradient-purple-border-vintage-grunge-background-texture-old-distressed-spo_1258-82804.avif'
const box = (params) => {
    const windspeed = params.location?.country
    
    console.log(windspeed)
  return (
    <>
    <div style={{ backgroundImage: `url(${image})` }} className='h-20 w-35 bg-gray-900 rounded-3xl bg-cover border-black '>
         <p className='text-white mx-3 my-1'>{windspeed}</p>
         <p></p>
         </div>
    </>
  )
}

export default box