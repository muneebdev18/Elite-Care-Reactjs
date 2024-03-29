import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MultiSelect from "../../../components/dropdown/Dropdown";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import styles from "../style.module.css";
import { toast } from "react-toastify";

const ViewDoctor = () => {
  const { id } = useParams();
  const options = [
    "Dentsist",
    "Surgical",
    "Therapist",
    "MBBS",
    "Neurologist",
    "Cardiologist",
    "Orthopedic Surgeon",
  ];
  const [data, setData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [doctorValues, setDoctorValues] = useState({
    name: "",
    email: "",
    serviceOffered: null,
    availableTime: null,
    doctorImg: null,
  });
  //dropdown

  const handleChange = (newSelectedOptions) => {
    setDoctorValues({
      ...doctorValues,
      serviceOffered: newSelectedOptions,
    });
    // setSelectedOptions(newSelectedOptions);
  };
  //dropend

  const imageHandler = (e) => {
    const selectedFile = e.target.files[0];
    setDoctorValues({ ...doctorValues, doctorImg: selectedFile });
  };

  useEffect(() => {
    fetch(`https://flutterapi.testdevlink.net/elite-care-db/api/doctor/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.serviceOffered);
        setDoctorValues({
          ...doctorValues,
          name: data.data.name,
          email: data.data.email,
          serviceOffered: data.data.serviceOffered,
          availableTime: data.data.availableTime,
          doctorImg: data.data.image.imageUrl,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const addDoctorHandler = async () => {
    if (
      !doctorValues?.name ||
      !doctorValues?.email ||
      !doctorValues?.availableTime ||
      !doctorValues?.doctorImg ||
      !doctorValues?.serviceOffered
    ) {
      toast.error("Fill all the fields", {
        position: "top-center",
      });
      return;
    } else {
      const formData = new FormData();

      formData.append("name", doctorValues.name);
      formData.append("email", doctorValues.email);
      formData.append("serviceOffered", doctorValues.serviceOffered);
      formData.append("availableTime", doctorValues.availableTime);
      formData.append("doctorImg", doctorValues.doctorImg);
      try {
        const res = await fetch(`https://flutterapi.testdevlink.net/elite-care-db/api/doctor/${id}`, {
          method: "POST",
          body: formData,
        });
        const result = await res.json();
        setData(result);
        return result;
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    addDoctorHandler();
  };

  const { success, message } = data;
  useEffect(() => {
    if (success === true) {
      toast.success(message, {
        position: "top-center",
      });
    } else if (success == null) {
      return;
    } else {
      toast.error(message, {
        position: "top-center",
      });
    }
  }, [success, message]);

  return (
    <div className="d-flex ">
      <div className={styles.sidecolor}>
        <Sidebar />
      </div>
      <div className=" w-100 my-[120px]">
        <Headers />
        <div className="container">
          <h1>Update Doctor</h1>
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
                onChange={(e) => {
                  setDoctorValues({ ...doctorValues, name: e.target.value });
                }}
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
                onChange={(e) => {
                  setDoctorValues({ ...doctorValues, email: e.target.value });
                }}
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
              <p>
                Selected Options:{" "}
                {doctorValues?.serviceOffered?.map((item) => (
                  <p>{item.serviceName}</p>
                ))}
              </p>
            </div>
            <div class="mb-3">
              <label for="Experience" class="form-label">
                Available time:
              </label>
              <input
                type="datetime"
                name="availabletime"
                onChange={(e) => {
                  setDoctorValues({
                    ...doctorValues,
                    availableTime: e.target.value,
                  });
                }}
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

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewDoctor;
