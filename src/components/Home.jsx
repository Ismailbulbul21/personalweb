import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'




const Home = () => {
  return (
    <div name='home' className='bg-gray-700 h-screen w-full  '>

<div className=' max-w-[1000px]   h-full flex flex-col justify-center text-white  mx-auto pl-2 lg:ml-80
max-sm:items-center 
'>

<p className='text-[#8892b0]  text-3xl py-1  '>Hi, My Name is </p>

<h1 className=' text-4xl   font-bold text-white sm:text-6xl '>Ismail bulbul</h1>

<h2 className='text-3xl font-bold text-[#a07b7e]'>I'm full stack developer</h2>

<h1 className='text-xl sm:text-2xl  max-w-[700px] py-4 text-gray-400      '>I'am full-stack developer specializing in building exceptional digital experience . currently, i'am focused on building responsive full-stack developing web application .   </h1>

<div>

<button className='border-2 group px-9 py-5 my-2 hover:bg-transparent text-xl flex items-center tracking-wider hover:bg-red-700 hover:border-red-600   '>  View Work 

<span><AiOutlineArrowRight className='ml-3 group-hover:rotate-90 duration-500' size={27}/> </span>  

 </button>
</div>



</div>


    </div>
  )
}

export default Home