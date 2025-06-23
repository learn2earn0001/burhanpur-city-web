// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
//   BarChart, Bar, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
// } from "recharts";

// interface SidebarItem {
//   name: string;
//   icon: string;
//   link: string;
//   badge?: number;
// }

// const Dashboard: React.FC = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [profileImage, setProfileImage] = useState("https://i.pravatar.cc/100");
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedImage = localStorage.getItem("dashboardProfileImage");
//     if (savedImage) {
//       setProfileImage(savedImage);
//     }
//   }, []);

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         if (reader.result) {
//           const base64Image = reader.result.toString();
//           setProfileImage(base64Image);
//           localStorage.setItem("dashboardProfileImage", base64Image);
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//   const handleImageClick = () => fileInputRef.current?.click();

//   const primaryColor = "#6D3871";

//   const sidebarItems: SidebarItem[] = [
//     { name: "Overview", icon: "📊", link: "overview" },
//     { name: "Leads", icon: "📋", link: "leads" },
//     { name: "Inbox", icon: "📨", badge: 4, link: "inbox" },
//     { name: "Clients", icon: "👥", link: "clients" },
//     { name: "Settings", icon: "⚙️", link: "settings" },

//     { name: "Add Business", icon: "➕", link: "addBusiness" }
//   ];

//   const taskStats = [
//     { name: "Prioritized Tasks", value: 83, color: "from-blue-200 to-blue-500" },
// { name: "Additional Tasks", value: 56, color: "from-blue-500 to-blue-200" },
//   ];

//   const stats = [
//     { label: "Employees", value: 78 },
//     { label: "Hirings", value: 56 },
//     { label: "Projects", value: 203 },
//   ];

//   const focusData = [
//     { name: "Week 1", Focus: 30, Distraction: 70 },
//     { name: "Week 2", Focus: 45, Distraction: 55 },
//     { name: "Week 3", Focus: 60, Distraction: 40 },
//     { name: "Week 4", Focus: 80, Distraction: 20 },
//   ];

//   const leadsData = [
//     { name: "Mon", Leads: 24 },
//     { name: "Tue", Leads: 30 },
//     { name: "Wed", Leads: 20 },
//     { name: "Thu", Leads: 27 },
//     { name: "Fri", Leads: 18 },
//     { name: "Sat", Leads: 23 },
//   ];

//   const weeklyProgressData = [
//     { week: "Week 1", Completed: 12, Incomplete: 8 },
//     { week: "Week 2", Completed: 15, Incomplete: 5 },
//     { week: "Week 3", Completed: 18, Incomplete: 2 },
//     { week: "Week 4", Completed: 20, Incomplete: 0 },
//   ];

//   const developedAreas = [
//     { subject: "Sport Skills", A: 71 },
//     { subject: "Blogging", A: 92 },
//     { subject: "Leadership", A: 33 },
//     { subject: "Meditation", A: 65 },
//     { subject: "Philosophy", A: 50 },
//   ];

//   return (
//     <div className="min-h-screen bg-white text-gray-800 font-sans scroll-smooth">

//       {/* Header */}
//       <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <a href="/" className="text-2xl font-extrabold" style={{ color: primaryColor }}>
//             B2B Dashboard
//           </a>

//           <nav className="hidden sm:flex space-x-8 font-medium text-gray-600">
//             {sidebarItems.map((item, i) => (
//               <a key={i} href={`#${item.link}`} className="hover:text-black transition">
//                 {item.name}
//               </a>
//             ))}
//           </nav>

//           <div className="flex items-center space-x-4">
//             <input
//               type="file"
//               ref={fileInputRef}
//               onChange={handleImageChange}
//               accept="image/*"
//               className="hidden"
//             />
//             <div className="hidden sm:flex flex-col items-end text-right">
//               <div className="text-sm font-semibold text-gray-800">Lora Piterson</div>
//               <div className="text-xs text-gray-500">UX/UI Designer</div>
//             </div>
//             <img
//               src={profileImage}
//               alt="Profile"
//               className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
//               onClick={handleImageClick}
//             />
//             <button
//               onClick={toggleSidebar}
//               className="sm:hidden rounded-md p-2 text-gray-500 hover:text-gray-900"
//             >
//               <svg className="w-6 h-6" fill="none" stroke={primaryColor} strokeWidth={2} viewBox="0 0 24 24">
//                 {sidebarOpen ? (
//                   <path d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path d="M3 12h18M3 6h18M3 18h18" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Body */}
//       <div className="h-[calc(100vh-80px)] max-w-7xl mx-auto px-6 py-4 flex gap-6 overflow-hidden">
//         {/* Sidebar */}
//         {/* <aside className="w-56 flex-shrink-0 overflow-y-auto bg-white rounded-lg shadow p-4 max-h-full scrollbar-none">
//          */}
//          <aside className="w-56 flex-shrink-0 overflow-y-auto bg-[#e0f2ff] rounded-lg shadow p-4 max-h-full scrollbar-hidden">

//           <div className="space-y-4">
//             {sidebarItems.map((item, idx) => (
//               <a
//                 key={idx}
//                 href={`#${item.link}`}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   if (item.name === "Add Business") {
//                     navigate("/dash/add-business");
//                   } else {
//                     const el = document.getElementById(item.link);
//                     if (el) el.scrollIntoView({ behavior: 'smooth' });
//                   }
//                 }}
//              className="flex items-center rounded-lg py-2 px-3 font-medium text-blue-700 hover:bg-blue-100 transition"


//               >
//                 <span className="text-xl mr-3">{item.icon}</span>
//                 <span>{item.name}</span>
//                 {item.badge && (
//                   <span className="ml-auto text-xs bg-blue-100 text-blue-700 rounded-full px-2 py-0.5">

//                     {item.badge}
//                   </span>
//                 )}
//               </a>
//             ))}
//           </div>

//           {/* Plan Section */}
//           <div className="mt-6 bg-white border rounded-lg p-4 text-sm text-gray-600 space-y-2 shadow">
//             <h3 className="text-md font-semibold text-gray-800 mb-2">Your Plan</h3>
//             <p><strong>Plan:</strong> Premium</p>
//             <p><strong>Features:</strong> 100 GB Storage, Unlimited Leads, Team Access</p>
//             <p><strong>Next Billing:</strong> July 5, 2025</p>
//             <button className="mt-2 px-4 py-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-sm">
//               Upgrade
//             </button>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 overflow-y-auto pr-2 space-y-8 pb-10 scrollbar-none">
//           {/* Overview */}
//           <div id="overview" className="scroll-mt-24">
//             <h1 className="text-2xl font-bold mb-4">Overview</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {taskStats.map((task, index) => (
//                 <div
//                   key={index}
//                   className={`bg-gradient-to-br ${task.color} rounded-xl text-white shadow p-6 flex flex-col justify-between`}
//                 >
//                   <div className="text-sm mb-2">{task.name}</div>
//                   <div className="text-3xl font-bold">{task.value}%</div>
//                   <div className="text-xs mt-1">Avg. Completed</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Leads */}
//           <div id="leads" className="scroll-mt-24">
//             <h1 className="text-2xl font-bold mb-4">Leads</h1>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {stats.map((item, i) => (
//                 <div key={i} className="bg-blue-200 rounded-xl shadow p-6 text-center">
//                   <div className="text-sm text-black mb-2">{item.label}</div>
//                   <div className="text-3xl font-bold text-black">{item.value}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Inbox */}
//           <div id="inbox" className="scroll-mt-24">
//             <h1 className="text-2xl font-bold mb-4">Inbox</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="bg-white rounded-xl shadow p-6">
//                 <h2 className="text-lg font-semibold text-gray-800 mb-4">Focus Analysis</h2>
//                 <ResponsiveContainer width="100%" height={250}>
//                   <LineChart data={focusData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Line type="monotone" dataKey="Focus" stroke="#22c55e" strokeWidth={3} />
//                     <Line type="monotone" dataKey="Distraction" stroke="#ef4444" strokeWidth={3} />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>

//               <div className="bg-white rounded-xl shadow p-6">
//                 <h2 className="text-lg font-semibold text-gray-800 mb-4">Weekly Leads</h2>
//                 <ResponsiveContainer width="100%" height={250}>
//                   <BarChart data={leadsData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="Leads" fill="#3b82f6" radius={[5, 5, 0, 0]} />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           </div>

//           {/* Clients */}
//           <div id="clients" className="scroll-mt-24">
//             <h1 className="text-2xl font-bold mb-4">Clients</h1>
//             <div className="bg-white rounded-xl shadow p-6">
//               <h2 className="text-lg font-semibold text-gray-800 mb-4">Weekly Progress</h2>
//               <ResponsiveContainer width="100%" height={250}>
//                 <BarChart data={weeklyProgressData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="week" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="Completed" fill="#16a34a" radius={[5, 5, 0, 0]} />
//                   <Bar dataKey="Incomplete" fill="#f43f5e" radius={[5, 5, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Settings */}
//           <div id="settings" className="scroll-mt-24">
//             <h1 className="text-2xl font-bold mb-4">Settings</h1>
//             <div className="bg-white rounded-xl shadow p-6">
//               <h2 className="text-lg font-semibold text-gray-800 mb-4">Developed Areas</h2>
//               <ResponsiveContainer width="100%" height={300}>
//                 <RadarChart cx="50%" cy="50%" outerRadius="80%" data={developedAreas}>
//                   <PolarGrid />
//                   <PolarAngleAxis dataKey="subject" />
//                   <PolarRadiusAxis angle={30} domain={[0, 100]} />
//                   <Radar name="Score" dataKey="A" stroke="#1d4ed8" fill="#1d4ed8" fillOpacity={0.6} />
//                   <Legend />
//                 </RadarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
