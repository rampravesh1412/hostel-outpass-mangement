import React from 'react'
import singupImg from "../../assets/signup/images.jpg"


const Signpage = () => {
  return (
    <div className='bg-gray-800 text-white flex justify-around items-center flex-wrap'>
      <div className=''>
        <br/>
      <div>
        <h1 className='font-bold text-4xl text-center'>Signin Your Account!</h1>
      </div>
      <br/>
      <form className='font-bold text-xl'>
      <div className=''>
        
      
      </div>
      <br/>
      <div className=' '>
        <label className='font-bold'>Email: </label><br/>
        <input className='py-1' type="email" placeholder='Enter Email Address' name="" required /><br/>
      </div><br/>
      <div className=''> 
        <div >
        <label className='font-bold'>Password: </label><br/>
        <input className='py-1' type="password" placeholder='Enter Password' name="" id="pwd" required /><br/><br/>
        </div>
        
      </div>
     
      </form>
      <div className='btn'>
        <button className='bg-yellow-500 px-20 py-2 rounded-lg'>Signin Account</button>
      </div>
      <br/><br/>
    </div>
    <div className=''>
      <img src={singupImg} width={600} alt="" />
    </div>
    </div>
  )
}

export default Signpage
