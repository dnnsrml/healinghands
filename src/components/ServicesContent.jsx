import React from "react";
import useIsMobile from "../hooks/useIsMobile";
import MiniHero from "./MiniHero";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import pic1 from "../assets/care1.png";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ServicesContent = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex-col full-width items-centered">
      <MiniHero title="Our Services" />
      <div
        className={
          isMobile
            ? "section flex-col p30 mb20"
            : "section flex-row less-width mb100"
        }
      >
        <div data-aos="fade-right" className="flex-col child-1">
          <p className="weight-bold decoration-underlined mb20">
            WHAT WE PROVIDE
          </p>
          <h1 className="heading weight-black less-width size-bigger mb30">
            Dedicated to providing top-tier healthcare staffing solutions.
          </h1>
        </div>

        <div
          data-aos="fade-left"
          className={
            isMobile ? "flex-col" : "flex-col child-2 justified-center"
          }
        >
          <p
            className={
              isMobile
                ? "normal-text-color mb30"
                : "normal-text-color pl50 mb30"
            }
          >
            <span className="weight-bold title-text-color">
              At Healing Hands Staffing, we strive to provide top-tier
              healthcare staffing solutions.
            </span>{" "}
            Our services are tailored to meet the unique needs of hospitals,
            hospices, long-term care facilities, and other healthcare
            environments. Our commitment to excellence, integrity, and
            reliability ensures that you receive the highest quality
            professionals who are ready to deliver exceptional care and support.
          </p>
        </div>
      </div>

      <div
        style={isMobile ? null : { gap: "20px" }}
        className={
          isMobile
            ? "section flex-col full-width ph30 mb50"
            : "section flex-row less-width mb100"
        }
      >
        <div
          data-aos="fade-right"
          className={
            isMobile ? "card flex-col p20 mb30" : "card flex-col p20 child-1"
          }
        >
          <h2
            style={{ fontSize: "1.5rem" }}
            className="weight-bold title-text-color mb20"
          >
            Registered Nurses (RNs)
          </h2>
          <p className="normal-text-color">
            Our registered nurses are highly skilled and experienced, ready to
            provide comprehensive care in various settings. They are equipped to
            handle everything from routine patient care to critical emergencies,
            ensuring that your patients receive the best possible attention.
          </p>
        </div>

        <div
          data-aos="fade-right"
          className={
            isMobile ? "card flex-col p20 mb30" : "card flex-col p20 child-1"
          }
        >
          <h2
            style={{ fontSize: "1.5rem" }}
            className="weight-bold title-text-color mb20"
          >
            Licensed Practical Nurses (LPNs)
          </h2>
          <p className="normal-text-color">
            Our LPNs offer essential nursing care under the supervision of RNs
            and doctors. They bring a compassionate touch and a strong
            understanding of patient needs, making them invaluable members of
            your healthcare team.
          </p>
        </div>

        <div
          data-aos="fade-left"
          className={
            isMobile ? "card flex-col p20 mb30" : "card flex-col p20 child-1"
          }
        >
          <h2
            style={{ fontSize: "1.5rem" }}
            className="weight-bold title-text-color mb20"
          >
            Personal Support Workers (PSWs)
          </h2>
          <p className="normal-text-color">
            Our personal support workers are dedicated to assisting patients
            with daily activities, enhancing their quality of life with
            personalized and compassionate care. They are trained to provide
            support in bathing, dressing, meal preparation, mobility assistance,
            and more, ensuring that your patients feel comfortable and
            well-cared for.
          </p>
        </div>

        <div
          data-aos="fade-left"
          className={
            isMobile ? "card flex-col p20 mb30" : "card flex-col p20 child-1"
          }
        >
          <h2
            style={{ fontSize: "1.5rem" }}
            className="weight-bold title-text-color mb20"
          >
            Caregivers
          </h2>
          <p className="normal-text-color">
            Our caregivers are committed to providing heartfelt, attentive care
            to individuals in need. Whether in a hospital, hospice, or long-term
            care facility, our caregivers are skilled in offering emotional
            support, companionship, and daily assistance to enhance the
            well-being of your patients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
