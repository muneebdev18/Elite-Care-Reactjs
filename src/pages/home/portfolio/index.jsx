import React from "react";
import Style from "./style.module.css";
import mask1 from '../../../assets/Mask group (2).png'
import mask2 from '../../../assets/Mask group (3).png'
import mask3 from '../../../assets/Mask group (4).png'
import mask4 from '../../../assets/Mask group (5).png'

const Portfolio = () => {
  return (
    <div className="container-fluid " id={Style.sec1main}>
      <div className="row  " id={Style.sec1row}>
        <div className="col-12 col-md-6">
          <div id={Style.secportfoliotext}>
            <h4>PORTFOLIO</h4>
            <h1>RECENT CASE STUDIES</h1>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div id={Style.secportfoliotext}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              facere architecto. Porro deserunt dolores molestiae, vel saepe
              laudantium ad tenetur non, laboriosam commodi maiores consequatur
              laborum a quidem assumenda repellendus! laudantium ad tenetur non,
              laboriosam commodi maiores consequatur laborum a quidem assumenda
              repellendus!
           
            </p>
          </div>
        </div>
        <div className="row  " id={Style.sec2main}>
        <div className="col-12 col-md-3 " >
          <div  id={Style.maskimage1}>
            <img src={mask1} alt=""  />
          </div>
        </div>
        <div className="col-12 col-md-3   ">
          <div id={Style.maskimage2}>
            <img src={mask2} alt="" />
          </div>
        </div>
        <div className="col-12 col-md-3  ">
          <div id={Style.maskimage3}>
          <img src={mask3} alt="" />
          </div>
        </div>
        <div className="col-12 col-md-3 ">
          <div id={Style.maskimage4}>
          <img src={mask4} alt="" />
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Portfolio;
