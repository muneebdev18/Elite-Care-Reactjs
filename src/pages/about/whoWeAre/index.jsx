import React from "react";
import styles from "./styles.module.css";
import img1 from "../../../assets/care1.png";
import img2 from "../../../assets/care2.png";
import img3 from "../../../assets/phone.png";
import img4 from "../../../assets/support.png";
import { IoIosArrowRoundForward } from "react-icons/io";

function WhoWeAre() {
  return (
    <div className={styles.skinbodyWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className={styles.missionimg}>
              <div className={styles.missImg1}>
                <img src={img1} className="img-fluid" />
              </div>

              <div className={styles.missImg2}>
                <img src={img2} className={styles.care} />
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className={styles.chooseCont}>
              <h4>Who We Are</h4>
              <h1>Why Choose Elite Care</h1>
              <p className={styles.whoPara}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className={styles.supportSec}>
                <img src={img3} className="img-fluid" />

                <h5>Care About Clients</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className={styles.supportSec}>
                <img src={img4} className="img-fluid" />

                <h5>24/7 Support</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhoWeAre;
