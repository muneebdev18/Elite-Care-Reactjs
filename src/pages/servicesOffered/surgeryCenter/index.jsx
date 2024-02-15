import React from "react";
import surgery1 from "../../../assets/surgery1.png";
import surgery2 from "../../../assets/surgery2.png";
import testimonal from "../../../assets/tesimontalsurgery.png";
import Styles from "./style.module.css";

const SurgeryCenter = () => {
  return (
    <div className="container">
      <div className={`row ${Styles.secrow1} justify-content-center`}>
        <div
          className={`col-12  col-sm-12 col-md-6 col-lg-5 ${Styles.surgerycol1}   align-self-center `}
        >
          <div className={`${Styles.surgeryimges}`}>
            <div className={Styles.surgery1}>
              <img src={surgery1} alt="" className={Styles.img1} />
            </div>
            <div className={Styles.surgery2}>
              <img src={surgery2} alt="" className={Styles.img2} />
            </div>
          </div>
        </div>
        <div
          className={`col-12  col-sm-12 col-md-6 col-lg-7 ${Styles.surgerycol2} align-self-center `}
        >
          <div className={Styles.textsurgery}>
            <h6>SURGERY CENTER</h6>
            <h1>WE ARE THE LEADING PLACTIC SURGERY CENTER</h1>
            <p>
              Our mission is to bring a touch of excellence to Turkey by
              providing top-notch plastic surgery and dental services for our
              American clients. We aim to enhance their well-being and
              confidence through skilled professionals and state-of-the-art
              facilities.
            </p>
          </div>
          <div className={`row  ${Styles.secrow2}  `}>
            <div className="col-2  col-md-2  col-lg-2  align-self-center">
              <div className={Styles.testimonalImg}>
                <img src={testimonal} alt="" />
              </div>
            </div>
            <div className="col-8 col-md-8 col-lg-8  align-self-center">
              <h4>MIXER Y . YELLOW</h4>
              <p>Doctor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurgeryCenter;
