import React from "react";
import { Link } from "react-router-dom";
import { FiUser, FiLogOut, FiGrid, FiBox, FiClipboard, FiGift } from "react-icons/fi";

interface Props {
  user: {
    name?: string;
  } | null;
  showDropdown: boolean;
  setShowDropdown: (show: boolean) => void;
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
  const firstLetter = user?.name?.charAt(0).toUpperCase() || "U";

  return (
    <div className="relative">
      {user ? (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span className="text-sm mr-2">Hi! {user.name}</span>
          <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
            {firstLetter}
          </div>
        </div>
      ) : (
        <button
          onClick={onOpenRegister}
          className="bg-indigo-600 text-white px-4 py-1 rounded-md hover:bg-indigo-700"
        >
          Login / Register
        </button>
      )}

      {showDropdown && user && (
        <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-xl p-4 w-60 z-50">
          <p className="font-medium text-gray-700 mb-2">Welcome!</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/business/dashboard" className="flex items-center gap-2 hover:text-indigo-600">
                <FiGrid /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/profile" className="flex items-center gap-2 hover:text-indigo-600">
                <FiUser /> Profile
              </Link>
            </li>
            <li>
              <Link to="/inquiries" className="flex items-center gap-2 hover:text-indigo-600">
                <FiClipboard /> Inquiries
              </Link>
            </li>
            <li>
              <Link to="/buy-leads" className="flex items-center gap-2 hover:text-indigo-600">
                <FiBox /> Buy Leads
              </Link>
            </li>
            <li>
              <Link to="/membership" className="flex items-center gap-2 hover:text-indigo-600">
                <FiGift /> My Membership
              </Link>
            </li>
          </ul>
          <button
            onClick={onLogout}
            className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 rounded-md text-sm flex items-center justify-center gap-2"
          >
            <FiLogOut /> Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
