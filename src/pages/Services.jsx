import React from "react";
import useIsMobile from "../hooks/useIsMobile";

import Banner from "../components/Banner";
import Heading from "../components/Heading";
import HeadingMobile from "../components/HeadingMobile";
import ServicesContent from "../components/ServicesContent";
import Footer from "../components/Footer";

const Services = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <Banner />
      {isMobile ? <HeadingMobile /> : <Heading />}
      <ServicesContent />
      <Footer />
    </>
  );
};

export default Services;
