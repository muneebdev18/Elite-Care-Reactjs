import styles from "./style.module.css";
import { HiArrowLongRight } from "react-icons/hi2";
import { useState } from "react";
import Retangleblog1 from "../../../assets/Rectangle1.png";
import Retangleblog2 from "../../../assets/Rectangle2.png";
import Retangleblog3 from "../../../assets/Rectangle3.png";
import PaginationComponent from "../../../components/pagination";


import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const date = new Date();
  const todaydate = date.getDay();
  const todaymonth = date.getMonth();
  const todayyeaer = date.getFullYear();
  const all = `${todaydate} , ${todaymonth} ,  ${todayyeaer}`;

  const data = [
    {
      Id: 1,
      date: all,
      title: "Beauty can be preserved and we will tell you how improve",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 2,
      date: all,
      title: "Four ways a clean workplace makes employees happy and healthy",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 3,
      date: all,
      title: "How to clean your home faster and more efficiently",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 4,
      date: all,
      title: "Beauty can be preserved and we will tell you how improve",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 5,
      date: all,
      title: "How to clean your home faster and more efficiently",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 6,
      date: all,
      title: "Four ways a clean workplace makes employees happy and healthy",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 7,
      date: all,
      title: "Beauty can be preserved and we will tell you how improve",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 8,
      date: all,
      title: "Beauty can be preserved and we will tell you how improve",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 9,
      date: all,
      title: "How to clean your home faster and more efficiently",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 10,
      date: all,
      title: "Beauty can be preserved and we will tell you how improve",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 11,
      date: all,
      title: "Beauty can be preserved and we will tell you how improve",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 12,
      date: all,
      title: "Four ways a clean workplace makes employees happy and healthy",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 13,
      date: all,
      title: "How to clean your home faster and more efficiently",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
  ];
  const [currentpage, setCurrentpage] = useState(1);
  const recordPage = 3;
  const lastindex = currentpage * recordPage;
  const firstindex = lastindex - recordPage;
  const records = data.slice(firstindex, lastindex);

  const numberpages = Math.ceil(data.length / recordPage);

  const numbers = Array.from({ length: numberpages }, (_, index) =>
    (index + 1).toString().padStart(2, "0")
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-8">
          <div className="row">
            {records.map((items, index) => (
              <div key={index} className="col-12">
                <div className={styles.textblog}>
                  <h6>
                    <SlCalender style={{ margin: "0px 20px" }} />
                    {items.date}
                  </h6>
                  <h1>{items.title}</h1>
                  <p>{items.des}</p>
                  <button className="btn">
                    Read More <HiArrowLongRight size={28} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <PaginationComponent
            currentpage={currentpage}
            setCurrentpage={setCurrentpage}
            numberpages={numberpages}
            numbers={numbers}
          />
        </div>
        <div className="col-12 col-md-4 col-lg-4">
          <div className={styles.searchbar}>
            <input type="search" placeholder=" search Here " />
            <HiArrowLongRight size={28} />
          </div>
          <div className={styles.category}>
            <div className="mx-3">
              <h4>CATEGORY</h4>
              <ul>
                <li>
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>Plactic Surgery</span>
                    </div>
                    <div>
                      <span>(14)</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>Liposaction</span>
                    </div>
                    <div>
                      <span>(12)</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>Breat Implant</span>
                    </div>
                    <div>
                      <span>(18)</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>Pender Unity</span>
                    </div>
                    <div>
                      <span>(8)</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between">
                    <div>
                      {" "}
                      <span>Non surgical</span>
                    </div>
                    <div>
                      {" "}
                      <span>(28)</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between">
                    <div>
                    
                      <span>Nose Reshaping</span>
                    </div>
                    <div>
                     
                      <span>(9)</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.blog}>
            <h4>LATEST FROM BLOG</h4>
            <div className={styles.latestblog}>
              <div className={styles.imgagesdiv}>
                <img src={Retangleblog1} />
              </div>
              <div>
                <h6>Recapture the beauty self-confidence </h6>
                <SlCalender />
                <span>{all}</span>
              </div>
            </div>
            <div className={styles.latestblog}>
              <div className={styles.imgagesdiv}>
                <img src={Retangleblog2} />
              </div>
              <div>
                <h6>when you feel good we feel good </h6>
                <SlCalender />
                <span>{all}</span>
              </div>
            </div>
            <div className={styles.latestblog}>
              <div className={styles.imgagesdiv}>
                <img src={Retangleblog3} />
              </div>
              <div>
                <h6>Refresh your image to beauty </h6>
                <SlCalender />
                <span>{all}</span>
              </div>
            </div>
          </div>
          <div className={styles.populartag}>
            <h4>POPULAR TAG</h4>
            <div>
              <span>
                <Link to="#">Cosmetic </Link>
              </span>
              <span>
                <Link to="#">Non surgical </Link>
              </span>
              <span>
                <Link to="#">Medical </Link>
              </span>
              <span>
                <Link to="#">Brest implent </Link>
              </span>
              <span>
                <Link to="#">Surgery </Link>
              </span>
              <span>
                <Link to="#">Medical </Link>
              </span>
              <span>
                <Link to="#">Brest implent </Link>
              </span>
              <span>
                <Link to="#">Surgery </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
