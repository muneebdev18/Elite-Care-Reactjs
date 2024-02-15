import React from "react";
import Styles from "./style.module.css";
import { HiArrowLongRight } from "react-icons/hi2";
import { MdCall } from "react-icons/md";
import propertyimg from '../../../assets/Property.png'
const Appointment = () => {
  return (
    <div className="container-fluid">
      <div className="row " id={Styles.sec1appoitmentrow}>
        <div className="col-12 col-md-6 col-lg-6  align-self-center" id={Styles.c1}>
          <div id={Styles.secappointtext}>
            <h4>GET APPOINTMENT</h4>
            <h1>ONLINE CONSULTATION WITH OUR DOCTOR</h1>
          </div>
          <div class="row " id={Styles.rowsec2}>
            <div class="col col-md-7 col-lg-5   " id={Styles.btncol}>
                <div>
                <button class="btn btn-outline-light " type="submit">
                BOOK AN APPOINTMENT
                <HiArrowLongRight size={28} />
              </button>
                </div>
            </div>
            <div class="col col-md-5 col-lg-7"  id={Styles.btncolicon}>
                <div className="d-flex  flex-row gap-2 align-items-center">
                  <div className={Styles.icon}>
                  <MdCall size={28} className={Styles.iconcall} />
                  </div>
                <p> 4086599856</p>
                </div>
            </div>

          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6   p-0 " id={Styles.c2}>
          <div id={Styles.propertyimg}>
            <img src={propertyimg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
