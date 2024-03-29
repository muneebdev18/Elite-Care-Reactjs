import React from "react";
import styles from "./style.module.css";
import SurgicalAstheticsComp from "../../components/SurgicalAstheticsComp";
import Navbar from "../../components/navbar";
import logo from "../../assets/surgicalAst.webp";
import Footer from "../../components/footer";
const SurgicalAsthetics = () => {
  const data = {
    h1: null,
    h2: "SURGICAL AESTHETICS",
    h3: null,
    image: logo,
    button: null,
    height: "675px",
    imgTop: "165px",
  };
  return (
    <div>
      <Navbar data={data} />
      <SurgicalAstheticsComp />
      <Footer />
    </div>
  );
};

export default SurgicalAsthetics;
