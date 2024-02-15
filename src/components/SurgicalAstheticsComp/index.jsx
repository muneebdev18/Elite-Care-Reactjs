import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

import Eyelid from "../../assets/eyelid.png";
import Chin from "../../assets/chin.png";
import Facial from "../../assets/facial.png";
import LipoSuction from "../../assets/liposuction.png";
import ArmLift from "../../assets/armlift.png";
import Breast from "../../assets/breast.png";
import Tummy from "../../assets/tummy.png";
import Thigh from "../../assets/thigh.png";
import Dot from "../../assets/dot.png";
import DottedCircle from "../../assets/dottedcircle.png";
import CuteTummy from "../../assets/cutetummy.png";

import SurgicalAestheticsSm from "./surgicalAestheticsSm";

const SurgicalAstheticsComp = () => {
  const [select, setSelect] = useState({
    id: null,
    active: false,
  });

  const data = [
    {
      id: 1,
      img: Eyelid,
      content: "Eyelid",
      select: false,
    },
    {
      id: 2,
      img: Chin,
      content: "Chin Liposuction",
      select: false,
    },
    {
      id: 3,
      img: Facial,
      content: "Facial Asthetics",
      select: false,
    },
    {
      id: 4,
      img: LipoSuction,
      content: "Liposuction",
      select: false,
    },
    {
      id: 5,
      img: ArmLift,
      content: "Arm Lift",
      select: false,
    },
    {
      id: 6,
      img: Breast,
      content: "Breast Aesthetics",
      select: false,
    },
    {
      id: 7,
      img: Tummy,
      content: "Tummy Tuck",
      select: false,
    },
    {
      id: 8,
      img: Thigh,
      content: "Thigh Lift",
      select: false,
    },
  ];
  const dotImgs = [
    {
      id: 1,
      img: Dot,
      top: "260px",
      left: "455px",
      name: styles.dot1,
    },
    {
      id: 2,
      img: Dot,
      top: "358px",
      left: "418px",
      name: styles.dot2,
    },
    {
      id: 3,
      img: Dot,
      top: "320px",
      left: "451px",
      name: styles.dot3,
    },
    {
      id: 4,
      img: Dot,
      top: "600px",
      left: "330px",
      name: styles.dot4,
    },
    {
      id: 5,
      img: Dot,
      top: "510px",
      left: "211px",
      name: styles.dot5,
    },
    {
      id: 6,
      img: Dot,
      top: "480px",
      left: "470px",
      name: styles.dot6,
    },
    {
      id: 7,
      img: Dot,
      top: "648px",
      left: "495px",
      name: styles.dot7,
    },
    {
      id: 8,
      img: Dot,
      top: "583px",
      left: "520px",
      name: styles.dot8,
    },
  ];

  const dotHandler = (id) => {
    for (var i = 0; i < data.length; i++) {
      if (id === data[i].id) {
        data[i].select = !data[i].select;
        setSelect({ id: id, active: data[i].select });
      } else {
        data[i].select = false;
      }
    }
  };

  const [isContainerDisabled, setIsContainerDisabled] = useState(false);
  const [isActive, setIsActive] = useState({
    screen: "",
    active: false,
  });
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1399) {
        setIsContainerDisabled(true);
      } else {
        setIsContainerDisabled(false);
      }
    };
    const handleResize2 = () => {
      if (window.innerWidth <= 1280) {
        setIsActive({
          screen: window.innerWidth,
          active: true,
        });
      } else {
        setIsActive({
          active: false,
          screen: "",
        });
      }
    };

    // Call handleResize initially and add event listener
    handleResize();
    handleResize2();
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResize2);
    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleResize2);
    };
  }, []);

  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  return (
    // <div
    //   className={!isContainerDisabled ? "container" : ""}
    //   style={{ marginBottom: "600px" }}
    // >
    <div
      className={`container ${styles.surgicalContainerMain}`}
      style={{ marginBottom: "600px" }}
    >
      <div className={`row`}>
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className={styles.upperSection}>
            <div className={styles.services}>
              <p>Services</p>
            </div>
            <p className={styles.title}>
              Transforming beauty,
              <br /> enhancing confidence
            </p>
          </div>
        </div>
      </div>
      {screenSize > 1024 ? (
        <>
          <div className={styles.imageSec}>
            <div className={styles.cuteImg}>
              {dotImgs.map((item, key) => (
                <img
                  key={item.id}
                  alt="Dots"
                  src={item.img}
                  onClick={() => dotHandler(item.id)}
                  className={`position-absolute ${item.name}`}
                  style={{ top: item.top, left: item.left, zIndex: 2 }}
                />
              ))}

              <img
                src={CuteTummy}
                alt="Cute Face"
                className={`position-absolute ${styles.cuteFaceImg}`}
                style={{ left: "60px", top: "70px" }}
              />
              <img
                src={DottedCircle}
                alt="Dotted Circle"
                className={`position-absolute ${styles.dottedCircle}`}
              />
            </div>

            <div className={`row ${styles.firstRow}`}>
              <div
                className={`col-7 ${
                  select.active && select.id === data[0].id
                    ? "opacity-100"
                    : "opacity-25"
                }`}
              >
                <div className={styles.firstRowWrapperLeft}>
                  {screenSize > 1280 && (
                    <span style={{ fontSize: "36px", paddingRight: "30px" }}>
                      {data[0].content}
                    </span>
                  )}

                  <img src={data[0].img} alt="Botox" />
                </div>
              </div>
              <div
                className={`col-5 ${
                  select.active && select.id === data[1].id
                    ? "opacity-100"
                    : "opacity-25"
                }`}
              >
                <div className={styles.firstRowWrapperRight}>
                  <img src={data[1].img} alt="Cheek Filling" />
                  {screenSize >= 1280 && (
                    <span style={{ fontSize: "36px", paddingLeft: "30px" }}>
                      {data[1].content}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className={`row ${styles.secondRow}`}>
              <div
                className={`col-9 ${
                  select.active && select.id === data[2].id
                    ? "opacity-100"
                    : "opacity-25"
                }`}
              >
                <div className={styles.secondRowWrapperLeft}>
                  {screenSize >= 1280 && (
                    <span style={{ fontSize: "36px", paddingRight: "30px" }}>
                      {data[2].content}
                    </span>
                  )}
                  <img src={data[2].img} alt="Jaw" />
                </div>
              </div>
              <div
                className={`col-3 position-relative ${
                  select.active && select.id === data[3].id
                    ? "opacity-100"
                    : "opacity-25"
                }`}
              >
                <div className={styles.secondRowWrapperRight}>
                  <img
                    src={data[3].img}
                    alt="Cheekbone Filling"
                    style={{ paddingLeft: "40px" }}
                  />
                  {screenSize >= 1280 && (
                    <span
                      className="position-absolute"
                      style={{ fontSize: "36px", paddingLeft: "30px" }}
                    >
                      {data[3].content}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className={`row position-relative ${styles.thirdRow}`}>
              <div
                className={`col-9 ${
                  select.active && select.id === data[4].id
                    ? "opacity-100"
                    : "opacity-25"
                }`}
              >
                <div className={styles.thirdRowWrapperLeft}>
                  {screenSize >= 1280 && (
                    <span style={{ fontSize: "36px", paddingRight: "30px" }}>
                      {data[4].content}
                    </span>
                  )}

                  <img
                    src={data[4].img}
                    alt="UnderEye"
                    className="position-absolute"
                    style={{ bottom: 0 }}
                  />
                </div>
              </div>
              <div
                className={`col-3 ${
                  select.active && select.id === data[5].id
                    ? "opacity-100"
                    : "opacity-25"
                }`}
                style={{ paddingLeft: "40px" }}
              >
                <div className={styles.thirdRowWrapperRight}>
                  <img
                    src={data[5].img}
                    alt="Forehead"
                    className="position-relative"
                  />
                  {screenSize >= 1280 && (
                    <span
                      className="position-absolute"
                      style={{
                        fontSize: "36px",
                        paddingLeft: "30px",
                        width: "25%",
                      }}
                    >
                      {data[5].content}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className={`row ${styles.forthRow}`}>
              <div
                className={`col-7 ${
                  select.active && select.id === data[6].id
                    ? "opacity-100"
                    : "opacity-25"
                }`}
              >
                <div className={styles.fourthRowWrapperLeft}>
                  {screenSize >= 1280 && (
                    <span style={{ fontSize: "36px", paddingRight: "30px" }}>
                      {data[6].content}
                    </span>
                  )}

                  <img src={data[6].img} alt="Nasal" />
                </div>
              </div>
              <div
                className={`col-5 ${
                  select.active && select.id === data[7].id
                    ? "opacity-100"
                    : "opacity-25"
                }`}
              >
                <div className={styles.fourthRowWrapperRight}>
                  <img src={data[7].img} alt="Lip" />
                  {screenSize >= 1280 && (
                    <span style={{ fontSize: "36px", paddingLeft: "30px" }}>
                      {data[7].content}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <SurgicalAestheticsSm screenSize={screenSize} />
      )}
    </div>
  );
};

export default SurgicalAstheticsComp;
