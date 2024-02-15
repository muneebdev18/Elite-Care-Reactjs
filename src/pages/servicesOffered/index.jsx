import React from "react";
import styles from "./style.module.css";
import Navbar from "../../components/navbar";
import logo from "../../assets/services-offered.png";
import SurgeryCenter from "./surgeryCenter";
import SurgicalCard from "./surgicalCard";
import Surgical1 from "../../assets/Surgicalimge1.png";
import Surgical2 from "../../assets/Surgicalimge2.png";
import Surgical3 from "../../assets/Surgicalimge3.png";
import Surgical4 from "../../assets/Surgicalimge4.png";
import Surgical5 from "../../assets/Surgicalimge5.png";
import Surgical6 from "../../assets/Surgicalimge6.png";
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

  // Surgical Card Data

  const carddata = {
    mainheading: "SERVICES",
    mainHeadingtwo: "Affordable Services That Provide By Surgical",
    card: [
      {
        image: Surgical1,
        heading1: "Flight",
        price: "$40.00",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harumqui nihil quos sequi, quam cumque consectetur fugit, ipsamveritatis iure eaque? Harum quam ipsa, esse minima aspernaturiste reprehenderit cupiditate.",
      },
      {
        image: Surgical2,
        heading1: "Hotel",
        price: "$40.00",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harumqui nihil quos sequi, quam cumque consectetur fugit, ipsamveritatis iure eaque? Harum quam ipsa, esse minima aspernaturiste reprehenderit cupiditate.",
      },
      {
        image: Surgical3,
        heading1: "Transport",
        price: "$40.00",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harumqui nihil quos sequi, quam cumque consectetur fugit, ipsamveritatis iure eaque? Harum quam ipsa, esse minima aspernaturiste reprehenderit cupiditate.",
      },
      {
        image: Surgical4,
        heading1: "Breast Augmentation",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harumqui nihil quos sequi, quam cumque consectetur fugit, ipsamveritatis iure eaque? Harum quam ipsa, esse minima aspernaturiste reprehenderit cupiditate.",
      },
      {
        image: Surgical5,
        heading1: "Non Surgical",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harumqui nihil quos sequi, quam cumque consectetur fugit, ipsamveritatis iure eaque? Harum quam ipsa, esse minima aspernaturiste reprehenderit cupiditate.",
      },
      {
        image: Surgical6,
        heading1: "Lips Surgery",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harumqui nihil quos sequi, quam cumque consectetur fugit, ipsamveritatis iure eaque? Harum quam ipsa, esse minima aspernaturiste reprehenderit cupiditate.",
      },
    ],
  };

  const topImage = { src: img1, alt: "Before" };
  const bottomImage = { src: img2, alt: "After" };
  return (
    <>
      <Navbar data={data} />
      <SurgeryCenter />
      <SurgicalCard carddata={carddata} />
      <Ourmission />
      <ImageComparison topImage={topImage} bottomImage={bottomImage} />
      <Footer />
    </>
  );
};

export default ServicesOffered;
