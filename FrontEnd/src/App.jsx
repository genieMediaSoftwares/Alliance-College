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
import Diploma from "./pages/Diploma";
import HotelManagement from "./pages/HotelManagement";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-[100px] sm:pt-[100px] lg:pt-[110px]"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/admissions" element={<Admissions />} /> */}
        <Route path="/courses" element={<Courses />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        {/* <Route path="/news-events" element={<NewsEvents />} /> */}
        <Route path="/placements" element={<Placements />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/courses/mba" element={<Mba />} />
        <Route path="/courses/bba" element={<Bba />} />
        <Route path="/courses/hotel-management" element={<HotelManagement />} />
        <Route path="/courses/diploma" element={<Diploma />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;