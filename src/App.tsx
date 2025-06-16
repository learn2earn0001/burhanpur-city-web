// import { Home } from 'lucide-react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from "sonner";
// import Home from './Pages/home/Home';
import MainRoutes from './routes/MainRoutes';
// import PrivateRoutes from './routes/PrivateRoutes';
function App() {
  return (
   <>
    <BrowserRouter>
     <Toaster 
        position="top-center"  // Moves the toast to the bottom (good for mobile)
        richColors // Adds better color styles
        expand // Expands toast if needed
        closeButton // Allows users to close it
        className="max-w-[98%]" // Adjusts width for mobile screens
      />
    {/* <h1>prem</h1> */}
    {/* <Home/> */}
    {/* <PrivateRoutes/> */}
    
  <MainRoutes/>
    </BrowserRouter>
   </>
  )
}

export default App