import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { FiLock, FiEye, FiEyeOff, FiX } from "react-icons/fi";
import toast from 'react-hot-toast';
import axios from "@/axois";

interface RegistrationProps {
  onClose?: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  role: "user" | "owner";
}

const Registration: React.FC<RegistrationProps> = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const [loginPhone, setLoginPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const handleRegisterChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, phone, password, confirmPassword, role } = formData;
  
    if (!name || !email || !phone || !password || !confirmPassword) {
      setError("Please fill all fields.");
      return;
    }
  
    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be 10 digits.");
      return;
    }
  
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
  
    try {
      setLoading(true);
      setError("");
  
      // 👇 Payload with explicit owner field
      const payload = {
        name,
        email,
        phone,
        password,
        role,
        owner: role === "owner" ? name : "",  // add owner name if role is owner
      };
  
      console.log("Sending data:", payload);
  
      const res = await axios.post("/Users/createUser", payload);
  
      console.log("Registration Response:", res.data);
      toast.success("🎉 Registration successful!");
      setIsLogin(true);  // Switch to login mode
    } catch (err: any) {
      console.error("Registration failed:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };
  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post('/Users/createUser', formData);
  //     if (res.data.success) {
  //       toast.success('🎉 Account created successfully!');
  //       setFormData({ name: '', phone: '', password: '', email: '', role: '', address: '' });
  //       setIsLogin(true); // Switch to login mode
  //     } else {
  //       toast.error('Registration failed: ' + res.data.message);
  //     }
  //   } catch (err) {
  //     console.error('Registration error:', err);
  //     toast.error('An error occurred during registration.');
  //   }
  // };


  
  const handleLogin = async () => {
    setLoading(true);
    setError("");
  
    const formattedPhone = loginPhone.replace(/\s+/g, "").trim();
  
    try {
      const res = await axios.post("/Users/adminLogin", {
        phone: formattedPhone,
        password,
      });
  
      console.log("API Response:", res.data.result);
  
       
  
      
      const token = res.data.result;
      // ✅ Save token in localStorage
      localStorage.setItem("authToken", token);
      if (!token) {
        setError("Token not found in response");
        return;
      }
        // token string
      console.log("Token:", token);
  
      // 🔁 Now call another API to get user details
      const userRes = await axios.get("/Users/getUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      // const user = userRes.data.user; // adjust if structure is different
      console.log("User:", userRes);
  
      // if (!user || !user.role) {
      //   setError("User data not found");
      //   return;
      // }
  
      // localStorage.setItem("user", JSON.stringify(user));
  
      // if (user.role === "owner") {
      //   navigate("/business/dashboard");
      // } else {
      //   navigate("/profile");
      // }
  
      if (onClose) onClose();
    } catch (err: any) {
      console.error("Login failed:", err.response?.data || err.message || err);
      setError(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };
  
  
  
  
  

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
          >
            <FiX size={24} />
          </button>
        )}

        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          {isLogin ? "Admin Login" : "Register"}
        </h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        {isLogin ? (
          <>
            <input
              type="tel"
              placeholder="Phone"
              value={loginPhone}
              onChange={(e) => setLoginPhone(e.target.value)}
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <div className="relative mb-4">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FiLock size={20} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </span>
            </div>

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition duration-300"
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4">
            {(["name", "email", "phone", "password", "confirmPassword"] as const).map((field) => (
              <input
                key={field}
                type={field.includes("password") ? "password" : field === "phone" ? "tel" : "text"}
                name={field}
                placeholder={
                  field === "confirmPassword"
                    ? "Confirm Password"
                    : field.charAt(0).toUpperCase() + field.slice(1)
                }
                value={formData[field]}
                onChange={handleRegisterChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            ))}

            <select
              name="role"
              value={formData.role}
              onChange={handleRegisterChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="user">User</option>
              <option value="owner">Owner</option>
            </select>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition duration-300"
            >
              Register
            </button>
          </form>
        )}

        <p className="mt-4 text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 hover:underline cursor-pointer"
          >
            {isLogin ? "Register here" : "Login here"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Registration;
