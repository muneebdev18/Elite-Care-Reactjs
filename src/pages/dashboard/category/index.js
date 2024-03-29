import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import PaginationComponent from "../../../components/pagination";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../../components/Loader";
import useSWR from "swr";
import { constants } from "../../../global/constants";

import { deleteCategoryApi } from "../../../global/features/Dashboard/categorySlice/deleteCategory";
import { toast } from "react-toastify";
const Category = () => {
  const [currentpage, setCurrentpage] = useState(1);
  const [limit, setLimit] = useState(10);
  const dispatch = useDispatch();
  // Cateogry Data
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: catData,
    isLoading,
    mutate,
  } = useSWR(
    `${constants.baseUrl}api/category?limit=${limit}&page=${currentpage}`,
    fetcher
  );
  const categoryData = catData?.data?.results?.results;

  const { success, message } = useSelector((value) => value.deleteCategory);

  const deleteHandler = (id) => {
    dispatch(
      deleteCategoryApi({
        id: id,
        mutate: mutate,
      })
    );
  };

  useEffect(() => {
    if (success === true) {
      toast.success(message, {
        position: "top-center",
      });
    } else if (success === null) {
      return;
    } else {
      toast.error(message, {
        position: "top-center",
      });
    }
  }, [success, message]);
  return (
    <div className="d-flex">
      <div className={style.sidecolor}>
        <Sidebar />
      </div>
      <div className="w-100">
        <Headers />
        <div className={style.btn_doc}>
          <Link to={"/elite-care/dashboard/addcategory"}>
            <button>Add Blog Category</button>
          </Link>
        </div>
        <div className="container mt-4   ">
          <h1> Blog Category </h1>
          <table
            style={{ width: "100%" }}
            className={`table  table-responsive table-striped table-bordered table-hover ${style.tables} }`}
          >
            <thead>
              <tr>
                <th scope="col">S .NO</th>
                <th scope="col">NAME</th>
                <th scope="col">UPDATE</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>

            {isLoading ? (
              <Loader />
            ) : (
              categoryData?.map((item, index) => (
                <tbody key={index}>
                  <tr>
                    <th scope="row">
                      {currentpage * limit - limit + (index + 1)}
                    </th>
                    <td>{item.name}</td>
                    <td>
                      {" "}
                      <Link
                        to={`/elite-care/dashboard/updatecategory/${item?._id}`}
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
                  </tr>
                </tbody>
              ))
            )}
          </table>
          <div>
            {isLoading ? (
              ""
            ) : (
              <PaginationComponent
                totalPost={catData?.data?.count}
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

export default Category;
