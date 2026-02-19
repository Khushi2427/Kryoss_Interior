import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import HowItWorks from './pages/how-it-works';
import DesignGallery from './pages/design-gallery';
import Reviews from './pages/reviews';
import ExperienceCenters from './pages/experience-centres';
import About from './pages/more/AboutUs';
import Contact from './pages/contact';
import Projects from './pages/projects';

// Design Gallery Pages
import ModularKitchen from './pages/design-gallery/ModularKitchen';
import CustomiseKitchen from './pages/design-gallery/CustomiseKitchen';
import Wardrobe from './pages/design-gallery/Wardrobe';
import Bedroom from './pages/design-gallery/Bedroom';
import LivingRoom from './pages/design-gallery/LivingRoom';
import SpaceSaving from './pages/design-gallery/SpaceSaving';
import DiningRoom from './pages/design-gallery/DiningRoom';
import HomeOffice from './pages/design-gallery/HomeOffice';
import KidsBedroom from './pages/design-gallery/KidsBedroom';
import Bathroom from './pages/design-gallery/Bathroom';
import OneBHK from './pages/design-gallery/OneBHK';
import TwoBHK from './pages/design-gallery/TwoBHK';
import ThreeBHK from './pages/design-gallery/ThreeBHK';

// Calculators
import KitchenCalculator from './pages/calculators/Kitchen';
import WardrobeCalculator from './pages/calculators/Wardrobe';
import HomeCalculator from './pages/calculators/Home';

// Offerings
import FullHome from './pages/offerings/FullHome';
import ModularKitchens from './pages/offerings/ModularKitchens';
import Wardrobes from './pages/offerings/Wardrobes';

// Guides
import Guides from './pages/guides';
import MaintenanceGuide from './pages/guides/Maintenance';
import GuideModularKitchen from './pages/guides/ModularKitchen';
import GuideBedroom from './pages/guides/Bedroom';
import GuideLivingRoom from './pages/guides/LivingRoom';
import GuideDiningRoom from './pages/guides/DiningRoom';
import GuideKidsRoom from './pages/guides/KidsRoom';
import GuideStudyRoom from './pages/guides/StudyRoom';
import GuideBalcony from './pages/guides/Balcony';
import GuideBathroom from './pages/guides/Bathroom';
import GuideMaterialsFinishes from './pages/guides/MaterialsFinishes';

// Blogs
import Trends from './pages/blogs/Trends';
import Blogs from './pages/blogs/Blogs';
import HomeTours from './pages/blogs/HomeTours';
import BlogModularKitchen from './pages/blogs/ModularKitchenInteriors';
import BlogHomeInterior from './pages/blogs/HomeInteriorDesign';
import BlogBedroom from './pages/blogs/BedroomDesign';
import BlogLivingRoom from './pages/blogs/LivingRoomDesign';
import BlogDiningRoom from './pages/blogs/DiningRoomDesign';
import BlogKidsBedroom from './pages/blogs/KidsBedroomDesign';
import BlogStudyRoom from './pages/blogs/StudyRoomDesign';
import BlogHomeDecor from './pages/blogs/HomeDecor';
import BlogDCHomeTours from './pages/blogs/DCHomeTours';
import BlogDCDesignStars from './pages/blogs/DCDesignStars';
import BlogDCUpdates from './pages/blogs/DCUpdates';

// More
import Careers from './pages/more/Careers';
import PartnerPolicy from './pages/more/PartnerPolicy';
import ReferFriend from './pages/more/ReferFriend';
import Videos from './pages/more/Videos';
import WhyKryoss from './pages/more/WhyKryoss';
import CustomerDashboard from './pages/more/CustomerDashboard';
import ChannelProgram from './pages/more/ChannelProgram';
import BecomeDesignPartner from './pages/more/BecomeDesignPartner';
import BecomeFranchisee from './pages/more/BecomeFranchisee';
import FAQ from './pages/more/FAQ';

import '@fontsource/inter';
import '@fontsource/outfit';
import InteriorDesignGuides from './pages/guides';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/design-gallery" element={<DesignGallery />} />
          <Route path='guides' element={<InteriorDesignGuides />} />

          {/* Design Gallery Sub-pages */}
          <Route path="/design-gallery/modular-kitchen-designs" element={<ModularKitchen />} />
          <Route path="/design-gallery/customise-your-kitchen" element={<CustomiseKitchen />} />
          <Route path="/design-gallery/wardrobe-designs" element={<Wardrobe />} />
          <Route path="/design-gallery/bedroom-designs" element={<Bedroom />} />
          <Route path="/design-gallery/living-room-designs" element={<LivingRoom />} />
          <Route path="/design-gallery/space-saving-designs" element={<SpaceSaving />} />
          <Route path="/design-gallery/dining-room-designs" element={<DiningRoom />} />
          <Route path="/design-gallery/home-office-designs" element={<HomeOffice />} />
          <Route path="/design-gallery/kids-bedroom-designs" element={<KidsBedroom />} />
          <Route path="/design-gallery/bathroom-designs" element={<Bathroom />} />
          <Route path="/design-gallery/1-bhk-interior-designs" element={<OneBHK />} />
          <Route path="/design-gallery/2-bhk-interior-designs" element={<TwoBHK />} />
          <Route path="/design-gallery/3-bhk-interior-designs" element={<ThreeBHK />} />

          <Route path="/reviews" element={<Reviews />} />
          <Route path="/experience-centres" element={<ExperienceCenters />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />

          {/* Calculators */}
          <Route path="/calculator/kitchen" element={<KitchenCalculator />} />
          <Route path="/calculator/wardrobe" element={<WardrobeCalculator />} />
          <Route path="/calculator/home" element={<HomeCalculator />} />
          <Route path="/calculator" element={<HomeCalculator />} />

          {/* Offerings */}
          <Route path="/offering/full-home" element={<FullHome />} />
          <Route path="/offering/modular-kitchens" element={<ModularKitchens />} />
          <Route path="/offering/wardrobes" element={<Wardrobes />} />
          <Route path="/offering" element={<FullHome />} />

          {/* Guides */}
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/maintenance" element={<MaintenanceGuide />} />
          <Route path="/guides/modular-kitchen-guides" element={<GuideModularKitchen />} />
          <Route path="/guides/bedroom-design-guides" element={<GuideBedroom />} />
          <Route path="/guides/living-room-design-guides" element={<GuideLivingRoom />} />
          <Route path="/guides/dining-room-design-guides" element={<GuideDiningRoom />} />
          <Route path="/guides/kids-room-design-guides" element={<GuideKidsRoom />} />
          <Route path="/guides/study-room-design-guides" element={<GuideStudyRoom />} />
          <Route path="/guides/balcony-design-guides" element={<GuideBalcony />} />
          <Route path="/guides/bathroom-design-guides" element={<GuideBathroom />} />
          <Route path="/guides/materials-and-finishes" element={<GuideMaterialsFinishes />} />

          {/* Blogs */}
          <Route path="/blogs/trends" element={<Trends />} />
          <Route path="/blogs/tours" element={<HomeTours />} />
          <Route path="/blogs" element={<Blogs />} />

          <Route path="/blogs/modular-kitchen-interiors-ideas" element={<BlogModularKitchen />} />
          <Route path="/blogs/home-interior-design-ideas" element={<BlogHomeInterior />} />
          <Route path="/blogs/bedroom-design-ideas" element={<BlogBedroom />} />
          <Route path="/blogs/living-room-design-ideas" element={<BlogLivingRoom />} />
          <Route path="/blogs/dining-room-design-ideas" element={<BlogDiningRoom />} />
          <Route path="/blogs/kids-bedroom-design-ideas" element={<BlogKidsBedroom />} />
          <Route path="/blogs/study-room-design-ideas" element={<BlogStudyRoom />} />
          <Route path="/blogs/home-decor-ideas" element={<BlogHomeDecor />} />
          <Route path="/blogs/dc-home-tours" element={<BlogDCHomeTours />} />
          <Route path="/blogs/dc-design-stars" element={<BlogDCDesignStars />} />
          <Route path="/blogs/dc-updates" element={<BlogDCUpdates />} />

          {/* More */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/partner-policy" element={<PartnerPolicy />} />
          <Route path="/refer-friend" element={<ReferFriend />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/why-kryoss-interior" element={<WhyKryoss />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/channel-partner-signup-login" element={<ChannelProgram />} />
          <Route path="/become-a-design-partner" element={<BecomeDesignPartner />} />
          <Route path="/become-a-franchisee" element={<BecomeFranchisee />} />
          <Route path="/faqs" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
