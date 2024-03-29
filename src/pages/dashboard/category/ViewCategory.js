import React, { useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import Loader from '../../../components/Loader'
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { viewcategory } from "../../../global/features/Dashboard/categorySlice/Viewcategory";

const ViewCategory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.viewcategory);


  useEffect(() => {
    dispatch(viewcategory(id));
  }, [dispatch]);
  return (
    <div className="d-flex">
      <div className={style.sidecolor}>
        <Sidebar />
      </div>
      <div className="w-100">
        <Headers />
        <div className="mx-4">
          <h1> View Blog Category </h1>
          {loading ? (
            <Loader />
          ) : (
            <div className={`container `}>
              <div className="row align-items-center">
                <div className="col col-md-7">
                  <div
                    class={`row justify-content-between align-items-center g-2 ${style.profilecard}`}
                  >
                    <div className="col col-md-12">
                      <div className={style.profiletext}>
                        <div className="">
                          <h5>Name :</h5>
                          <p>{data?.name}</p>
                        </div>
                        <div>
                          <h5>Date / Time</h5>
                          <p>{data?.createdAt}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewCategory;
