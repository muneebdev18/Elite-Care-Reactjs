import React from "react";
import Navbar from "../../components/navbar";
import logo from "../../assets/homebgmain.png";
import Footer from "../../components/footer";
import ShowCase from "./showcase";
import Services from "./services";
import WhoWeAre from "./whoWeAre";
import Testimonal from "./testimonal";
import RecentNewsArticles from "./recentNewsArticles";
import Portfolio from './portfolio';
import Appointment from './appointment'
import ImageComparison from "./imageCompare";

const Homepage = () => {
  const data = {
    heading1: "WELCOME TO ELITE CARE",
    heading2: "ENHANCE YOUR BEAUTY ",
    heading3: "WITH PLASTIC SURGERY",
    image: logo,
    button: "EXPLORE NOW",
  };
  return (
    <div>
      <Navbar data={data} />
      <ShowCase />
      <Services />
      <WhoWeAre />
      <Portfolio />
      <Testimonal />
      <Appointment />
      <RecentNewsArticles />
      <ImageComparison/>
      <Footer />
    </div>
  );
};

export default Homepage;