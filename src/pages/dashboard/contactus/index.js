import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import Style from "../style.module.css";

import PaginationComponent from "../../../components/pagination";

import Loader from "../../../components/Loader";
import useSWR from "swr";
import { constants } from "../../../global/constants";

const ContactUs = () => {
  
  const [currentpage, setCurrentpage] = useState(1);
  const [limit, setLimit] = useState(10);



const fetcher = (...args) => fetch(...args).then(res => res.json())
const { data: contactData,isLoading } = useSWR(`${constants.baseUrl}api/contactus?limit=${limit}&page=${currentpage}`, fetcher);
const conData = contactData?.data?.results?.results

  return (
    <div className="d-flex">
      <div className={Style.sidecolor}>
        <Sidebar />
      </div>

      {
        <div className="w-100">
          <Headers />

          <div className="mx-4">
            <h1> Contact </h1>
            <div className="container mt-4   ">
              <table
                style={{ width: "100%" }}
                className={`table  table-responsive table-striped table-bordered table-hover ${Style.tables} }`}
              >
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">MESSAGE</th>
                    <th scope="col">PHONE</th>
                    <th scope="col">SUBJECT</th>
                  </tr>
                </thead>

                {isLoading ? (
                  <Loader />
                ) : (
                  conData?.map((item, index) => (
                    <tbody key={index}>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.message}</td>
                        <td>{item.phone}</td>
                        <td>{item.subject}</td>
                      </tr>
                    </tbody>
                  ))
                )}
              </table>
              {
                isLoading ? "":<PaginationComponent
                totalPost={contactData?.data?.count}
                postPerPage={limit}
                setCurrentPage={setCurrentpage}
                currentPage={currentpage}
              />
              }
              
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default ContactUs;
