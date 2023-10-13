import React from "react";
import TicoLeftImg from "../assets/images/png/tokenomics_left_img.png";
import TicoRightImg from "../assets/images/png/tokenomics_right_img.png";
import TokeArrowIng from "../assets/images/png/tokenomics_arrow.png";
import TokeImg from "../assets/images/png/tokenomics_img.png";

const Tokenomics = () => {
  return (
    <div>
      <div className="position-relative py-lg-5 py-md-4 py-3 my-3">
        <img
          src={TicoLeftImg}
          alt="tokenomics_left_img"
          className="tokenomics_left_img"
        />
        <img
          src={TicoRightImg}
          alt="tokenomics_right_img"
          className="tokenomics_right_img"
        />
        <img
          src={TokeArrowIng}
          alt="tokenomics_arrow"
          className="tokenomics_arrow"
        />
        <div className="container">
          <div className="text-center">
            <h3
              className="ff_Montserrat fw-bold fs_xl text-black text-c enter mb-3"
              data-aos="zoom-in"
            >
              Tokenomics
            </h3>
            <div className="position-relative row">
              <div className="col-lg-6 col-md-7 col-sm-9 col-10 mx-auto position-relative">
                <div className="d-lg-block d-none">
                  <h4
                    className="ff_Montserrat fw-bold fs_xmd text-black team_position"
                    data-aos="fade-right"
                  >
                    Team
                  </h4>
                  <h4
                    className="ff_Montserrat fw-bold fs_xmd text-black founder_position"
                    data-aos="fade-right"
                  >
                    Subdivided into
                    <br /> 5% Founders
                  </h4>
                  <h4
                    className="ff_Montserrat fw-bold fs_xmd text-black worker_position"
                    data-aos="fade-right"
                  >
                    Workers
                  </h4>
                  <h4
                    className="ff_Montserrat fw-bold fs_xmd text-black holder_position"
                    data-aos="fade-left"
                  >
                    Buyers/holders/
                    <br />
                    community
                  </h4>
                </div>
                <img
                  src={TokeImg}
                  alt="tokenomics_img"
                  className="w-100"
                  data-aos="zoom-in"
                />
              </div>
              <div className="d-lg-none d-block text-start">
                <div
                  className="d-flex align-items-center mb-2 gap-2"
                  data-aos="fade-right"
                >
                  <div className="box_1"></div>
                  <h4 className="ff_Montserrat fw-medium fs_sm text-black mb-0">
                    Team
                  </h4>
                </div>
                <div
                  className="d-flex align-items-center mb-2 gap-2"
                  data-aos="fade-left"
                >
                  <div className="box_2"></div>
                  <h4 className="ff_Montserrat fw-medium fs_sm text-black mb-0">
                    Subdivided into 5% Founders
                  </h4>
                </div>
                <div
                  className="d-flex align-items-center mb-2 gap-2"
                  data-aos="fade-right"
                >
                  <div className="box_3"></div>
                  <h4 className="ff_Montserrat fw-medium fs_sm text-black mb-0">
                    Workers
                  </h4>
                </div>
                <div
                  className="d-flex align-items-center gap-2"
                  data-aos="fade-left"
                >
                  <div className="box_4"></div>
                  <h4 className="ff_Montserrat fw-medium fs_sm text-black mb-0">
                    Buyers/holders/community
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
