import React from "react";
import styles from "./style.module.css";
const ShowCasesComponent = ({ showCaseImgs, marginTop }) => {
  const imgs = [
    {
      id: 1,
      img: showCaseImgs.img1,
    },
    {
      id: 2,
      img: showCaseImgs.img2,
    },
    {
      id: 3,
      img: showCaseImgs.img3,
    },
    {
      id: 4,
      img: showCaseImgs.img4,
    },
  ];

  return (
    <section
      style={{ marginTop: marginTop }}
      className={styles.showCaseContainer}
    >
      <div className="container ">
        <div className={`row ${styles.showCaseWrapper}`}>
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className={styles.upperSection}>
              <div className={styles.showCase}>
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

export default ShowCasesComponent;
