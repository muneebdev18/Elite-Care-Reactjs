import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import Style from '../style.module.css'
import { useParams } from "react-router-dom";
import { updateServiceApi, clearUpdateService } from "../../../global/features/Dashboard/Services/updateService";
import { toast } from "react-toastify";
const ViewService = () => {
  const { id } = useParams()
  const [updateService, setUpdateService] = useState({
    serviceName: "",
    description: "",
    serviceImg: null,
    price: "",
    pageName: "",
  });
  const dispatch = useDispatch();
  const { success, message } = useSelector((value) => value.updateService)

  const imageHandler = function (e) {
    const selectedFile = e.target.files[0];
    setUpdateService({ ...updateService, serviceImg: selectedFile });
  }
  useEffect(() => {
    fetch(`https://flutterapi.testdevlink.net/elite-care-db/api/services/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
    
        setUpdateService({
          ...updateService,
          serviceName: data.data.serviceName,
          description: data.data.description,
          price: data.data.price,
          pageName: data.data.pageName,
          serviceImg: data.data.image.imageUrl,
        });
      })
      .catch((error) => console.log(error));
  }, []);


  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(updateServiceApi({
      id: id,
      serviceName: updateService?.serviceName,
      description: updateService?.description,
      serviceImg: updateService?.serviceImg,
      price: updateService?.price,
      pageName: updateService?.pageName,
    }))
  };

  useEffect(() => {
    if (success === true) {
      toast.success(message, {
        position: "top-center"
      })
      dispatch(clearUpdateService())
    }

    else if (success === null) {
      return;
    }
    else {
      toast.error(message, { position: "top-center" })
      dispatch(clearUpdateService())

    }
  }, [success, message])

  return (
    <div className="d-flex">
      <div className={Style.sidecolor}>
        <Sidebar />
      </div>
      <div className=" w-100 my-[120px]">
        <Headers />
        <div className="mx-4">
          <h1>Update Service</h1>
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
                // onChange={getdata}
                aria-describedby="emailHelp"
                value={updateService.serviceName}
                onChange={(e) => setUpdateService({ ...updateService, serviceName: e.target.value })}
              />
            </div>

          
            <div class="mb-3">
              <label for="Experience" class="form-label">
                Price
              </label>
              <input
                type="text"
                name="price"
                value={updateService.price}
                onChange={(e) => setUpdateService({ ...updateService, price: e.target.value })}
                class="form-control"
                id=" available-time"
              />
            </div>
            <div class="mb-3">
              <label for="Experience" class="form-label">
                Page Name
              </label>
              <select
                value={updateService.pageName}
                onChange={(e) => setUpdateService({ ...updateService, pageName: e.target.value })}
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
                onChange={(e) => setUpdateService({ ...updateService, description: e.target.value })}
                id="exampleInputEmail1"
                rows={10}
                cols={10}
                aria-describedby="emailHelp"
                value={updateService.description}>

                </textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              Update
            </button>
          </form>
        </div>

      </div>
    </div>

  );
};

export default ViewService;
