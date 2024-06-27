import React from "react";
import useIsMobile from "../hooks/useIsMobile";

import Banner from "../components/Banner";
import Heading from "../components/Heading";
import HeadingMobile from "../components/HeadingMobile";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";

const About = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <Banner />
      {isMobile ? <HeadingMobile /> : <Heading />}
      <AboutContent />
      <Footer />
    </>
  );
};

export default About;
