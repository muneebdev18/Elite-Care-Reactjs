import React, { useEffect } from "react";
import { MdDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { screenSet } from "../../../global/features/Dashboard/screensize/ScreenSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import {  selectIsMenuOpen, toggleMenu } from "../../../global/features/Dashboard/screenmenu/MenuSlice";
import { FaServicestack ,FaUserCheck } from "react-icons/fa";
import { FaUserDoctor,FaBriefcaseMedical } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";
import { MdOutlineWeb } from "react-icons/md";
import { BsDisplayFill } from "react-icons/bs";



import Style from '../style.module.css'

const Sidebar = () => {
  const data = [
    {
      title: "Dashboard",
      path: "elite-care/dashboard/home",
      icon: <BsDisplayFill />,
    },
    {
      title: "Doctors",
      path: "elite-care/dashboard/doctors",
      icon: <FaUserDoctor />,
    },
    {
      title: "Services",
      path: "elite-care/dashboard/services",
      icon: <FaServicestack />,
    },
    // {
    //   title: "Users",
    //   path: "elite-care/dashboard/users",
    //   icon: <FaUserCheck />,
    // },

    {
      title: "Contact Us",
      path: "elite-care/dashboard/contactus",
      icon: <BiSolidContact />,
    },
    {
      title: "Appointments",
      path: "elite-care/dashboard/appointments",
      icon: <FaBriefcaseMedical />,
    },
    {
      title: "Blogs",
      path: "elite-care/dashboard/blogs",
      icon: <MdOutlineWeb />,
    },
    {
      title: "Blog Category",
      path: "elite-care/dashboard/blogcategory",
      icon: <MdDashboard />,
    },
  ]
  const disptach = useDispatch();

  const isMenuOpen = useSelector(selectIsMenuOpen);
  const { screensize } = useSelector((state) => state.screen);
 
  useEffect(() => {
    const handlesize = () => disptach(screenSet(window.innerWidth));

    window.addEventListener("resize", handlesize);
    handlesize();

    return () => window.removeEventListener("resize", handlesize);
  }, [disptach]);


  return (
    <div className={`container-fluid  gx-0 ${Style.main}`}>
      <div
        className={Style.sidebar}
        style={{ width: isMenuOpen ? "300px" : "50px"   } }
      >
        <div className={Style.top_section}>
          <h1 style={{ display: isMenuOpen ? "block" : "none" }}>
            <Link to={'/elite-care'}>ELITE CARE</Link>
            
          </h1>
          <div
            style={{ marginLeft: isMenuOpen ? "40px" : "0px" }}
            className={Style.bars}
            onClick={() => disptach(toggleMenu())}
          >
            <GiHamburgerMenu  size={26} color="#fff"/>
          </div>
        </div>
        {
          data.map((items, index) => (
            <NavLink
            to={`/${items.path}`}
              key={index}
              className={({ isActive }) =>
               isActive ?`${Style.active} ${Style.link}` : ` ${Style.link}`
            }           
             
              data-toggle="tooltip" data-placement="right" title={items.title}
            >
              <div className={Style.icon}>{items.icon}</div>
              <div
                style={{ display: isMenuOpen ? "block" : "none" }}
                className={Style.text_link}
              >
                {items.title}
              </div>
            </NavLink>
          ))}
      </div>
      
    </div>
  );
};

export default Sidebar;
