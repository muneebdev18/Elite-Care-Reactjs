import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import ServicesOffered from "./pages/servicesOffered/index";
import SurgicalAsthetics from "./pages/surgicalAsthetics";
import NonSurgicalAsthetics from "./pages/nonSurgicalAsthetics";
import ForMen from "./pages/forMen";
import Dentist from "./pages/dentist";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Transportation from "./pages/transportation";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import BookAppointment from "./pages/BookAppointment";
import TermsAndCondition from './pages/termsandcondition'
import Privacaypolicy from './pages/privacaypolicy'
import Profile from "./pages/myProfile/index";
// Dashboard Routes
import Doctors from "./pages/dashboard/doctor/index";
import Service from "./pages/dashboard/services/index";
import Dashboardview from "./pages/dashboard/dashboardview/Dashboardview";
import AddDoctor from "./pages/dashboard/doctor/AddDoctor";
import AddService from "./pages/dashboard/services/AddService";
import ViewDoctor from "./pages/dashboard/doctor/ViewDoctor";
import ViewService from "./pages/dashboard/services/ViewService";
import Users from "./pages/dashboard/users";
import ContactUs from "./pages/dashboard/contactus";
import Appointment from "./pages/dashboard/appointment";
import ViewAppoitment from "./pages/dashboard/appointment/ViewAppoitment";
import ViewContact from "./pages/dashboard/contactus/ViewContact";
import ViewUser from "./pages/dashboard/users/ViewUser";

import Blogs from "./pages/dashboard/blog";
import Addblog from "./pages/dashboard/blog/Addblog";
import Viewblogs from "./pages/dashboard/blog/Viewblogs";
import Category from "./pages/dashboard/category";
import AddCategory from "./pages/dashboard/category/AddCategory";
import ViewCategory from "./pages/dashboard/category/ViewCategory";

import UpdateblogCategory from "./pages/dashboard/category/Updatecategory";
import Updateblog from "./pages/dashboard/blog/Updateblog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/elite-care" element={<Home />} />
        <Route path="/elite-care/about-us" element={<About />} />
        <Route
          path="/elite-care/services-offered"
          element={<ServicesOffered />}
        />
        <Route
          path="/elite-care/surgical-asthetics"
          element={<SurgicalAsthetics />}
        />
        <Route
          path="/elite-care/non-surgical-asthetics"
          element={<NonSurgicalAsthetics />}
        />
        <Route path="/elite-care/for-men" element={<ForMen />} />
        <Route path="/elite-care/dentist" element={<Dentist />} />
        <Route path="/elite-care/contact-us" element={<Contact />} />
        <Route path="/elite-care/blog" element={<Blog />} />
        <Route path="/elite-care/transportation" element={<Transportation />} />
        <Route path="/elite-care/login" element={<Login />} />
        <Route path="/elite-care/register" element={<Register />} />
        <Route
          path="/elite-care/book-appointment"
          element={<BookAppointment />}
        />
        <Route path="/elite-care/termsandcondition" element={<TermsAndCondition />} />
        <Route path="/elite-care/privacypolicy" element={<Privacaypolicy />} />
        <Route path="/elite-care/profile" element={<Profile />} />
        <Route
          path="/elite-care/dashboard/home"
          element={<Dashboardview />}
        />
        <Route path="/elite-care/dashboard/doctors" element={<Doctors />} />
        <Route path="/elite-care/dashboard/adddoctor" element={<AddDoctor />} />
        <Route path="/elite-care/dashboard/services" element={<Service />} />
        <Route
          path="/elite-care/dashboard/addservice"
          element={<AddService />}
        />
        <Route
          path="/elite-care/dashboard/viewdoctor/:id"
          element={<ViewDoctor />}
        />
        <Route
          path="/elite-care/dashboard/viewservice/:id"
          element={<ViewService />}
        />
        <Route
          path="/elite-care/dashboard/users"
          element={<Users />}
        />
        <Route
          path="/elite-care/dashboard/contactus"
          element={<ContactUs />}
        />
        <Route
          path="/elite-care/dashboard/appointments"
          element={<Appointment />}
        />
        <Route
          path="/elite-care/dashboard/viewappoitment/:id"
          element={<ViewAppoitment />}
        />
        <Route
          path="/elite-care/dashboard/viewcontactus/:id"
          element={<ViewContact />}
        />
        <Route
          path="/elite-care/dashboard/viewusers/:id"
          element={<ViewUser />}
        />
        <Route path="/elite-care/dashboard/blogs" element={<Blogs />} />
        <Route path="/elite-care/dashboard/addblogs" element={<Addblog />} />
        <Route path="/elite-care/dashboard/viewblogs/:id" element={<Viewblogs />} />
        <Route path="/elite-care/dashboard/updateblogs/:id" element={<Updateblog/>} />
        <Route path="/elite-care/dashboard/blogcategory" element={<Category />} />
        <Route path="/elite-care/dashboard/addcategory" element={<AddCategory />} />
        <Route path="/elite-care/dashboard/viewcategory/:id" element={<ViewCategory />} />
        <Route path="/elite-care/dashboard/updatecategory/:id" element={<UpdateblogCategory />} />
      </Routes>
    </Router>

);
}

export default App;