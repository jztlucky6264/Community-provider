import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="w-100 bg-light text-center  footer_sec  ">
        <p>©️ {year} YadavTech. All Rights Reserved | Terms and Conditions</p>
      </footer>
    </>
  );
};

export default Footer;
