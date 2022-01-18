import React from "react";
import web from "../src/Images/About.jpg";
import CommonPage1 from "./CommonPage1";

const About = () => {
  return (
    <>
      <CommonPage1
        name=" Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
