import React, { useEffect, useState } from 'react'
import useFetchApi from '../hooks/useFetchApi'

export default function Weather() {

  const[weather, setWeather]=useState({});
  const[userValue, setUserValue]=useState('')
  const[city, setCity]=useState("delhi")

  
 useEffect(()=>{
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7205c14d797983014b90b5b8b5d3bb82`)
  .then(data=>data.json())
  .then((data)=>{
    setWeather({
      name:data.name,
      temperature: Math.ceil(data.main.temp),
      feels:Math.ceil(data.main.feels_like),
      minTemp:Math.ceil(data.main.temp_min),
      maxTemp:Math.ceil(data.main.temp_max),
      wind:Math.ceil(data.wind.speed),
      windDegree:Math.ceil(data.wind.deg)
    })
  })
 },[city])

  return (
    <div className='w-full bg-blue-950 h-screen flex items-center justify-center'>

      
        
        <div className='rounded-lg bg-blue-900  bg-opacity-65 p-2 md:p-10 max-w-screen-sm mx-auto border-1
         border-white border-opacity-10 flex flex-col gap-11  items-center shadow-xl
         '>
            <div className='h-12 w-full flex rounded-lg overflow-hidden shadow-xl'>
              <input type='text' placeholder='Input Your City Name' className='px-8 rounded-ey-none h-100 w-3/4' onChange={(e)=>{setUserValue(e.target.value)}} />
              <button className='bg-yellow-300 he-100 w-1/4  text-blue-900 font-semibold' onClick={()=>{setCity(userValue)}}>Search</button>
              </div>

            <h1 className='text-yellow-300 text-5xl text-center font-bold relative'>{weather.temperature} <sup className='font-normal text-2xl absolute -top-4'>0</sup>
          <div className='pt-2 text-white'>{weather.name}</div>
          
            </h1>

            <div className='flex flex-wrap grid-cols-2 gap-8 justify-between items-center w-full'>
                <div className='flex items-center justify-center bg-blue-800 bg-opacity-50 p-4 text-white text-center text-lg w-1/3 md:w-[45%] rounded-md'>
                   <div className='px-5 text-lg  relative '>{weather.minTemp}<sup className='text-xs'>0</sup></div>
                    <div>Minimum </div>
                </div>
                <div className='flex items-center justify-center bg-blue-800 bg-opacity-50 p-4 text-white text-center text-lg w-1/3 md:w-[45%] rounded-md'>
                   <div className='px-5 text-lg  relative'>{weather.maxTemp}<sup className='text-xs'>0</sup></div>
                    <div>Maximum </div>
                </div>
                <div className='flex items-center justify-center bg-blue-800 bg-opacity-50 p-4 text-white text-center text-lg w-1/3 md:w-[45%] rounded-md'>
                   <div className='px-5 text-lg  relative'>{weather.feels}<sup className='text-xs'>0</sup></div>
                    <div>Feels Like</div>
                </div>
                <div className='flex items-center justify-center bg-blue-800 bg-opacity-50 p-4 text-white text-center text-lg w-1/3 md:w-[45%] rounded-md'>
                   <div className='px-5 text-lg  relative'>{weather.wind}<sup className='text-xs'>0</sup></div>
                    <div>Wind</div>
                </div>
            </div>
        </div>

    </div>
  )
}
