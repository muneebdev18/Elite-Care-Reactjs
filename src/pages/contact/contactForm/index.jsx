import React from "react";
import styles from "./styles.module.css";
import Marker from "../../../assets/ContactUs-marker.png";
import Phone from "../../../assets/ContactUs-cell.png";
import Msg from "../../../assets/ContactUs-msg.png";
import { GoArrowRight } from "react-icons/go";

const ContactForm = () => {
  const contacts = [
    {
      id: 1,
      img: Marker,
      title: "Our Office",
      details: "37825 Harbor Light Road 94560 Zip Code California",
    },
    {
      id: 2,
      img: Phone,
      title: "Call Us",
      details: "4086599856",
    },
    {
      id: 3,
      img: Msg,
      title: "Mail Us",
      details: "gendusarose@gmail.com",
    },
  ];
  return (
    <section className={styles.formSection}>
      <div className="container">
        <div className={`row ${styles.contactMain}`}>
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className={styles.leftSide}>
              <div className={styles.textWrapper}>
                <p className={styles.title}>Get In Touch</p>
                <p className={styles.heading}>Feel Free To contact Us</p>
              </div>
              {contacts &&
                contacts.map((item) => {
                  return (
                    <div className={styles.ContactDetailsWrapper}>
                      <img src={item.img} alt="" />
                      <div className={styles.detailsWrapper}>
                        <p className={styles.detailTitle}>{item.title}</p>
                        <p className={styles.detailText}>{item.details}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-8">
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
                <div className={styles.inputWrapper2}>
                  <input
                    style={{ width: "100%" }}
                    type="text"
                    name=""
                    id=""
                    placeholder="Subject"
                  />
                </div>
              </div>
            </div>

            <div className={`row ${styles.formWrapperUpper3}`}>
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className={styles.inputWrapper3}>
                  <textarea
                    name=""
                    style={{ width: "100%" }}
                    id=""
                    cols="30"
                    rows="7"
                    placeholder="Write Your Message Here"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className={`row ${styles.agreeWrapper}`}>
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className={styles.textWrapperCheckbox}>
                  <input type="checkbox" name="" id="" />
                  <p>
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </p>
                </div>
              </div>
            </div>
            <div className={`row ${styles.btnWrapper}`}>
              <div className="col-xl-12 col-lg-12 col-md-12">
                <button className={styles.btnSendMsg}>
                  Send Message <GoArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
