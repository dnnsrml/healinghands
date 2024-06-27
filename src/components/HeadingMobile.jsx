import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const HeadingMobile = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleLogoClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  useEffect(() => {
    console.log(`Menu: ${isMenuVisible}`);
  }, [isMenuVisible]);

  return (
    <>
      <div
        style={{ zIndex: "1000" }}
        className="header flex-row full-width justified-center"
      >
        <div className="flex-row less-width items-centered spaced-between">
          <div className="flex-row">
            <p
              style={{ cursor: "pointer" }}
              className="heading weight-black size-big"
              onClick={handleLogoClick}
            >
              Healing Hands
            </p>
          </div>
          <div className="flex-row items-centered pv20">
            <FontAwesomeIcon onClick={toggleMenu} icon={faBars} />
          </div>
        </div>
      </div>

      <div
        className={
          isMenuVisible
            ? "header toggling-menu flex-col full-width full-height items-centered"
            : "invisible"
        }
      >
        <a className="mb10" href="/">
          Home
        </a>
        <a className="mb10" href="/services">
          Our Services
        </a>
        <a className="mb10" href="/staff">
          Our Staff
        </a>
        <a className="mb10" href="/about">
          About Us
        </a>
        <a className="mb10" href="/contact">
          Contact Us
        </a>
        <button style={{ width: "200px" }} className="header-button">
          Inquire Now
        </button>
      </div>
    </>
  );
};

export default HeadingMobile;
