const FooterAbout = () => (
  <div className="text-center">
    <h3 className="font-bold text-lg mb-4">About Us</h3>
    <ul className="text-md font-normal space-y-2">
      {["Cab Booking", "Book Hotel From Burhanpur", "Book Flights From", "Airlines"].map(item => (
        <li key={item}><a href="#" className="hover:text-pink-500 transition">{item}</a></li>
      ))}
    </ul>
  </div>
);

export default FooterAbout;
