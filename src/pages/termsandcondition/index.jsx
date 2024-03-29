import React from "react";
import Navbar from "../../components/navbar";
import Terms from "../termsandcondition/terms/index";
import Footer from "../../components/footer";

import logo from '../../assets/about-banner.png'
const TermsAndCondition = () => {
  const data = {
    h1: null,
    h2: "TERMS AND CONDITIONS",
    h3: null,
    image: logo,
    button: null,
    height: "675px",
    imgTop: "190px",
  };
  return (
    <div>
      <Navbar data={data} />
      <Terms />
      <Footer />
    </div>
  );
};

export default TermsAndCondition;
