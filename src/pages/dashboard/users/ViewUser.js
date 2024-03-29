import React, { useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import img from "../../../assets/Dentist.png";
import Style from "./Style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectuserview,
  viewusers,
} from "../../../global/features/Dashboard/usersSlice/Viewuser";

const ViewUser = () => {
  const { id } = useParams();
  const disptch = useDispatch();
  const data = useSelector(selectuserview);

  useEffect(() => {
    disptch(viewusers(id));
  }, [disptch]);

  return (
    <div className="d-flex">
      <div className={Style.sidecolor}>
        <Sidebar />
      </div>
      <div className="w-100">
        <Headers />
        <div className="mx-4">
          <h1> ViewUser </h1>
          <div>
            <div className={`container `}>
              <div className="row align-items-center">
                { }
                <div className="col col-md-7">
                  <div
                    class={`row justify-content-between align-items-center g-2 ${Style.profilecard}`}
                  >
                    <div className="col col-md-5">
                      <div className={Style.profile}>
                        <img
                          src={data.data.data?.profile}
                          width={250}
                          height={250}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="col col-md-5">
                      <div className={Style.profiletext}>
                        <div className="">
                          <h5>Name :</h5>
                          <p>{data.data.data?.name}</p>
                        </div>
                        <div>
                          <h5>Email :</h5>
                          <p>{data.data.data?.email}</p>
                        </div>
                        <div>
                          <h5>Gender : </h5>
                          <p>{data.data.data?.gender}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
