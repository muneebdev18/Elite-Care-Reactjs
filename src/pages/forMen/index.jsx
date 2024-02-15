import React from "react";
import Navbar from "../../components/navbar";
import styles from "./style.moudle.css";
import logo from "../../assets/Formen.png";
import ShowCasesComponent from "../../components/showCasesComp";
import Footer from "../../components/footer";
// Show cases Images
import Formen1 from "../../assets/formen1.png";
import Formen2 from "../../assets/formen2.png";
import Formen3 from "../../assets/formen3.png";
import Formen4 from "../../assets/formen4.png";
import DentistServices from "../../components/dentistServices";
// Card Services Images
import cosmetic1 from "../../assets/cosmetic1.png";
import cosmetic2 from "../../assets/cosmetic2.png";
import cosmetic3 from "../../assets/cosmetic3.png";
import cosmetic4 from "../../assets/cosmetic4.png";

import beforeImg from "../../assets/dentistBefore.png";
import afterImg from "../../assets/dentistAfter.png";
import ImageComparison from "../../components/Imagecomparison/ImageCamparison";

const ForMen = () => {
  const data = {
    h1: null,
    h2: "FOR MEN",
    h3: null,
    image: logo,
    button: null,
    height: "675px",
    imgTop: "165px",
  };
  const showCaseImgs = {
    img1: Formen1,
    img2: Formen2,
    img3: Formen3,
    img4: Formen4,
  };

  const carddatacosmitc = {
    mainheading: "SERVICES",
    mainHeadingtwo: "The Top 4 Cosmetic Procedures For Men",
    card: [
      {
        image: cosmetic1,
        heading1: "Cosmetic Laser",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harumqui nihil quos sequi, quam cumque consectetur fugit, ipsamveritatis iure eaque? Harum quam ipsa, esse minima aspernaturiste reprehenderit cupiditate.",
      },
      {
        image: cosmetic2,
        heading1: "Gynecomastia",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harumqui nihil quos sequi, quam cumque consectetur fugit, ipsamveritatis iure eaque? Harum quam ipsa, esse minima aspernaturiste reprehenderit cupiditate.",
      },
      {
        image: cosmetic3,
        heading1: "Hair Transplant",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harumqui nihil quos sequi, quam cumque consectetur fugit, ipsamveritatis iure eaque? Harum quam ipsa, esse minima aspernaturiste reprehenderit cupiditate.",
      },
      {
        image: cosmetic4,
        heading1: "Hair Transplant",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harumqui nihil quos sequi, quam cumque consectetur fugit, ipsamveritatis iure eaque? Harum quam ipsa, esse minima aspernaturiste reprehenderit cupiditate.",
      },
    ],
  };
  const beforeAfterImgs = {
    img1: beforeImg,
    img2: afterImg,
  };
  const topImage = { src: beforeImg, alt: "Before" };
  const bottomImage = { src: afterImg, alt: "After" };
  return (
    <>
      <Navbar data={data} />
      <ShowCasesComponent showCaseImgs={showCaseImgs} />
      <DentistServices carddata={carddatacosmitc} />
      <ImageComparison topImage={topImage} bottomImage={bottomImage} />
      <Footer />
    </>
  );
};

export default ForMen;
