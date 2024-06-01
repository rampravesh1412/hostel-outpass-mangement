import React, { useEffect, useState } from 'react'
import './Staff.css'
import axios from 'axios';
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const Staff = () => {

  const [datas , setData] = useState([
    {
      fullname : "",
      branch : "",
      registrationNum : "",
      reason : "",
      status : ""
    }
  ])
  // http://localhost:7000/api/v1/student/getdata



  useEffect(()=>{
  const newHandler = async() => {
     await axios.get('http://localhost:7000/api/v1/student/getdata')
    .then((res) => {
      setData(res.data.data)
      // console.log(datas)
    })
    .catch((err) => {
      console.log(err);
    })


  }
  newHandler()

  },[])

  // console.log(datas)

  // nodemailer handler 

  
  
  

  

  return (
    <div>
      <h1 className='text-center mt-4 font-sans text-2xl text-red-600 font-bold'>Pass Requested Student List</h1>
      <table className='flex-wrap'>
        <tr className=''>
          <th>FullName</th>
          <th>Branch</th>
          <th>RegistrationNum</th>
          <th>Reason</th>
          <th>Email</th>
          <th>RoomNum</th>
          <th>Years</th>
          <th></th>
          <th>Status</th>
        </tr>
        
       {datas.map((data , ind)=> {
        return (
          <tr key={ind}>
            <td >{data.fullname}</td>
            <td >{data.branch}</td>
            <td >{data.registrationNumber}</td>
            <td >{data.reason}</td>
            <td >{data.email}</td>
            <td>{data.roomnum}</td>
            <td>{data.year}</td>
            <td >{data.status}</td>
            <td >
              <button onClick={()=>{


              alert(`
              pass is generated
              Unique PassNum: ${data._id}
              Name: ${data.fullname}
              Email: ${data.email}
              RegNo: ${data.registrationNumber}
              Reason: ${data.reason}
              MobileNum: ${data.phone}
              RoomNumber: ${data.roomnum}
              Years: ${data.year}
              OutingTime: ${data.checkout}
              Intime: ${data.checkin}
              Thank you for using our service

              `)

    //            const res = await fetch('http://localhost:7000/api/v1/sendmailer' , 
    //           {
    //              method : "POST",
    //               headers : {
    //                "Content-Type" : "application/json"
    //                },
    //                 body : JSON.stringify({email : data.email})
    //                 }
      
    //               )

    // const dataRes = await res.json();

    // console.log(dataRes.email)


              }}><FaCheck /></button>
              
              <button className='ml-4' onClick={()=>{
                alert(`Declined the request this email student ${data.email}`)
              }} ><ImCross/></button>
            </td>
            
            
          </tr>
            
            
        )
        
       })}
       
      </table>

      <div>

      </div>
    </div>
  )
}

export default Staff
