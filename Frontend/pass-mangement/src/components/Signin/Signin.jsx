import React from 'react'
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div>
            <div className='font-extrabold text-3xl'>
                <h1 className='text-center text-red-900'><u>Please Select the Your Account Type</u></h1>
            </div>
            <br /><br />
            <div className='flex justify-around flex-wrap'>
                <div>
                    <div>
                        <Link  to="student">
                        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded'>Student</button>
                        </Link>
                    </div>
                    <br /><br />
                    <div className=''>
                        <Link to="staff">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-9 rounded">faculty</button>
                        </Link>
                    </div>
                    <br /><br />

                </div>


            </div>
        </div>
    )
}

export default Signin