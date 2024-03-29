import React from "react";
import Navbar from "../../components/navbar";
import logo from "../../assets/transportation-home.webp";
import TransportationCard from "./transporationCard";
import Footer from "../../components/footer";
const Transportation = () => {
  const data = {
    h1: null,
    h2: "TRANSPORTATION",
    h3: null,
    image: logo,
    button: null,
    height: "675px",
    imgTop: "165px",
  };
  return (
    <>
      <Navbar data={data} />
      <TransportationCard />
      <Footer />
    </>
  );
};

export default Transportation;
