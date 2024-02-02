import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import ServicesOffered from "./pages/servicesOffered";
import SurgicalAsthetics from "./pages/surgicalAsthetics";
import NonSurgicalAsthetics from "./pages/nonSurgicalAsthetics";
import ForMen from "./pages/forMen";
import Dentist from "./pages/dentist";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Transportation from "./pages/transportation";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/elite-care" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services-offered" element={<ServicesOffered />} />
        <Route path="/surgical-asthetics" element={<SurgicalAsthetics />} />
        <Route
          path="/non-surgical-asthetics"
          element={<NonSurgicalAsthetics />}
        />
        <Route path="/for-men" element={<ForMen />} />
        <Route path="/dentist" element={<Dentist />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
