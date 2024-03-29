import React from "react";
import Navbar from "../../components/navbar";
import useSWR from "swr";
import logo from "../../assets/Dentist.webp";
import ShowCasesComponent from "../../components/showCasesComp";
import DentistServices from "../../components/dentistServices";
import ImageComparison from "../../components/Imagecomparison/ImageCamparison";
import Footer from "../../components/footer";
import { constants } from '../../global/constants'

// Image Compare Imgs
import beforeImg from "../../assets/dentistBefore.png";
import afterImg from "../../assets/dentistAfter.png";

// Dentsist ShowCases img

import ShowCase1 from "../../assets/dentistShowcase1.png";
import ShowCase2 from "../../assets/dentistShowcase2.png";
import ShowCase3 from "../../assets/dentistShowcase3.png";
import ShowCase4 from "../../assets/dentistShowcase4.png";

const Dentist = () => {
  const Navdata = {
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


  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(`${constants.baseUrl}api/services?pagename=dentist`, fetcher)
  const serviceData = data?.data?.results?.results
  const topImage = { src: beforeImg, alt: "Before" };
  const bottomImage = { src: afterImg, alt: "After" };
  return (
    <>
      <Navbar data={Navdata} />
      <ShowCasesComponent showCaseImgs={showCaseImgs} />
      <DentistServices carddata={serviceData} head1="SERVICES" head2="THE COSMETIC DENTISTRY PROCEDURES" />
      <ImageComparison topImage={topImage} bottomImage={bottomImage} />
      <Footer />
    </>
  );
};

export default Dentist;
