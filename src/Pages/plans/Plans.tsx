import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Plans = () => {
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();

  const monthlyPlans = [
    {
      title: "Basic",
      tag: "Most Popular",
      price: "4.90",
      perks: ["✅ Unlimited updates", "✅ Custom permissions", "✅ Basic support"],
      disabled: ["❌ Design features", "❌ Premium support"],
    },
    {
      title: "Professional",
      tag: "Recommended",
      price: "1000",
      perks: ["✅ All in Basic", "✅ Custom design", "✅ Premium support"],
      disabled: ["❌ Design features", "❌ Premium support"],
    },
    {
      title: "Ultimate",
      tag: "Best Value",
      price: "14.90",
      perks: ["✅ Everything Unlimited", "✅ All support", "✅ Dedicated manager"],
      disabled: ["❌ Design features", "❌ Premium support"],
    },
  ];

  const yearlyPlans = [
    {
      title: "Basic Yearly",
      tag: "Save 15%",
      price: "49.90",
      perks: ["✅ Unlimited updates", "✅ Custom permissions", "✅ Basic support"],
      disabled: ["❌ Design features", "❌ Premium support"],
    },
    {
      title: "Professional Yearly",
      tag: "Best Seller",
      price: "99.90",
      perks: ["✅ All in Basic", "✅ Custom design", "✅ Premium support"],
      disabled: ["❌ Design features", "❌ Premium support"],
    },
    {
      title: "Ultimate Yearly",
      tag: "Max Savings",
      price: "149.90",
      perks: ["✅ Everything Unlimited", "✅ All support", "✅ Dedicated manager"],
      disabled: ["❌ Design features", "❌ Premium support"],
    },
  ];

  const plansToShow = isYearly ? yearlyPlans : monthlyPlans;

  const handleBuyPlan = () => {
    const token = localStorage.getItem('authToken');
    navigate(token ? '/payment' : '/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex flex-col items-center py-16 px-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-4 drop-shadow">
        Our <span className="text-purple-600">Pricing Plan</span>
      </h1>
      <p className="text-gray-500 text-center max-w-2xl mb-10 text-lg">
        Choose a plan that works best for your needs. Transparent pricing, no hidden fees.
      </p>

      {/* Toggle Switch */}
      <div className="mb-12">
        <div className="relative flex items-center bg-purple-600 rounded-full w-64 h-11 p-1 shadow-md">
          <div
            className={`absolute inset-[2px] w-1/2 rounded-full bg-white transition-transform duration-300 ${
              isYearly ? 'translate-x-[calc(100%-4px)]' : 'translate-x-0'
            }`}
          ></div>
          <button
            onClick={() => setIsYearly(false)}
            className={`w-1/2 z-10 text-center text-sm font-semibold transition-colors ${
              !isYearly ? 'text-purple-600' : 'text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`w-1/2 z-10 text-center text-sm font-semibold transition-colors ${
              isYearly ? 'text-purple-600' : 'text-white'
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl px-4">
        {plansToShow.map((plan, index) => (
          <div
            key={index}
            className="bg-white hover:bg-purple-50 transition-transform duration-300 transform hover:scale-105 p-8 rounded-3xl text-center border border-gray-200 hover:border-purple-400 shadow-xl relative"
          >
            {/* Center Top Tag Badge */}
            <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-100 text-purple-700 text-sm font-semibold py-2 px-5 rounded-full shadow-md border border-purple-300">
              {plan.tag}
            </span>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-6">{plan.title}</h3>

            <div className="text-4xl font-bold text-purple-600 mb-6">
              {plan.price}
              <span className="text-base text-gray-500 font-medium">
                {isYearly ? " /year" : " /month"}
              </span>
            </div>

            {/* Vertical & Centered List */}
            <ul className="flex flex-col items-center justify-center text-center gap-2 mb-6">
              {[...plan.perks, ...plan.disabled].map((item, i) => (
                <li
                  key={i}
                  className={`w-full max-w-xs ${
                    item.startsWith("❌")
                      ? "line-through text-gray-400"
                      : "text-gray-700"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={handleBuyPlan}
              className="bg-purple-600 hover:bg-purple-700 text-white px-7 py-2 rounded-full font-semibold transition shadow-md hover:shadow-lg"
            >
              Buy Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
