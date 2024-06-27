import React from "react";
import useIsMobile from "../hooks/useIsMobile";
import MiniHero from "./MiniHero";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import pic1 from "../assets/care1.png";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutContent = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex-col full-width items-centered">
      <MiniHero title="About Us" />
      <div className="section flex-col less-width">
        <div className={isMobile ? "flex-col mb50" : "flex-row mb100"}>
          <div
            data-aos="fade-right"
            className={isMobile ? "flex-col child-1" : "flex-col child-1 pr100"}
          >
            <p className="weight-bold decoration-underlined mb20">WELCOME</p>
            <h1 className="heading weight-black less-width size-bigger mb30">
              Healing Hands Staffing
            </h1>
            <p className="normal-text-color mb30">
              At Healing Hands Staffing, we understand the critical role that
              qualified and compassionate healthcare professionals play in
              delivering exceptional care. Founded on the principles of
              integrity, dedication, and excellence, we are committed to
              addressing the unique staffing needs of hospitals, hospices,
              long-term care facilities, and other healthcare settings.
            </p>
            <p className="normal-text-color mb30">
              At Healing Hands Staffing, we understand the critical role that
              qualified and compassionate healthcare professionals play in
              delivering exceptional care. Founded on the principles of
              integrity, dedication, and excellence, we are committed to
              addressing the unique staffing needs of hospitals, hospices,
              long-term care facilities, and other healthcare settings.
            </p>
            <p className="normal-text-color mb30">
              Our extensive network of experienced nurses, personal support
              workers (PSWs), and caregivers ensures that we can provide the
              right match for your specific requirements, enhancing the quality
              of care and operational efficiency. We take pride in our rigorous
              selection process, which guarantees that every professional we
              place not only meets but exceeds the high standards expected in
              healthcare environments.
            </p>
          </div>

          <div data-aos="fade-left" className="flex-col child-1">
            <img src={pic1} alt="caregiver" />
          </div>
        </div>

        <div
          data-aos="fade-up"
          style={{ backgroundColor: "#0240a3", borderRadius: "10px" }}
          className="flex-col full-width p50 justified-center items-centered mb100"
        >
          <p className="weight-bold decoration-underlined text-centered white mb20">
            OUR MISSION
          </p>
          <p className="text-centered white">
            To provide healthcare institutions with reliable, skilled, and
            empathetic professionals who are dedicated to improving patient
            outcomes and enhancing the quality of care. We strive to be the
            trusted partner that healthcare providers turn to for their staffing
            needs, ensuring that they are always equipped with the best talent
            available.
          </p>
        </div>

        <div className="section flex-col full-width mb100">
          <div className={isMobile ? "flex-col" : "flex-row"}>
            <div
              data-aos="fade-right"
              className={isMobile ? "flex-col mb50" : "flex-col child-1 pr100"}
            >
              <p className="weight-bold decoration-underlined mb20">
                OUR WHY COOSE US
              </p>
              <h1 className="heading weight-black full-width size-bigger mb30">
                We are committed to making a difference in the healthcare
                industry.
              </h1>
              <p className="normal-text-color mb30">
                Our team is passionate about healthcare and dedicated to helping
                facilities maintain the highest levels of care. We continuously
                strive to improve our services and exceed the expectations of
                our clients.
              </p>
              <p className="normal-text-color mb30">
                Thank you for considering Healing Hands Staffing as your
                staffing partner. We look forward to working with you to ensure
                that your facility is staffed with the best healthcare
                professionals, ready to deliver the highest quality of care.
              </p>
              <button
                style={{ width: "250px" }}
                className={
                  isMobile ? "default-button mh-auto" : "default-button"
                }
              >
                Inquire Now
              </button>
            </div>

            <div data-aos="fade-left" className="flex-col child-1">
              <div className="flex-row spaced-between mb50">
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
                    Integrity and Reliability
                  </h2>
                  <p className="normal-text-color">
                    We pride ourselves on our commitment to integrity and
                    reliability. Our rigorous selection process ensures that we
                    provide only the most qualified and trustworthy
                    professionals.
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
                    Tailored Solutions
                  </h2>
                  <p className="normal-text-color">
                    We understand that each healthcare facility has unique
                    needs. Our team works closely with you to provide tailored
                    staffing solutions that fit your specific requirements.
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
                    Continuous Support
                  </h2>
                  <p className="normal-text-color">
                    Our relationship with clients doesn’t end with placement. We
                    offer ongoing support to ensure that our professionals
                    continue to meet your standards and contribute positively to
                    your team.
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
                    Exceptional Care
                  </h2>
                  <p className="normal-text-color">
                    Our focus is always on delivering exceptional care. We
                    believe that every patient deserves the best, and we are
                    dedicated to providing professionals who share this belief.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
