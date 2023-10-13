import React from "react";
import { Container } from "react-bootstrap";

const TimerClock = () => {
  const countdownContainer = document.getElementById("countdown-container");

  const targetDate = new Date("2024-01-01T23:59:59").getTime();

  function startCountdown() {
    const currentDate = new Date().getTime();

    const timeRemaining = targetDate - currentDate;
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
  }
  setInterval(startCountdown, 1000);
  return (
    <div>
      <div className="whitepaper_bg py-5">
        <Container className="py-5">
          <h4
            className="ff_Montserrat fw-bold fs_xlg text-white max_w_609 text-center mx-auto mb-5"
            data-aos="zoom-in"
          >
            Public Sale 5% in ERC20 & BEP20, 100% for the Community
          </h4>
          <div id="countdown-container" data-aos="zoom-in">
            <div>
              <div id="days" className="timer">
                0
              </div>
              <p className="ff_Montserrat fw-medium fs_md text-white text-center mt-1">
                Days
              </p>
            </div>
            <p className="ff_Montserrat fw-medium fs_xl text-white mb-5 mx-1">
              :
            </p>
            <div>
              <div id="hours" className="timer">
                0
              </div>
              <p className="ff_Montserrat fw-medium fs_md text-white text-center mt-1">
                Hours
              </p>
            </div>
            <p className="ff_Montserrat fw-medium fs_xl text-white mb-5 mx-1">
              :
            </p>
            <div>
              <div id="minutes" className="timer">
                0
              </div>
              <p className="ff_Montserrat fw-medium fs_md text-white text-center mt-1">
                Minute
              </p>
            </div>
            <p className="ff_Montserrat fw-medium fs_xl text-white mb-5 mx-1">
              :
            </p>
            <div>
              <div id="seconds" className="timer">
                0
              </div>
              <p className="ff_Montserrat fw-medium fs_md text-white text-center mt-1">
                Second
              </p>
            </div>
          </div>
          <div className="text-center mt-lg-5 mt-md-4 mt-3" data-aos="zoom-in">
            <a
              href="https://www.google.com"
              className="buy_btn ff_Montserrat fw-medium d-inline-block"
            >
              BUY WUAO
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TimerClock;
