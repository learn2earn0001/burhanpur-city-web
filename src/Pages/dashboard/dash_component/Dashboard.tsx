// import React, { useState } from 'react';

// interface SidebarItem {
//   name: string;
//   icon: string;
//   link: string;
//   badge?: number;
// }

// interface DashboardProps {}

// const Dashboard: React.FC<DashboardProps> = () => {
//   const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

//   const toggleSidebar = (): void => setSidebarOpen(!sidebarOpen);

//   const sidebarItems: SidebarItem[] = [
//     { name: 'Dashboard', icon: '🏠', link: '#' },
//     { name: 'Kanban', icon: '📋', link: '#' },
//     { name: 'Inbox', icon: '📨', badge: 3, link: '#' },
//     { name: 'Profile', icon: '👤', link: '#' },
//     { name: 'Products', icon: '🛒', link: '#' },
//     { name: 'Sign In', icon: '🔑', link: '#' },
//     { name: 'Sign Up', icon: '✍️', link: '#' },
//   ];

//   const widgetCount: number = 6;
//   const summaryItems: string[] = ['Revenue', 'Sales', 'Customers', 'Feedback'];

//   const primaryColor = '#B079C2';
//   const secondaryColor = '#0705F6';

//   return (
//     <div className="min-h-screen bg-white text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>
//       {/* Sticky Header */}
//       <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
//           <a href="/" className="text-4xl font-extrabold" style={{ color: primaryColor }}>
//             My Company
//           </a>
//           <nav className="hidden sm:flex space-x-12 font-semibold text-gray-600">
//             <a href="#" className="hover:text-gray-900 transition">Dashboard</a>
//             <a href="#" className="hover:text-gray-900 transition">Kanban</a>
//             <a href="#" className="hover:text-gray-900 transition">Products</a>
//             <a href="#" className="hover:text-gray-900 transition">Profile</a>
//           </nav>
//           <button
//             onClick={toggleSidebar}
//             aria-label="Toggle navigation menu"
//             aria-expanded={sidebarOpen}
//             className="sm:hidden rounded-md p-2 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke={primaryColor}
//               strokeWidth={2}
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               viewBox="0 0 24 24"
//             >
//               {sidebarOpen ? (
//                 <path d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path d="M3 12h18M3 6h18M3 18h18" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </header>

//       {/* Sidebar Mobile */}
//       <div className={`fixed inset-0 z-40 sm:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
//         <div
//           onClick={toggleSidebar}
//           className="fixed inset-0 bg-black opacity-30"
//           aria-hidden="true"
//         />
//         <aside
//           role="dialog"
//           aria-modal="true"
//           className="fixed top-0 left-0 bottom-0 w-64 p-6 bg-white shadow-lg rounded-r-xl overflow-y-auto"
//         >
//           <nav className="space-y-4">
//             {sidebarItems.map((item, idx) => (
//               <a
//                 key={idx}
//                 href={item.link}
//                 className="flex items-center rounded-lg py-2 px-3 font-medium text-gray-700 hover:bg-indigo-50 transition"
//                 style={{ color: primaryColor }}
//               >
//                 <span className="text-xl mr-3">{item.icon}</span>
//                 <span>{item.name}</span>
//                 {item.badge && (
//                   <span
//                     className="ml-auto text-sm font-semibold bg-indigo-100 rounded-full px-2 py-0.5"
//                     style={{ color: secondaryColor }}
//                   >
//                     {item.badge}
//                   </span>
//                 )}
//               </a>
//             ))}
//           </nav>
//         </aside>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-12 flex">
//         {/* Sidebar Desktop */}
//         <aside className="hidden sm:block w-64 mr-12 sticky top-24 self-start">
//           <nav className="space-y-4">
//             {sidebarItems.map((item, idx) => (
//               <a
//                 key={idx}
//                 href={item.link}
//                 className="flex items-center rounded-lg py-2 px-3 font-medium text-gray-700 hover:bg-indigo-50 transition"
//                 style={{ color: primaryColor }}
//               >
//                 <span className="text-xl mr-3">{item.icon}</span>
//                 <span>{item.name}</span>
//                 {item.badge && (
//                   <span
//                     className="ml-auto text-sm font-semibold bg-indigo-100 rounded-full px-2 py-0.5"
//                     style={{ color: secondaryColor }}
//                   >
//                     {item.badge}
//                   </span>
//                 )}
//               </a>
//             ))}
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1">
//           <h1 className="text-5xl font-extrabold mb-12" style={{ color: primaryColor }}>
//             Welcome to Business Dashboard
//           </h1>

//           {/* Widgets Grid */}
//           <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//             {Array.from({ length: widgetCount }).map((_, idx) => (
//               <div
//                 key={idx}
//                 className="rounded-2xl shadow-sm bg-white p-8 flex items-center justify-center"
//                 style={{ borderColor: secondaryColor, borderWidth: '1px' }}
//               >
//                 <p className="text-lg font-semibold" style={{ color: primaryColor }}>
//                   + Widget {idx + 1}
//                 </p>
//               </div>
//             ))}
//           </section>

//           {/* Graph/Chart Placeholder */}
//           <section
//             className="rounded-2xl shadow-sm bg-white p-10 flex items-center justify-center mb-12"
//             style={{ borderColor: secondaryColor, borderWidth: '1px', minHeight: '192px' }}
//           >
//             <span className="text-xl font-semibold" style={{ color: primaryColor }}>
//               [Graph or Chart]
//             </span>
//           </section>

//           {/* Summary Boxes */}
//           <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//             {summaryItems.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="rounded-2xl shadow-sm bg-white p-8 flex items-center justify-center"
//                 style={{ borderColor: secondaryColor, borderWidth: '1px' }}
//               >
//                 <p className="text-xl font-semibold" style={{ color: primaryColor }}>{item}</p>
//               </div>
//             ))}
//           </section>
//         </main>
//       </div>

//       {/* Footer */}
//       <footer className="border-t border-gray-200 mt-20 py-8">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
//           <span>
//             © 2024 <a href="/" className="font-semibold hover:underline" style={{ color: primaryColor }}>My Company™</a>. All Rights Reserved.
//           </span>
//           <nav className="space-x-6">
//             <a href="#" className="hover:underline">About</a>
//             <a href="#" className="hover:underline">Privacy Policy</a>
//             <a href="#" className="hover:underline">Licensing</a>
//             <a href="#" className="hover:underline">Contact</a>
//           </nav>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;


// 111

// import React, { useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   Legend,
//   Radar,
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   PolarRadiusAxis,
// } from "recharts";

// interface SidebarItem {
//   name: string;
//   icon: string;
//   link: string;
//   badge?: number;
// }

// const Dashboard: React.FC = () => {
//   const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   const sidebarItems: SidebarItem[] = [
//     { name: "Overview", icon: "📊", link: "#" },
//     { name: "Leads", icon: "📋", link: "#" },
//     { name: "Inbox", icon: "📨", badge: 4, link: "#" },
//     { name: "Clients", icon: "👥", link: "#" },
//     { name: "Settings", icon: "⚙️", link: "#" },
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

//   const developedAreas = [
//     { subject: "Sport Skills", A: 71 },
//     { subject: "Blogging", A: 92 },
//     { subject: "Leadership", A: 33 },
//     { subject: "Meditation", A: 65 },
//     { subject: "Philosophy", A: 50 },
//   ];

//   const taskStats = [
//     { name: "Prioritized Tasks", value: 83, color: "from-red-400 to-pink-300" },
//     { name: "Additional Tasks", value: 56, color: "from-blue-400 to-purple-300" },
//   ];

//   return (
//     <div className="min-h-screen bg-[#f8f9fb] text-gray-700 font-sans">
//       <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <a href="/" className="text-2xl font-extrabold text-[#1d4ed8]">
//             B2B Dashboard
//           </a>
//           <nav className="hidden sm:flex space-x-8 font-medium text-gray-600">
//             {sidebarItems.map((item, i) => (
//               <a key={i} href={item.link} className="hover:text-black transition">
//                 {item.name}
//               </a>
//             ))}
//           </nav>
//           <button
//             onClick={toggleSidebar}
//             className="sm:hidden rounded-md p-2 text-gray-500 hover:text-gray-900"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="#1d4ed8"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               {sidebarOpen ? (
//                 <path d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path d="M3 12h18M3 6h18M3 18h18" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </header>

//       {sidebarOpen && (
//         <div className="fixed inset-0 z-40 sm:hidden">
//           <div onClick={toggleSidebar} className="fixed inset-0 bg-black opacity-30" />
//           <aside className="fixed top-0 left-0 bottom-0 w-64 p-6 bg-white shadow-lg rounded-r-xl">
//             <nav className="space-y-4">
//               {sidebarItems.map((item, idx) => (
//                 <a
//                   key={idx}
//                   href={item.link}
//                   className="flex items-center rounded-lg py-2 px-3 font-medium text-gray-700 hover:bg-indigo-50 transition"
//                 >
//                   <span className="text-xl mr-3">{item.icon}</span>
//                   <span>{item.name}</span>
//                   {item.badge && (
//                     <span className="ml-auto text-xs bg-indigo-100 text-blue-600 rounded-full px-2 py-0.5">
//                       {item.badge}
//                     </span>
//                   )}
//                 </a>
//               ))}
//             </nav>
//           </aside>
//         </div>
//       )}

//       <div className="max-w-7xl mx-auto px-6 py-10 flex">
//         <aside className="hidden sm:block w-64 mr-10 sticky top-24 self-start">
//           <nav className="space-y-4">
//             {sidebarItems.map((item, idx) => (
//               <a
//                 key={idx}
//                 href={item.link}
//                 className="flex items-center rounded-lg py-2 px-3 font-medium text-gray-700 hover:bg-indigo-50 transition"
//               >
//                 <span className="text-xl mr-3">{item.icon}</span>
//                 <span>{item.name}</span>
//                 {item.badge && (
//                   <span className="ml-auto text-xs bg-indigo-100 text-blue-600 rounded-full px-2 py-0.5">
//                     {item.badge}
//                   </span>
//                 )}
//               </a>
//             ))}
//           </nav>
//         </aside>

//         <main className="flex-1 bg-[#f8f9fb] flex flex-col gap-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white rounded-xl shadow p-6 text-center">
//               <div className="text-sm text-gray-500 mb-2">Profile</div>
//               <div className="flex flex-col items-center">
//                 <img
//                   src="https://i.pravatar.cc/100"
//                   alt="Profile"
//                   className="w-16 h-16 rounded-full mb-2"
//                 />
//                 <div className="font-semibold text-gray-800">Kristin Watson</div>
//                 <div className="text-xs text-gray-500">Design Manager</div>
//               </div>
//             </div>

//             {taskStats.map((task, index) => (
//               <div
//                 key={index}
//                 className={`bg-gradient-to-br ${task.color} rounded-xl text-white shadow p-6 flex flex-col justify-between`}
//               >
//                 <div className="text-sm mb-2">{task.name}</div>
//                 <div className="text-3xl font-bold">{task.value}%</div>
//                 <div className="text-xs mt-1">Avg. Completed</div>
//               </div>
//             ))}
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-white rounded-xl shadow p-6">
//               <h2 className="text-lg font-semibold text-gray-800 mb-4">Focus Analysis</h2>
//               <ResponsiveContainer width="100%" height={250}>
//                 <LineChart data={focusData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Line type="monotone" dataKey="Focus" stroke="#22c55e" strokeWidth={3} />
//                   <Line type="monotone" dataKey="Distraction" stroke="#ef4444" strokeWidth={3} />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>

//             <div className="bg-white rounded-xl shadow p-6">
//               <h2 className="text-lg font-semibold text-gray-800 mb-4">Weekly Leads</h2>
//               <ResponsiveContainer width="100%" height={250}>
//                 <BarChart data={leadsData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="Leads" fill="#3b82f6" radius={[5, 5, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow p-6">
//             <h2 className="text-lg font-semibold text-gray-800 mb-4">Developed Areas</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <RadarChart cx="50%" cy="50%" outerRadius="80%" data={developedAreas}>
//                 <PolarGrid />
//                 <PolarAngleAxis dataKey="subject" />
//                 <PolarRadiusAxis angle={30} domain={[0, 100]} />
//                 <Radar name="Score" dataKey="A" stroke="#1d4ed8" fill="#1d4ed8" fillOpacity={0.6} />
//                 <Legend />
//               </RadarChart>
//             </ResponsiveContainer>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// 222



 
// import React, { useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   Legend,
//   Radar,
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   PolarRadiusAxis,
// } from "recharts";

// interface SidebarItem {
//   name: string;
//   icon: string;
//   link: string;
//   badge?: number;
// }

// const Dashboard: React.FC = () => {
//   const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   const sidebarItems: SidebarItem[] = [
//     { name: "Overview", icon: "📊", link: "#" },
//     { name: "Leads", icon: "📋", link: "#" },
//     { name: "Inbox", icon: "📨", badge: 4, link: "#" },
//     { name: "Clients", icon: "👥", link: "#" },
//     { name: "Settings", icon: "⚙️", link: "#" },
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

//   const developedAreas = [
//     { subject: "Sport Skills", A: 71 },
//     { subject: "Blogging", A: 92 },
//     { subject: "Leadership", A: 33 },
//     { subject: "Meditation", A: 65 },
//     { subject: "Philosophy", A: 50 },
//   ];

//   const taskStats = [
//     { name: "Prioritized Tasks", value: 83, color: "from-red-400 to-pink-300" },
//     { name: "Additional Tasks", value: 56, color: "from-blue-400 to-purple-300" },
//   ];

//   const weeklyProgressData = [
//     { week: "Week 1", Completed: 12, Incomplete: 8 },
//     { week: "Week 2", Completed: 15, Incomplete: 5 },
//     { week: "Week 3", Completed: 18, Incomplete: 2 },
//     { week: "Week 4", Completed: 20, Incomplete: 0 },
//   ];

//   return (
//     <div className="min-h-screen bg-[#f8f9fb] text-gray-700 font-sans">
//       <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <a href="/" className="text-2xl font-extrabold text-[#1d4ed8]">
//             B2B Dashboard
//           </a>
//           <nav className="hidden sm:flex space-x-8 font-medium text-gray-600">
//             {sidebarItems.map((item, i) => (
//               <a key={i} href={item.link} className="hover:text-black transition">
//                 {item.name}
//               </a>
//             ))}
//           </nav>
//           <button
//             onClick={toggleSidebar}
//             className="sm:hidden rounded-md p-2 text-gray-500 hover:text-gray-900"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="#1d4ed8"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               {sidebarOpen ? (
//                 <path d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path d="M3 12h18M3 6h18M3 18h18" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </header>

//       {sidebarOpen && (
//         <div className="fixed inset-0 z-40 sm:hidden">
//           <div onClick={toggleSidebar} className="fixed inset-0 bg-black opacity-30" />
//           <aside className="fixed top-0 left-0 bottom-0 w-64 p-6 bg-white shadow-lg rounded-r-xl">
//             <nav className="space-y-4">
//               {sidebarItems.map((item, idx) => (
//                 <a
//                   key={idx}
//                   href={item.link}
//                   className="flex items-center rounded-lg py-2 px-3 font-medium text-gray-700 hover:bg-indigo-50 transition"
//                 >
//                   <span className="text-xl mr-3">{item.icon}</span>
//                   <span>{item.name}</span>
//                   {item.badge && (
//                     <span className="ml-auto text-xs bg-indigo-100 text-blue-600 rounded-full px-2 py-0.5">
//                       {item.badge}
//                     </span>
//                   )}
//                 </a>
//               ))}
//             </nav>
//           </aside>
//         </div>
//       )}

//       <div className="max-w-7xl mx-auto px-6 py-10 flex">
//         <aside className="hidden sm:block w-64 mr-10 sticky top-24 self-start">
//           <nav className="space-y-4">
//             {sidebarItems.map((item, idx) => (
//               <a
//                 key={idx}
//                 href={item.link}
//                 className="flex items-center rounded-lg py-2 px-3 font-medium text-gray-700 hover:bg-indigo-50 transition"
//               >
//                 <span className="text-xl mr-3">{item.icon}</span>
//                 <span>{item.name}</span>
//                 {item.badge && (
//                   <span className="ml-auto text-xs bg-indigo-100 text-blue-600 rounded-full px-2 py-0.5">
//                     {item.badge}
//                   </span>
//                 )}
//               </a>
//             ))}
//           </nav>
//         </aside>

//         <main className="flex-1 bg-[#f8f9fb] flex flex-col gap-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white rounded-xl shadow p-6 text-center">
//               <div className="text-sm text-gray-500 mb-2">Profile</div>
//               <div className="flex flex-col items-center">
//                 <img
//                   src="https://i.pravatar.cc/100"
//                   alt="Profile"
//                   className="w-16 h-16 rounded-full mb-2"
//                 />
//                 <div className="font-semibold text-gray-800">Kristin Watson</div>
//                 <div className="text-xs text-gray-500">Design Manager</div>
//               </div>
//               <div className="mt-4 text-xs text-gray-500">Active Trackers: 3</div>
//             </div>

//             {taskStats.map((task, index) => (
//               <div
//                 key={index}
//                 className={`bg-gradient-to-br ${task.color} rounded-xl text-white shadow p-6 flex flex-col justify-between`}
//               >
//                 <div className="text-sm mb-2">{task.name}</div>
//                 <div className="text-3xl font-bold">{task.value}%</div>
//                 <div className="text-xs mt-1">Avg. Completed</div>
//               </div>
//             ))}
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-white rounded-xl shadow p-6">
//               <h2 className="text-lg font-semibold text-gray-800 mb-4">Focus Analysis</h2>
//               <ResponsiveContainer width="100%" height={250}>
//                 <LineChart data={focusData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Line type="monotone" dataKey="Focus" stroke="#22c55e" strokeWidth={3} />
//                   <Line type="monotone" dataKey="Distraction" stroke="#ef4444" strokeWidth={3} />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>

//             <div className="bg-white rounded-xl shadow p-6">
//               <h2 className="text-lg font-semibold text-gray-800 mb-4">Weekly Leads</h2>
//               <ResponsiveContainer width="100%" height={250}>
//                 <BarChart data={leadsData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="Leads" fill="#3b82f6" radius={[5, 5, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow p-6">
//             <h2 className="text-lg font-semibold text-gray-800 mb-4">Weekly Progress</h2>
//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart data={weeklyProgressData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="week" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="Completed" fill="#16a34a" radius={[5, 5, 0, 0]} />
//                 <Bar dataKey="Incomplete" fill="#f43f5e" radius={[5, 5, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="bg-white rounded-xl shadow p-6">
//             <h2 className="text-lg font-semibold text-gray-800 mb-4">Developed Areas</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <RadarChart cx="50%" cy="50%" outerRadius="80%" data={developedAreas}>
//                 <PolarGrid />
//                 <PolarAngleAxis dataKey="subject" />
//                 <PolarRadiusAxis angle={30} domain={[0, 100]} />
//                 <Radar name="Score" dataKey="A" stroke="#1d4ed8" fill="#1d4ed8" fillOpacity={0.6} />
//                 <Legend />
//               </RadarChart>
//             </ResponsiveContainer>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// 333

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

interface SidebarItem {
  name: string;
  icon: string;
  link: string;
  badge?: number;
}

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const primaryColor = "#6D3871"
  const secondaryColor =  "#F7F7F7";

  const sidebarItems: SidebarItem[] = [
    { name: "Overview", icon: "📊", link: "#" },
    { name: "Leads", icon: "📋", link: "#" },
    { name: "Inbox", icon: "📨", badge: 4, link: "#" },
    { name: "Clients", icon: "👥", link: "#" },
    { name: "Settings", icon: "⚙️", link: "#" },
  ];

  const focusData = [
    { name: "Week 1", Focus: 30, Distraction: 70 },
    { name: "Week 2", Focus: 45, Distraction: 55 },
    { name: "Week 3", Focus: 60, Distraction: 40 },
    { name: "Week 4", Focus: 80, Distraction: 20 },
  ];

  const leadsData = [
    { name: "Mon", Leads: 24 },
    { name: "Tue", Leads: 30 },
    { name: "Wed", Leads: 20 },
    { name: "Thu", Leads: 27 },
    { name: "Fri", Leads: 18 },
    { name: "Sat", Leads: 23 },
  ];

  const developedAreas = [
    { subject: "Sport Skills", A: 71 },
    { subject: "Blogging", A: 92 },
    { subject: "Leadership", A: 33 },
    { subject: "Meditation", A: 65 },
    { subject: "Philosophy", A: 50 },
  ];

  const taskStats = [
    { name: "Prioritized Tasks", value: 83, color: "from-[#FCB4D4] to-[#6F2451]" },
    { name: "Additional Tasks", value: 56, color: "from-[#6F2451] to-[#FCB4D4]" },
  ];

  const weeklyProgressData = [
    { week: "Week 1", Completed: 12, Incomplete: 8 },
    { week: "Week 2", Completed: 15, Incomplete: 5 },
    { week: "Week 3", Completed: 18, Incomplete: 2 },
    { week: "Week 4", Completed: 20, Incomplete: 0 },
  ];

  const stats = [
    { label: "Employees", value: 78 },
    { label: "Hirings", value: 56 },
    { label: "Projects", value: 203 },
  ];

  return (
    <div className="min-h-screen bg-[#fff0f5] text-gray-800 font-sans">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-extrabold" style={{ color: primaryColor }}>
            B2B Dashboard
          </a>
          <nav className="hidden sm:flex space-x-8 font-medium text-gray-600">
            {sidebarItems.map((item, i) => (
              <a key={i} href={item.link} className="hover:text-black transition">
                {item.name}
              </a>
            ))}
          </nav>
          <button
            onClick={toggleSidebar}
            className="sm:hidden rounded-md p-2 text-gray-500 hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke={primaryColor}
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {sidebarOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <div onClick={toggleSidebar} className="fixed inset-0 bg-black opacity-30" />
          <aside className="fixed top-0 left-0 bottom-0 w-64 p-6 bg-white shadow-lg rounded-r-xl">
            <nav className="space-y-4">
              {sidebarItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="flex items-center rounded-lg py-2 px-3 font-medium text-gray-700 hover:bg-indigo-50 transition"
                >
                  <span className="text-xl mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="ml-auto text-xs bg-indigo-100 text-blue-600 rounded-full px-2 py-0.5">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-10 flex">
        <aside className="hidden sm:block w-64 mr-10 sticky top-24 self-start">
          <nav className="space-y-4">
            {sidebarItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="flex items-center rounded-lg py-2 px-3 font-medium text-gray-700 hover:bg-indigo-50 transition"
              >
                <span className="text-xl mr-3">{item.icon}</span>
                <span>{item.name}</span>
                {item.badge && (
                  <span className="ml-auto text-xs bg-indigo-100 text-blue-600 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>
        </aside>

        <main className="flex-1 bg-[#f8f9fb] flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <div className="text-sm text-gray-500 mb-2">Profile</div>
              <div className="flex flex-col items-center">
                <img
                  src="https://i.pravatar.cc/100"
                  alt="Profile"
                  className="w-16 h-16 rounded-full mb-2"
                />
                <div className="font-semibold text-gray-800">Lora Piterson</div>
                <div className="text-xs text-gray-500">UX/UI Designer</div>
                <div className="mt-2 font-semibold text-yellow-500">$1,200</div>
              </div>
            </div>

            {taskStats.map((task, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${task.color} rounded-xl text-white shadow p-6 flex flex-col justify-between`}
              >
                <div className="text-sm mb-2">{task.name}</div>
                <div className="text-3xl font-bold">{task.value}%</div>
                <div className="text-xs mt-1">Avg. Completed</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-6 text-center">
                <div className="text-sm text-gray-500 mb-2">{item.label}</div>
                <div className="text-3xl font-bold text-gray-800">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Focus Analysis</h2>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={focusData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Focus" stroke="#22c55e" strokeWidth={3} />
                  <Line type="monotone" dataKey="Distraction" stroke="#ef4444" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Weekly Leads</h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={leadsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Leads" fill="#3b82f6" radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Weekly Progress</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={weeklyProgressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Completed" fill="#16a34a" radius={[5, 5, 0, 0]} />
                <Bar dataKey="Incomplete" fill="#f43f5e" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

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
        </main>
      </div>
    </div>
  );
};

export default Dashboard;










//  444

// import React, { useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   Legend,
//   Radar,
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   PolarRadiusAxis,
// } from "recharts";

// interface SidebarItem {
//   name: string;
//   icon: string;
//   link: string;
//   badge?: number;
// }

// const Dashboard: React.FC = () => {
//   const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   const primaryColor = "#6F2451";
//   const secondaryColor = "#FCB4D4";

//   const sidebarItems: SidebarItem[] = [
//     { name: "Overview", icon: "📊", link: "#" },
//     { name: "Leads", icon: "📋", link: "#" },
//     { name: "Inbox", icon: "📨", badge: 4, link: "#" },
//     { name: "Clients", icon: "👥", link: "#" },
//     { name: "Settings", icon: "⚙️", link: "#" },
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

//   const developedAreas = [
//     { subject: "Sport Skills", A: 71 },
//     { subject: "Blogging", A: 92 },
//     { subject: "Leadership", A: 33 },
//     { subject: "Meditation", A: 65 },
//     { subject: "Philosophy", A: 50 },
//   ];

//   const taskStats = [
//     { name: "Prioritized Tasks", value: 83, color: "from-[#FCB4D4] to-[#6F2451]" },
//     { name: "Additional Tasks", value: 56, color: "from-[#6F2451] to-[#FCB4D4]" },
//   ];

//   const weeklyProgressData = [
//     { week: "Week 1", Completed: 12, Incomplete: 8 },
//     { week: "Week 2", Completed: 15, Incomplete: 5 },
//     { week: "Week 3", Completed: 18, Incomplete: 2 },
//     { week: "Week 4", Completed: 20, Incomplete: 0 },
//   ];

//   const stats = [
//     { label: "Employees", value: 78 },
//     { label: "Hirings", value: 56 },
//     { label: "Projects", value: 203 },
//   ];

//   return (
//     <div className="min-h-screen bg-[#fff0f5] text-gray-800 font-sans">
//       {/* HEADER */}
//       <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <a href="/" className="text-2xl font-extrabold" style={{ color: primaryColor }}>
//             B2B Dashboard
//           </a>
//           <nav className="hidden sm:flex space-x-8 font-medium text-gray-600">
//             {sidebarItems.map((item, i) => (
//               <a key={i} href={item.link} className="hover:text-black transition">
//                 {item.name}
//               </a>
//             ))}
//           </nav>
//           <button
//             onClick={toggleSidebar}
//             className="sm:hidden rounded-md p-2 text-gray-500 hover:text-gray-900"
//             aria-label="Toggle sidebar"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke={primaryColor}
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               {sidebarOpen ? (
//                 <path d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path d="M3 12h18M3 6h18M3 18h18" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </header>

//       {/* MOBILE SIDEBAR */}
//       {sidebarOpen && (
//         <div className="fixed inset-0 z-40 sm:hidden">
//           <div onClick={toggleSidebar} className="fixed inset-0 bg-black opacity-30" />
//           <aside className="fixed top-0 left-0 bottom-0 w-64 p-6 bg-white shadow-lg rounded-r-xl">
//             <nav className="space-y-4">
//               {sidebarItems.map((item, idx) => (
//                 <a
//                   key={idx}
//                   href={item.link}
//                   className="flex items-center rounded-lg py-2 px-3 font-medium text-gray-700 hover:bg-indigo-50 transition"
//                 >
//                   <span className="text-xl mr-3">{item.icon}</span>
//                   <span>{item.name}</span>
//                   {item.badge && (
//                     <span className="ml-auto text-xs bg-indigo-100 text-blue-600 rounded-full px-2 py-0.5">
//                       {item.badge}
//                     </span>
//                   )}
//                 </a>
//               ))}
//             </nav>
//           </aside>
//         </div>
//       )}

//       {/* LAYOUT */}
//       <div className="max-w-7xl mx-auto px-6 py-10 flex">
//         {/* DESKTOP SIDEBAR */}
//         <aside className="hidden sm:block w-64 mr-10 sticky top-24 self-start">
//           <nav className="space-y-4">
//             {sidebarItems.map((item, idx) => (
//               <a
//                 key={idx}
//                 href={item.link}
//                 className="flex items-center rounded-lg py-2 px-3 font-medium text-gray-700 hover:bg-indigo-50 transition"
//               >
//                 <span className="text-xl mr-3">{item.icon}</span>
//                 <span>{item.name}</span>
//                 {item.badge && (
//                   <span className="ml-auto text-xs bg-indigo-100 text-blue-600 rounded-full px-2 py-0.5">
//                     {item.badge}
//                   </span>
//                 )}
//               </a>
//             ))}
//           </nav>
//         </aside>

//         {/* MAIN CONTENT */}
//         <main className="flex-1 bg-[#f8f9fb] flex flex-col gap-8">
//           {/* ---- TOP SUMMARY CARDS ---- */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {/* BUSINESS PROFILE CARD */}
//             <div className="bg-white rounded-xl shadow p-6 text-center">
//               <div className="text-sm text-gray-500 mb-2">Business Profile</div>
//               <div className="flex flex-col items-center">
//                 <img
//                   src="https://i.pravatar.cc/100?img=47"
//                   alt="Business"
//                   className="w-16 h-16 rounded-full mb-2"
//                 />
//                 <div className="font-semibold text-gray-800">Crestio Inc.</div>
//                 <div className="text-xs text-gray-500">Creative Agency</div>
//                 <div className="mt-2 font-semibold" style={{ color: primaryColor }}>
//                   $12,500 MRR
//                 </div>
//               </div>
//             </div>

//             {/* USER PROFILE CARD */}
//             <div className="bg-white rounded-xl shadow p-6 text-center">
//               <div className="text-sm text-gray-500 mb-2">Your Profile</div>
//               <div className="flex flex-col items-center">
//                 <img
//                   src="https://i.pravatar.cc/100?img=32"
//                   alt="User"
//                   className="w-16 h-16 rounded-full mb-2 border-4 border-[#FCB4D4]"
//                 />
//                 <div className="font-semibold text-gray-800">Lora Piterson</div>
//                 <div className="text-xs text-gray-500">UX/UI Designer</div>
//                 <div className="mt-2 font-semibold text-yellow-500">$1,200</div>
//               </div>
//             </div>

//             {/* TASK CARDS */}
//             {taskStats.map((task, index) => (
//               <div
//                 key={index}
//                 className={`bg-gradient-to-br ${task.color} rounded-xl text-white shadow p-6 flex flex-col justify-between`}
//               >
//                 <div className="text-sm mb-2">{task.name}</div>
//                 <div className="text-3xl font-bold">{task.value}%</div>
//                 <div className="text-xs mt-1">Avg. Completed</div>
//               </div>
//             ))}
//           </div>

//           {/* ---- CHART SECTION ---- */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Bar Chart */}
//             <div className="bg-white rounded-xl shadow p-6">
//               <h3 className="text-lg font-semibold mb-4">Weekly Leads</h3>
//               <ResponsiveContainer width="100%" height={250}>
//                 <BarChart data={leadsData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="Leads" fill={primaryColor} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>

//             {/* Radar Chart */}
//             <div className="bg-white rounded-xl shadow p-6">
//               <h3 className="text-lg font-semibold mb-4">Skill Radar</h3>
//               <ResponsiveContainer width="100%" height={250}>
//                 <RadarChart data={developedAreas}>
//                   <PolarGrid />
//                   <PolarAngleAxis dataKey="subject" />
//                   <PolarRadiusAxis angle={30} domain={[0, 100]} />
//                   <Radar name="Skills" dataKey="A" stroke={primaryColor} fill={secondaryColor} fillOpacity={0.6} />
//                 </RadarChart>
//               </ResponsiveContainer>
//             </div>

//             {/* Line Chart */}
//             <div className="bg-white rounded-xl shadow p-6">
//               <h3 className="text-lg font-semibold mb-4">Focus vs Distraction</h3>
//               <ResponsiveContainer width="100%" height={250}>
//                 <LineChart data={focusData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Line type="monotone" dataKey="Focus" stroke={primaryColor} strokeWidth={2} />
//                   <Line type="monotone" dataKey="Distraction" stroke="#ccc" strokeWidth={2} />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

