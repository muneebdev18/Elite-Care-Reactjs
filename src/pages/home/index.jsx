import React from "react";
import Navbar from "../../components/navbar";
import logo from "../../assets/homebgmain.png";
import Footer from "../../components/footer";
import ShowCasesComponent from "../../components/showCasesComp";
import Services from "./services";
import WhoWeAre from "./whoWeAre";
import Testimonal from "./testimonal";
import RecentNewsArticles from "./recentNewsArticles";
import Portfolio from "./portfolio";
import Appointment from "./appointment";
import ImageComparison from "../../components/Imagecomparison/ImageCamparison";

// Show Cases Imgs

import img1 from "../../assets/showCase1.png";
import img2 from "../../assets/showCase2new.png";
import img3 from "../../assets/showCase3new.png";
import img4 from "../../assets/showCase4.png";

import Before from "../../assets/face1.png";
import After from "../../assets/face2.png";

const Homepage = () => {
  const data = {
    h1: "WELCOME TO ELITE CARE",
    h2: "ENHANCE YOUR BEAUTY ",
    h3: "WITH PLASTIC SURGERY",
    image: logo,
    button: "EXPLORE NOW",
    height: "865px",
    imgTop: "440px",
  };

  const showCaseImgs = {
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
  };

  const topImage = { src: Before, alt: "Before" };
  const bottomImage = { src: After, alt: "After" };
  return (
    <div>
      <Navbar data={data} />
      <ShowCasesComponent showCaseImgs={showCaseImgs} marginTop="130px" />
      <Services />
      <WhoWeAre />
      <Portfolio />
      <Testimonal />
      <Appointment />
      <RecentNewsArticles />
      <ImageComparison topImage={topImage} bottomImage={bottomImage} />
      <Footer />
    </div>
  );
};

export default Homepage;
