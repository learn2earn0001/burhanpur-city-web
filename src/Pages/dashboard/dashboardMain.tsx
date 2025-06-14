import Dashboard from "./dash_component/Dashboard";
import RegisterBusinessForm from "./dash_component/RegisterBusinessForm";
import StatCard from "./dash_component/StatCard";
import TargetCard from "./dash_component/TargetCard";

const DashboardMain: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Customers"
          value={3782}
          percentage={11.01}
          isIncrease={true}
        />
        <StatCard
          title="Orders"
          value={5359}
          percentage={-9.05}
          isIncrease={false}
        />
        <TargetCard
          percentage={75.55}
          amount={3287}
          target={20}
        />
      </div>

      {/* If you still need Dashboard below */}
      <div className="mt-10">
        <Dashboard />
        <RegisterBusinessForm />
        
      </div>
    </div>
  );
};

export default DashboardMain;

