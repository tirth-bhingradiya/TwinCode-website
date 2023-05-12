import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-item-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto acrossimg">
            <div className="row">
            
              <div className="col-md-6  mt-5">
                <h1>
                 {props.headline}
                  <strong className="highlight"> RippleStacks</strong>
                </h1>
                <h2 className="my-3">{props.sentence}</h2>
                <p className="my-3">{props.content}</p>
                <div>
                <NavLink to={props.path}>
                  <a href="" className="btn btn-primary p-auto">
                    {props.btnvalue}
                  </a></NavLink>
                </div>
              </div>
              <div className="col-lg-6">
                <img src={props.image} alt="gif image" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
