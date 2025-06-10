import React from "react";
import { FaUser } from "react-icons/fa";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../../ui/avatar"; // path check kar lena

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu"; // Yeh tumhara Radix dropdown component path hona chahiye

interface User {
  name?: string;
  email?: string;
  phone?: string;
  avatarUrl?: string;
}

interface Props {
  user: User | null;
  onLogout: () => void;
  scrolled: boolean;
  onOpenRegister: () => void;
}

const UserMenu: React.FC<Props> = ({
  user,
  onLogout,
  scrolled,
  onOpenRegister,
}) => {
  if (!user) {
    return (
      <button onClick={onOpenRegister} aria-label="Register/Login">
        <FaUser fill={scrolled ? "#1f2937" : "#ffffff"} className="w-6 h-6" />
      </button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="User menu"
          className="focus:outline-none"
        >
          <Avatar className="w-10 h-10 border-2 border-red-500 bg-indigo-100">
            <AvatarImage
              src={user.avatarUrl || "https://avatar.iran.liara.run/public/44"}
              alt={user.name || "User Avatar"}
            />
            <AvatarFallback className="text-indigo-600 font-bold text-lg">
              {user.name?.charAt(0).toUpperCase() || <FaUser />}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent
          sideOffset={6}
          className="w-64 bg-white rounded-md shadow-lg p-4"
        >
          <p className="text-sm font-semibold">👤 {user.name}</p>
          <p className="text-sm text-gray-600 truncate">📧 {user.email}</p>
          <p className="text-sm text-gray-600">📱 {user.phone}</p>
          <DropdownMenuItem
            className="mt-4 cursor-pointer bg-red-500 text-white rounded-md px-3 py-2 text-center hover:bg-red-600"
            onSelect={onLogout}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

export default UserMenu;
