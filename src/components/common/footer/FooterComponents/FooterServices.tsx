import { Link } from "react-router-dom";
import { FooterContent } from "./FooterContact";

const FooterServices = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around gap-6">
      {FooterContent.map((section) => (
        <div key={section.title}>
          <h3 className="font-bold text-lg mb-3">{section.title}</h3>
          <ul className="space-y-2 text-md">
            {section.links.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="hover:text-pink-500 transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterServices;
