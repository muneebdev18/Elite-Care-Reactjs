import React from "react";
import Navbar from "../../components/navbar";
import logo from "../../assets/about-banner.png";
import OurMission from "./ourMission";
import Footer from "../../components/footer";
import Services from "./services";
import Testimonal from "../home/testimonal";
import treatment1 from "../../assets/treatment1.png";
import treatment2 from "../../assets/treatment2.png";
import treatment3 from "../../assets/treatment3.png";
import treatment4 from "../../assets/treatment4.png";
import Portfolio from "../../components/portfolio";
import ImageComparison from "../../components/Imagecomparison/ImageCamparison";
// Image Compare Imgs
import beforeImg from "../../assets/dentistBefore.png";
import afterImg from "../../assets/dentistAfter.png";

import img1 from "../../assets/face1.png";
import img2 from "../../assets/face2.png";
import WhoWeAre from "./whoWeAre";

const About = () => {
  const data = {
    h1: null,
    h2: "ABOUT US",
    h3: null,
    image: logo,
    button: null,
    height: "675px",
    imgTop: "165px",
  };
  const datatreatment = {
    heading1: "TREATMENT",
    heading2: "OUR TREATMENT",
    image1: treatment1,
    image2: treatment2,
    image3: treatment3,
    image4: treatment4,
  };
  const beforeAfterImgs = {
    img1: beforeImg,
    img2: afterImg,
  };

  const topImage = { src: img1, alt: "Before" };
  const bottomImage = { src: img2, alt: "After" };

  return (
    <>
      {/* <Navbar data={data} /> */}
      <Navbar data={data} />
      <OurMission />
      <Services />
      {/* <Testimonal /> */}
      <WhoWeAre />
      <Portfolio dataportfolio={datatreatment} />
      <ImageComparison topImage={topImage} bottomImage={bottomImage} />
      <Footer />
    </>
  );
};

export default About;
