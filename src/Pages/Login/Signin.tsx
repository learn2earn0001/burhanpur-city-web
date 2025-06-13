import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginPhone, setLoginPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [fullName, setFullName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("user");

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "https://burhanpur-city-backend-mfs4.onrender.com/api/Users/login",
        {
          phone: loginPhone.trim(),
          password,
        }
      );

      const token = res.data.result;
      console.log(token, "token");
      if (!token) {
        setError("Token not found.");
        return;
      }

      localStorage.setItem("authToken", token);

      const userRes = await axios.get("/Users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Logged In User:", userRes.data);
      navigate("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "https://burhanpur-city-backend-mfs4.onrender.com/api/Users/createUser",
        {
          name: fullName,
          email: signupEmail,
          phone: signupPhone,
          password: signupPassword,
          address,
          role,
        }
      );

      console.log("Signup Success:", res.data);
      alert("Signup successful! Please login.");
      setIsLogin(true); // Switch to login view
      navigate("/")
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-purple-500 p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl flex flex-col lg:flex-row overflow-hidden">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 bg-gradient-to-r from-purple-500 to-purple-800 text-white p-6 lg:p-10 flex flex-col justify-center items-center">
          <img
            src="/loginfor_image.png"
            alt="Login Illustration"
            className="w-40 h-auto mb-4 sm:w-52 md:w-64 lg:w-72"
          />
          <h1 className="text-2xl md:text-3xl font-bold mb-1">Welcome Back</h1>
          <h2 className="text-sm md:text-lg text-purple-200 mb-2">
            Dolor sit amet Consectetur
          </h2>
          <p className="text-xs md:text-sm text-center px-2 md:px-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-start min-h-[600px]">
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-5 py-2 text-sm md:text-base rounded-l-full font-semibold transition duration-300 shadow-md ${
                isLogin
                  ? "bg-purple-400 text-white"
                  : "bg-gray-100 text-purple-500"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-5 py-2 text-sm md:text-base rounded-r-full font-semibold transition duration-300 shadow-md ${
                !isLogin
                  ? "bg-purple-400 text-white"
                  : "bg-gray-100 text-purple-500"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Login or Signup Form */}
          {isLogin ? (
            <form
              onSubmit={handleLogin}
              className="space-y-4 w-full max-w-md mx-auto"
            >
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={loginPhone}
                onChange={(e) => setLoginPhone(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember Me
                </label>
                <a href="#" className="text-purple-500 hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-500 text-white py-2 rounded-xl hover:bg-purple-600 transition duration-300"
              >
                {loading ? "Logging in..." : "LOGIN"}
              </button>

              {error && <p className="text-red-500 text-center">{error}</p>}

              <p className="text-center text-sm">
                New here?{" "}
                <a href="#" className="text-purple-600 font-semibold">
                  Sign Up
                </a>
              </p>
            </form>
          ) : (
            <form
              onSubmit={handleSignup}
              className="space-y-4 w-full max-w-md mx-auto"
            >
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 "
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={signupPhone}
                onChange={(e) => setSignupPhone(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <select
                name="role"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">User</option>
                <option value="owner">Owner</option>
              </select>

              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 rounded-xl hover:bg-purple-600 transition duration-300"
              >
                SIGN UP
              </button>

              <p className="text-center text-sm">
                Already have an account?{" "}
                <a href="#" className="text-purple-600 font-semibold">
                  Login
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
