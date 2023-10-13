import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RoadMapLeftSideImg from "../assets/images/png/roadmap-left-side-img.png";
import RoadArrow from "../assets/images/png/road_arrow.svg";
import RoadmapCenterImg from "../assets/images/png/roadmap-center-img.png";
import RoadMapRightImg from "../assets/images/png/roadmap-right-side-img.png";
import { Container } from "react-bootstrap";

const RoadMap = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: "unslick",
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div>
      <div className="position-relative mt-lg-5 mt-md-4 mt-3 pt-lg-5">
        <img
          src={RoadMapLeftSideImg}
          alt="roadmap-left-side-img"
          className="roadmap_left"
        />
        <img src={RoadArrow} alt="road_arrow" className="roadmap_arrow" />
        <Container>
          <h3
            className="ff_Montserrat fw-bold fs_xl text-center mb-0"
            data-aos="zoom-in"
          >
            RoadMap
          </h3>
          <p
            className="ff_Montserrat fw-normal fs_md mx-auto text-center dark_grey max_w_672 mt-lg-3 mt-2"
            data-aos="zoom-in"
          >
            Knowing our values, understanding the business idea and then,
            gradually, presenting the plans to the public is our way of doing
            things.
          </p>
          <div className="text-center my-5" data-aos="zoom-in">
            <img
              src={RoadmapCenterImg}
              alt="roadmap-center-img"
              className="roadmap_center"
            />
          </div>
        </Container>
        <div
          className="container-fluid position-relative pb-lg-5 mb-5"
          data-aos="zoom-in"
        >
          <img
            src={RoadMapRightImg}
            alt="roadmap-right-side-img"
            className="roadmap_right"
          />
          <Slider {...settings} classNameName="py-3">
            <div className="px-2">
              <div className="roadmap_card_1 pxy b_radius_15 h_180 roadmap">
                <h4 className="ff_Montserrat fw-bold fs_lg text-white opacity_05 mb-lg-3 mb-md-2 mb-1 pb-1">
                  01
                </h4>
                <p className="ff_Montserrat fw-bold fs_xmd text-white mb-0">
                  Organizational concept (creations)
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="roadmap_card_2 pxy b_radius_15 h_180 roadmap">
                <h4 className="ff_Montserrat fw-bold fs_lg text-white opacity_05 mb-lg-3 mb-md-2 mb-1 pb-1">
                  02
                </h4>
                <p className="ff_Montserrat fw-bold fs_xmd text-white mb-0">
                  Directional Process (Actions)
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="roadmap_card_3 pxy b_radius_15 h_180 roadmap">
                <h4 className="ff_Montserrat fw-bold fs_lg text-white opacity_05 mb-lg-3 mb-md-2 mb-1 pb-1">
                  03
                </h4>
                <p className="ff_Montserrat fw-bold fs_xmd text-white mb-0">
                  Operational Development (technical team)
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="roadmap_card_4 pxy b_radius_15 h_180 roadmap">
                <h4 className="ff_Montserrat fw-bold fs_lg text-white opacity_05 mb-lg-3 mb-md-2 mb-1 pb-1">
                  04
                </h4>
                <p className="ff_Montserrat fw-bold fs_xmd text-white mb-0">
                  Strategic Opportunities (alliances)
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="roadmap_card_5 pxy b_radius_15 h_180 roadmap">
                <h4 className="ff_Montserrat fw-bold fs_lg text-white opacity_05 mb-lg-3 mb-md-2 mb-1 pb-1">
                  05
                </h4>
                <p className="ff_Montserrat fw-bold fs_xmd text-white mb-0">
                  Stakeholders (benefits)
                </p>
              </div>
            </div>
            <div className="px-2">
              <div className="roadmap_card_6 pxy b_radius_15 h_180 roadmap">
                <h4 className="ff_Montserrat fw-bold fs_lg text-white opacity_05 mb-lg-3 mb-md-2 mb-1 pb-1">
                  06
                </h4>
                <p className="ff_Montserrat fw-bold fs_xmd text-white mb-0">
                  Human Identity (social contribution)
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
