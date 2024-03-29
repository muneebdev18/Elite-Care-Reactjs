import React from "react";
import Styles from "./style.module.css";

const DentistServices = ({ carddata, head1, head2 }) => {
  return (
    <div className="container-fluid">
      <div className="row" id={Styles.sec1main}>
        <div className="col-12" id={Styles.sec1col}>
          <div id={Styles.maintext} className={Styles.textWrapper}>
            <p>{head1}</p>
            <h1>{head2}</h1>
          </div>
        </div>
        <div className="row" id={Styles.sec2main}>
          {carddata?.map((items) => (
            <div className="col-12 col-md-6 col-lg-3">
              <div className={Styles.column}>
                <div className={Styles.imgdiv}>
                  <img src={items?.image?.imageUrl} alt={items?.image?.imageName} />
                </div>
                <div className={Styles.columtext}>
                  <h2>{items?.serviceName}</h2>

                  <p>{items?.description.slice(0,100)}.....</p>
                </div>
              </div>
            </div>
          )).slice(0, 4)}
        </div>
      </div>
    </div>
  );
};

export default DentistServices;
