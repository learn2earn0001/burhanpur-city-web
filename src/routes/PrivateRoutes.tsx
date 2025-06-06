import Home from "@/Pages/home/Home";
import { Routes, Route, Navigate } from "react-router-dom";


const PrivateRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
     

      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
};

export default PrivateRoutes;