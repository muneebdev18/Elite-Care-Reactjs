import React from "react";
import styles from "./style.module.css";
import Banner from "../../../assets/bookAppointmentBanner.png";
import { GoArrowRight } from "react-icons/go";
const AppointmentForm = () => {
  return (
    <section className={styles.appointmentFormContainer}>
      <div className="container">
        <div className={`row ${styles.mainAppointmentWrapper}`}>
          <div className="col-xl-5 col-lg-5 ">
            <div className={styles.leftSideWrapper}>
              <div className={styles.imgContainer}>
                <img src={Banner} alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 ">
            <div className={styles.rightSide}>
              <div className={`row ${styles.textWrapper}`}>
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <p className={styles.heading}>APPOINTMENT</p>
                  <p className={styles.title}>Weekly Schedule</p>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className={styles.LineWrapper}>
                    <p className={styles.day}>SATURDAY</p>
                    <p className={styles.line}>-------------------------</p>
                    <p className={styles.time}>8am - 5pm</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className={styles.LineWrapper}>
                    <p className={styles.day}>SUNDAY</p>
                    <p className={styles.line}>-------------------------</p>
                    <p className={styles.time}>8am - 5pm</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className={styles.LineWrapper}>
                    <p className={styles.day}>MONDAY</p>
                    <p className={styles.line}>-------------------------</p>
                    <p className={styles.time}>8am - 5pm</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className={styles.LineWrapper}>
                    <p className={styles.day}>TUESDAY</p>
                    <p className={styles.line}>-------------------------</p>
                    <p className={styles.time}>8am - 5pm</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className={styles.LineWrapper}>
                    <p className={styles.day}>WEDNESDAY</p>
                    <p className={styles.line}>-------------------------</p>
                    <p className={styles.time}>8am - 5pm</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className={styles.LineWrapper}>
                    <p className={styles.day}>THURSDAY</p>
                    <p className={styles.line}>-------------------------</p>
                    <p className={styles.time}>8am - 5pm</p>
                  </div>
                </div>
              </div>

              <div className={`row ${styles.formWrapperUpper1}`}>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className={styles.inputWrapper1}>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter Your Name"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className={styles.inputWrapper1}>
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter Your Phone"
                    />
                  </div>
                </div>
              </div>
              <div className={`row ${styles.formWrapperUpper2}`}>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className={styles.inputWrapper2}>
                    <input
                      style={{ width: "100%", color: "black" }}
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter Your Email Address"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <select
                    name="cars"
                    id="cars"
                    className={styles.inputWrapper3}
                  >
                    <option value="" selected disabled hidden>
                      Choose here
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                  </select>
                </div>
              </div>
              <div className={`row ${styles.btnWrapper}`}>
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <button className={styles.btnSendMsg}>
                    GET APPOINTMENT <GoArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
