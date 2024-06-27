import React from "react";
import useIsMobile from "../hooks/useIsMobile";
import nurses1 from "../assets/nurses1.png";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Section2 = () => {
  const isMobile = useIsMobile();

  return (
    <div className="section flex-col full-width">
      <div
        className={
          isMobile
            ? "flex-col full-width"
            : "flex-row full-width spaced-between"
        }
      >
        <div
          data-aos="fade-up"
          className={
            isMobile
              ? "about flex-col child-1 justified-center p30"
              : "about flex-col child-1 justified-center ph200"
          }
          style={{ paddingTop: "50px", paddingBottom: "50px" }}
        >
          <p className="weight-bold decoration-underlined mb20">ABOUT US</p>
          <p className="heading weight-black size-bigger title-text-color mb20">
            Who we are
          </p>
          <p className="mb20 normal-text-color">
            At Healing Hands Staffing, we are dedicated to providing exceptional
            staffing solutions for healthcare facilities in need of qualified
            nurses, personal support workers (PSWs), and caregivers.
          </p>
          <p className="normal-text-color mb30">
            Our commitment to excellence is reflected in the integrity and
            reliability that we bring to every placement. We understand the
            critical role that competent and compassionate healthcare
            professionals play in ensuring the well-being of patients and
            residents.
          </p>
          <button
            style={isMobile ? { width: "100%" } : null}
            className="default-button"
          >
            Learn more
          </button>
        </div>

        <div className="flex-col child-2">
          <img src={nurses1} className="section2-img" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
