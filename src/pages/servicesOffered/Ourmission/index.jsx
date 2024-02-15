import React from "react";
import goal1 from "../../../assets/goal1.png";
import goal2 from "../../../assets/goal2.png";
import mission1 from "../../../assets/mission1.png";
import mission2 from "../../../assets/mission2.png";
import mission3 from "../../../assets/mission3.png";
// import testimonal from "../../assets/tesimontalsurgery.png";
import Styles from "./style.module.css";

const Ourmission = () => {
  return (
    <div className="container">
      <div className={`row ${Styles.secrow1} justify-content-center`}>
        <div
          className={`col-12  col-sm-12 col-md-6 col-lg-5 ${Styles.surgerycol1}   align-self-center `}
        >
          <div className={`${Styles.surgeryimges}`}>
            <div className={Styles.surgery1}>
              <img src={goal1} alt="" className={Styles.img1} />
            </div>
            <div className={Styles.surgery2}>
              <img src={goal2} alt="" className={Styles.img2} />
            </div>
          </div>
        </div>
        <div
          className={`col-12  col-sm-12 col-md-6 col-lg-7 ${Styles.surgerycol2} align-self-center `}
        >
          <div className={Styles.textsurgery}>
            <h6>BEST QUALITY</h6>
            <h1>Our Goal is the Quality !</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus rem suscipit unde quis nesciunt, mollitia eius velit at
              repellat dolorum quibusdam laboriosam debitis eum veniam minima
              fuga perspiciatis. Eaque. Doloribus rem suscipit unde quis
            </p>
          </div>
          <div className={`row  ${Styles.secrow2}  `}>
            <div className="col-4  col-md-4  col-lg-4  align-self-center">
              <div className={Styles.testimonalImg}>
                <img src={mission1} alt="" />
                <h6>CREATION</h6>
              </div>
            </div>
            <div className="col-4  col-md-4  col-lg-4  align-self-center">
              <div className={Styles.testimonalImg}>
                <img src={mission2} alt="" />
                <h6>ANALYICS</h6>
              </div>
            </div>
            <div className="col-4  col-md-4  col-lg-4  align-self-center">
              <div className={Styles.testimonalImg}>
                <img src={mission3} alt="" />
                <h6>MARKETING</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourmission;
