import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admissions from "./pages/Admissions";
import Courses from "./pages/Courses";
import Gallery from "./pages/Gallery";
import NewsEvents from "./pages/NewsEvents";
import Placements from "./pages/Placements";
import Campus from "./pages/Campus";
import Mba from "./pages/Mba";
import Bba from "./pages/Bba";
// import Diploma from "./pages/Diploma";
// import HotelManagement from "./pages/HotelManagement";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";
import CoursesPage from "./pages/CoursesPage";
import ApplyNow from "./pages/ApplyNow";
import SocialMedia from "./components/SocialMedia";
import Bhm from "./pages/Bhm";
import DiplomaHm from "./pages/DiplomaHm";
import InterHm from "./pages/InterHm";
import Pgdhm from "./pages/Pgdhm";
import Bca from "./pages/Bca";
import Bcom from "./pages/Bcom";
import Diplomatravel from "./pages/Diplomatravel";
function App() {
  return (
    <>
      <Navbar />
      <div className="pt-[100px] sm:pt-[100px] lg:pt-[110px]"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/admissions" element={<Admissions />} /> */}
        <Route path="/courses" element={<CoursesPage />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        {/* <Route path="/news-events" element={<NewsEvents />} /> */}
        <Route path="/applynow" element={<ApplyNow/>} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/courses/bhm" element={<Bhm/>}/>
        <Route path="/courses/diploma-hm" element={<DiplomaHm/>}/>
        <Route path="/courses/intermediate-hm" element={<InterHm/>}/>
        <Route path="/courses/pgdhm" element={<Pgdhm/>}/>
        <Route path="/courses/bca" element={<Bca/>}/>
        <Route path="/courses/mba" element={<Mba />} />
        <Route path="/courses/bba" element={<Bba />} />
        <Route path="/courses/bcom" element={<Bcom/>}/>
        <Route path="/courses/travel-tourism" element={<Diplomatravel/>}/>
        {/* <Route path="/courses/hotel-management" element={<HotelManagement />} /> */}
        {/* <Route path="/courses/diploma" element={<Diploma />} /> */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
      <SocialMedia/>
      <Footer />
    </>
  );
}

export default App;