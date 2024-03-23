import React from 'react'
import about1 from "../../assets/about/about1.png"
import { FaArrowRight } from "react-icons/fa";
import chairman from "../../assets/mangement/chairman.jpg"
import director from "../../assets/mangement/director.jpg"
import Principal from "../../assets/mangement/GCT_Principal.jpg"
import Gnm from "../../assets/mangement/Gnmn 534.jpg"
import vc from "../../assets/mangement/vc.jpg"
import hod from "../../assets/mangement/hod.png"
import "./About.css"

const About = () => {
    return (
        <div className='w-auto'>
            <div className='transition-opacity duration-300 ease-in-out group-hover:opacity-70'>
                <img src={about1} alt="" />
            </div>
            <br />
            <br />
            <ul className='flex justify-between text-xl font-sans'>
                <li className='text-3xl  font-thin'>

                    Vision and Mission

                </li>
                <li>
                    <p>
                        Emerging as a technical institution of high <br />
                        standard and excellence to produce quality <br />
                        Engineers, Researchers, Administrators and <br />
                        Entrepreneurs with ethical and moral values to <br />
                        contribute the sustainable development of the <br />
                        society.
                    </p>
                </li>
                <li>
                    <p> <FaArrowRight className='inline' /> To have in-depth domain knowledge with <br />analytical and practical skills in cutting <br /> edge technologies by imparting quality <br /> technical education.</p>
                    <br />
                    <p> <FaArrowRight className='inline' />To be industry ready and multi-skilled <br /> personalities to transfer technology to <br /> industries and rural areas by creating <br /> interests among students in Research and <br />Development and Entrepreneurship.</p>
                </li>
            </ul>
            <br />
            <br />
            <div>
                {/* mangement profile */}
                <div>
                    <h1 className='text-4xl text-center font-bold'>Management Profile</h1>
                </div>
                <br />
                <br />
                <div className='text-xl font-extralight text-justify'>
                    <p><FaArrowRight className='inline' /> The Gnyanamani educational Institutions are run by the two legendary academicians Dr.T.Arangannal - a Rashtria Vidya Saraswathi Puraskar Awardee for his outstanding achievement in the field of education and a recipient of Doctorate from the University of Srilanka for his consummate services to education and Mrs.P.Malaleena.These two legends have been the great support and encouragement of Gnyanamani educational Institutions and taking it to newer heights.</p><br />

                    <p><FaArrowRight className='inline' /> The Institutions have been standing out as a unique place of learning in imparting quality education under the eminent administrator Dr.P.Premkumar, Chief Administrative Officer who is striving to promote the institution in the upward ladders of success.</p><br />
                    <p><FaArrowRight className='inline' /> Gnyanamani educational Institutions have a unique distinction of having the best teaching faculty. The highly devoted teaching staff give their motivation to knowledge hungry students and the earnestness of the trust in imparting quality education under the leadership of the eminent Principal Dr.T.K.Kannan. They lead to extra mile and make sure that the students&apos; perform well constantly for their career success.</p><br />
                </div>
            </div>

            {/* Mangement profile  with photo */}
            <div className='flex justify-between mangement flex-wrap'>
                <div>
                    <img src={chairman} alt="" />
                    <h1 className='text-center font-bold text-xl'>Dr.T.Arangannal & <br /> Mrs.P.Malaleena</h1>
                    <p className='text-center font-thin'>Chairman & Chairperson</p>
                </div>
                <div>
                    <img src={vc} alt="" />
                    <h1 className='text-center font-bold text-xl'>Ms.Madhuvanthinie <br /> Arangannal</h1>
                    <p className='text-center font-thin'>Vice Chairperson</p>

                </div>
                <div>
                    <img src={Gnm} alt="" />
                    <h1 className='text-center font-bold text-xl'>Dr.P.Premkumar</h1>
                    <p className='text-center font-thin'>Cheif Administrative Officer</p>
                </div>
            </div>
            <div className='flex justify-between mangement flex-wrap'>
                <div>
                    <img src={Principal} alt="" />
                    <h1 className='text-center font-bold text-xl'>Dr.T.K. Kannan</h1>
                    <p className='text-center font-thin'>Principal</p>
                </div>
                <div>
                    <img src={director} alt="" />
                    <h1 className='text-center font-bold text-xl'>Dr.B.Sanjay Gandhi</h1>
                    <p className='text-center font-thin'>Academic Director</p>
                </div>
                <div>
                    <img src={hod} alt="" />
                    <h1 className='text-center font-bold text-xl'>Dr R Umameshwari</h1>
                    <p className='text-center font-thin'>HOD  - Computer Science and Engineering</p>
                </div>
            </div>
            <br /><br />
        </div>
    )
}

export default About