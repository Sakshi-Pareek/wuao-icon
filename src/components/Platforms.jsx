import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import Slide1 from "../assets/images/png/slider_1.png";

const Platforms = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    pouseonhover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="slider_bg py-5">
        <Container fluid className="py-lg-4 py-md-2 py-1 overflow-hidden">
          <h4
            className="ff_Montserrat fw-bold fs_xl text-white text-center mb-5"
            data-aos="zoom-in"
          >
            Partnership
          </h4>
          <Slider {...settings} className="py-lg-3 py-2" data-aos="fade-left">
            <div className="max_width_250">
              <img src={Slide1} alt="slider_1" className="w-100" />
            </div>
            <div className="max_width_250">
              <img src={Slide1} alt="slider_1" className="w-100" />
            </div>
            <div className="max_width_250">
              <img src={Slide1} alt="slider_1" className="w-100" />
            </div>
            <div className="max_width_250">
              <img src={Slide1} alt="slider_1" className="w-100" />
            </div>
            <div className="max_width_250">
              <img src={Slide1} alt="slider_1" className="w-100" />
            </div>
          </Slider>
        </Container>
      </div>
    </div>
  );
};

export default Platforms;
