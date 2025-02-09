import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#022C43]/70" : "bg-[#022C43]"
      } opacity-80`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/">
            <img
              src="/your-logo.png" // استبدل باسم الصورة الحقيقي
              className="h-12 object-cover"
              alt="صورة مقالات"
            />
          </Link>

          {/* زر القائمة للجوال */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="text-2xl">&#9776;</span>
          </button>

          {/* القائمة */}
          <div
            className={`lg:flex flex-col lg:flex-row items-center gap-6 lg:gap-8 text-center absolute lg:relative bg-[#022C43] lg:bg-transparent w-full lg:w-auto transition-all duration-300 ${
              menuOpen ? "top-16 right-0 p-4 shadow-lg" : "hidden lg:flex"
            }`}
          >
            <Link className="text-[#FFD700] hover:text-white" to="/">
              الصفحة الرئيسية
            </Link>

            {/* المدن - القائمة المنسدلة */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-300 cursor-pointer"
              >
                المدن ▼
              </button>
              <div
                className={`absolute right-0 mt-2 w-40 bg-[#115173] rounded shadow-lg transition-all duration-300 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <Link className="block px-4 py-2 text-[#FFD700] hover:bg-[#0d3a5a]" to="/places/amman">
                  عمان
                </Link>
                <Link className="block px-4 py-2 text-[#FFD700] hover:bg-[#0d3a5a]" to="/places/zarqa">
                  الزرقاء
                </Link>
                <Link className="block px-4 py-2 text-[#FFD700] hover:bg-[#0d3a5a]" to="/places/irbid">
                  إربد
                </Link>
              </div>
            </div>

            <Link className="text-white hover:text-gray-300" to="/Blog">
              المدونات
            </Link>
            <Link className="text-white hover:text-gray-300" to="/About">
              من نحن
            </Link>
            <Link className="text-white hover:text-gray-300" to="/contact">
              تواصل معنا
            </Link>

            {/* أزرار البحث وتسجيل الدخول */}
            <div className="flex gap-4 mt-4 lg:mt-0">
              <button className="flex items-center gap-2 border border-[#FFD700] text-[#FFD700] px-4 py-2 rounded hover:bg-[#FFD700] hover:text-[#022C43] transition">
                <i className="fa fa-search" aria-hidden="true" />
                البحث
              </button>
              <button
                className="bg-[#FFD700] text-[#022C43] px-4 py-2 rounded hover:bg-[#e6c200] transition"
                onClick={() => alert("Show Modal")}
              >
                تسجيل الدخول / انشاء حساب
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;