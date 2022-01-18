import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img className="card-img-top" src={props.imgsrc} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">we are provide you awesome websites</p>
            <NavLink to="/home" className="btn btn-primary">
              Get Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
