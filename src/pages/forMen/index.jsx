import React from "react";
import Navbar from "../../components/navbar";
import useSWR from "swr";
import logo from "../../assets/Formen.webp";
import ShowCasesComponent from "../../components/showCasesComp";
import Footer from "../../components/footer";
// Show cases Images
import Formen1 from "../../assets/formen1.png";
import Formen2 from "../../assets/formen2.png";
import Formen3 from "../../assets/formen3.png";
import Formen4 from "../../assets/formen4.png";
import DentistServices from "../../components/dentistServices";

import beforeImg from "../../assets/dentistBefore.png";
import afterImg from "../../assets/dentistAfter.png";
import ImageComparison from "../../components/Imagecomparison/ImageCamparison";
import { constants } from "../../global/constants";

const ForMen = () => {
  const Navdata = {
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


  
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const {data, error, isLoading } = useSWR(`${constants.baseUrl}api/services?pagename=forMen`,fetcher)
const serviceData = data?.data?.results?.results
  const beforeAfterImgs = {
    img1: beforeImg,
    img2: afterImg,
  };
  const topImage = { src: beforeImg, alt: "Before" };
  const bottomImage = { src: afterImg, alt: "After" };
  return (
    <>
      <Navbar data={Navdata} />
      <ShowCasesComponent showCaseImgs={showCaseImgs} />
      <DentistServices carddata={serviceData} head1="SERVICES" head2="The Top 4 Cosmetic Procedures For Men" />
      <ImageComparison topImage={topImage} bottomImage={bottomImage} />
      <Footer />
    </>
  );
};

export default ForMen;
