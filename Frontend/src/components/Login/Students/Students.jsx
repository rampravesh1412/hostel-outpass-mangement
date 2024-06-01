import React , {useState} from 'react'
import imglab from "../../../assets/loginpage.jpg"
import { useNavigate } from 'react-router-dom'

const Students = () => {


    const navigate = useNavigate()
  
    const [studentData , setStudentData] = useState({
        fullname: "",
        branch: "",
        registrationNumber: "",
        email: "",
        phone: "",
        reason : "",
        checkout : "",
        checkin : "",
        roomnum:"",
        year: ""
      
    })
  
    const studentsDataHandler = (event) => {
        setStudentData({
        ...studentData,
        [event.target.name]: event.target.value
      })
  
    }
  
    const clickHandler = async(event) => {
      event.preventDefault();
      const response = await fetch('http://localhost:7000/api/v1/student/passdata' , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(studentData)
      })

      const dataResponse = await response.json()

      
      alert(dataResponse.message);
      navigate('/')
      console.log(response)
    
    }



  return (
    <div className='bg-zinc-600 m-4 pb-10'>
    <br/>
    <div className=''>
        <div className='text-center'>
            <h1 className='font-sans text-wrap text-red-900 text-3xl font-semibold'><u>Student Pass Details</u></h1>
        </div> <br/><br/>

            
        <div className='flex justify-around flex-wrap'>
           <div>
    <img className="rounded backdrop-blur-2xl" src={imglab} alt="img"  />
           </div>

           <div>
           <form>
        <div>
        <label className='text-black font-sans font-bold text-lg' htmlFor='name'>Full Name</label> <br/>
        <input onChange={studentsDataHandler} name='fullname' type="text" id='name' placeholder='Enter your name' size={25} />
        </div>

        <div>
            <label className='text-black font-sans font-bold text-lg' htmlFor='branch'>Branch</label> <br/>
            <input onChange={studentsDataHandler} name='branch' type="text" id='branch' placeholder='Enter the your branch' size={25}/>
        </div>

        <div>
            <label className='text-black font-sans font-bold text-lg' htmlFor='reg'>Registration Number</label> <br/>
            <input onChange={studentsDataHandler} name='registrationNumber' type="text" id='reg' placeholder='Enter your registration number' size={25} />
        </div>
        <div>
            <label className='text-black font-sans font-bold text-lg' htmlFor='year'>Which Years Student</label> <br/>
            <input onChange={studentsDataHandler} name='year' type="text" id='year' placeholder='Enter your current year' size={25} />
        </div>

        <div>
            <label className='text-black font-sans font-bold text-lg' htmlFor='email'>Email</label> <br/>
            <input onChange={studentsDataHandler} name='email' type="text" id='email' placeholder='Enter your Email' size={25} />
        </div>

        <div>
            <label className='text-black font-sans font-bold text-lg' htmlFor='mb'>Phone Number</label> <br/>
            <input onChange={studentsDataHandler} name='phone' type="text" id='mb' placeholder='Enter your mobile number' size={25}/>
        </div>

        <div>
            <label className='text-black font-sans font-bold text-lg' htmlFor='reason'>Reason/Destination</label> <br/> 
            <input onChange={studentsDataHandler} name='reason' type="text" id='reason' placeholder='Enter the proper reason'size={25} />
        </div>

        <div>
        <label className='text-black font-sans font-bold text-lg' htmlFor='roomnum'>RoomNumber</label> <br/> 
            <input onChange={studentsDataHandler} name='roomnum' type="text" id='roomnum' placeholder='Enter the roomnumber'size={25} />
          
        </div>

        <div>
            <label className='text-black font-sans font-bold text-lg' htmlFor='checkout'>Checkout</label> <br/>
            <input onChange={studentsDataHandler} name='checkout' type="date" id='checkout' size={25}/>
        </div>

        <div>
            <label className='text-black font-sans font-bold text-lg' htmlFor='checkin'>Checkin</label> <br/>
            <input onChange={studentsDataHandler} name='checkin' type="date" id='checkin' size={25}/>
        </div> <br/>

        <div>
            <button onClick={clickHandler} className='ml-4 px-6 py-2 bg-green-600'>Submit</button>
        </div>
           </form>
           </div>
        </div>
    </div>
    </div>
  )
}

export default Students
