import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About";
import Services from "./components/Sevices/Services";
import Prices from "./components/Prices/Prices";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import BackToTopButton from "./components/HomeBtn/HomeBtn";
import Legals from "./components/Legals";

import AOS from "aos";
import "aos/dist/aos.css";

const MainPage = ({ theme }) => (
  <>
    <Hero theme={theme} />
    <About theme={theme} />
    <Services />
    <Prices />
    <Contacts />
  </>
);

const App = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<MainPage theme={theme} />} />
          <Route path="/Legals" element={<Legals />} />
        </Routes>
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
};

export default App;
