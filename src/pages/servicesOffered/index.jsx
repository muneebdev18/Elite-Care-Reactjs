import React from "react";
import Navbar from "../../components/navbar";
import logo from "../../assets/services-offered.webp";
import SurgeryCenter from "./surgeryCenter";
import SurgicalCard from "./surgicalCard";

import Ourmission from "./Ourmission";
import ImageComparison from "../../components/Imagecomparison/ImageCamparison";

import img1 from "../../assets/face1.png";
import img2 from "../../assets/face2.png";
import Footer from "../../components/footer";
const ServicesOffered = () => {
  const data = {
    h1: null,
    h2: "SERVICES OFFERED",
    h3: null,
    image: logo,
    button: null,
    height: "675px",
    imgTop: "165px",
  };

  

  const topImage = { src: img1, alt: "Before" };
  const bottomImage = { src: img2, alt: "After" };
  return (
    <>
      <Navbar data={data} />
      <SurgeryCenter />
      <SurgicalCard  />
      <Ourmission />
      <ImageComparison topImage={topImage} bottomImage={bottomImage} />
      <Footer />
    </>
  );
};

export default ServicesOffered;
