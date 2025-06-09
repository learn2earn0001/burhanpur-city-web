import Footer from "@/components/common/footer/Footer";
import ArchitectureLanding from "./home_components/ArchitectureLanding";
import HistoricalTimeline from "./home_components/HistoricalTimeline";
import TopAttractions from "./home_components/TopAttractions";
import ContactForm from "./home_components/ContactForm";
import CategorySection from "../categorypart/CategorySection";
import NavbarMain from "@/components/common/navbar/NavbarMain";

const Home: React.FC = () => {
  return (
    <>
      <NavbarMain />

      <div>
        <ArchitectureLanding />
        <CategorySection />
        <HistoricalTimeline />
        <TopAttractions />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default Home;
