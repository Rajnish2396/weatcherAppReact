import React from 'react'

export default function SmallCard({text, value}) {
  return (
    <div className='flex items-center justify-center bg-blue-800 bg-opacity-50 p-4 text-white text-center text-lg w-1/3 md:w-[45%] rounded-md'>
                   <div className='px-5 text-lg  relative '>{value}<sup className='text-xs'>0</sup></div>
                    <div>{text} </div>
                </div>
  )
}
