import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import articleImage from '../src/components/img/Screenshot 2025-01-24 235121.png'; // استبدل بالاسم الصحيح للصورة
const Navbar = () => {1
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // إضافة حالة لقائمة المدن

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      dir="rtl"
      style={{
        position: "fixed",
        top: 0,
        width: "100%",

        zIndex: 1000,
        transition: "background-color 0.3s ease-in-out",
        backgroundColor: isScrolled ? "rgba(2, 44, 67, 0.7)" : "#022C43",
        padding: "0px 0",
        opacity: "0.8",
      }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
        <img
  src={articleImage} // تأكد من أن هذا السطر غير مفعل
  className="img-fluid"
  alt="صورة مقالات"
  style={{ objectFit: "cover", height: "50px" }}
/>
     </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul
              className="navbar-nav mx-auto text-center"
              style={{ gap: "20px" }}
            >
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{ color: "#FFD700" }}>
                  الصفحة الرئيسية
                </Link>
              </li>

              {/* القائمة المنسدلة للمدن */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                  }}
                  style={{ color: "white", cursor: "pointer" }}
                >
                  المدن
                </Link>
                <div
                  className={`dropdown-menu ${isOpen ? "show" : ""}`}
                  style={{ backgroundColor: "#115173" }}
                  aria-labelledby="navbarDropdown"
                >
                  <Link className="dropdown-item" to="/places/amman" style={{ color: "#FFD700" }}>
                    عمان
                  </Link>
                  <Link className="dropdown-item" to="/places/zarqa" style={{ color: "#FFD700" }}>
                    الزرقاء
                  </Link>
                  <Link className="dropdown-item" to="/places/irbid" style={{ color: "#FFD700" }}>
                    إربد
                  </Link>
                </div>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Blog"
                  style={{ color: "white" }}
                >
                  المدونات
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  style={{ color: "white" }}
                >
                  من نحن
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  style={{ color: "white" }}
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
            <div style={{ display: "flex", gap: "15px" }}>
              <a
                href="#"
                className="btn btn-outline-light me-2"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  borderColor: "#FFD700",
                  color: "#FFD700",
                }}
              >
                <i className="fa fa-search" aria-hidden="true" />
                البحث
              </a>
              <a
                href="#"
                className="btn"
                style={{ backgroundColor: "#FFD700", color: "#022C43" }}
                onClick={() => alert("Show Modal")}
              >
                تسجيل الدخول / انشاء حساب
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;