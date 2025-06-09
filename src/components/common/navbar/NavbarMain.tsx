import React, { useState, useEffect, useRef } from "react";
// import Sidebar from "./Sidebar";
// import { AddListing } from "../AllIcons/AddListing";
// import UserIcon from "../AllIcons/UserIcon";
import { Link } from "react-router-dom";
// import axios from "./../../../axios";
// import Register from "./Images/Register";
// import logo from '../ui/Images/logo.jpg';
import Sidebar from "./navComponent/Sidebar";
import axios from "@/axois";
import RegisterPage from "@/Pages/registration/Registration";
import { FaUser } from "react-icons/fa";

 

interface User {
  name?: string;
  email?: string;
  phone?: string;
}

const NavbarMain: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // NavbarMain scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside dropdown to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch user on mount if token exists
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.get<{ success: boolean; user: User }>("/Users/userDetails", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (res.data.success) setUser(res.data.user);
        } catch {
          localStorage.removeItem("token");
          setUser(null);
        }
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setShowProfileDropdown(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          scrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          < Link to="/" className="flex items-center gap-3">
            <img
              src=''
              alt="logo"
              className="w-15 h-15 rounded-full border-2 border-blue-500 hover:scale-110 transition"
            />
            <span
              className={`font-bold text-xl ${
                scrolled ? "text-gray-900" : "text-black drop-shadow-lg"
              }`}
            >
              Burhanpur
            </span>
          </ Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 relative">
            <Link
  to="/"
   
>
  Home
</Link>


            <div className="relative group">
              <button
                type="button"
                className={`text-xl font-semibold transition ${
                  scrolled ? "text-gray-700" : "text-black"
                } group-hover:text-blue-600`}
              >
                Explore
              </button>
              <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded-md py-2 w-40 z-50">
                <Link
                  to="/explore-more"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  More Explore
                </Link>
                < Link
                  to="/category"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Category
                </ Link>
              </div>
            </div>

            <div className="relative group">
              <button
                type="button"
                className={`text-xl font-semibold transition ${
                  scrolled ? "text-gray-700" : "text-black"
                } group-hover:text-blue-600`}
              >
                Pages
              </button>
              <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded-md py-2 w-40 z-50">
                < Link
                  to="/about"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  About Us
                </ Link>
                < Link
                  to="/contact"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Contact Us
                </ Link>
              </div>
            </div>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            {/* User / Avatar */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setShowProfileDropdown((prev) => !prev)}
                  className="rounded-full border-2 border-indigo-500 p-1 w-10 h-10 flex items-center justify-center bg-indigo-100"
                  aria-label="User menu"
                >
                  <span className="text-indigo-600 font-bold text-lg">
                    {user.name?.charAt(0).toUpperCase()}
                  </span>
                </button>

                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-4 z-50 w-60">
                    <p className="text-sm font-semibold">👤 {user.name}</p>
                    <p className="text-sm text-gray-600">📧 {user.email}</p>
                    <p className="text-sm text-gray-600">📱 {user.phone}</p>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-sm"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowRegisterModal(true)}
                aria-label="User Register"
              >
                <FaUser fill={scrolled ? "#1f2937" : "black"} />

              </button>
            )}

            {/* Add Listing */}
            {/* <AddListing fill={scrolled ? "#1f2937" : "white"} /> */}

            {/* Hamburger for Mobile */}
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="block md:hidden"
              aria-label="Open menu"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png"
                alt="menu"
                className="w-10 h-5 md:w-8 md:h-8 lg:w-8 lg:h-8 bg-white"
              />
            </button>
          </div>
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="h-20" />

      {/* Register Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl relative">
            <RegisterPage
              onClose={() => {
                setShowRegisterModal(false);
                // Fetch user again after modal close
                const fetchUser = async () => {
                  const token = localStorage.getItem("token");
                  if (token) {
                    try {
                      const res = await axios.get<{ success: boolean; user: User }>("/Users/adminLogin", {
                        headers: { Authorization: `Bearer ${token}` },
                      });
                      if (res.data.success) setUser(res.data.user);
                    } catch (err) {
                      console.error("Error fetching user after modal close", err);
                    }
                  }
                };
                fetchUser();
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarMain;
