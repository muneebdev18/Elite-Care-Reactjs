import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Headers from "../header/Headers";
import Sidebar from "../sidebar/Sidebar";
import PaginationComponent from "../../../components/pagination";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getblogs } from "../../../global/features/Dashboard/blogsSlice/GetBlogs";
import Loader from "../../../components/Loader";
import deleteBlog, {
  deleteBlogApi,
} from "../../../global/features/Dashboard/blogsSlice/deleteBlog";
import useSWR from "swr";
import { constants } from "../../../global/constants";

const Blogs = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.blogs);

  const [currentpage, setCurrentpage] = useState(1);
  const [limit, setLimit] = useState(10);

  const records = data?.data?.results?.results?.slice();

  useEffect(() => {
    const paginate = { limit: limit, page: currentpage };
    dispatch(getblogs(paginate));
  }, [currentpage, dispatch, limit]);

  const user = JSON.parse(localStorage.getItem("user"));
  let token = user?.data?.refreshToken;

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
  const {
    data: blogData,
    isLoading,
    mutate,
  } = useSWR(
    [`${constants.baseUrl}api/blog?limit=${limit}&page=${currentpage}`, token],
    fetcherWithToken
  );

  const blogsData = blogData?.data?.results?.results;

  const deleteHandler = (id) => {
    dispatch(
      deleteBlogApi({
        id: id,
        mutate: mutate,
      })
    );
  };

  return (
    <div className="d-flex">
      <div className={styles.sidecolor}>
        <Sidebar />
      </div>
      <div className="w-100">
        <Headers />
        <div className={styles.btn_doc}>
          <Link to={"/elite-care/dashboard/addblogs"}>
            <button>Add Blogs</button>
          </Link>
        </div>
        <div className="container mt-4">
          <h1> Blogs </h1>
          <table
            style={{ width: "100%" }}
            className={`table table-responsive table-striped table-bordered table-hover ${styles.tables} }`}
          >
            <thead>
              <tr>
                <th scope="col">S .NO</th>
                <th scope="col">TITLE</th>
                <th scope="col">DESCRIPTION</th>
                <th scope="col">CATEGORY</th>
                <th scope="col">CREATED AT</th>
                <th scope="col">UPDATE</th>
                <th scope="col">DELETE</th>
                {/* <th scope="col">VIEW</th> */}
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <Loader />
              ) : (
                blogsData?.map((item, index) => {
                  const timestamp = item.createdAt;
                  const dateOnly = new Date(timestamp)
                    .toISOString()
                    .slice(0, 10);
                  return (
                    <tr key={index}>
                      <th scope="row">
                        {currentpage * limit - limit + (index + 1)}
                      </th>
                      <td>{item?.title}</td>
                      <td
                        dangerouslySetInnerHTML={{
                          __html: `${
                            item?.description?.length > 100
                              ? item?.description?.slice(0, 100) + "..."
                              : item?.description
                          }`,
                        }}
                      ></td>
                      <td>{item?.category?.name}</td>
                      <td>{dateOnly}</td>
                      <td>
                        {" "}
                        <Link
                          to={`/elite-care/dashboard/updateblogs/${item?._id}`}
                        >
                          <button type="button" class="btn btn-primary">
                            Update
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => deleteHandler(item?._id)}
                          type="button"
                          class="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                      {/* <td>
                        <Link
                          to={`/elite-care/dashboard/viewblogs/${item?._id}`}
                        >
                          view
                        </Link>
                      </td> */}
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
          <div>
            {loading ? (
              ""
            ) : (
              <PaginationComponent
                totalPost={data?.data?.count}
                postPerPage={limit}
                setCurrentPage={setCurrentpage}
                currentPage={currentpage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
