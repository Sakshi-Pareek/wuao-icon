import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import BenefitArrow from "../assets/images/png/benefit_arrow.png";
import Benefit1 from "../assets/images/png/benefit_1.png";
import Benefit2 from "../assets/images/png/benefit_2.png";
import Benefit3 from "../assets/images/png/benefit_3.png";

const Benefit = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "60px",
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="pt-xl-5">
      <div className="py-lg-5 py-md-4 py-0 my-xl-5 my-lg-4 my-0">
        <Container className="container position-relative pt-lg-5 mt-3">
          <div data-aos="zoom-in">
            <h3 className="ff_Montserrat fw-bold fs_xl text-black text-center mb-5">
              Benefits
            </h3>
          </div>
          <img src={BenefitArrow} alt="benefit_arrow" className="benefit_arrow" />
          <Slider {...settings} classNameName=" position-relative">
            <div className="px-2">
              <div className="my-lg-2 d-flex flex-column justify-content-center align-items-center">
                <img
                  src={Benefit1}
                  alt="benefit_1"
                  className="bubble_theme h_280 w_290"
                />
                <p className="ff_Montserrat fw-normal fs_md dark_grey max_w_317 text-center mt-4">
                  Services, Products and Community All in one place!
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="my-lg-2 d-flex flex-column justify-content-center align-items-center">
                <img
                  src={Benefit2}
                  alt="benefit_2"
                  className="bubble_theme h_280"
                />
                <p className="ff_Montserrat fw-normal fs_md dark_grey max_w_272 text-center mt-4">
                  Selling in crypto will no longer be complicated, it will be
                  safe and reliable.
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="my-lg-2 d-flex flex-column justify-content-center align-items-center">
                <img
                  src={Benefit3}
                  alt="benefit_3"
                  className="bubble_theme h_280"
                />
                <p className="ff_Montserrat fw-normal fs_md dark_grey max_w_288 text-center mt-4">
                  Buying and getting a real discount is possible? Join and check
                  it out.
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="my-lg-2 d-flex flex-column justify-content-center align-items-center">
                <img
                  src={Benefit2}
                  alt="benefit_2"
                  className="bubble_theme h_280"
                />
                <p className="ff_Montserrat fw-normal fs_md dark_grey max_w_272 text-center mt-4">
                  Selling in crypto will no longer be complicated, it will be
                  safe and reliable.
                </p>
              </div>
            </div>
          </Slider>
        </Container>
      </div>
    </div>
  );
};

export default Benefit;
