import React from "react";
import styles from "./style.module.css";
import RecentImg from "../../../assets/recentnews&article.png";
import Card2 from "../../../assets/recentCard2.png";
import Card3 from "../../../assets/recentCard3.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import useSWR from "swr";
import {constants} from '../../../global/constants'
import { Link } from "react-router-dom";
const RecentNewsArticles = () => {

  
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const {data, error, isLoading } = useSWR(`${constants.baseUrl}/api/blog?limit=3&page=1`,fetcher)
const blogsData = data?.data?.results?.results

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
          {blogsData?.map((item) => {

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
            const createdDate = new Date(item?.createdAt)
            const day = createdDate.getDate()
            const month = months[createdDate.getMonth()]
            const year = createdDate.getFullYear()

            const finalDate = `${day < 10 ? '0' + day : day} ${month} ${year}`
            return (
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className={styles.bottomSectionWrapper}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.cardImg}>
                      <img src={item?.image?.imageUrl} alt={item?.image?.imageName} />
                    </div>
                    <div className={styles.cardContentWrapper}>
                      <p className={styles.date}>{finalDate}</p>
                      <p className={styles.question}>{item.title}</p>
                      <p className={styles.answer}>{item?.description?.slice(0,150)}</p>
                      <div className={styles.readMoreWrapper}>
                        <Link to={"/elite-care/blog"} >READ MORE</Link>
                        <HiOutlineArrowNarrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }).slice(0,3)}
        </div>
      </div>
    </section>
  );
};

export default RecentNewsArticles;
