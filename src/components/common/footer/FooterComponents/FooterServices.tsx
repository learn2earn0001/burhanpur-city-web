const FooterServices = () => (
  <div className="text-center">
    <h3 className="font-bold text-lg mb-4">Our Services</h3>
    <ul className="text-md font-normal space-y-2">
      {["International Holidays", "Bus Booking", "Train Ticket Booking", "Trip Ideas"].map(service => (
        <li key={service}><a href="#" className="hover:text-pink-500 transition">{service}</a></li>
      ))}
    </ul>
  </div>
);

export default FooterServices;
