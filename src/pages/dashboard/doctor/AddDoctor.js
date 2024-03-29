import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { CreateDocotor } from "../../../global/features/Dashboard/createdoctor/DoctorSlice";
import MultiSelect from "../../../components/dropdown/Dropdown";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import { createDoctorApi } from "../../../global/features/Dashboard/Doctors/createDoctor";
import { toast } from "react-toastify";
import { clearDoctor } from "../../../global/features/Dashboard/Doctors/createDoctor";
import styles from '../style.module.css'
const AddDoctor = () => {

  const dispatch = useDispatch();
  const { success, message } = useSelector((value) => value.createDoctor)
  const options = ["Dentsist", "Surgical", "Therapist", "MBBS", "Neurologist", "Cardiologist", "Orthopedic Surgeon"];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [doctorValues, setDoctorValues] = useState({
    name: '',
    email: '',
    serviceOffered: null,
    availableTime: [],
    doctorImg: null
  })
  //dropdown


  const handleChange = (newSelectedOptions) => {
    setSelectedOptions(newSelectedOptions);
    console.log(newSelectedOptions);
  };
  //dropend


  const imageHandler = (e) => {
    const selectedFile = e.target.files[0];
    setDoctorValues({ ...doctorValues, doctorImg: selectedFile });
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(createDoctorApi({
      name: doctorValues.name,
      email: doctorValues.email,
      serviceOffered: selectedOptions,
      availableTime: doctorValues.availableTime,
      doctorImg: doctorValues.doctorImg
    }))
    setDoctorValues({
      name: '',
      email: '',
      serviceOffered: null,
      availableTime: '',
      doctorImg: null
    })
    setSelectedOptions([null])

  };
  console.log(doctorValues.name.length);
  useEffect(() => {
    if (success) {
      toast.success(message, {
        position: "top-center"
      })
      dispatch(clearDoctor())
    } else if (success == null) { return; }
    else {
      toast.error(message, {
        position: "top-center"
      })
      dispatch(clearDoctor())
    }
  }, [success])

  return (

    <div className="d-flex ">
      <div className={styles.sidecolor}>
        <Sidebar />
      </div>
      <div className=" w-100 my-[120px]">
        <Headers />
        <div className="container">
          <h1>Create Doctor</h1>
          <form onSubmit={handlesubmit}>
            <div class="mb-3">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="name"
                name="name"
                class="form-control"
                id="name"
                onChange={(e) => { setDoctorValues({ ...doctorValues, name: e.target.value }) }}
                aria-describedby="emailHelp"
                value={doctorValues.name}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                class="form-control"
                onChange={(e) => { setDoctorValues({ ...doctorValues, email: e.target.value }) }}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={doctorValues.email}
              />
            </div>
            <div class="mb-3 ">
              <label for="" class="form-label">
                Service offered (dropdown)
              </label>
              <MultiSelect options={options} onChange={handleChange} />
              <p>Selected Options: {selectedOptions.join(", ")}</p>
            </div>
            <div class="mb-3">
              <label for="Experience" class="form-label">
                Available time:
              </label>
              <input
                type="text"
                name="availabletime"
                onChange={(e) => { setDoctorValues({ ...doctorValues, availableTime: e.target.value }) }}
                class="form-control"
                id=" available-time"
                value={doctorValues.availableTime}
              />
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

            <button type="submit" class="btn btn-dark">
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>

  );
};

export default AddDoctor;
