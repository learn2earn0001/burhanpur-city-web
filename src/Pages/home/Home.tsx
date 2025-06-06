 import Footer from "@/components/common/footer/Footer";
import ArchitectureLanding from "./home_components/ArchitectureLanding";
import HistoricalTimeline from "./home_components/HistoricalTimeline";
import TopAttractions from "./home_components/TopAttractions";
import ContactForm from "./home_components/ContactForm";
import CategorySection from "../categorypart/CategorySection";
 
 
const Home: React.FC = () => {
  return (
    <div
      
    >
    
         
      <ArchitectureLanding/>
<CategorySection/>
<HistoricalTimeline/>
<TopAttractions/>
<ContactForm/>
      <Footer/>
      

      
    </div>
  );
};

export default Home;
