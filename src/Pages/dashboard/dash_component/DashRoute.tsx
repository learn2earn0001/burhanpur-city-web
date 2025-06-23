import { Route, Routes } from "react-router-dom";
import RegisterBusinessForm from "./RegisterBusinessForm";
import DashboardLayout from "./DashboardLayout";
import Overview from "./Overview";
import Leads from "./Leads";
import Clients from "./Clients";
import Settings from "./Settings"; // Fix: Don't import from "lucide-react"
import InboxSection from "./InboxSection";
import Business from "./Business";

const DashRoute = () => {
  return (
    <Routes>
      {/* Route for Add Business outside layout */}
      

      {/* Nest routes inside DashboardLayout */}
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/Inbox" element={<InboxSection/>} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/add-business" element={<RegisterBusinessForm  />} />
        <Route path="/business" element={<Business/>} />
        
      </Route>
    </Routes>
  );
};

export default DashRoute;
