import { cn } from '@/lib/utils'
import React from 'react'

interface props{
    className:string,
    subject:string,
    year:number,
}

function PDF({className,subject,year}:props) {
  return (
    <div className={cn("rounded-lg border flex flex-col gap-2 items-start p-5 justify-center border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",className)}>
        <img alt='subject' className=' h-1/2 w-full' src="https://images.pexels.com/photos/20272801/pexels-photo-20272801/free-photo-of-joshua-tree-national-park-engagement-session.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <h1 className='text-xl font-semibold'>{subject}</h1>
        <h2>{year}</h2>
        <div className={"flex flex-row w-full justify-center gap-5"}>
            <button className=' w-20 h-10 rounded-full text-base bg-white text-gray-800'>View</button>
            <button className=' w-28 h-10 rounded-full text-base bg-white text-gray-800'>Download</button>
        </div>
    </div>
  )
}

export default PDF