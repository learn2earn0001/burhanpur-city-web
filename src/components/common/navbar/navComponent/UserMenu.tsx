import React, { useRef, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Avatar, AvatarImage, AvatarFallback } from "../../../ui/avatar"; // Make sure this path is correct

interface Props {
  user: {
    name?: string;
    email?: string;
    phone?: string;
    avatarUrl?: string;
  } | null;
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  onLogout: () => void;
  scrolled: boolean;
  onOpenRegister: () => void;
}

const UserMenu: React.FC<Props> = ({
  user,
  showDropdown,
  setShowDropdown,
  onLogout,
  scrolled,
  onOpenRegister,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShowDropdown]);

  if (!user) {
    return (
      <button onClick={onOpenRegister} aria-label="User Register">
        <FaUser fill={scrolled ? "#1f2937" : "black"} />
      </button>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown((prev) => !prev)}
        aria-label="User menu"
        className="focus:outline-none"
      >
        <Avatar className="w-10 h-10 border-2 border-red-500 bg-indigo-100">
          <AvatarImage
            src="https://avatar.iran.liara.run/public/44"
            alt={user.name || "User Avatar"}
          />

          <AvatarFallback className="text-indigo-600 font-bold text-lg">
            {user.name?.charAt(0).toUpperCase() || <FaUser />}
          </AvatarFallback>
        </Avatar>
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-4 z-50 w-60">
          <p className="text-sm font-semibold">👤 {user.name}</p>
          <p className="text-sm text-gray-600">📧 {user.email}</p>
          <p className="text-sm text-gray-600">📱 {user.phone}</p>
          <button
            onClick={onLogout}
            className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-sm"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
