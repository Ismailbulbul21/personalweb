import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gray-700 flex justify-center items-center p-4   '>
    <form method="POST" action='https://getform.io/f/1bed2595-5b9a-4280-b717-f8312304b7a8' className='flex flex-col max-w-[600px] w-full text-gray-200  '>

<div className=''>

<p className='text-4xl  border-b-4 inline border-pink-700  '> Contact  </p>
<p className='pt-3'>//Submit me the form below or Send me Email-ismailbulbul381@gmail.com</p>

</div>

<input className='bg-[#ccd6f6] py-2  mt-2 pt-3  text-black' type='text' placeholder='Name' name='text'/>
<input className='my-4 p-2 bg-[#ccd6f6] pt-3  text-black' type='email' placeholder='Email' name='email'/>

<textarea className='p2 text-black' name='message' cols='30' rows='10' placeholder='Message'/>

<button className='py-3 border-2 hover:bg-pink-700 hover:border-pink-700 px-9  my-8 mx-auto flex items-center     '>Send</button>


    </form>
    
    
    
    
    
    
    
    </div>
  )
}

export default Contact