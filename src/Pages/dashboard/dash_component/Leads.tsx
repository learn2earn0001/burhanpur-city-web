import React from "react";

const Leads: React.FC = () => {
  const stats = [
    { label: "Employees", value: 78 },
    { label: "Hirings", value: 56 },
    { label: "Projects", value: 203 },
  ];

  return (
    <div className="scroll-mt-24 p-6">
      <h1 className="text-2xl font-bold mb-4">Leads</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, i) => (
          <div key={i} className="bg-blue-200 rounded-xl shadow p-6 text-center">
            <div className="text-sm text-black mb-2">{item.label}</div>
            <div className="text-3xl font-bold text-black">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leads;
