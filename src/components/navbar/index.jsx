import React, { useState, useEffect } from "react";

import { FaFacebook } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import ScrollWheel from "../../assets/scrollWheel.png";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "./style.module.css";

const Navbar = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  const currUser = JSON.parse(localStorage.getItem('user'));
  const links = [
    {
      id: 1,
      text: "Home",
      url: "/elite-care",
    },
    {
      id: 2,
      text: "About",
      url: "/elite-care/about-us",
    },
    {
      id: 3,
      text: "Services Offered",
      url: "/elite-care/services-offered",
    },
    {
      id: 4,
      text: "Surgical Asthetics",
      url: "/elite-care/surgical-asthetics",
    },
    {
      id: 5,
      text: "Non-Surgical Asthetics",
      url: "/elite-care/non-surgical-asthetics",
    },
    {
      id: 6,
      text: "Dentist",
      url: "/elite-care/dentist",
    },
    {
      id: 7,
      text: "For Men",
      url: "/elite-care/for-men",
    },
    {
      id: 8,
      text: "Transportation",
      url: "/elite-care/transportation",
    },
    {
      id: 9,
      text: "Blog",
      url: "/elite-care/blog",
    },
    {
      id: 10,
      text: "Contact Us",
      url: "/elite-care/contact-us",
    },
    {
      id: 11,
      text: currUser === null && currUser?.data?.role !== "admin" ? "Login" : "",
      url: currUser === null && currUser?.data?.role !== "admin" ? "/elite-care/login" : ""
    }
  ]

  const clickHandler = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setIsActive(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imgStyle = {
    backgroundImage: `url(${data.image})`,
    backgroundSize: "cover",
    backgroundRepeat: " no-repeat",
  }

  return (
    <nav className={styles.navContainer}>
      <div className="container-fluid">
        <div style={imgStyle} className={`row ${styles.navWrapper}`}>
          <div
            style={{ height: data.height }}
            className={styles.newNavbarRowWrapper}
          >
            <div className={styles.navMain}>
              <div className="col-xl-3 col-lg-3 col-md-11 col-sm-11 col-xs-11 ">
                <div className={styles.leftSide}>
                  <div className={styles.logo}>ELITE CARE</div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-1 col-sm-1 col-xs-1">
                <div className={styles.navWholeWrapper}>
                  <GiHamburgerMenu
                    onClick={() => clickHandler()}
                    className={styles.hamBurger}
                  />
                  <div className={styles.rightSide}>
                    <div className={styles.upperSection}>
                      <p  onClick={() => window.open("mailto://Gendusarose@gmail.com", "_blank")} style={{ cursor: "pointer" }} className={`${styles.email} ${styles.upperText}`}>
                        <FaEnvelope /> Gendusarose@gmail.com
                      </p>
                      <p onClick={() => window.open('tel://40989989899', '_blank')} style={{ cursor: "pointer" }} className={`${styles.phone} ${styles.upperText}`}>
                        <FaPhone /> 40989989899
                      </p>
                      <p style={{ cursor: "pointer" }}
                        onClick={() => window.open('https://www.google.com/maps/search/37852+Harbour+Light+Road+Zip+Code+California/@37.5166733,-122.0524836,17z/data=!3m1!4b1?entry=ttu', "_blank")} className={`${styles.address} ${styles.upperText}`}>
                        <FaMapMarkerAlt /> 37852 Harbour Light Road Zip Code
                        California
                      </p>
                      <p
                        className={`${styles.socialsFollow} ${styles.upperText}`}
                      >
                        Follow Us On <FaFacebook />
                        <TiSocialInstagram />
                        <AiFillTwitterCircle />
                      </p>
                      <Link to={"/elite-care/book-appointment"}>
                        <button className={styles.navBtn}>
                          BOOK AN APPOINTMENT
                          <HiOutlineArrowNarrowRight />
                        </button>
                      </Link>
                    </div>
                    <div className={styles.bottomSection}>
                      <div className={styles.linksWrapper}>
                        {
                          links.map((item) => {
                            return (
                              <>
                                <Link
                                  className={styles.hoverLinks}
                                  key={item.id}
                                  to={item.url}
                                >
                                  {item.text}
                                </Link>
                              </>
                            );
                          })
                        }
                        {
                          currUser && currUser?.data?.role === "admin" && (
                            <Link  className={styles.hoverLinks} to={"/elite-care/dashboard/home"}>Dashboard</Link>
                          )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {isActive ? (
                <div className={isActive ? styles.mobileNavbarContainer : ""}>
                  <div className={`row ${styles.mobNavbarWrapper}`}>
                    <div className={`col ${styles.mobLeftSide}`}>
                      <div className={styles.moblinksWrapper}>
                        {
                          links.map((item) => {
                            return (
                              <>
                                <Link key={item.id} to={item.url}>
                                  {item.text}
                                </Link>
                              </>
                            );
                          })
                        }
                      </div>
                      <div
                        style={{
                          paddingTop: "20px",
                          borderTop: "1px solid white",
                          width: "93%",
                          margin: "0 auto",
                        }}
                      >
                        <p
                          className={`  ${isActive ? styles.mobupperText : ""}`}
                        >
                          Gendusarose@gmail.com
                        </p>
                        <p className={`${isActive && styles.mobupperText}`}>
                          40989989899
                        </p>
                        <p className={` ${isActive && styles.mobupperText}`}>
                          37852 Harbour Light Road Zip Code California
                        </p>
                        <p className={` ${isActive && styles.mobupperText}`}>
                          Follow Us On <FaFacebook />
                          <TiSocialInstagram />
                          <AiFillTwitterCircle />
                        </p>
                        <Link to={"/elite-care/book-appointment"}>
                          <button className={isActive && styles.navBtn}>
                            BOOK AN APPOINTMENT
                            <HiOutlineArrowNarrowRight />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className={styles.bannerContainer}>
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className={styles.bannerWrapper}>
                    <p className={data.h1 ? styles.welcome : ""}>{data.h1}</p>
                    <p className={data.h2 ? styles.titleNav1 : ""}>{data.h2}</p>
                    <p className={data.h3 ? styles.titleNav2 : ""}>{data.h3}</p>
                    {data.button ? (
                      <Link to={"/elite-care/services-offered"}>
                        <button className={styles.navButton}>
                          {data.button}
                          <HiOutlineArrowNarrowRight />
                        </button>
                      </Link>
                    ) : (
                      ""
                    )}
                    {/* <div className={styles.scrollWheel}> */}
                    <img
                      className={styles.scrollWheel}
                      src={ScrollWheel}
                      alt="ScrollWheel"
                      style={{ top: data.imgTop }}
                    />
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;