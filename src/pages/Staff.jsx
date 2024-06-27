import React from "react";
import useIsMobile from "../hooks/useIsMobile";

import Banner from "../components/Banner";
import Heading from "../components/Heading";
import HeadingMobile from "../components/HeadingMobile";
import StaffContent from "../components/StaffContent";
import Footer from "../components/Footer";

const Staff = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <Banner />
      {isMobile ? <HeadingMobile /> : <Heading />}
      <StaffContent />
      <Footer />
    </>
  );
};

export default Staff;
