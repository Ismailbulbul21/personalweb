import React from 'react'
import realestate from '../assets/realestate.jpg'
import workImg from '../assets/workImg.jpeg'

const Work = () => {
  return (
    <div name="work" className='h-screen w-full bg-gray-700 text-gray-200   '>
<div className='max-w-[1000px] mx-auto flex p-6 flex-col justify-center w-full h-full ' >
<div className='pb-8'>

<p className='text-4xl border-b-4 inline border-pink-600'>Work</p>
<p className='py-6'>/ /checkout my recent Work</p>

</div>

<div className=' grid sm:grid-cols-2  gap-3  grid-cols-1 h-full w-full   max-sm:px-12 md:grid-cols-2 '>

<div className=' '>
 
<img src={workImg} className=''/>
 
</div>

<div className=''>

<img src={realestate}  className=' '/>


</div>












</div>













</div>


    </div>
  )
}

export default Work