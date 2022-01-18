import React from "react";
import web from "../src/Images/img1.png";

import CommonPage1 from "./CommonPage1";

const Home = () => {
  return (
    <>
      <CommonPage1
        name=" Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
