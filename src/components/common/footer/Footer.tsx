import { motion } from "framer-motion";
import FooterLogoSection from "./FooterComponents/FooterLogoSection";
import FooterBottom from "./FooterComponents/FooterBottom";
import FooterServices from "./FooterComponents/FooterServices";
import FooterNewsletter from "./FooterComponents/FooterNewsletter";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <footer className="bg-gradient-to-t from-gray-800 via-gray-900 to-gray-800 text-gray-200 pt-10 px-4 sm:px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 border-b border-gray-700">
          <FooterLogoSection />
          <FooterServices />
          <div className="sm:col-span-2 lg:col-span-1 flex justify-center sm:justify-start">
            <FooterNewsletter />
          </div>
        </div>
        <FooterBottom />
      </footer>
    </motion.div>
  );
};

export default Footer;


