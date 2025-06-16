import CategorySection from '@/Pages/categorypart/CategorySection';
import SubcategoryPage from '@/Pages/categorypart/subcategorypart/SubcategoryPage';
import ContactUs from '@/Pages/contactpart/Contact';
import BusinessDashboard from '@/Pages/dashboard/dash_component/BusinessDashboard';
import Dashboard from '@/Pages/dashboard/dash_component/Dashboard';
import Profile from '@/Pages/dashboard/dash_component/ProfilePage';
import RegisterBusinessForm from '@/Pages/dashboard/dash_component/RegisterBusinessForm';
import Explore from '@/Pages/explorepart/Explore';
import ExploreDesktop from '@/Pages/explorepart/explore_component/ExploreDesktop';
// import ExploreBurhanpur from '@/Pages/explorepart/explore_component/ExploreDesktop';
import DargahHakimi from '@/Pages/explorepart/explore_component/ExploreDetails/DargahHakimi';
import Railway from '@/Pages/explorepart/explore_component/ExploreDetails/Railway';
import ShahiQila from '@/Pages/explorepart/explore_component/ExploreDetails/ShahiQila';
import ExplorePhoneview from '@/Pages/explorepart/explore_component/ExplorePhoneview';
import Home from '@/Pages/home/Home';
 
import LoginPage from '@/Pages/home/login/Login';
import Signin from '@/Pages/Login/Signin';
import Plans from '@/Pages/plans/Plans';
import RegisterPage from '@/Pages/registration/Registration';
import React from 'react';
import { Routes, Route} from 'react-router-dom';


// Pages



const  MainRoutes: React.FC = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/home" element={<Home/>} /> */}
        {/* <Route path="/" element={<AuthPage/>} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/explore-more" element={<ExploreDesktop />} />
        <Route path="/explore-phone" element={<ExplorePhoneview />} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/RailwayStaion" element={<Railway />} />
        <Route path="/ShahiQila" element={<ShahiQila />} />
        <Route path="/DargahHakimi" element={<DargahHakimi />} />
        <Route path="/category" element={<CategorySection />} />
        <Route path="/pricing" element={<Plans />}/>

        <Route path="/subcategory/:categoryId" element={<SubcategoryPage />} />
        <Route  path='/dash'element={<Dashboard/>} />

        {/* <Route path="/subcategory/:categoryId" element={<SubcategoryPage />} />
        <Route path="/subcategorydetail/:id" element={<SubcategoryDetail />} /> */}
        {/* <Route path="/newssection" element={<NewsSection />} /> */}
        <Route path="/profile" element={<Profile />} />
      <Route path="/business/dashboard" element={<BusinessDashboard/>} />
<Route path="/add-business" element={<RegisterBusinessForm />} />

    


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
