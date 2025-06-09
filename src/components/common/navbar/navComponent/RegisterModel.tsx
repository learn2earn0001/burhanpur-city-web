import React, { useEffect } from "react";
import RegisterPage from "@/Pages/registration/Registration";
import axios from "@/axois";

interface Props {
  onClose: () => void;
  setUser: (user: any) => void;
}

const RegisterModal: React.FC<Props> = ({ onClose, setUser }) => {
  const handleClose = async () => {
    onClose();
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const res = await axios.get("/Users/adminLogin", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.data.success) setUser(res.data.user);
      } catch (err) {
        console.error("Error fetching user after modal close", err);
      }
    }
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl relative">
        <RegisterPage onClose={handleClose} />
      </div>
    </div>
  );
};

export default RegisterModal;
