import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import SemiMainPage from "./components/SemiMainPage";
import MovingSlider from "./components/MovingSlider";
import CoreFeatures from "./components/CoreFeatures";
import Works from "./components/Works";
import PaymentSolution from "./components/PaymentSolution";
import WhyChooseUs from "./components/WhyChooseUs";
import PricingPlans from "./components/PricingPlans";
import Benefits from "./components/Benifits";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import "animate.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>

      <SemiMainPage />
      <MovingSlider />
      <CoreFeatures />
      <Works />
      <PaymentSolution />
      <WhyChooseUs />
      <PricingPlans />
      <Benefits />
      <BlogSection />
      <div className="bg-[#8234C5]">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
