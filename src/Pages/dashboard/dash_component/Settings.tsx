import React from "react";
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend
} from "recharts";

const Settings: React.FC = () => {
  const developedAreas = [
    { subject: "Sport Skills", A: 71 },
    { subject: "Blogging", A: 92 },
    { subject: "Leadership", A: 33 },
    { subject: "Meditation", A: 65 },
    { subject: "Philosophy", A: 50 },
  ];

  return (
    <div className="scroll-mt-24 p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Developed Areas</h2>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={developedAreas}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar name="Score" dataKey="A" stroke="#1d4ed8" fill="#1d4ed8" fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Settings;
