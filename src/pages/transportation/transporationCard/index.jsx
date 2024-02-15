import React from "react";
import styles from "./style.module.css";
import img1 from "../../../assets/transport1.png";
import img2 from "../../../assets/transport2.png";
import img3 from "../../../assets/transport3.png";
const TransportationCard = () => {
  const cardData = [
    {
      id: 1,
      img: img1,
      title: "Air Transport",
      price: "40.00",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      id: 2,
      img: img2,
      title: "Bus Transport",
      price: "50.00",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      id: 3,
      img: img3,
      title: "Hotel",
      price: "80.00",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
  ];
  return (
    <div className={styles.fristWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={styles.packageSec}>
              {/* <h4>Package</h4> */}
              <h1>
                Discover A World Of Transpotaion With Over Popular Services!
              </h1>
            </div>
          </div>

          {cardData.map((item) => {
            return (
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div key={item.id} className={styles.cardWrapper}>
                  <div className={styles.cadImg}>
                    <img src={item.img} className="img-fluid" />
                  </div>
                  <div className={styles.cardWrappertxt}>
                    <div className={styles.hdAmt}>
                      <h3>{item.title}</h3>
                      {/* <h3>${item.price}</h3> */}
                    </div>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TransportationCard;
