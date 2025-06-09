// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";
// import axios from "axios";

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(false);
//   const navigate = useNavigate();

//   // Shared states for Login
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Shared states for Register
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     role: "user",
//   });

//   const handleRegisterChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const { name, email, password, confirmPassword, role } = formData;

//     if (!name || !email || !password || !confirmPassword) {
//       setError("Please fill all fields.");
//       return;
//     }
//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
//     const userExists = existingUsers.some((user) => user.email === email);
//     if (userExists) {
//       setError("User already registered with this email.");
//       return;
//     }

//     const newUser = {
//       name,
//       email,
//       password,
//       role,
//       ...(role === "business" && { owner: name }),
//     };

//     localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
//     alert("Registration successful!");
//     setIsLogin(true); // Switch to login after registration
//   };

//   const handleLogin = async () => {
//     setLoading(true);
//     setError("");
//     try {
//       const res = await axios.post("https://burhanpur-city-backend.vercel.app/api/Users/adminLogin", {
//         phone,
//         password,
//       });
//       localStorage.setItem("authToken", res.data.token);
//       navigate("/home");
//     } catch (err) {
//       setError("Invalid credentials");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
//       <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
//         <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
//           {isLogin ? "Admin Login" : "Register"}
//         </h2>

//         {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

//         {isLogin ? (
//           <>
//             <input
//               type="tel"
//               placeholder="Phone"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />

//             <div className="relative mb-4">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                 <FiLock size={20} />
//               </span>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//               <span
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
//               >
//                 {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
//               </span>
//             </div>

//             <button
//               onClick={handleLogin}
//               disabled={loading}
//               className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition duration-300"
//             >
//               {loading ? "Loading..." : "Login"}
//             </button>
//           </>
//         ) : (
//           <form onSubmit={handleRegister} className="space-y-4">
//             {["name", "email", "password", "confirmPassword"].map((field) => (
//               <input
//                 key={field}
//                 type={field.includes("password") ? "password" : "text"}
//                 name={field}
//                 placeholder={
//                   field === "confirmPassword"
//                     ? "Confirm Password"
//                     : field.charAt(0).toUpperCase() + field.slice(1)
//                 }
//                 value={formData[field]}
//                 onChange={handleRegisterChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                 required
//               />
//             ))}

//             <select
//               name="role"
//               value={formData.role}
//               onChange={handleRegisterChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             >
//               <option value="user">User</option>
//               <option value="business">Business</option>
//             </select>

//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition duration-300"
//             >
//               Register
//             </button>
//           </form>
//         )}

//         <p className="mt-4 text-center text-gray-600">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//           <span
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-indigo-600 hover:underline cursor-pointer"
//           >
//             {isLogin ? "Register here" : "Login here"}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;
