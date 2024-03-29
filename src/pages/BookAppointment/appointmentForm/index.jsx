import React, { useEffect } from "react";
import styles from "./style.module.css";
import Banner from "../../../assets/bookAppointmentBanner.png";
import { GoArrowRight } from "react-icons/go";
import { constants } from "../../../global/constants";
import useSWR from "swr";
import { useDispatch, useSelector } from "react-redux";
import { createAppointmentApi,clearAppointment } from "../../../global/features/Webapp/Book Appointment/createAppointment";
import { toast } from "react-toastify";

const AppointmentForm = () => {
  const [appointments, setAppointments] = React.useState({
    name: '',
    email: '',
    phoneno: null,
    serviceOffered: '',
    doctorOffered: ''
  });

  const dispatch = useDispatch()
  const { success, message } = useSelector(value => value.createAppointmentSlice)
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  //  GET SERVICES -- NAMES OF SERVICES
  const { data } = useSWR(`${constants.baseUrl}api/services`, fetcher)
  const serviceData = data?.data?.results?.results;

  const { data: docData } = useSWR(`${constants.baseUrl}api/doctor?service=${appointments?.serviceOffered}`, fetcher)
  const doctorName = docData?.data;

  //  Create an Appointment
  const createAppointmentHandler = () => {
    dispatch(createAppointmentApi(appointments)).then(() => setAppointments({
      name: '',
      email: '',
      phoneno: '',
      serviceOffered: '',
      doctorOffered: ''
    }))
  }

  useEffect(() => {
    if (success === true) {
      toast.success(message, {
        position: "top-center"
      })
      dispatch(clearAppointment())
    }
    else if (success == null) {
      return;
    }
    else {
      toast.error(message, {
        position: 'top-center'
      })
      dispatch(clearAppointment())

    }
  }, [message, success]);

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
                      value={appointments.name}
                      onChange={(e) => setAppointments({ ...appointments, name: e.target.value })}
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
                      value={appointments.phoneno}
                      onChange={(e) => setAppointments({ ...appointments, phoneno: e.target.value })}
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
                      value={appointments.email}
                      onChange={(e) => setAppointments({ ...appointments, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">

                  <select
                    name="cars"
                    id="cars"
                    className={styles.inputWrapper3}
                    value={appointments.serviceOffered}

                    onChange={(e) => setAppointments({ ...appointments, serviceOffered: e.target.value })}
                  >
                    <option value="" selected disabled hidden>
                      Services
                    </option>
                    {serviceData && serviceData?.map((item) => {
                      return (
                        <option key={item.id} value={item.serviceName}>{item.serviceName}</option>
                      )
                    })}
                  </select>
                  {
                    appointments?.serviceOffered?.length > 0 && <select
                      name="cars"
                      id="cars"
                      className={styles.inputWrapper3}
                      value={appointments.doctorOffered}
                      onChange={(e) => setAppointments({ ...appointments, doctorOffered: e.target.value })}
                    >
                      <option value="" selected disabled hidden>
                        Doctors
                      </option>
                      {
                        doctorName && doctorName?.map((item) => {
                          return (
                            <option key={item?.id} value={item?.name}>{item?.name}</option>
                          )
                        })
                      }
                    </select>
                  }

                </div>
              </div>
              <div className={`row ${styles.btnWrapper}`}>
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <button onClick={createAppointmentHandler} className={styles.btnSendMsg}>
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