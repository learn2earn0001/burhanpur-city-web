import React from "react";
import { Link } from "react-router-dom";

interface Props {
  scrolled: boolean;
}

const Logo: React.FC<Props> = ({ scrolled }) => (
  <Link to="/" className="flex items-center gap-3">
    <img
      src="/logo.png"
      alt="logo"
      className="w-12 h-12 rounded-full border-2 border-blue-500 hover:scale-110 transition duration-300"
    />
    <span
      className={`font-bold text-xl ${
        scrolled ? "text-gray-900" : "text-black"
      }`}
    >
      Burhanpur
    </span>
  </Link>
);

export default Logo;
