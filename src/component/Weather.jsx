import React, { useEffect, useState } from 'react'
import useFetchApi from '../hooks/useFetchApi'
import SmallCard from './SmallCard';

export default function Weather() {

  const [weather, setWeather] = useState({});
  const [userValue, setUserValue] = useState('')
  const [city, setCity] = useState("delhi")


  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7205c14d797983014b90b5b8b5d3bb82`)
      .then(data => data.json())
      .then((data) => {
        setWeather({
          name: data.name,
          temperature: Math.ceil(data.main.temp),
          feels: Math.ceil(data.main.feels_like),
          minTemp: Math.ceil(data.main.temp_min),
          maxTemp: Math.ceil(data.main.temp_max),
          wind: Math.ceil(data.wind.speed),
          windDegree: Math.ceil(data.wind.deg)
        })
      })
  }, [city])

  return (
    <div className='w-full bg-blue-950 h-screen flex items-center justify-center'>

-

      <div className='rounded-lg bg-blue-900  bg-opacity-65 p-5 md:p-10 max-w-screen-sm mx-auto border-1
         border-white border-opacity-10 flex flex-col gap-8  items-center shadow-xl
         '>
        <div className='h-12 w-full flex rounded-lg overflow-hidden shadow-xl'>
          <input type='text' placeholder='Input Your City Name' className='px-8 rounded-ey-none h-100 w-3/4' onChange={(e) => { setUserValue(e.target.value) }} />
          <button className='bg-yellow-300 he-100 w-1/4  text-blue-900 font-semibold' onClick={() => { setCity(userValue) }}>Search</button>
        </div>

        <h1 className='text-yellow-300 text-5xl text-center font-bold relative'>{weather.temperature} <sup className='font-normal text-2xl absolute -top-4'>0</sup>
          <div className='pt-2 text-white'>{weather.name}</div>

        </h1>

        <div className='grid grid-cols-2 gap-5 justify-between items-center w-full'>
          <SmallCard text={"Minimum"} value={weather.minTemp} />
          <SmallCard text={"Maximum"} value={weather.maxTemp} />
          <SmallCard text={"Feels Like"} value={weather.feels} />
          <SmallCard text={"Wind"} value={weather.wind} />
        </div>
      </div>

    </div>
  )
}
