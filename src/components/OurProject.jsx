import React from "react";
import ProjectRightImg from "../assets/images/png/project_right_img.png";
import ChartCenterImg from "../assets/images/png/chart_center_img.png";
import OrangeChart from "../assets/images/png/orange_chart.png";
import BlueChart from "../assets/images/png/blue_chart.png";
import NavtBlueChart from "../assets/images/png/navy_blue_chart.png";
import PinkChart from "../assets/images/png/pink_chart.png";
import BrownChart from "../assets/images/png/brown_chart.png";
import { Col, Container, Row } from "react-bootstrap";

const OurProject = () => {
  return (
    <div>
      <div className="posotion-relative py-xl-0 py-lg-5 py-md-4 py-sm-3 mt-xl-0 mt-5 mb-5">
        <img
          src={ProjectRightImg}
          alt="project_right-img"
          className="project_right_img"
        />
        <Container className="container-lg mt-lg-0 mt-5 pt-lg-0 pt-5">
          <Row className="align-items-center justify-content-center">
            <Col
              lg={6}
              sm={8}
              className="mt-sm-0 mt-3"
              data-aos="zoom-in"
              data-aos-easing="ease-in-sine"
            >
              <div className="d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center position-relative">
                  <img
                    src={ChartCenterImg}
                    alt="chart_center_img"
                    className="chart_center_img"
                  />
                  <img
                    src={OrangeChart}
                    alt="orange_chart"
                    className="orange_chart"
                  />
                  <img
                    src={BlueChart}
                    alt="blue_chart"
                    className="blue_chart"
                  />
                  <img
                    src={NavtBlueChart}
                    alt="navy_blue_chart"
                    className="navy_blue_chart"
                  />
                  <img
                    src={PinkChart}
                    alt="pink_chart"
                    className="pink_chart"
                  />
                  <img
                    src={BrownChart}
                    alt="brown_chart"
                    className="brown_chart"
                  />
                </div>
              </div>
            </Col>
            <Col
              lg={5}
              sm={8}
              className="pt-lg-0 pt-5 mt-lg-0 mt-5"
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
            >
              <h4 className="ff_Montserrat fw-bold fs_xl text-black mb-3 pt-lg-0 pt-md-4 pt-3 text-center text-lg-start mt-lg-0 mt-5">
                Our Project
              </h4>
              <p className="ff_Montserrat fw-normal fs_md dark_grey mb-0">
                Wuaocoin is the first project in the TechFi category that allows
                users multiple options to have utility and usability in the
                ecosystem, its time to change the way of seeing the purchases
                and sales of products and services within an multilateral
                electronic commerce platform using crypto technology.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OurProject;
