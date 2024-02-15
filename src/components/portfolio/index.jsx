import React from "react";
import Style from "./style.module.css";

const Portfolio = (props) => {
  const { heading1, heading2, para, image1, image2, image3, image4 } =
    props.dataportfolio;
  return (
    <div
      className="container-fluid "
      style={{ marginBottom: "180px" }}
      id={Style.sec1main}
    >
      <div className="row  " id={Style.sec1row}>
        <div className="col-12 col-md-6">
          <div id={Style.secportfoliotext}>
            <h4>{heading1}</h4>
            <h1>{heading2}</h1>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div id={Style.secportfoliotext}>
            <p>{para}</p>
          </div>
        </div>
        <div className="row  " id={Style.sec2main}>
          <div className="col-12 col-md-3 ">
            <div id={Style.maskimage1}>
              <img src={image1} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-3   ">
            <div id={Style.maskimage2}>
              <img src={image2} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-3  ">
            <div id={Style.maskimage3}>
              <img src={image3} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-3 ">
            <div id={Style.maskimage4}>
              <img src={image4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
