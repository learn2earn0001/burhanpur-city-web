const FooterBottom = () => (
  <div className="flex flex-col items-center mt-8 text-center text-pink-600 font-semibold space-y-2">
    <p className="text-sm sm:text-base">© 2025 Burhanpur AkryptTech. All rights reserved.</p>
    <div className="flex space-x-6 text-gray-400 text-sm pb-4 flex-wrap justify-center">
      {["💳 Visa", "💳 MasterCard", "💳 Amex", "📲 UPI"].map(item => (
        <span key={item} className="hover:text-pink-500 cursor-pointer">{item}</span>
      ))}
    </div>
  </div>
);

export default FooterBottom;
