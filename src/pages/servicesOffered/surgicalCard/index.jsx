import React from "react";
import Styles from "./style.module.css";

const SurgicalCard = (props) => {
  console.log(props.carddata.mainheading);

  return (
    <div id={Styles.bgcolor}>
      <div className="container">
        <div className="row " id={Styles.sec1main}>
          <div className="col-12" id={Styles.sec1col}>
            <div id={Styles.maintext} className={Styles.textWrapper}>
              <p>{props.carddata.mainheading}</p>
              <h1>{props.carddata.mainHeadingtwo}</h1>
            </div>
          </div>
          <div className="row" id={Styles.sec2main}>
            {props.carddata.card.map((items) => (
              <div className="col-12 col-md-6 col-lg-4">
                <div className={Styles.column}>
                  <div className={Styles.imgdiv}>
                    <img src={items.image} alt="" />
                  </div>
                  <div className={Styles.columtext}>
                    <div className="d-flex flex-row justify-content-between">
                      <div>
                        <h2>{items.heading1}</h2>
                      </div>
                      <div>
                        <p>{items.price}</p>
                      </div>
                    </div>

                    <p>{items.para}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurgicalCard;
