import React from "react";
import WhitePapperLeftImg from "../assets/images/png/whitepaper_left_image.png";
import WhitePapperRightImg from "../assets/images/png/whitepaper_right_img.png";
import { Container } from "react-bootstrap";

const Whitepapper = () => {
  return (
    <div className="py-4">
      <div className="whitepaper_bg py-5">
        <Container fluid>
          <div className="d-flex flex-md-row flex-column justify-content-lg-center">
            <div
              className="d-flex px-md-4 flex-column flex-md-row"
              data-aos="fade-right"
            >
              <img
                src={WhitePapperLeftImg}
                alt="whitepaper_left_image"
                className="w-100 white_left_img"
              />
            </div>
            <div
              className="d-flex flex-column ps-md-4 align-items-center py-xl-5 text-center"
              data-aos="zoom-in"
            >
              <h2 className="ff_Montserrat fw-bold fs_xl text-white mb-2 pb-1 mb-0">
                Whitepaper
              </h2>
              <p className="ff_Montserrat fw-semibold fs_md text-white mb-lg-5 mb-md-4 mb-3 pb-1 mb-0 max_w_577">
                We want you to know our vision we leave you our whitepaper and
                now be a part of the digital transformation.
              </p>
              <div className=" position-relative whitepaper_arrow">
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel=""
                  className="ff_Montserrat fw-semibold fs_md read_btn d-inline-block "
                >
                  Read WhitePaper
                </a>
              </div>
            </div>
            <div
              className="py-md-5 mt-md-4 py-lg-4 py-3 text-center d-flex justify-content-center"
              data-aos="fade-left"
            >
              <img
                src={WhitePapperRightImg}
                alt="whitepaper_right_img"
                className="w-100 white_right_img"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Whitepapper;
