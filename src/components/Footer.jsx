import React from "react";
import useIsMobile from "../hooks/useIsMobile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <div className="footer flex-col full-width items-centered pt100">
      <div
        style={{ borderBottom: "1px solid #555555" }}
        className={
          isMobile
            ? "flex-col full-width pb50"
            : "flex-row less-width spaced-between pb50"
        }
      >
        <div
          className={isMobile ? "flex-col ph30 mb50" : "flex-col child-2 pr100"}
        >
          <h1 className="heading weight-black decoration-underlined size-big mb50 white">
            Healing Hands
          </h1>

          <p className="pr100 mb30">
            Our commitment to excellence is reflected in the integrity and
            reliability that we bring to every placement.
          </p>

          <div className="flex-row items-centered">
            <FontAwesomeIcon className="off-white mr20" icon={faFacebook} />
            <FontAwesomeIcon className="off-white mr20" icon={faInstagram} />
            <FontAwesomeIcon className="off-white mr20" icon={faTwitter} />
            <FontAwesomeIcon className="off-white mr20" icon={faLinkedin} />
          </div>
        </div>

        <div className={isMobile ? "flex-col ph30 mb30" : "flex-col child-1"}>
          <p
            style={{ fontSize: "1.5rem" }}
            className={isMobile ? "white pb10" : "white pb30"}
          >
            Get to know us
          </p>
          <a className="mb10" href="/about">
            About Us
          </a>
          <a className="mb10" href="/about">
            Our Services
          </a>
          <a href="/about">Our Staff</a>
        </div>

        <div className={isMobile ? "flex-col ph30 mb30" : "flex-col child-1"}>
          <p
            style={{ fontSize: "1.5rem" }}
            className={isMobile ? "white pb10" : "white pb30"}
          >
            Get in touch
          </p>
          <a className="mb10" href="/about">
            Contact Us
          </a>
          <a className="mb10" href="/about">
            Request a Call
          </a>
          <a href="/about">Request a Meeting</a>
        </div>

        <div className={isMobile ? "flex-col ph30 mb30" : "flex-col child-1"}>
          <p
            style={{ fontSize: "1.5rem" }}
            className={isMobile ? "white pb10" : "white pb30"}
          >
            Contact info
          </p>
          <p className="darker-white">Phone:</p>
          <p className="darker-white mb10">(716) 543-2391</p>
          <p className="darker-white">Email</p>
          <p className="darker-white">info@healinghands.com</p>
        </div>
      </div>
      <p className={isMobile ? "p30" : "pv30"}>
        {isMobile ? (
          <>
            <p>Copyright © 2024 - Healing Hands Staffing</p>
            <p>Web Design: LesDeane Creative</p>
          </>
        ) : (
          <>
            Copyright © 2024 - Healing Hands Staffing. Web Design: LesDeane
            Creative.
          </>
        )}
      </p>
    </div>
  );
};

export default Footer;
