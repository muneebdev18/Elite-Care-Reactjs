import React from "react";
import logo from "../../assets/BookAppointment.png";
import AppointmentForm from "./appointmentForm";
import Footer from "../../components/footer/index";
import Navbar from "../../components/navbar";

const BookAppointment = () => {
  const data = {
    h1: null,
    h2: "BOOK APPOINTMENT",
    h3: null,
    image: logo,
    button: null,
    height: "675px",
    imgTop: "165px",
  };
  return (
    <div>
      <Navbar data={data} />
      <AppointmentForm />
      <Footer />
    </div>
  );
};

export default BookAppointment;
