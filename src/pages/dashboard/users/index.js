import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import Style from "../style.module.css";
import { Link } from "react-router-dom";
import PaginationComponent from "../../../components/pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  getusers,
  selectusers,
} from "../../../global/features/Dashboard/usersSlice/Getusers";

const Users = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectusers);

  const [currentpage, setCurrentpage] = useState(1);
  const recordPage = 10;
  const lastindex = currentpage * recordPage;
  const firstindex = lastindex - recordPage;
  let records = data.data.data?.results?.slice(firstindex, lastindex);

  const numberpages = Math.ceil(data.length / recordPage);

  const numbers = Array.from({ length: numberpages }, (_, index) =>
    (index + 1).toString().padStart(2, "0")
  );


  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);

  return (
    <div className="d-flex">
      <div className={Style.sidecolor}>
        <Sidebar />
      </div>
      <div className="w-100">
        <Headers />
        <div className=" mx-4">
          <h1> Users </h1>
          <div className="container mt-4   ">
            <table
              style={{ width: "100%" }}
              className={`table  table-responsive table-striped table-bordered table-hover ${Style.tables} }`}
            >
              <thead>
                <tr>
                  <th scope="col">S .NO</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">gender</th>
                  <th scope="col">appoinmentApproval</th>
                  <th scope="col">VIEW</th>
                </tr>
              </thead>
              {records?.map((item, index) => (
                <tbody key={index}>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.appoinmentApproval ? "Yes" : "No"}</td>
                    <td>
                      <Link to={`/elite-care/dashboard/viewusers/${item._id}`}>
                        view
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            <PaginationComponent
              currentpage={currentpage}
              setCurrentpage={setCurrentpage}
              numberpages={numberpages}
              numbers={numbers}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
