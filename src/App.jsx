import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/herosection/HeroSection";
import HowItWorks from "./components/howitworks/HowItWorks";
import HowAppWorks from "./components/howappworks/HowAppWorks";
import TheImage from "./components/theimage/TheImage";
import RatingsSystem from "./components/ratingssystem/RatingsSystem";
import FoodTruck from "./components/foodtruck/FoodTruck";
import InfoVideo from "./components/infovideo/InfoVideo";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Referrals from "./pages/referrals/Referrals";


//  Home page (your main sections)
const Home = () => (
  <>
    <HeroSection />
    <HowItWorks />
    <HowAppWorks />
    <TheImage />
    <RatingsSystem />
    <FoodTruck />
    <InfoVideo />
    <Footer />
  </>
);


// const AboutUs = () => (
//   <div style={{ padding: "100px 20px" }}>About Us Page</div>
// );
 const Services = () => (
  <div style={{ padding: "100px 20px" }}>Services Page</div>
  );
// const Referrals = () => (
//   <div style={{ padding: "100px 20px" }}>Referrals Page</div>
// );
// const Contact = () => (
//   <div style={{ padding: "100px 20px" }}>Contact Page</div>
// )

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
