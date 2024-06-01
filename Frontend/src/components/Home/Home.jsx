import React from "react";
import img1 from "../../assets/Accredited/naac_logo.png";
import img2 from "../../assets/Accredited/gmani-logo.png";
import img3 from "../../assets/Accredited/nba_logo.png";
import "./Home.css"
import CarouselSlider from "./Carousel/CarouselSlider";




const Home = () => {



  return (
    <>
      <div>
        <div>
          <div>
            <div className="Accredited flex justify-evenly ">

              <div className="img1">
                <img src={img1} alt="" />
                {/* <h5 className="font-bold Accredited-heading">Accredited by NAAC </h5>
          <h5 className="font-bold Accredited-heading">&quot;A&quot; GRADE</h5> */}
              </div>
              <div className="img2">
                <img src={img2} alt="" />
              </div>
              <div className="img3">
                <img src={img3} alt="" />
                {/* <h5 className="font-bold Accredited-heading">Accredited by NBA</h5> */}
              </div>
            </div>
            <div>
              {/* Carousel------------------->>>>>>>>>>>> */}
              <CarouselSlider />
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Home;
