import React,{useEffect, useState} from "react";
import styles from "./styles.module.css";
import Marker from "../../../assets/ContactUs-marker.png";
import Phone from "../../../assets/ContactUs-cell.png";
import Msg from "../../../assets/ContactUs-msg.png";
import { GoArrowRight } from "react-icons/go";
import { useDispatch,useSelector } from "react-redux";
import { clearContactUs, postContactUsApi } from "../../../global/features/Webapp/contactUs/postContactUs";
import { toast } from "react-toastify";
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
const dispatch = useDispatch()
const {data,success,message} = useSelector((value)=>value.postContactUs)
  const [contactValue,setContactValue] = useState({
    name:'',
    phone:'',
    email:'',
    subject:'',
    message:'',
    credentialsSaved:false
  })

// Post Handler 

const contactPostHandler = () =>{
  dispatch(postContactUsApi(contactValue))
}

useEffect(()=>{
if(success === true){
  toast.success(message,{
    position:"top-center"
  })
  dispatch(clearContactUs())
  setContactValue({
    name:'',
    phone:'',
    email:'',
    subject:'',
    message:'',
    credentialsSaved:false
  })
}
else if(success === null){
  return;
}
else{
  toast.error(message,{
    position:"top-center"
  })
  dispatch(clearContactUs())

}
},[dispatch, message, success])
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
                    value={contactValue.name}
                    onChange={(e)=>setContactValue({...contactValue,name:e.target.value})}
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
                    value={contactValue.phone}
                    onChange={(e)=>setContactValue({...contactValue,phone:e.target.value})}
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
                    value={contactValue.email}
                    onChange={(e)=>setContactValue({...contactValue,email:e.target.value})}
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
                    value={contactValue.subject}
                    onChange={(e)=>setContactValue({...contactValue,subject:e.target.value})}
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
                    value={contactValue.message}
                    onChange={(e)=>setContactValue({...contactValue,message:e.target.value})}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className={`row ${styles.agreeWrapper}`}>
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className={styles.textWrapperCheckbox}>
                  <input type="checkbox"   name="" id="" 
                  value={contactValue.credentialsSaved} 
                  onChange={(e)=>setContactValue({...contactValue,credentialsSaved:e.target.checked})} />
                  <p>
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </p>
                </div>
              </div>
            </div>
            <div className={`row ${styles.btnWrapper}`}>
              <div className="col-xl-12 col-lg-12 col-md-12">
                <button onClick={contactPostHandler} className={styles.btnSendMsg}>
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
