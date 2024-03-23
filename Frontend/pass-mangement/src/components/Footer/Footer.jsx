import React from 'react'
import libImg from "../../assets/footer/library.jpg"
import logo1 from "../../assets/Accredited/gmani-logo.png"
import logo2 from "../../assets/Accredited/tnea-code.jpg"
import "./Footer.css"
// import { Facebook, Instagram, Linkdin } from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='flex'>
                <div className='ml-auto  mr-auto'>
                    <div>
                        <h1 className='font-bold text-3xl text-green-700 text-center'>About Our Library</h1>
                        <img className='w-screen' src={libImg} alt="" />
                    </div>

                </div>



            </div>
            <div>
                <p className='font-serif text-2xl '>
                    Library is a Source of unlimited knowledge and information for students and faculty members. It provides an enthusiastic learning atmosphere for the reader. The institution has a well stocked library which has vast collection of more than 40219 printed text as well as reference books written by well know Indian and Foreign authors on engineering and other subjects.
                </p>
            </div>
            <br />
            {/* lets create of proper footer */}
            <div className='bg-black text-white '>
                <ul className='flex justify-evenly flex-wrap'>
                    <li >
                        <br />
                        <br />
                        <div className='footer-img-container'>
                            <img src={logo1} alt="" />
                        </div>
                        <br />
                        {/* <br /> */}
                        <div className='footer-img-container'>
                            <img src={logo2} alt="" />
                        </div>
                        {/* <br /> */}



                        <div>
                            <p className=' from-neutral-500'>Accredited by <b>NBA & NAAC <br />  &quot;A&quot; </b> GRADE</p>
                        </div>

                    </li>
                    <li className='text-base'>
                        <h3 className='text-xl font-sans font-bold'>Library</h3>
                        <hr className='' />
                        <br />
                        <p>Dr.K.Ramesh,</p>
                        <p>Librarian,</p>
                        <p><a href="mailto:library@gct.org.in">Email: library@gct.org.in</a></p>
                        <br />
                        <p>Library will remain open<br />from 8.30am to 10.00pm in  <br />shift, Sunday the time<br />schedule is from 9.00am to<br />4.00pm.</p>
                    </li>
                    <li className='text-base'>
                        <h3 className='text-xl font-sans font-bold'>Placement</h3>
                        <hr className='' />
                        <br />
                        <p>Mr.R.Prabhu,</p>
                        <p>Placement Officer,</p>
                        <p>Ph: 9790007251</p>
                        <p>Email Id:</p>
                        <p><a href="mailto:placement@gct.org.in">placement@gct.org.in</a></p>
                    </li>
                    <li className='text-base'>
                        <h3 className='text-xl font-sans font-bold'>Admission</h3>
                        <hr />
                        <br />
                        <p>Dr.P.Premkumar,</p>
                        <p>Chief Administrative Officer,</p>
                        <p>Ph: +91 99444 93900</p>
                        <p>Ph: +91 78670 11449</p>
                        <p><a href="mailto:ao@gct.org.in">Email Id: ao@gct.org.in</a></p>
                        <p className='font-bold'>Andhraprdesh &<br /> Telangana Admissions</p>
                        <p>Ph: +91 80567 39738</p>
                    </li>
                    <li className='text-base'>
                        <h3 className='text-xl font-sans font-bold'>Address and Contact</h3>
                        <hr />
                        <br />
                        <p> Gnanamani College of <br /> Technology, NH-7,</p>
                        <p>A.K.Samuthiram,</p>
                        <p>Pachal-PO, Namakkal <br />-637 018.</p>
                        <p>+91-75982 93888</p>
                        <p><a href="mailto:info@gct.org.in">info@gct.org.in</a></p>
                    </li>

                </ul>
                <br />
                <br />
            </div>

            {/* lets create of copyright section */}
            <div className='flex justify-between items-center bg-black text-white personal'>
                <div className='gap-10 ml-16'>
                    <p>Copyright All Right Reserved 2024, <b className='font-bold'>Gnyanamani educational Institutions</b></p>
                    <p>Made with ❤️  <b className='font-bold'>Rampravesh, Rajan, Arvind, Aman</b> © 2024 Pass Mangement System</p>
                </div>
                <div className='flex gap-4 mr-16'>
                    <p><a target='_blank' href="https://www.facebook.com/visitgnyanamaniinstitutions/"><FaFacebook className='text-2xl' /></a></p>
                    <p><a target='_blank' href="https://www.instagram.com/gnyanamani_institutions/"><FaInstagram className='text-2xl' /></a></p>
                    <p><a target='_blank' href="https://www.linkedin.com/school/gnanamani-college-of-technology/"><FaLinkedin className='text-2xl' /></a></p>

                </div>
            </div>
        </>


    )
}

export default Footer