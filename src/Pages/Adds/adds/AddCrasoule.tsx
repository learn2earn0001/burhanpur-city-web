import React from "react";
import comboImg1 from "../../../../public/assets/1st.jpg";
import comboImg2 from "../../../../public/assets/2nd.jpeg";
import comboImg3 from "../../../../public/assets/3rd.jpg";
import comboImg4 from "../../../../public/assets/4th.jpeg";
import comboImg5 from "../../../../public/assets/5th.jpeg";
import comboImg1b from "../../../../public/assets/6th.jpg";
import comboImg2b from "../../../../public/assets/7th.jpeg";
import comboImg3b from "../../../../public/assets/8th.jpeg";

const advertisements = [
  { id: 1, title: "Combo Offer", subtitle: "IMAGE + VIDEO", price: "₹998 / 365 दिन", description: "फोटो स्टेट डिज़ाइन ₹789 + ₹998 में!", image: comboImg1 },
  { id: 2, title: "Poster Design", subtitle: "LIMITED TIME", price: "₹499 Only", description: "Festival posters ₹499!", image: comboImg2 },
  { id: 3, title: "Business Card", subtitle: "CUSTOM DESIGN", price: "₹199", description: "Premium visiting cards.", image: comboImg3 },
  { id: 4, title: "Festival Package", subtitle: "FULL SET", price: "₹1499", description: "Banners & posts combo!", image: comboImg4 },
  { id: 5, title: "SPG Membership", subtitle: "OFFER ACTIVE", price: "₹999 / Year", description: "Post ads on SPG easily!", image: comboImg5 },
  { id: 6, title: "New Launch", subtitle: "HOT DEAL", price: "₹799", description: "Exclusive launch offer", image: comboImg1b },
  { id: 7, title: "Season Offer", subtitle: "SPECIAL", price: "₹1299", description: "Seasonal discounts", image: comboImg2b },
  { id: 8, title: "Mega Pack", subtitle: "LIMITED", price: "₹1899", description: "Mega combo pack", image: comboImg3b },
];

const AddCrasoule: React.FC = () => {
  const duplicatedAds = [...advertisements, ...advertisements]; // for continuous loop

  return (
    <div className="w-full overflow-hidden bg-white dark:bg-gray-950 py-6">
      <h2 className="text-xl font-semibold mb-4 text-center text-purple-600 dark:text-purple-400">
        🔁 Auto-Scrolling Ads
      </h2>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-4 animate-scroll-horizontal whitespace-nowrap min-w-fit"
        >
          {duplicatedAds.map((ad, index) => (
            <div
              key={`${ad.id}-${index}`}
              className="flex-shrink-0 w-[250px] bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-700 rounded-2xl shadow-md p-4"
            >
              <div className="w-full h-[120px] rounded-xl overflow-hidden mb-2">
                <img src={ad.image} alt={ad.title} className="w-full h-full object-cover" />
              </div>
              <div className="text-[10px] text-purple-700 dark:text-purple-400 font-semibold uppercase tracking-wider mb-1">
                {ad.subtitle}
              </div>
              <h3 className="text-sm font-bold text-gray-800 dark:text-white truncate">{ad.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-300 truncate">{ad.description}</p>
              <div className="mt-1 text-purple-600 dark:text-purple-300 text-sm font-bold">{ad.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCrasoule;
