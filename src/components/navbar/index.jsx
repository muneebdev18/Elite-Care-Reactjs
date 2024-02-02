import React from "react";
import Styles from "./style.module.css";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
import scrollmain from "../../assets/scrollmain.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaEnvelope } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";

const Navbar = (props) => {
  const { heading1, heading2, heading3, image, button } = props.data;

  const divStyle = {
    backgroundImage: `url(${image})`,
    height: "98vh",
    objectFit: " cover",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "#fff",
  };
  console.log(image);
  return (
    // <div className="container-fluid">
    //   <div className="row justify-content-center border border-danger">
    //     <nav class="navbar navbar-expand-lg bg-body-tertiary  border border-danger">
    //       <div class="container-fluid">

    //         <button
    //           class="navbar-toggler"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#navbarNavDropdown"
    //           aria-controls="navbarNavDropdown"
    //           aria-expanded="false"
    //           aria-label="Toggle navigation"
    //         >
    //           <span class="navbar-toggler-icon"></span>
    //         </button>
    //         <div className="row">
    //           <div className="col col-md-4 border border">
    //           <h1 class="navbar-brand" href="#">
    //           Navbar
    //         </h1>
    //           </div>
    //         </div>
    //         <div class="collapse navbar-collapse" id="navbarNavDropdown">

    //         </div>
    //       </div>
    //     </nav>
    //   </div>
    // </div>
    // <div className="container-fluid">
    //   <div className="row justify-content-center"
    //     id={Styles.sec1home}
    //     style={divStyle}
    //   >
    //     <div className=" h-25">
    //       <nav class="navbar navbar-expand-xl ">
    //         <div class="container-fluid ">
    //         <h1>ELITE CARE</h1>

    //           <button
    //             class="navbar-toggler ms-auto"
    //             type="button"
    //             data-bs-toggle="collapse"
    //             data-bs-target="#navbarSupportedContent"
    //             aria-controls="navbarSupportedContent"
    //             aria-expanded="false"
    //             aria-label="Toggle navigation"
    //           >
    //             <span class="navbar-toggler-icon"></span>
    //           </button>
    //           <div
    //             class="collapse navbar-collapse "
    //             id="navbarSupportedContent"
    //           >
    //             <div className="d-flex flex-column  w-100 ">
    //               <div className="row m-0">
    //                 <div className="col col-md-9 col-lg-10   ">
    //                   <ul class="navbar-nav pb-4 pt-4 pr-4 float-sm-start float-md-end  ">
    //                     <li class="nav-item ">
    //                       <a
    //                         class="nav-link  active"
    //                         aria-current="page"
    //                         href="#"
    //                       >

    //                         <div className="d-flex ">
    //                           <div>
    //                           <FaEnvelope />
    //                           </div>
    //                           <div className="mx-2"> Gendusarose@Gmail.com</div>
    //                         </div>
    //                       </a>
    //                     </li>
    //                     <li class="nav-item">
    //                       <a class="nav-link" href="#">
    //                         <div className="d-flex ">
    //                           <div>
    //                           <FaLocationDot />
    //                           </div>
    //                           <div className="mx-2">  37825 Harbar Light Road 94560 Zip Code Califorina</div>
    //                         </div>
    //                       </a>
    //                     </li>
    //                     <li class="nav-item">
    //                       <a class="nav-link" href="#">

    //                         <div className="d-flex ">
    //                           <div>
    //                             <MdCall />
    //                           </div>
    //                           <div className="mx-2">4086599856</div>
    //                         </div>
    //                       </a>
    //                     </li>
    //                     <li class="nav-item">
    //                       <a class="nav-link" href="#">
    //                         <div className="d-flex">
    //                           <div>Follow Us</div>
    //                           <div className={Styles.socialicons}>
    //                             <div className={Styles.icon}>
    //                               <FaFacebook size={30} className="" />
    //                             </div>
    //                             <div className={Styles.icon}>
    //                               <ImInstagram size={30} />
    //                             </div>
    //                             <div className={Styles.icon}>
    //                               <AiFillTwitterCircle size={30} />
    //                             </div>
    //                           </div>
    //                         </div>
    //                       </a>
    //                     </li>
    //                   </ul>
    //                 </div>
    //                 <div className="col-12 col-md-3 col-lg-2 pt-4  ">
    //                   <button
    //                     class="btn btn-outline-light d-flex"
    //                     type="submit"
    //                   >
    //                     BOOK AN APPOINTMENT
    //                     <HiArrowLongRight size={28} />
    //                   </button>
    //                 </div>
    //               </div>
    //               <div>
    //                 <ul class="navbar-nav  border-top pt-2 float-end  pt-4   mx-5 ">
    //                   <li class="nav-item">
    //                     <Link
    //                       class="nav-link active"
    //                       aria-current="page"
    //                       to="#"
    //                     >
    //                       Home
    //                     </Link>
    //                   </li>
    //                   <li class="nav-item">
    //                     <Link class="nav-link" to="#">
    //                       About Us
    //                     </Link>
    //                   </li>
    //                   <li class="nav-item">
    //                     <Link class="nav-link" to="#">
    //                       Services Offered
    //                     </Link>
    //                   </li>
    //                   <li class="nav-item">
    //                     <Link class="nav-link" to="#">
    //                       Surgical Aesthetics
    //                     </Link>
    //                   </li>
    //                   <li class="nav-item">
    //                     <Link class="nav-link" to="#">
    //                       Non Surgical Aesthetics
    //                     </Link>
    //                   </li>
    //                   <li class="nav-item">
    //                     <Link class="nav-link" to="#">
    //                       Dentist
    //                     </Link>
    //                   </li>
    //                   <li class="nav-item">
    //                     <Link class="nav-link" to="#">
    //                       For Men
    //                     </Link>
    //                   </li>
    //                   <li class="nav-item">
    //                     <Link class="nav-link" to="#">
    //                       Transpotation
    //                     </Link>
    //                   </li>
    //                   <li class="nav-item">
    //                     <Link class="nav-link" to="#">
    //                       Blog
    //                     </Link>
    //                   </li>
    //                   <li class="nav-item">
    //                     <Link class="nav-link" to="#">
    //                     Contact Us

    //                     </Link>

    //                   </li>
    //                   <li class="nav-item">
    //                     <Link class="nav-link" to="#">
    //                     <CiSearch  size={20}/>
    //                     </Link>

    //                   </li>

    //                   <li class="nav-item">
    //                     <Link class="nav-link" to="#">
    //                     <div className="d-flex ">
    //                           <div>
    //                             <LuUser2 size={20} />
    //                           </div>
    //                           <div className="mx-2"> Login</div>
    //                         </div>

    //                     </Link>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </nav>
    //     </div>

    //     <div className="row justify-content-center" id={Styles.sectext}>
    //       <div className="col col-md-10">
    //         <div id={Styles.line}>
    //           <p>{heading1}</p>
    //         </div>
    //         <div>
    //           <h5>{heading2}</h5>
    //           <h6>{heading3}</h6>
    //         </div>
    //         <div>
    //           <button class="btn btn-outline-light " type="submit">
    //             {button}
    //             <HiArrowLongRight size={28} />
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row position-relative ">
    //       <div className="col  w-25" id={Styles.scrollmain}>
    //      <img src={scrollmain} alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container-fluid">
      <div
        className="row justify-content-center"
        id={Styles.sec1home}
        style={divStyle}
      >
        <div
          className="col-3  col-md-2 col-lg-2  col-xl-3 h-25"
          id={Styles.seclogo}
        >
          <div className={`${Styles.logonavbar}`}>
            <div>
              <h1>ELITE CARE</h1>
            </div>
          </div>
        </div>
        <div className="col-8   col-md-10 col-lg-10 col-xl-9 h-25">
          <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
              <button
                class="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <div className="d-flex flex-column w-100  ">
                  <div className="row m-0">
                    <div className="col col-md-9 col-lg-9">
                      <ul class="navbar-nav pb-4 pt-4  mb-lg-0">
                        <li class="nav-item ">
                          <a
                            class="nav-link  active"
                            aria-current="page"
                            href="#"
                          >
                            <div className="d-flex ">
                              <div>
                                <FaEnvelope />
                              </div>
                              <div className="mx-2"> Gendusarose@Gmail.com</div>
                            </div>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            <div className="d-flex ">
                              <div>
                                <FaLocationDot />
                              </div>
                              <div className="mx-2">
                                {" "}
                                37825 Harbar Light Road 94560 Zip Code
                                Califorina
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            <div className="d-flex ">
                              <div>
                                <MdCall />
                              </div>
                              <div className="mx-2">4086599856</div>
                            </div>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            <div className="d-flex">
                              <div>Follow Us</div>
                              <div className={Styles.socialicons}>
                                <div className={Styles.icon}>
                                  <FaFacebook size={30} className="" />
                                </div>
                                <div className={Styles.icon}>
                                  <ImInstagram size={30} />
                                </div>
                                <div className={Styles.icon}>
                                  <AiFillTwitterCircle size={30} />
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-3 col-lg-3 pb-4 pt-4  ">
                      <button
                        class="btn btn-outline-light d-flex"
                        type="submit"
                      >
                        BOOK AN APPOINTMENT
                        <HiArrowLongRight size={28} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <ul class="navbar-nav  border-top pt-2  pt-4  mb-lg-0">
                      <li class="nav-item">
                        <Link
                          class="nav-link active"
                          aria-current="page"
                          to="#"
                        >
                          Home
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="#">
                          About Us
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="#">
                          Services Offered
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="#">
                          Surgical Aesthetics
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="#">
                          Non Surgical Aesthetics
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="#">
                          Dentist
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="#">
                          For Men
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="#">
                          Transpotation
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="#">
                          Blog
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="#">
                          Contact Us
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="#">
                          <CiSearch size={20} />
                        </Link>
                      </li>

                      <li class="nav-item">
                        <Link class="nav-link" to="#">
                          <div className="d-flex ">
                            <div>
                              <LuUser2 size={20} />
                            </div>
                            <div className="mx-2"> Login</div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="row justify-content-center" id={Styles.sectext}>
          <div className="col col-md-10">
            <div id={Styles.line}>
              <p>{heading1}</p>
            </div>
            <div>
              <h5>{heading2}</h5>
              <h6>{heading3}</h6>
            </div>
            <div>
              <button class="btn btn-outline-light " type="submit">
                {button}
                <HiArrowLongRight size={28} />
              </button>
            </div>
          </div>
        </div>
        <div className="row position-relative ">
          <div className="col  w-25" id={Styles.scrollmain}>
         <img src={scrollmain} alt="" />
         </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
