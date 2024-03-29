import React from "react";
import Navbar from "../../components/navbar";
import styles from "./style.module.css";
import logo from "../../assets/blog-home.webp";
import BlogPage from "./blogpage";
import Footer from '../../components/footer'
const Blog = () => {
  const data = {
    h1: null,
    h2: "BLOG",
    h3: null,
    image: logo,
    button: null,
    height: "675px",
    imgTop: "165px",
  };
  return (
    <>
      <Navbar data={data} />
      <BlogPage />
      <Footer/>
    </>
  );
};

export default Blog;
