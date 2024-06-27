import React from "react";
import useIsMobile from "../hooks/useIsMobile";

import Banner from "../components/Banner";
import Heading from "../components/Heading";
import HeadingMobile from "../components/HeadingMobile";
import Hero from "../components/Hero";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Footer from "../components/Footer";

const Home = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <Banner />
      {isMobile ? <HeadingMobile /> : <Heading />}
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
};

export default Home;
