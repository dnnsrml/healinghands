import React from "react";
import useIsMobile from "../hooks/useIsMobile";
import hr1 from "../assets/tes1.png";
import hr2 from "../assets/tes2.png";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Section4 = () => {
  const isMobile = useIsMobile();

  return (
    <div
      className={
        isMobile
          ? "section flex-col full-width mv50"
          : "section flex-col full-width items-centered mv100"
      }
    >
      <div className={isMobile ? "flex-col full-width" : "flex-row less-width"}>
        <div
          className={isMobile ? "flex-col full-width" : "flex-row child-2"}
          style={isMobile ? null : { alignItems: "flex-start" }}
        >
          <div
            data-aos="fade-up"
            className={
              isMobile
                ? "testimonial flex-row spaced-between child-1 mb30"
                : "testimonial flex-row mr20 spaced-between child-1"
            }
          >
            <div className="flex-col">
              <img className="profile mr20" src={hr1} alt="profile" />
            </div>
            <div className="flex-col child-2 pl20">
              <p
                style={{ fontSize: "1.6rem" }}
                className="white heading weight-black"
              >
                Edward Jameson
              </p>
              <p className="off-white pb30">HR Manager</p>
              <p className="off-white italic">
                "Working with Healing Hands Staffing has been a game-changer for
                our facility. Their commitment to providing reliable and skilled
                professionals has ensured that our patients receive exceptional
                care."
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className={
              isMobile
                ? "testimonial flex-row spaced-between child-1 mb30"
                : "testimonial flex-row ml20 child-1"
            }
          >
            <div className="flex-col">
              <img className="profile mr20" src={hr2} alt="profile" />
            </div>
            <div className="flex-col child-2 pl20">
              <p
                style={{ fontSize: "1.6rem" }}
                className="white heading weight-black"
              >
                Dr. Emily Turner
              </p>
              <p className="off-white pb30">Chief Medical Officer</p>
              <p className="off-white italic">
                "Partnering with CarePro Staffing has significantly improved our
                operations. Their commitment to providing reliable and skilled
                professionals ensures that our facility is always staffed with
                exceptional healthcare workers. The level of care and support
                our patients receive has never been better, thanks to their
                dedicated team."
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className={
            isMobile ? "flex-col full-width p30" : "flex-col child-1 ml100"
          }
        >
          <div className="flex-col child-1 pr50">
            <p className="weight-bold decoration-underlined mb20">
              TESTIMONIALS
            </p>
            <h1 className="heading weight-black size-bigger title-text-color mb20">
              Our clients love us, and you will too. That is a promise.
            </h1>
            <p className="normal-text-color mb30">
              We are committed to addressing the critical needs of the
              healthcare industry by providing reliable and skilled
              professionals. Our focus is on ensuring that your facility is
              staffed with healthcare workers who deliver exceptional care and
              support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
