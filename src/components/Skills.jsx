import React from 'react'
import css from '../assets/css.png'
import firebase from '../assets/firebase.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
const Skills = () => {
  return (
    <div name='skills' className='bg-gray-700 text-gray-200 h-screen w-full'>

<div className='max-w-[1000px] h-full w-full flex flex-col justify-center mx-auto p-4'>

<div>
<p className='text-4xl inline border-b-4 border-yellow-600 font-bold'>Skills</p>
<p className='py-3'>//these are the technologies i know </p>



</div>






<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>



<div className=' shadow-md shadow-[#161111] hover:scale-110 duration-300'>

<img className='w-20 mx-auto' src={css} alt='css'/>

<p className='py-2'>CSS</p>

</div>

<div className=' shadow-md shadow-[#161111] hover:scale-110 duration-300'>

<img className='w-20 mx-auto' src={firebase} alt='firebase'/>

<p className='py-2'>FIREBASE</p>

</div>

<div className=' shadow-md shadow-[#161111] hover:scale-110 duration-300'>

<img className='w-20 mx-auto' src={github} alt='github'/>

<p className='py-2'>GITHUB</p>

</div>

<div className=' shadow-md shadow-[#161111] hover:scale-110 duration-300'>

<img className='w-20 mx-auto' src={html} alt='html'/>
<p className='py-2'>HTML</p>

</div>

<div className=' shadow-md shadow-[#161111] hover:scale-110 duration-300'>

<img className='w-20 mx-auto' src={javascript} alt='javascript'/>

<p className='py-2'>JAVASCRIPT</p>
</div>

<div className=' shadow-md shadow-[#161111] hover:scale-110 duration-300'>

<img className='w-20 mx-auto' src={react} alt='react'/>

<p className='py-2'>REACT</p>
</div>

<div className=' shadow-md shadow-[#161111] hover:scale-110 duration-300'>

<img className='w-20 mx-auto' src={tailwind} alt='css'/>
<p className='py-2'>TAILWIND</p>

</div>














</div>






</div>



    </div>
  )
}

export default Skills