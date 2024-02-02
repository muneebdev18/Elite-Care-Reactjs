import React from "react";
import Styles from "./style.module.css";
import { HiArrowLongRight } from "react-icons/hi2";
import { MdCall } from "react-icons/md";
import propertyimg from '../../../assets/Property.png'
const Appointment = () => {
  return (
    <div className="container-fluid">
      <div className="row " id={Styles.sec1appoitmentrow}>
        <div className="col-12 col-md-6 align-self-center">
          <div id={Styles.secappointtext}>
            <h4>GET APPOINTMENT</h4>
            <h1>ONLINE CONSULTATION WITH OUR DOCTOR</h1>
          </div>
          <div class="row " id={Styles.rowsec2}>
            <div class="col col-md-4 mx-5 ">
                <div>
                <button class="btn btn-outline-light " type="submit">
                BOOK AN APPOINTMENT
                <HiArrowLongRight size={28} />
              </button>
                </div>
            </div>
            <div class="col col-md-2">
                <div className="d-flex  flex-row gap-4 justify-content-center">
                  <div className={Styles.icon}>
                  <MdCall size={28} />
                  </div>
                <p> 4086599856</p>
               
              
                </div>
            </div>

          </div>
        </div>
        <div className="col-12 col-md-6 p-0 ">
          <div id={Styles.propertyimg}>
            <img src={propertyimg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
