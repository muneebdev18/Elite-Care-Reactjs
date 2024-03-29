import React from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import logo from '../../assets/about-banner.png'
import ProfileForm from './profileForm'
const Profile = () => {
    const data = {
        h1: null,
        h2: "ABOUT US",
        h3: null,
        image: logo,
        button: null,
        height: "675px",
        imgTop: "165px",
      };
  return (
    <div>
        <Navbar data={data}/>
        <ProfileForm/>
        <Footer/>
    </div>
  )
}

export default Profile