// import React from "react";
// import "boxicons/css/boxicons.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import Fancybox from "react-fancybox";
// import "react-fancybox/lib/fancybox.css";
// import DateRangePicker from "react-daterange-picker";
// import "react-daterange-picker/dist/styles.css";
// import { FaHome } from "react-icons/fa";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// in general 


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer"; // ✅ تأكد من الاستيراد الصحيح
// // الصفحات
// const Home = () => <h1 style={{ textAlign: "center", marginTop: "100px" }}>🏠 الصفحة الرئيسية</h1>;
// const Places = () => <h1 style={{ textAlign: "center", marginTop: "100px" }}>🌍 المدن</h1>;
// const Blog = () => <h1 style={{ textAlign: "center", marginTop: "100px" }}>✍️ المدونات</h1>;
// const About = () => <h1 style={{ textAlign: "center", marginTop: "100px" }}>ℹ️ من نحن</h1>;
// const Contact = () => <h1 style={{ textAlign: "center", marginTop: "100px" }}>📞 تواصل معنا</h1>;

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <div style={{ minHeight: "100vh", paddingBottom: "80px" }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/places" element={<Places />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//       <Footer /> {/* ✅ تأكد أن الفوتر مضاف هنا */}
//     </Router>
    
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer";
import Home from "./components/pages/Home";
import Places from "./components/pages/places/Places.jsx";
import Amman from "./components/pages/places/Amman.jsx";
import Zarqa from "./components/pages/places/Zarqa";
import Irbid from "./components/pages/places/Irbid";
import Museums from "./components/pages/places/Museums.jsx"; // ✅ استيراد صفحة المتاحف
import PlogDetails from "../src/components/pages/PlogDetails.jsx"; // ✅ استيراد صفحة التفاصيل العامة
import Blog from "../src/components/pages/Blog.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact";
// import SportsClubs from "./SportsClubs";
// import Restaurants from "./Restaurants";
// import Entertainment from "./Entertainment";
// import HistoricalSites from "./HistoricalSites";
// import PhotoSpots from "./PhotoSpots";
// import CultureArts from "./CultureArts";


const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh", paddingBottom: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/amman" element={<Amman />} />
          <Route path="/places/zarqa" element={<Zarqa />} />
          <Route path="/places/irbid" element={<Irbid />} />
          <Route path="/Museums" element={<Museums />} /> {/* ✅ إضافة صفحة المتاحف */}
          <Route path="/Blog" element={<Blog />} />
          <Route path="/PlogDetails" element={<PlogDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          
          
          
          {/* <Route path="/places/sports-clubs" element={<SportsClubs />} />
        <Route path="/places/restaurants" element={<Restaurants />} />
        <Route path="/places/entertainment" element={<Entertainment />} />
        <Route path="/places/historical-sites" element={<HistoricalSites />} />
        <Route path="/places/photo-spots" element={<PhotoSpots />} />
        <Route path="/places/culture-arts" element={<CultureArts />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;