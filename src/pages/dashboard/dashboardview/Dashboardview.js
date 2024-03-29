import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import { MdSupervisedUserCircle } from "react-icons/md";
import Styles from "./Style.module.css";
import { FaBriefcaseMedical, FaServicestack, FaUserCheck, FaUserDoctor } from "react-icons/fa6";
import Chart from "../chart";
import useSWR from "swr";
import { constants } from "../../../global/constants";
const Dashboardview = () => {



  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const {data, error, isLoading } = useSWR(`${constants.baseUrl}/api/dashboard`,fetcher)

  const dashbaordData = data?.data


  return (
    <div className="d-flex">
      <div className={Styles.sidecolor}>
        <Sidebar />
      </div>
      <div className={`w-100  ${Styles.widthdiv}`}>
        <Headers />
        <div className="mx-4">
          <h1> DashboardView </h1>
          <div className={`${Styles.maindiv} container`}>
            <div className="row justify-content-between  ">
              {
                dashbaordData?.map((items, index) => (
                  <div key={index} className="col-12 mt-3 col-md-4   ">
                    <div className={Styles.card}>
                      <p><FaBriefcaseMedical size={24} /></p>
                      <div className={Styles.text}>
                        <span className={Styles.title}>{items?.heading}</span>
                        <span className={Styles.count}>{items?.data}</span>
                        
                      </div>
                    </div>

                  </div>
                ))
              }
            </div>
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardview;
