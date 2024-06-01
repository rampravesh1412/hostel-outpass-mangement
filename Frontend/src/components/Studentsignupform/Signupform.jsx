import React, { useState } from 'react'
import "./Signupform.css"
import singupImg from "../../assets/signup/images.jpg";
import {useNavigate} from 'react-router-dom'
// import axios from 'axios'


const Signupform = () => {

  const navigate = useNavigate()
  
  const [singupData , setSingupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    
  })

  const signupHandlerData = (event) => {
    setSingupData({
      ...singupData,
      [event.target.name]: event.target.value
    })

  }

  const singupSubmitHandler = async(event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:7000/api/v1/student/studentsingup' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(singupData)
    })
    alert("Accont is created");
    navigate('/signin/student')
    console.log(response)
  
  }

 



  return (
    <div className='bg-gray-800 text-white flex justify-around items-center flex-wrap'>
      <div className=''>
      <div>
        <h1 className='font-bold text-4xl text-center'>Create your account!</h1>
      </div>
      <br/>
      <form className='font text-xl text-black'>
      <div className=''>
        <div>
        <label className='font-bold'>Firstname</label> <br/>
        <input onChange={signupHandlerData}  className='outline-black py-1' type="text" name="firstname" placeholder='Enter firstname' required/><br/><br/>
        </div>
        <div>
        <label className='font-bold'>Lastname</label> <br/>
        <input onChange={signupHandlerData} className='py-1' type="text" name="lastname" placeholder='Enter lastname' required /><br/>
        </div>
      </div>
      <br/>
      <div className=' '>
        <label className='font-bold'>Email Address: </label><br/>
        <input onChange={signupHandlerData} className='py-1' type="email" placeholder='Enter Email Address' name="email" required /><br/>
      </div><br/>
      <div className=''> 
        <div >
        <label className='font-bold'>Create Password: </label><br/>
        <input onChange={signupHandlerData} className='py-1' type="password" placeholder='Enter Password' name="password" id="pwd" required /><br/><br/>
        </div>
       
      </div>
      <br/>
      <div className='btn'>
        <button onClick={singupSubmitHandler } className='bg-yellow-500 px-14 py-2 rounded-lg'>Create Account</button>
      </div>
      
      </form>
      <br/>
      
      <br/><br/>
      
    </div>
    <div className=''>
      <img src={singupImg} width={600} alt="" />
    </div>
    </div>
  )
}
export default Signupform

