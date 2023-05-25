import React from 'react'
import {useState} from 'react'
import {FaBars,FaFacebook,FaInstagram,FaTwitter,FaTwitch} from 'react-icons/fa'
 import{MdCancel} from 'react-icons/md'
import {Link} from 'react-scroll'
import{AiFillHome} from 'react-icons/ai'
import{BsPersonCircle} from 'react-icons/bs'
 import { BsFileEarmarkCodeFill } from "react-icons/bs";
 import{MdWork} from 'react-icons/md'
 import{GrContact} from 'react-icons/gr'


export const Nav = () => {


const [show ,setShow]=useState(true)

const handleShow =()=>{

setShow(!show)

}


  return (

 <div name='nav' className='fixed flex h-[90px] w-full bg-gray-700  justify-between items-center px-2 '>
 


<div>

<a className='text-3xl tracking-[-3px]  text-gray-400  hover:border-b-4 '  href='#'>BULBUL  </a>

</div>










<ul className='hidden md:flex  text-gray-200'>

<li className='hover:text-black text-[18px] '>
  
<Link  to="home"  smooth={true}  duration={500} >
         Home
        </Link>
  

</li>

<li  className='hover:text-black text-[18px]   '>

<Link  to="about"  smooth={true}  duration={500} >
         About
        </Link>

</li>

<li  className='hover:text-black text-[18px]'>

<Link  to="skills"  smooth={true}  duration={500} >
         Skills
        </Link>

</li>

<li  className='hover:text-black text-[18px]'>

<Link  to="work"  smooth={true}  duration={500} >
         Work
        </Link>

</li>

<li  className='hover:text-black text-[18px]'>

<Link  to="contact"  smooth={true}  duration={500} >
         Contact
        </Link>

</li>

</ul>



<div onClick={handleShow} className='md:hidden z-10 text-white px-1 text-3xl'>

{


  show? <FaBars/> : <MdCancel/>


}
</div>



<ul className={show ? "hidden" : '  absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-slate-500 '   }>

<li className='py-6 text-2xl  hover:text-white  ' >
  
<Link onClick={handleShow} className='flex items-center justify-center gap-4 mr-3'   to="home"  smooth={true}  duration={500} >
  <AiFillHome size={29}/>       Home
        </Link>
</li>
<li className='py-6 text-2xl   hover:text-white' >

<Link onClick={handleShow} className='flex items-center justify-center gap-4 ml-4  ' to="about"  smooth={true}  duration={500} >
  <BsPersonCircle size={29} className=' '/>    AboutMe
        </Link>

</li>

<li className='py-6 text-2xl   hover:text-white' >
<Link onClick={handleShow} className='flex items-center justify-center gap-9 mr-3'  to="skills"  smooth={true}  duration={500} >
   <BsFileEarmarkCodeFill size={29} className=''/>      Skills
        </Link>
</li>
<li className='py-6 text-2xl  hover:text-white '  >

<Link onClick={handleShow} className='flex items-center justify-center gap-4' to="work"  smooth={true}  duration={500} >
      <MdWork size={29}/>   MyWork
        </Link>
</li>
<li className='py-6 text-2xl  hover:text-white'   >

<Link onClick={handleShow} className='flex items-center justify-center gap-4 ' to="contact"  smooth={true}  duration={500} >
   <GrContact size={29} className='' />    Contact
        </Link>

</li>




</ul>



</div>





























   
  )
}
