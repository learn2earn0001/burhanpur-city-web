import CategorySection from '@/Pages/categorypart/CategorySection';
import SubcategoryPage from '@/Pages/categorypart/subcategorypart/SubcategoryPage';
import ContactUs from '@/Pages/contactpart/Contact';
import Explore from '@/Pages/explorepart/Explore';
import ExploreDesktop from '@/Pages/explorepart/explore_component/ExploreDesktop';
// import ExploreBurhanpur from '@/Pages/explorepart/explore_component/ExploreDesktop';
import DargahHakimi from '@/Pages/explorepart/explore_component/ExploreDetails/DargahHakimi';
import Railway from '@/Pages/explorepart/explore_component/ExploreDetails/Railway';
import ShahiQila from '@/Pages/explorepart/explore_component/ExploreDetails/ShahiQila';
import Home from '@/Pages/home/Home';
 
import LoginPage from '@/Pages/home/login/Login';
import RegisterPage from '@/Pages/registration/Registration';
import React from 'react';
import { Routes, Route} from 'react-router-dom';

// Pages



const  MainRoutes: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/" element={<AuthPage/>} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/Login" element={<LoginPage />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/explore-more" element={<ExploreDesktop />} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/RailwayStaion" element={<Railway />} />
        <Route path="/ShahiQila" element={<ShahiQila />} />
        <Route path="/DargahHakimi" element={<DargahHakimi />} />
        <Route path="/category" element={<CategorySection />} />
        <Route path="/subcategory/:categoryId" element={<SubcategoryPage />} />

        {/* <Route path="/subcategory/:categoryId" element={<SubcategoryPage />} />
        <Route path="/subcategorydetail/:id" element={<SubcategoryDetail />} /> */}
        {/* <Route path="/newssection" element={<NewsSection />} /> */}
        <Route path="/registar" element={<RegisterPage />} />

        {/* ✅ Admin Route Example */}
        {/* <Route path="/dash" element={<Dashboard />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} /> */}

        {/* ❌ 404 Page Not Found */}
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center min-h-screen text-2xl font-semibold">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default  MainRoutes;
