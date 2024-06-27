import React from "react";
import useIsMobile from "../hooks/useIsMobile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Section3 = () => {
  const isMobile = useIsMobile();

  return (
    <div
      className={
        isMobile
          ? "section flex-col full-width items-centered pv50"
          : "section flex-col full-width items-centered pv100"
      }
    >
      <div
        className={
          isMobile
            ? "flex-col full-width ph30"
            : "flex-row less-width items-centered"
        }
      >
        <div
          data-aos="fade-right"
          className={isMobile ? "flex-col mb50" : "flex-col child-1 pr50"}
        >
          <p className="weight-bold decoration-underlined mb20">WHAT WE DO</p>
          <h1 className="heading weight-black size-bigger title-text-color mb20">
            Dedicated to solving healthcare workforce challenges.
          </h1>
          <p className="normal-text-color mb30">
            We are committed to addressing the critical needs of the healthcare
            industry by providing reliable and skilled professionals. Our focus
            is on ensuring that your facility is staffed with healthcare workers
            who deliver exceptional care and support.
          </p>
          <button
            style={{ width: "250px" }}
            className={isMobile ? "invisible" : "default-button"}
          >
            Our Services
          </button>
        </div>

        <div
          data-aos="fade-left"
          className={isMobile ? "flex-col" : "flex-col child-1 pl50"}
        >
          <div className="flex-col">
            <div className="flex-row spaced-between pb50">
              <div className="smaller-round-icon">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div
                style={{ paddingTop: "5px" }}
                className="flex-col ml20 child-1"
              >
                <h2
                  style={{ fontSize: "1.5rem" }}
                  className="weight-bold title-text-color"
                >
                  Ensuring Excellence in Healthcare Staffing
                </h2>
                <p className="normal-text-color">
                  Our dedicated team provides skilled professionals who
                  guarantee exceptional care and support for your facility.
                </p>
              </div>
            </div>

            <div className="flex-row spaced-between pb50">
              <div className="smaller-round-icon">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div
                style={{ paddingTop: "5px" }}
                className="flex-col ml20 child-1"
              >
                <h2
                  style={{ fontSize: "1.5rem" }}
                  className="weight-bold title-text-color"
                >
                  Reliable Professionals for Critical Healthcare Needs
                </h2>
                <p className="normal-text-color">
                  We supply experienced healthcare workers to meet your
                  facility's high standards and deliver outstanding patient
                  care.
                </p>
              </div>
            </div>

            <div className="flex-row spaced-between">
              <div className="smaller-round-icon">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div
                style={{ paddingTop: "5px" }}
                className="flex-col ml20 child-1"
              >
                <h2
                  style={{ fontSize: "1.5rem" }}
                  className="weight-bold title-text-color"
                >
                  Committed to Quality Healthcare Solutions
                </h2>
                <p className="normal-text-color">
                  Our focus is on staffing your facility with dependable and
                  proficient professionals to ensure superior care and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
