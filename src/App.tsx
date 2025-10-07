import Header from "./components/Header";
import HeroSection from "./Pages/HeroSection";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Team from "./Pages/Team";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import "./index.css";
import "./App.css"

function App() {
  return (
    <div className=" text-white w-full min-h-screen overflow-hidden">
      <Header />
      <HeroSection /> {/* 🔹 Squares will be rendered here */}
      <About />
      <Services />
      <Team/>
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
