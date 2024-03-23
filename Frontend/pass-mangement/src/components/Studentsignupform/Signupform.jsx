import React from 'react'
import "./Signupform.css"
import singupImg from "../../assets/signup/images.jpg"

const Signupform = () => {
  return (
    <div className='bg-gray-800 text-white flex justify-around items-center flex-wrap'>
      <div className=''>
      <div>
        <h1 className='font-bold text-4xl text-center'>Create your account!</h1>
      </div>
      <br/>
      <form className='font-bold text-xl'>
      <div className=''>
        <div>
        <label className='font-bold'>Firstname</label> <br/>
        <input  className='outline-black py-1' type="text" name="" placeholder='Enter firstname' required/><br/><br/>
        </div>
        <div>
        <label className='font-bold'>Lastname</label> <br/>
        <input className='py-1' type="text" name="" placeholder='Enter lastname' required /><br/>
        </div>
      </div>
      <br/>
      <div className=' '>
        <label className='font-bold'>Email Address: </label><br/>
        <input className='py-1' type="email" placeholder='Enter Email Address' name="" required /><br/>
      </div><br/>
      <div className=''> 
        <div >
        <label className='font-bold'>Create Password: </label><br/>
        <input className='py-1' type="password" placeholder='Enter Password' name="" id="pwd" required /><br/><br/>
        </div>
        <div>
        <label className='font-bold'>Confirm Password: </label><br/>
        <input className='py-1' type="password" placeholder='Enter Confirm Password' name="" required /><br/>
        </div>
      </div>
      <br/>
      </form>
      <div className='btn'>
        <button className='bg-yellow-500 px-28 py-2 '>Create Account</button>
      </div>
      <br/><br/>
    </div>
    <div className=''>
      <img src={singupImg} width={600} alt="" />
    </div>
    </div>
  )
}
export default Signupform

