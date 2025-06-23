import React, { useEffect, useState } from "react";
import axios from "axios";
import RegisterBusinessForm from "./RegisterBusinessForm";

// ✅ Interface define
interface BusinessType {
  name: string;
  category: string;
  description: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  facebook?: string;
  instagram?: string;
  owner?: string;
}

const Business = () => {
  const [showForm, setShowForm] = useState(false);

  // ✅ Type added here
  const [businesses, setBusinesses] = useState<BusinessType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBusinesses = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.error("No token found. User might not be logged in.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          "https://burhanpur-city-backend-mfs4.onrender.com/api/bussiness/getMyBuss",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Fetched businesses:", response.data);
        setBusinesses(response.data.result || []); // ✅ updated here
      } catch (error) {
        console.error("Failed to fetch businesses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, []);

  const handleAddBusiness = (newBusiness: BusinessType) => {
    setBusinesses((prev) => [newBusiness, ...prev]);
    setShowForm(false); // close form after submission
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-1">
      {/* Header */}
      <div className="sticky bg-gradient-to-r from-purple-400 to-purple-800 text-white rounded-t-2xl py-4 px-4 shadow-md mb-6">
        {/* Responsive flex container */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
              🏢 Our Business
            </h2>
            <p className="mt-1 text-xs sm:text-sm opacity-90">
              Your registered business information
            </p>
          </div>

          <button
            onClick={() => setShowForm((prev) => !prev)}
            className="font-semibold text-base sm:text-lg bg-white text-purple-800 px-4 py-2 rounded-md hover:bg-purple-100 transition w-full sm:w-auto"
          >
            ➕ Add Business
          </button>
        </div>
      </div>
      {/* Conditional Form Rendering */}
      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
          <RegisterBusinessForm onAddBusiness={handleAddBusiness} />
        </div>
      )}

      {/* Top Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          {
            label: "Total Businesses",
            value: businesses.length.toString(),
            bg: "bg-purple-100",
          },
          {
            label: "Active",
            value: businesses.length.toString(),
            bg: "bg-green-100",
          },
          { label: "Leads", value: "24", bg: "bg-blue-100" },
          { label: "Revenue", value: "₹2.5L", bg: "bg-yellow-100" },
        ].map((stat, idx) => (
          <div key={idx} className={`rounded-xl p-4 shadow-sm ${stat.bg}`}>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-xs text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Add Business + Cards */}
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Add Business Box */}
        {/* <div className="w-full md:w-40">
          <div
            className="bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-2xl p-2 text-center shadow-lg cursor-pointer hover:opacity-95 transition"
            onClick={() => setShowForm((prev) => !prev)}
          >
            <div className="text-2xl mb-2">➕</div>
            <h3 className="font-semibold text-lg">Add Business</h3>
          </div>

          {showForm && (
            <div className="mt-4">
              <RegisterBusinessForm onAddBusiness={handleAddBusiness} />
            </div>
          )}
        </div> */}

        {/* Business Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {loading ? (
            <p className="text-center col-span-full">Loading businesses...</p>
          ) : businesses.length === 0 ? (
            <p className="text-center col-span-full text-gray-500">
              No businesses registered yet.
            </p>
          ) : (
            businesses.map((biz, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md border p-5 space-y-4"
              >
                <div>
                  <h3 className="text-lg font-bold text-purple-800 flex items-center gap-2">
                    🗂 {biz.name}
                  </h3>
                  <p className="text-sm text-purple-500">{biz.category}</p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <h4 className="font-semibold text-orange-600 mb-1">
                    📁 Business Details
                  </h4>
                  <p>
                    <strong>Name:</strong> {biz.name}
                  </p>
                  <p>
                    <strong>Category:</strong> {biz.category}
                  </p>
                  <p>
                    <strong>Description:</strong> {biz.description}
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <h4 className="font-semibold text-purple-700 mb-1">
                    📍 Address
                  </h4>
                  <p>
                    <strong>Street:</strong> {biz.street}
                  </p>
                  <p>
                    <strong>City:</strong> {biz.city}
                  </p>
                  <p>
                    <strong>State:</strong> {biz.state}
                  </p>
                  <p>
                    <strong>Pincode:</strong> {biz.pincode}
                  </p>
                </div>

                <div className="bg-rose-50 border border-rose-200 rounded-lg p-3">
                  <h4 className="font-semibold text-rose-700 mb-1">
                    📞 Contact Info
                  </h4>
                  <p>
                    <strong>Phone:</strong> {biz.phone}
                  </p>
                  <p>
                    <strong>Email:</strong> {biz.email}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Business;
