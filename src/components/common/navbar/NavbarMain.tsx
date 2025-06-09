import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "./navComponent/Logo";
import NavLinks from "./navComponent/NavLinks";
import UserMenu from "./navComponent/UserMenu";
import Sidebar from "./navComponent/Sidebar";
import RegisterModal from "./navComponent/RegisterModel";

interface User {
  name?: string;
  email?: string;
  phone?: string;
}

const NavbarMain: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.get("/Users/userDetails", {
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
      {/* Fixed, always visible Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Logo scrolled={true} />
          <NavLinks scrolled={true} />
          <div className="flex items-center gap-4">
            <UserMenu
              user={user}
              showDropdown={showProfileDropdown}
              setShowDropdown={setShowProfileDropdown}
              onLogout={handleLogout}
              scrolled={true}
              onOpenRegister={() => setShowRegisterModal(true)}
            />

            {/* Mobile menu icon */}
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="block md:hidden"
              aria-label="Open menu"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png"
                alt="menu"
                className="w-8 h-8"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Push content below fixed navbar with smaller gap */}
      <div className="h-0" />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Register Modal */}
      {showRegisterModal && (
        <RegisterModal onClose={() => setShowRegisterModal(false)} setUser={setUser} />
      )}
    </>
  );
};

export default NavbarMain;
