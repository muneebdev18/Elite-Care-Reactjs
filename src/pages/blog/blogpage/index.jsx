import styles from "./style.module.css";
import { HiArrowLongRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import Retangleblog1 from "../../../assets/Rectangle1.png";
import Retangleblog2 from "../../../assets/Rectangle2.png";
import Retangleblog3 from "../../../assets/Rectangle3.png";
import PaginationComponent from "../../../components/pagination";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getblogs } from "../../../global/features/Dashboard/blogsSlice/GetBlogs";
import Loader from "../../../components/Loader";
import useSWR from "swr";
import { constants } from '../../../global/constants'
const BlogPage = () => {


  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.blogs);
  const [currentpage, setCurrentpage] = useState(1);
  const [limit, setLimit] = useState(3);

  
  // Category Data
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data: catData } = useSWR(`${constants.baseUrl}/api/blog/bycategory`, fetcher)
  const categoryData = catData?.data


  // Token

  const user = JSON.parse(localStorage.getItem("user"));
  let token = user?.data?.refreshToken;

  // All Blogs Data 
  const fetcherWithToken = async (url, token, ...args) => {
    const response = await fetch(url, {
      ...args,
      headers: {
        ...args.headers,
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  };
  const { data: blogData, isLoading } = useSWR([`${constants.baseUrl}api/blog?limit=${limit}&page=${currentpage}`, token], fetcherWithToken);
  const paginateData = blogData?.data?.count
  const tempData = blogData?.data?.results?.results

 

  // GET  LATEST FROM BLOG

  const { data: getPopularData } = useSWR([`${constants.baseUrl}api/blog?limit=3&page=1`, token], fetcherWithToken);
  const popularData = getPopularData?.data?.results?.results
  console.log("popular Data",popularData);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-8">
          <div className="row">
            {isLoading ? (
              <Loader />
            ) : (
              tempData?.map((items, index) => {
                const months = [
                  "JAN",
                  "FEB",
                  "MAR",
                  "APR",
                  "MAY",
                  "JUN",
                  "JUL",
                  "AUG",
                  "SEP",
                  "OCT",
                  "NOV",
                  "DEC",
                ];
                const createdDate = new Date(items?.createdAt);
                const day = createdDate.getDate();
                const month = months[createdDate.getMonth()];
                const year = createdDate.getFullYear();

                const finalDate = `${day < 10 ? "0" + day : day
                  } ${month} ${year}`;
                return (
                  <div key={index} className="col-12">
                    <div className={styles.textblog}>
                      <h6 className={styles.dateHeading} style={{display:"flex",alignItems:"center",marginLeft:"-20px",marginBottom:"13px !important"}}>
                        <SlCalender style={{ margin: "0px 20px" }} />
                        {finalDate}
                      </h6>
                      <h1 className={styles.blogTitle}>{items.title}</h1>
                      {/* <p className={styles.blogDesc}>{items?.description?.slice(0, 500)}</p> */}
                      <p
                       className={styles.blogDesc}
                        dangerouslySetInnerHTML={{ __html: items?.description?.slice(0, 300) }}
                      ></p>
                      <button className="btn">
                        Read More <HiArrowLongRight size={28} />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          {
            isLoading ? "" : <PaginationComponent
              totalPost={paginateData}
              postPerPage={limit}
              setCurrentPage={setCurrentpage}
              currentPage={currentpage}
            />
          }

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
                {
                  categoryData?.map((items, index) => {
                    return (
                      <li>
                        <div key={index} className="d-flex justify-content-between">
                          <div>
                            <span>{items?.category_info}</span>
                          </div>
                          <div>
                            <span>({items?.count})</span>
                          </div>
                        </div>
                      </li>
                    );
                  }).slice(0, 6)
                }
              </ul>
            </div>
          </div>
          <div className={styles.blog}>
            <h4>LATEST FROM BLOG</h4>
            {
              popularData?.map((item, index) => {
                const months = [
                  "JAN",
                  "FEB",
                  "MAR",
                  "APR",
                  "MAY",
                  "JUN",
                  "JUL",
                  "AUG",
                  "SEP",
                  "OCT",
                  "NOV",
                  "DEC",
                ];
                const createdDate = new Date(item?.createdAt);
                const day = createdDate.getDate();
                const month = months[createdDate.getMonth()];
                const year = createdDate.getFullYear();

                const finalDate = `${day < 10 ? "0" + day : day
                  } ${month} ${year}`;
                return (
                  <div key={index} className={styles.latestblog}>
                    <div className={styles.imgagesdiv}>
                      <img src={item?.image?.imageUrl} alt={item?.image?.imageName} />
                    </div>
                    <div>
                      <h6>{item?.title}</h6>
                      <div className={styles.dateWrapper}>
                        <SlCalender />
                        <span>{finalDate}</span>
                      </div>
                    </div>
                  </div>
                )
              }).slice(0, 3)
            }

          </div>
          <div className={styles.populartag}>
            <h4>POPULAR TAG</h4>
            <div  className={styles.populartaglink}>
            {
              categoryData?.map((item) => {
                return (
                  
                    <span key={item._id}>
                      <Link to="/elite-care/blog">{item?.category_info}</Link>
                    </span>
                  
                  )
                })
              }
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
