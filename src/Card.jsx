import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card  ">
          <div className="card-img">
            <img
              className="card-img-top overflow-hidden"
              src={props.imgsrc}
              alt="Card cap"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">we are provide you awesome websites</p>
            <a href={props.link} className="btn btn-primary">
              Get Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
