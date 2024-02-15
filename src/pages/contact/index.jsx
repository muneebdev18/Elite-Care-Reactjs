import React from "react";
import styles from "./style.module.css";
import logo from "../../assets/ContactUs.png";
import ContactForm from "./contactForm";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
const Contact = () => {
  const data = {
    h1: null,
    h2: "CONTACT US",
    h3: null,
    image: logo,
    button: null,
    height: "675px",
    imgTop: "165px",
  };
  return (
    <div>
      <Navbar data={data} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
