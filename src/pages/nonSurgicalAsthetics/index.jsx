import React from "react";
import Navbar from "../../components/navbar";
import Aesthetic from "../../components/asthetics";
import Footer from "../../components/footer";

import Surgical from "../../assets/Non-SurgicalAesthetics.webp";

const NonSurgicalAsthetics = () => {
  const data = {
    h1: null,
    h2: "NON-SURGICAL AESTHETICS",
    h3: null,
    image: Surgical,
    button: null,
    height: "675px",
    imgTop: "165px",
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
