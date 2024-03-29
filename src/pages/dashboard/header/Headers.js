import React from 'react';

import { logout } from '../../../global/features/Webapp/Auth/loginSlice';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import Style from './Style.module.css';

const Headers = () => {
  // let location = useLocation();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  // let Heading = location.pathname.split('/').pop().toUpperCase().length > 23 ? "" : location.pathname.split('/').pop().toUpperCase()

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logout());
    navigate('/elite-care/login');
  }

  return (
    <div className={Style.header}>
      <div className=''>
        <div className='row  justify-content-between align-items-center'>
          <div className='col col-md-12'>
            <button className={Style.btn_doc} onClick={() => handleLogout()}>Logout  <IoIosLogOut />  </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Headers

