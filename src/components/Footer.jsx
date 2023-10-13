import React from "react";
import FooterLeftImg from "../assets/images/png/footer_left_img.png";
import FooterRightImg from "../assets/images/png/footer_right_img.png";
import FooterArrow from "../assets/images/png/footer_arrow.png";
import Discord from "../assets/images/png/discord.png";
import Twitter from "../assets/images/png/twitter.png";
import Telegram from "../assets/images/png/telegram.png";
import Linkendin from "../assets/images/png/linkedin.png";
import WebLogo from "../assets/images/png/web_logo.png";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <div className="position-relative mt-lg-5 mt-md-4 mt-3 pt-lg-5 pt-md-4 pt-3 z-3">
        <img
          src={FooterLeftImg}
          alt="footer_left_img"
          className="footer_left_img"
        />
        <img src={FooterArrow} alt="footer_arrow" className="footer_arrow" />
        <img
          src={FooterRightImg}
          alt="footer_right_img"
          className="footer_right_img"
        />
        <Container className="my-2 pb-5">
          <Row className="justify-content-between position-relative z-3">
            <Col lg={3} xs={12} data-aos="fade-right">
              <a href="" target="_top">
                <img src={WebLogo} alt="web_logo" className="w_180" />
              </a>
              <p className="ff_Montserrat fw-normal fs_sm grey_100 mt-lg-4 mt-3">
                Welcome to The Future of the Market. The world's first Global
                TechFi Platform
              </p>
              <div className="d-flex gap-3 mt-lg-4 mt-3">
                <a href="https://www.discord.com" target="_blank">
                  <img src={Discord} alt="discord" className="icon_zoom" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  className="icon_zoom"
                >
                  <img src={Twitter} alt="twitter" />
                </a>
                <a
                  href="https://www.telegram.com"
                  target="_blank"
                  className="icon_zoom"
                >
                  <img src={Telegram} alt="telegram" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="icon_zoom"
                >
                  <img src={Linkendin} alt="linkedin" />
                </a>
              </div>
            </Col>
            <Col xs={12} lg={6} data-aos="fade-left">
              <Row className="mt-lg-0 mt-3">
                <Col md={4} sx={6}>
                  <h6 className="ff_Montserrat fw-semibold fs_md text-black mb-3">
                    Documents
                  </h6>
                  <ul>
                    <li className="mb-2">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="ff_Montserrat fw-normal fs_sm light_grey_color footer_link"
                      >
                        WhitePaper
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="ff_Montserrat fw-normal fs_sm light_grey_color footer_link"
                      >
                        Customers
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="ff_Montserrat fw-normal fs_sm light_grey_color footer_link"
                      >
                        Business
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col md={4} sx={6}>
                  <h6 className="ff_Montserrat fw-semibold fs_md text-black mb-3">
                    Quick Links
                  </h6>
                  <ul>
                    <li className="mb-2">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="ff_Montserrat fw-normal fs_sm light_grey_color footer_link"
                      >
                        Home
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="ff_Montserrat fw-normal fs_sm light_grey_color footer_link"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="ff_Montserrat fw-normal fs_sm light_grey_color footer_link"
                      >
                        Benefits
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="ff_Montserrat fw-normal fs_sm light_grey_color footer_link"
                      >
                        ICO
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="ff_Montserrat fw-normal fs_sm light_grey_color footer_link"
                      >
                        RoadMap
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="ff_Montserrat fw-normal fs_sm light_grey_color footer_link"
                      >
                        Tokenomics
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="ff_Montserrat fw-normal fs_sm light_grey_color footer_link"
                      >
                        Partnership
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col md={4} xs={6}>
                  <h6 className="ff_Montserrat fw-semibold fs_md text-black mb-3">
                    Quick Links
                  </h6>
                  <ul>
                    <li className="mb-2">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="ff_Montserrat fw-normal fs_sm light_grey_color footer_link"
                      >
                        WUAOCOIN
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        className="ff_Montserrat fw-normal fs_sm light_grey_color footer_link"
                      >
                        WUAOSHOP
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className=" border_bottom"></div>
        <p className="ff_Montserrat fw-normal fs_sm smooth-grey text-center my-lg-4 my-md-3 my-2">
          © Copyright 2022 - Wuaocoin
        </p>
      </div>
    </div>
  );
};

export default Footer;
