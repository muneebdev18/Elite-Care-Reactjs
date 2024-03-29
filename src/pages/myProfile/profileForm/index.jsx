import React from 'react'
import styles from "./style.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../../../assets/bookAppointmentBanner.png"
import { IoIosArrowRoundForward } from "react-icons/io";


export default function ProfileForm() {
  return (
    <div className={styles.skinbodyWrapper}>
      <div className="container">
        <div className="row">
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className={styles.formImg}>
              <img src={img1} className="card-img-top" alt="..." />
            </div>
          </div>

          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className={styles.tabWrapper}>
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><div className={styles.mainfromWrapper}>
              <h3 className=''>MY PROFILE</h3>
              <div className={styles.mainFrom}>
                <from>
                  <input type="text" placeholder='Enter Your User Name' />

                  <input type="text" placeholder='Enter Your Password' />

                  <input type="text" placeholder='Enter Your Confirm Password' />

                  <button className={styles.contactBtn}>SignUp <IoIosArrowRoundForward /></button>
                </from>
              </div>
            </div></div>
              </div>
            </div>

            
          </div>

        </div>
      </div>
    </div>
  )
}
