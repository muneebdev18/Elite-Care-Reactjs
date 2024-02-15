import React from "react";
import styles from "./style.module.css";
import RecentImg from "../../../assets/recentnews&article.png";
import Card2 from "../../../assets/recentCard2.png";
import Card3 from "../../../assets/recentCard3.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const RecentNewsArticles = () => {
  const cards = [
    {
      id: 1,
      img: Card2,
      date: "05 JAN 2024",
      question:
        "what is the hyperbaric oxygen therapy? What is the importance of this for after facial surgeries?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard.",
    },
    {
      id: 2,
      img: Card2,
      date: "08 JAN 2024",
      question: "Breast Therapy",
      answer:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard. Lorem Ipsum is simply dummy text of the printing  industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum.",
    },
    {
      id: 3,
      img: Card3,
      date: "15 JAN 2024",
      question: "General Repairs High Quality At Great Prices",
      answer:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard. Lorem Ipsum is simply dummy text of the printing  industry.",
    },
  ];
  return (
    <section className={styles.recentContainer}>
      <div className="container">
        <div className={`row ${styles.upperSection}`}>
          <div className="col-xl-12- col-lg-12 col-md-12">
            <div className={styles.recentNewsUpperSection}>
              <div className={styles.upperSectionWrapper}>
                <h4>RECENT NEWS & ARTICLES</h4>
                <p className={styles.title}>Latest From Blogs</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`row ${styles.bottomSection}`}>
          {cards.map((item) => {
            return (
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className={styles.bottomSectionWrapper}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.cardImg}>
                      <img src={item.img} alt="" />
                    </div>
                    <div className={styles.cardContentWrapper}>
                      <p className={styles.date}>{item.date}</p>
                      <p className={styles.question}>{item.question}</p>
                      <p className={styles.answer}>{item.answer}</p>
                      <div className={styles.readMoreWrapper}>
                        <p>READ MORE</p>
                        <HiOutlineArrowNarrowRight />
                      </div>
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

export default RecentNewsArticles;
