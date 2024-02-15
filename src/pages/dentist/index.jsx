import React from "react";
import Navbar from "../../components/navbar";
import styles from "./style.module.css";
import logo from "../../assets/Dentist.png";
import ShowCasesComponent from "../../components/showCasesComp";
import DentistServices from "../../components/dentistServices";
import ImageComparison from "../../components/Imagecomparison/ImageCamparison";
import Footer from "../../components/footer";
// Denstist Services Images

import dentist1 from "../../assets/denist1.png";
import dentist2 from "../../assets/denist2.png";
import dentist3 from "../../assets/denist3.png";
import dentist4 from "../../assets/denist4.png";

// Image Compare Imgs
import beforeImg from "../../assets/dentistBefore.png";
import afterImg from "../../assets/dentistAfter.png";

// Dentsist ShowCases img

import ShowCase1 from "../../assets/dentistShowcase1.png";
import ShowCase2 from "../../assets/dentistShowcase2.png";
import ShowCase3 from "../../assets/dentistShowcase3.png";
import ShowCase4 from "../../assets/dentistShowcase4.png";

const Dentist = () => {
  const data = {
    h1: null,
    h2: "DENTIST",
    h3: null,
    image: logo,
    button: null,
    height: "675px",
    imgTop: "165px",
  };

  const showCaseImgs = {
    img1: ShowCase1,
    img2: ShowCase2,
    img3: ShowCase3,
    img4: ShowCase4,
  };
  // denist services data

  const carddata = {
    mainheading: "SERVICES",
    mainHeadingtwo: "THE COSMETIC DENTISTRY PROCEDURES",
    card: [
      {
        image: dentist1,
        heading1: "Misaligned Teeth",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harumqui nihil quos sequi, quam cumque consectetur fugit, ipsamveritatis iure eaque? Harum quam ipsa, esse minima aspernaturiste reprehenderit cupiditate.",
      },
      {
        image: dentist2,
        heading1: "Chipped Or Creacked Teeth",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harumqui nihil quos sequi, quam cumque consectetur fugit, ipsamveritatis iure eaque? Harum quam ipsa, esse minima aspernaturiste reprehenderit cupiditate.",
      },
      {
        image: dentist3,
        heading1: "Regular Dental Cleaning",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harumqui nihil quos sequi, quam cumque consectetur fugit, ipsamveritatis iure eaque? Harum quam ipsa, esse minima aspernaturiste reprehenderit cupiditate.",
      },
      {
        image: dentist4,
        heading1: "Dental Filling For Cavities",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harumqui nihil quos sequi, quam cumque consectetur fugit, ipsamveritatis iure eaque? Harum quam ipsa, esse minima aspernaturiste reprehenderit cupiditate.",
      },
    ],
  };

  const topImage = { src: beforeImg, alt: "Before" };
  const bottomImage = { src: afterImg, alt: "After" };
  return (
    <>
      <Navbar data={data} />
      <ShowCasesComponent showCaseImgs={showCaseImgs} />
      <DentistServices carddata={carddata} />
      <ImageComparison topImage={topImage} bottomImage={bottomImage} />
      <Footer />
    </>
  );
};

export default Dentist;
