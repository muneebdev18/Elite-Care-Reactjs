import React from "react";
import styles from "./style.module.css";
import LoginForm from "./loginForm";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import logo from "../../../assets/about-banner.png";
const Login = () => {
  const data = {
    h1: null,
    h2: "JOIN WITH US",
    h3: null,
    image: logo,
    button: null,
    height: "675px",
    imgTop: "165px",
  };
  return (
    <div>
      <Navbar data={data} />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
