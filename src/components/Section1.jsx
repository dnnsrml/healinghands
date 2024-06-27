import React from "react";
import useIsMobile from "../hooks/useIsMobile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserSlash,
  faExclamationTriangle,
  faSyncAlt,
  faBalanceScale,
} from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Section1 = () => {
  const isMobile = useIsMobile();

  return (
    <div
      style={{ backgroundColor: "#ffffff" }}
      className={
        isMobile
          ? "section flex-col full-width pv30 items-centered"
          : "section flex-col full-width pv100 items-centered"
      }
    >
      <div
        className={
          isMobile
            ? "flex-col full-width items-centered p30"
            : "flex-col less-width items-centered"
        }
      >
        <h1
          data-aos="fade-right"
          className={
            isMobile
              ? "heading full-width weight-black size-bigger text-centered title-text-color mb20"
              : "heading width-60 weight-black size-bigger text-centered title-text-color mb20"
          }
        >
          Now is the time to put an end to your staffing headaches.
        </h1>

        <p
          data-aos="fade-left"
          className={
            isMobile
              ? "full-width text-centered normal-text-color mb30"
              : "width-60 text-centered normal-text-color mb100"
          }
        >
          HR managers have numerous responsibilities, and the challenges they
          face make it difficult to find the reliable care their facility needs.
          We provide solutions to avoid these problems.
        </p>

        <div
          data-aos="fade-up"
          className={
            isMobile
              ? "flex-col full-width"
              : "flex-row less-width spaced-between"
          }
        >
          <div className="flex-col p30 items-centered">
            <div className="round-icon mb30">
              <FontAwesomeIcon icon={faUserSlash} />
            </div>
            <h2
              style={{ fontSize: "1.8rem" }}
              className="weight-bold title-text-color text-centered mb20"
            >
              Unpredictable staff absences
            </h2>
            <p className="normal-text-color text-centered">
              You end up rushing to fill the gaps to ensure everyone's care
              remains unaffected.
            </p>
          </div>
          <div className="flex-col p30 items-centered">
            <div className="round-icon mb30">
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </div>
            <h2
              style={{ fontSize: "1.8rem" }}
              className="weight-bold title-text-color text-centered mb20"
            >
              Unreliable staffing agencies
            </h2>
            <p className="normal-text-color text-centered">
              You end up with an unsuitable match because they lack
              understanding of your facility's unique requirements.
            </p>
          </div>
          <div className="flex-col p30 items-centered">
            <div className="round-icon mb30">
              <FontAwesomeIcon icon={faSyncAlt} />
            </div>
            <h2
              style={{ fontSize: "1.8rem" }}
              className="weight-bold title-text-color text-centered mb20"
            >
              Inconsistent personnel
            </h2>
            <p className="normal-text-color text-centered">
              Maintaining consistency and building robust, experienced teams is
              difficult with the continuous turnover.
            </p>
          </div>
          <div className="flex-col p30 items-centered">
            <div className="round-icon mb30">
              <FontAwesomeIcon icon={faBalanceScale} />
            </div>
            <h2
              style={{ fontSize: "1.8rem" }}
              className="weight-bold title-text-color text-centered mb20"
            >
              Strict budget constraints
            </h2>
            <p className="normal-text-color text-centered">
              There's pressure to identify economical solutions without
              compromising on quality care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
