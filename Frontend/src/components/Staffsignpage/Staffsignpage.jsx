import React , {useState} from 'react'
import singupImg from "../../assets/signup/images.jpg"
import {useNavigate} from 'react-router-dom';

const Staffsignpage = () => {



  const [signData , setSignData] = useState({
    email : "",
    password : ""
  })

  const navigate = useNavigate()

  const signupHandler = (event) => {
    setSignData(
      {
        ...signData,
        [event.target.name]: event.target.value
      }
    )
    console.log(signData)

  }

  const clickHandler = async(event) => {
    event.preventDefault();

    const res = await fetch('http://localhost:7000/api/v1/staff/staffsingin' , 
      {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(signData)
      }
      
    )

    const data = await res.json();

    if(data.token){
      alert(data.message);
      // console.log(data)
      localStorage.setItem("token" , data.token);
      navigate("/staff/login");
    }else{
      alert(data.message);
    }

    
  }




  return (

  
    <div className='bg-gray-800 text-black flex justify-around items-center flex-wrap'>
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
      <input  onChange={signupHandler} className='py-1' type="email" placeholder='Enter Email Address' name="email" required /><br/>
    </div><br/>
    <div className=''> 
      <div >
      <label className='font-bold'>Password: </label><br/>
      <input onChange={signupHandler}  className='py-1' type="password" placeholder='Enter Password' name="password" id="pwd" required /><br/><br/>
      </div>
      
    </div>
   
    </form>
    <div className='btn'>
      <button onClick={clickHandler} className='bg-yellow-500 px-20 py-2 rounded-lg'>Signin Account</button>
    </div>
    <br/><br/>
  </div>
  <div className=''>
    <img src={singupImg} width={600} alt="" />
  </div>
  </div>
  )
}

export default Staffsignpage
