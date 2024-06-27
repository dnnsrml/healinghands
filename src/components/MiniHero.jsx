import React from "react";
import useIsMobile from "../hooks/useIsMobile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import pic1 from "../assets/care1.png";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const MiniHero = ({ title }) => {
  const isMobile = useIsMobile();

  return (
    <div
      className={
        isMobile
          ? "mini-hero flex-col full-width justified-center mb50"
          : "mini-hero flex-col full-width justified-center mb100"
      }
    >
      <h1 className="heading weight-black size-bigger text-centered decoration-underlined white">
        {title}
      </h1>
    </div>
  );
};

export default MiniHero;
