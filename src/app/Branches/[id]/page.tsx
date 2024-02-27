import { Semester } from '@/components/component/semester'
import React from 'react'

function page({params}:{params:{id:string}}) {
  return (
    <div className='grid w-full h-[calc(100vh_-_100px)] items-center justify-center'>
        <Semester Branch={params.id} />
    </div>
  )
}

export default page