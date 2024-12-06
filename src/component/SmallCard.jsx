import React from 'react'

export default function SmallCard({ text, value }) {
    return (
        <div className='flex 
    flex-col
    md:flex-row
    items-center 
    justify-center
     bg-blue-800 
     bg-opacity-50 p-4 
     text-white text-center 
     text-lg  
     rounded-md'>
            <div className='px-5 text-lg  relative '>{value}<sup className='text-xs'>0</sup></div>
            <div>{text} 1 </div>
        </div>
    )
}
