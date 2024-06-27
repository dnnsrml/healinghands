import React from "react";
import useIsMobile from "../hooks/useIsMobile";
import MiniHero from "./MiniHero";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ContactContent = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex-col full-width items-centered mb100">
      <MiniHero title="Our Staff" />
    </div>
  );
};

export default ContactContent;
