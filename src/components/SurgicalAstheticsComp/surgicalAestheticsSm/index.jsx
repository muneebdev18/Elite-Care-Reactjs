import React, { useState } from "react";
import Eyelid from "../../../assets/eyelid.png";
import Chin from "../../../assets/chin.png";
import Facial from "../../../assets/facial.png";
import LipoSuction from "../../../assets/liposuction.png";
import ArmLift from "../../../assets/armlift.png";
import Breast from "../../../assets/breast.png";
import Tummy from "../../../assets/tummy.png";
import Thigh from "../../../assets/thigh.png";
import Dot from "../../../assets/dot.png";
import DottedCircle from "../../../assets/dottedcircle.png";
import CuteTummy from "../../../assets/cutetummy.png";

import styles from "./style.module.css";
const SurgicalAestheticsSm = ({ screenSize }) => {
  const [select, setSelect] = useState({
    id: null,
    content: "Eyelid",
    img: Eyelid,
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
      top:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "128px"
              : "194px"
            : "225px"
          : "202px",
      left:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "254px"
              : "320px"
            : "338px"
          : "414px",
    },
    {
      id: 2,
      img: Dot,
      top:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "162px"
              : "250px"
            : "295px"
          : "285px",
      left:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "240px"
              : "296px"
            : "307px"
          : "380px",
    },
    {
      id: 3,
      img: Dot,
      top:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "150px"
              : "232px"
            : "270px"
          : "255px",
      left:
        screenSize < 768
          ? screenSize < 640
            ? screenSize <= 440
              ? "251px"
              : "315px"
            : "333px"
          : "410px",
    },
    {
      id: 4,
      img: Dot,
      top:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "250px"
              : "403px"
            : "470px"
          : "500px",
      left:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "214px"
              : "245px"
            : "245px"
          : "310px",
    },
    {
      id: 5,
      img: Dot,
      top:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "222px"
              : "355px"
            : "415px"
          : "425px",
      left:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "167px"
              : "170px"
            : "160px"
          : "200px",
    },
    {
      id: 6,
      img: Dot,
      top:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "210px"
              : "330px"
            : "385px"
          : "395px",
      left:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "258px"
              : "328px"
            : "345px"
          : "425px",
    },
    {
      id: 7,
      img: Dot,
      top:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "268px"
              : "435px"
            : "505px"
          : "540px",
      left:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "266px"
              : "341px"
            : "360px"
          : "444px",
    },
    {
      id: 8,
      img: Dot,
      top:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "243px"
              : "390px"
            : "455px"
          : "490px",
      left:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "275px"
              : "355px"
            : "377px"
          : "464px",
    },
  ];

  const dotHandler = (id) => {
    for (var i = 0; i < data.length; i++) {
      if (id === data[i].id) {
        data[i].select = !data[i].select;
        setSelect({ id: id, content: data[i].content, img: data[i].img });
      } else {
        data[i].select = false;
      }
    }
  };
  console.log(select);
  return (
    <div style={{ paddingTop: "100px", marginBottom: "50px" }}>
      <div className={styles.imageSec}>
        <div className={styles.containImage}>
          {dotImgs.map((item) => (
            <img
              key={item.id}
              alt="Dots"
              src={item.img}
              onClick={() => dotHandler(item.id)}
              className={`position-absolute ${styles.dottedImg}`}
              style={{ top: item.top, left: item.left, zIndex: 2 }}
            />
          ))}

          <img
            src={CuteTummy}
            alt="Cute Face"
            className={`position-absolute ${styles.cuteImg}`}
          />
          <img
            src={DottedCircle}
            alt="Dotted Circle"
            className={`position-absolute ${styles.dottedCircle}`}
          />
          <div className={`${styles.selectedImg}`}>
            <p>{select.content}</p>
            <img
              className={styles.resImg}
              style={{ paddingLeft: "10px" }}
              src={select.img}
              alt="URL"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurgicalAestheticsSm;
