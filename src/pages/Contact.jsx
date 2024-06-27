import React from "react";
import useIsMobile from "../hooks/useIsMobile";

import Banner from "../components/Banner";
import Heading from "../components/Heading";
import HeadingMobile from "../components/HeadingMobile";
import ContactContent from "../components/ContactContent";
import Footer from "../components/Footer";

const Contact = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <Banner />
      {isMobile ? <HeadingMobile /> : <Heading />}
      <ContactContent />
      <Footer />
    </>
  );
};

export default Contact;
