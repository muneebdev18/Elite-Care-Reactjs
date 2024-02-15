import React from "react";
import Navbar from "../../components/navbar";
import Aesthetic from "../../components/asthetics";
import Footer from "../../components/footer";

import Surgical from "../../assets/Non-SurgicalAesthetics.png";

const NonSurgicalAsthetics = () => {
  const data = {
    h1: "WELCOME TO ELITE CARE",
    h2: "ENHANCE YOUR BEAUTY ",
    h3: "WITH PLASTIC SURGERY",
    image: Surgical,
    height: "865px",
    imgTop: "460px",
  };

  return (
    <>
      <Navbar data={data} />
      <Aesthetic />
      <Footer />
    </>
  );
};

export default NonSurgicalAsthetics;
