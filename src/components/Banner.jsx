import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Banner = () => {
  return (
    <div className="banner">
      <div className="flex-row less-width items-centered spaced-between">
        <div className="flex-row">
          <p>Email Address: admin@healinghands.com</p>
          <p className="ph30">|</p>
          <p>Phone Number: (716) 543-2391</p>
        </div>
        <div className="flex-row items-centered">
          <p className="mr20">Follow us: </p>
          <a href="/">
            <FontAwesomeIcon className="mr10" icon={faFacebook} />
          </a>
          <a href="/">
            <FontAwesomeIcon className="mr10" icon={faInstagram} />
          </a>
          <a href="/">
            <FontAwesomeIcon className="mr10" icon={faTwitter} />
          </a>
          <a href="/">
            <FontAwesomeIcon className="mr10" icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
