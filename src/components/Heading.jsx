import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Heading = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div
      className={
        isVisible
          ? "header flex-row full-width justified-center fixed-top"
          : "header flex-row full-width justified-center"
      }
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
          <Link to="/" className="mr50">
            Home
          </Link>
          <Link to="/services" className="mr50">
            Our Services
          </Link>
          <Link to="/about" className="mr50">
            About Us
          </Link>
          <Link to="/staff" className="mr50">
            Our Staff
          </Link>
          <Link to="/contact" className="mr50">
            Contact Us
          </Link>
          <button className="header-button">Inquire Now</button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
