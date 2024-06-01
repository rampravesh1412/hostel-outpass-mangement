// CarouselSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselSlider.css';
import imgFirst from "../../../assets/sliders/slider1.jpg"
import imgSecond from "../../../assets/sliders/slider2.jpg"
import imgThird from "../../../assets/sliders/slider3.jpg"
import CardsHomePage from '../CardsHomePage/CardsHomePage';
const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const cardFrontData = [
    {
      title: "Gnanamani College Of Technology"
    }, {
      title: "Gnanamani Library"
    }, {
      title: "Gnanamani Hostels"
    }, {
      title: "Gnanamani Labs"
    }
  ]

  return (
    <>
      <div className=''>
        <div className="carousel-container">
          <Slider {...settings}>
            <div className="carousel-page">
              <img src={imgFirst} alt="Image 1" />
              <h2 className="font-bold">Gnanamani College of Technology: Nurturing innovation and excellence in technical education.</h2>
              <p>Gnanamani College of Technology is dedicated to fostering a culture of innovation and academic excellence in the field of technology. With a commitment to quality education, state-of-the-art infrastructure, and experienced faculty, the college provides a dynamic learning environment for students to thrive in various technical disciplines. Emphasizing both theoretical knowledge and practical skills, Gnanamani College of Technology aims to prepare students for successful careers and contributions to the ever-evolving technological landscape.</p>
            </div>
            <div className="carousel-page">
              <img src={imgSecond} alt="Image 2" />
              <h2 className='font-bold'>Gnanamani College of Technology: Empowering minds through cutting-edge education and technological prowess.</h2>
              <p>Gnanamani College of Technology is at the forefront of empowering aspiring minds with cutting-edge education. With a focus on innovation and academic rigor, the college equips students with the skills needed to excel in the dynamic realm of technology, fostering a pathway to future success in their chosen fields.</p>
            </div>
            <div className="carousel-page">
              <img src={imgThird} alt="Image 3" />
              <h2 className="font-bold">Gnanamani College of Technology: Where innovation meets excellence, shaping future leaders in technology</h2>
              <p>Gnanamani College of Technology stands as a beacon of innovation and excellence, sculpting the next generation of technology leaders. With a commitment to cutting-edge education, the college empowers students to thrive in the rapidly evolving technological landscape, ensuring their readiness for impactful contributions to the industry</p>
            </div>
            {/* Add more pages as needed */}
          </Slider>


        </div>

      </div>
      <div className='h-72'></div>

      <div className=''>
        <CardsHomePage cardFrontData={cardFrontData} content="Back Content" />
      </div>
    </>
  );
};

export default CarouselSlider;
