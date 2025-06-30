import { useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from "sonner";
import MainRoutes from './routes/MainRoutes';
import PopAd from "./Pages/Adds/adds/PopAd";

function App() {

  // ✅ Prevent scroll reset on refresh
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <BrowserRouter>
      <Toaster
        position="bottom-center"
        richColors
        expand
        closeButton
        className="max-w-[98%]"
      />
      <MainRoutes />
      <div className="min-h-screen">
        <PopAd/>
      </div>
    </BrowserRouter>
  );
}

export default App;
