
// AnimatedCard.js
// import { School } from "lucide-react"
import React, { useState } from 'react';
import './CardsHomePage.css'; // Import your CSS file for styling
import clg1 from "../../../assets/sliders/slider1.jpg"
import clg2 from "../../../assets/cardsImg/college1.jpg"
import lib1 from "../../../assets/cardsImg/lib1.jpg";
import lib2 from "../../../assets/cardsImg/lib2.jpg";
import lab1 from "../../../assets/cardsImg/lab1.jpg"
import lab2 from "../../../assets/cardsImg/lab2.jpg"
import hostel1 from "../../../assets/cardsImg/hostel1.jpg"
import hostel2 from "../../../assets/cardsImg/hostel2.jpg"
import fun1 from "../../../assets/cardsImg/fun1.jpg"
import fun2 from "../../../assets/cardsImg/fun2.jpg"
import Footer from '../../Footer/Footer';

const CardsHomePage = ({ cardFrontData, content }) => {
    const [isFlipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!isFlipped);
    };

    return (
        <div className='s'>
            <div className='flex justify-around flex-wrap'>
                <div className={` card ${isFlipped ? 'flipped' : ''} `} onClick={handleFlip}>
                    <div className="card-inner">
                        <div className="card-front">

                            <div>
                                <div>
                                    <img src={clg1} alt="" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-center">Gnanmani college</h3>
                                    <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis exercitationem facere optio velit nesciunt aliquam, alias aut beatae !</p>
                                </div>
                            </div>



                            {/* Add other front content here */}
                        </div>
                        <div className="card-back">
                            <div>
                                <div>
                                    <img src={clg2} alt="" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-center">Gnanmani college</h3>
                                    <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis exercitationem facere optio velit nesciunt aliquam, alias aut beatae !</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >
                <div className={`card ${isFlipped ? 'flipped' : ''} `} onClick={handleFlip}>
                    <div className="card-inner">
                        <div className="card-front">
                            <div>
                                <div>
                                    <img src={lib1} alt="" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-center">College Library</h3>
                                    <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis exercitationem facere optio velit nesciunt aliquam, alias aut beatae!</p>
                                </div>
                            </div>

                        </div>
                        <div className="card-back">
                            <div>
                                <div>
                                    <img src={lib2} alt="" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-center">College Library</h3>
                                    <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis exercitationem facere optio velit nesciunt aliquam, alias aut beatae !</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >
                <div className={`card ${isFlipped ? 'flipped' : ''} `} onClick={handleFlip}>
                    <div className="card-inner">
                        <div className="card-front">
                            <div>
                                <div>
                                    <img src={lab1} alt="" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-center">College Laboratory</h3>
                                    <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis exercitationem facere optio velit nesciunt aliquam, alias aut beatae!</p>
                                </div>
                            </div>

                        </div>
                        <div className="card-back">
                            <div>
                                <div>
                                    <img src={lab2} alt="" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-center">College Laboratory</h3>
                                    <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis exercitationem facere optio velit nesciunt aliquam, alias aut beatae!</p>
                                </div>
                            </div>


                        </div>
                    </div>

                </div >
                <div className={`card ${isFlipped ? 'flipped' : ''} `} onClick={handleFlip}>
                    <div className="card-inner">
                        <div className="card-front">
                            <div>
                                <div>
                                    <img src={hostel1} alt="" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-center">College Hostel</h3>
                                    <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis exercitationem facere optio velit nesciunt aliquam, alias aut beatae!</p>
                                </div>
                            </div>

                        </div>
                        <div className="card-back">
                            <div>
                                <div>
                                    <img src={hostel2} alt="" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-center">College Hostel</h3>
                                    <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis exercitationem facere optio velit nesciunt aliquam, alias aut beatae!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >

                <div className={`card ${isFlipped ? 'flipped' : ''} `} onClick={handleFlip}>
                    <div className="card-inner">
                        <div className="card-front">
                            <div>
                                <div>
                                    <img src={fun1} alt="" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-center">College Functions</h3>
                                    <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis exercitationem facere optio velit nesciunt aliquam, alias aut beatae!</p>
                                </div>
                            </div>

                        </div>
                        <div className="card-back">
                            <div>
                                <div>
                                    <img src={fun2} alt="" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-center">College Functions</h3>
                                    <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis exercitationem facere optio velit nesciunt aliquam, alias aut beatae!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >


            </div>
            <br />
            <br />
            {/* Import the footer in Home page */}
            {/* <div>
                <Footer />
            </div> */}
        </div>
    );
};

export default CardsHomePage;
