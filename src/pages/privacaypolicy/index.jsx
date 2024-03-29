import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import logo from '../../assets/about-banner.png'
import Privacy from "./Privacy";
const Privacaypolicy = () => {
  const data = {
    h1: null,
    h2: "PRIVACY POLICY",
    h3: null,
    image: logo,
    button: null,
    height: "675px",
    imgTop: "190px",
  };
  return (
    <div>
      <Navbar data={data} />
      <Privacy/>
      <Footer />
    </div>
  );
};

export default Privacaypolicy;
