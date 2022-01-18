import React from "react";
import { NavLink } from "react-router-dom";

const CommonPage1 = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div
                  id="content"
                  className=" col-md-6  pt-5  pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column mx-auto"
                >
                  <h1 className="">
                    {props.name}
                    <strong className="brand-name"> YadavTech</strong>
                  </h1>
                  <h2 className="my-3 ">
                    we are the team of senior developer making websites
                  </h2>
                  <div className="mt-3 home_btn my-5 ">
                    <NavLink
                      to={props.visit}
                      className="btn btn-light"
                      role="button"
                    >
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6   order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    alt="refresh"
                    className="img-fluid animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonPage1;
