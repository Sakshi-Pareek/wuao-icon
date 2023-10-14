import React from "react";
import header_top_left_img from "../assets/images/png/header_top_left_img.png";
import weblogo from "../assets/images/png/web_logo.png";
import in_img from "../assets/images/png/in_img.svg";
import HeaderCenterArrow from "../assets/images/png/header_center_arrow.png";
import HeaderCenterRightImg from "../assets/images/png/header_center_right_img.png";
import HeaderButtonArrow from "../assets/images/png/header_btn_arrow.png";
import HeaderImg from "../assets/images/png/header_img.png";
import { Col, Container, Row } from "react-bootstrap";
import { EarthIcon, NavDiscord, NavTelegram, NavTwitter } from "./IconImg";

const HeroSection = () => {
  function showNav() {
    document.body.classList.toggle("overflow-hidden");
  }
  return (
    <div>
      <div className="bg_linear min-vh-100 d-flex flex-column position-relative">
        <img
          src={header_top_left_img}
          alt="header_top_left_img"
          className="header_top_left_img"
        />
        <div className="pt-4">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <a href="#" className="z-1">
                <img src={weblogo} alt="web_logo" className="w_180" />
              </a>
              <label htmlFor="menuIcon" onClick={showNav}>
                <span></span>
                <span></span>
                <span></span>
              </label>
              <input type="checkbox" id="menuIcon" hidden className="d-none" />
              <ul className="d-flex align-items-center sm-screen mb-0 gap-3 ps-0">
                <li className="me-3 under_line">
                  <a
                    href="#"
                    className="text-white ff_Montserrat fw-semibold fs_sm"
                  >
                    ICO
                  </a>
                </li>
                <li className="me-3 under_line">
                  <a
                    href="#"
                    className="text-white ff_Montserrat fw-semibold fs_sm"
                  >
                    WHITEPAPER
                  </a>
                </li>
                <div className="d-flex align-items-center justify-content-center">
                  <li className="me-3 icon_zoom">
                    <a
                      href="https://www.discord.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <NavDiscord />
                    </a>
                  </li>
                  <li className="me-3 icon_zoom">
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <NavTwitter />
                    </a>
                  </li>
                  <li className="me-3 icon_zoom">
                    <a
                      href="https://www.telegram.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <NavTelegram />
                    </a>
                  </li>
                  <li className="me-3 icon_zoom">
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={in_img} alt="in_img" />
                    </a>
                  </li>
                </div>
                <div className="dropdown boxBorder">
                  <button
                    className="border-0 bg-transparent dropdown-toggle justify-content-center align-items-center d-flex"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <EarthIcon />
                    <p className="ms-1 mb-0 navLinks fw-normal text-white ff_Montserrat fs_sm">
                      Eng
                    </p>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item navLinks ff_Montserrat fw-normal fs-sm"
                        href="#"
                      >
                        Hindi
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-grow-1 d-flex position-relative z-3">
          <img
            src={HeaderCenterArrow}
            alt="arrow"
            className="header_center_arrow"
          />
          <img
            src={HeaderCenterRightImg}
            alt="layer"
            className="header_center_right_img"
          />
          <Container className="container-lg py-5 d-flex">
            <Row className="align-items-center justify-content-center position-relative z-1 py-lg-5 my-lg-5 justify-content-lg-between">
              <Col xs={8} lg={6} className="text-center text-lg-start">
                <h4 className="ff_Montserrat fw-semibold fs_xmd text-white mb-1">
                  Welcome to
                </h4>
                <h3 className="ff_Montserrat fw_900 fs_xxl text-white mb-1 max_w_510 text-center text-lg-start">
                  The Future of
                  <span className="text-nowrap"> E-Commerce</span>
                </h3>
                <p className="ff_Montserrat fw-medium fs_md text-white mb-lg-5 mb-md-4 mb-3">
                  A multi-purpose token to improve digital sales and purchases
                </p>
                <div className="position-relative">
                  <img
                    src={HeaderButtonArrow}
                    alt="header_btn_arrow"
                    className="header_btn_arrow"
                  />
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="buy_btn d-inline-block ff_Montserrat fw-semibold fs_sm mb-3"
                  >
                    How To Buy
                  </a>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="d-inline-block ff_Montserrat fw-semibold fs_sm outline_btn text-white ms-lg-3 ms-md-3 ms-sm-2 ms-0"
                  >
                    Read Whitepaper
                  </a>
                </div>
              </Col>
              <Col xs={8} lg={6} className="pt-lg-0 pt-5" data-aos="zoom-in">
                <img
                  src={HeaderImg}
                  alt="header_img"
                  className="header_img position-relative z-3 w-100 max_w_672 ms-lg-5 mt-lg-5 pt-lg-5"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
