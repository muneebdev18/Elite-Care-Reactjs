import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import { createServiceApi } from "../../../global/features/Dashboard/Services/createService";
import { clearService } from "../../../global/features/Dashboard/Services/createService";
import { toast } from "react-toastify";
import styles from "../style.module.css";
import style from "./style.module.css";
const AddService = () => {
  const dispatch = useDispatch();
  const { message, success } = useSelector((value) => value.createService);
  const [serviceValues, setServiceValues] = useState({
    serviceName: "",
    description: "",
    serviceImg: null,
    price: "",
    pageName: "",
  });

  const imageHandler = (e) => {
    const selectedFile = e.target.files[0];
    setServiceValues({ ...serviceValues, serviceImg: selectedFile });
  };
  console.log("services valuesss", serviceValues);

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(
      createServiceApi({
        // token: refreshToken,
        serviceName: serviceValues.serviceName,
        description: serviceValues.description,
        serviceImg: serviceValues.serviceImg,
        price: serviceValues.price,
        pageName: serviceValues.pageName,
      })
    );
  };

  useEffect(() => {
    if (success) {
      toast.success(message, {
        position: "top-center",
      });
      dispatch(clearService());
      setServiceValues({
        serviceName: "",
        description: "",
        serviceImg: "",
        price: "",
        pageName: "",
      });
    } else if (success == null) {
      return;
    } else {
      toast.error(message, {
        position: "top-center",
      });
      dispatch(clearService());
    }
  }, [success]);
  return (
    <div className="d-flex">
      <div className={styles.sidecolor}>
        <Sidebar />
      </div>
      <div className="w-100 my-[120px]">
        <Headers />
        <div className=" container">
          <h1>Add Service</h1>
          <form onSubmit={handlesubmit}>
            <div class="mb-3">
              <label for="name" class="form-label">
                Service Name
              </label>
              <input
                type="text"
                name="serviceName"
                class="form-control"
                id="name"
                onChange={(e) => {
                  setServiceValues({
                    ...serviceValues,
                    serviceName: e.target.value,
                  });
                }}
                aria-describedby="emailHelp"
                value={serviceValues.serviceName}
              />
            </div>
           
            <div class="mb-3">
              <label for="Experience" class="form-label">
                Price
              </label>
              <input
                type="text"
                name="price"
                onChange={(e) => {
                  setServiceValues({ ...serviceValues, price: e.target.value });
                }}
                class="form-control"
                id=" available-time"
                value={serviceValues.price}
              />
            </div>
            <div className={style.dropDownPages}>
              <label for="Experience" class="form-label">
                Page Name
              </label>
              <select
                value={serviceValues.pageName}
                onChange={(e) => {
                  setServiceValues({
                    ...serviceValues,
                    pageName: e.target.value,
                  });
                }}
              >
                <option value="" selected disabled hidden>
                  Select PageName
                </option>
                <option value="home">Home</option>
                <option value="about">About</option>
                <option value="serviceOffered">Services Offered</option>
                <option value="surgicalAstehtics">Surgical Astehtics</option>
                <option value="nonSurgicalAstehtics">
                  Non Surgical Astehtics
                </option>
                <option value="dentist">Dentist</option>
                <option value="forMen">For Men</option>
                <option value="transportation">Transportation</option>
                <option value="contactUs">Contact Us</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="formFile" class="form-label">
                Upload *
              </label>
              <input
                class="form-control"
                type="file"
                id="formFile"
                name="image"
                onChange={imageHandler}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Description
              </label>
              <textarea name="description"
                class="form-control"
                onChange={(e) => {
                  setServiceValues({
                    ...serviceValues,
                    description: e.target.value,
                  });
                }}
                id="exampleInputEmail1"
                rows={10}
                cols={10}
                aria-describedby="emailHelp"
                value={serviceValues.description}></textarea>
            </div>


            <button type="submit" class="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
