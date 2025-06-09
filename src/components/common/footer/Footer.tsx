import { motion } from "framer-motion";
import FooterLogoSection from "./FooterComponents/FooterLogoSection";
import FooterBottom from "./FooterComponents/FooterBottom";
import FooterContact from "./FooterComponents/FooterContact";
import FooterServices from "./FooterComponents/FooterServices";
import FooterAbout from "./FooterComponents/FooterAbout";
import FooterNewsletter from "./FooterComponents/FooterNewsletter";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <footer className="bg-gradient-to-t from-gray-800 via-gray-900 to-gray-800 text-gray-200 pt-10 px-6 sm:px-10 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10 border-b border-gray-700">
          <FooterLogoSection />
          <div className="flex justify-center items-center sm:block"><FooterContact /></div>
          <div className="flex justify-center items-center sm:block"><FooterServices /></div>
          <div className="flex justify-center items-center sm:block"><FooterAbout /></div>
          <div className="flex justify-center items-center sm:block"><FooterNewsletter /></div>
        </div>
        <FooterBottom />
      </footer>
    </motion.div>
  );
};

export default Footer;
