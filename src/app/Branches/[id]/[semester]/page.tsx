import { Subjects } from '@/components/component/subjects'
import React from 'react'

function page({params}:{params:{semester:string}}) {
  return (
    <div>
       <Subjects />
    </div>
  )
}

export default page