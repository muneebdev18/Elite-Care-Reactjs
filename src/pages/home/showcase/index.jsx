import React from "react";
import styles from "./style.module.css";
import showCase from "../../../assets/showcase.png";
import img1 from "../../../assets/showCase1.png";
import img2 from "../../../assets/showCase2.png";
import img3 from "../../../assets/showCase3.png";
import img4 from "../../../assets/showCase4.png";
const ShowCase = () => {
  const imgs = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
  ];
  return (
    <section style={{ marginTop: "80px" }} className={styles.showCaseContainer}>
      <div className="container ">
        <div className={`row ${styles.showCaseWrapper}`}>
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className={styles.upperSection}>
              <div className={styles.showCase}>
                {/* <img src={showCase} alt="showcases" />
                P */}
                <p>SHOWCASE</p>
              </div>
              <p className={styles.title}>
                Get a medical procedure
                <br /> in safe hand
              </p>
              <p className={styles.desc}>
                And in the same time get your trip while you are taking your
                produce
              </p>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className={`row ${styles.showCaseImgWrapper}`}>
          {imgs.map((item, index) => (
            <div
              key={index}
              className={`col-xl-3 col-lg-3 col-md-3 col-sm-6 ${styles.imgWrapper}`}
            >
              <div className={styles.imageContainer}>
                <img
                  src={item.img}
                  alt="img"
                  className={`${styles.showCaseImg} ${styles.scalingEffect}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
