import React from "react";
import styles from "./style.module.css";
import ServicesImg from "../../../assets/services.png";
import img1 from "../../../assets/services1.png";
import img2 from "../../../assets/services2.png";
import img3 from "../../../assets/services3.png";
import img4 from "../../../assets/services4.png";
import img5 from "../../../assets/services5.png";
import Arrow from "../../../assets/rightArrow.png";
const Services = () => {
  const servicesImg = [
    {
      id: 1,
      img: img1,
      text: "READ MORE",
      arrowImg: Arrow,
      place: "ANTALYA",
      price: "$1250",
    },
    {
      id: 2,
      img: img2,
      text: "READ MORE",
      arrowImg: Arrow,
      place: "ISTANBUL",
      price: "$1250",
    },
    {
      id: 3,
      img: img3,
      text: "READ MORE",
      arrowImg: Arrow,
      place: "ALANYA",
      price: "$1250",
    },
    {
      id: 4,
      img: img4,
      text: "READ MORE",
      arrowImg: Arrow,
      place: "ANKARA",
      price: "$1250",
    },
    {
      id: 5,
      img: img5,
      text: "READ MORE",
      arrowImg: Arrow,
      place: "BUSRA",
      price: "$1250",
    },
  ];
  return (
    <section className={styles.servicesWrapper}>
      <div className={`container-fluid`}>
        <div className={`row ${styles.upperSectionWrapper}`}>
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className={styles.ServicesUpperSection}>
              <div className={styles.servicesImgWrapper}>
                {/* <img src={ServicesImg} alt='sevices'/> */}
                <p>SERVICES</p>
              </div>
              <p className={styles.title}>tourism in Turkey</p>
            </div>
          </div>
        </div>
        {/* img section */}

        <div className={`row ${styles.serviceImgWrapperRow}`}>
          {servicesImg &&
            servicesImg.map((item) => {
              return (
                <div className="col">
                  <div className={styles.imgWrapper}>
                    <div className={styles.servicesCardImgsWrapper}>
                      <img src={item.img} />
                    </div>
                    <div className={styles.descWrapper}>
                      <p className={styles.place}>{item.place}</p>
                      <p className={styles.price}>{item.price}</p>
                      <div className={styles.readMore}>
                        <p>{item.text}</p>
                        <img src={item.arrowImg} alt="arrow" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Services;
