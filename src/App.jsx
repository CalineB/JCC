import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About";
import Services from "./components/Sevices/Services";
import Prices from "./components/Prices/Prices";
import AOS from "aos";
import "aos/dist/aos.css";
import Diamond from "./components/Diamond";

const App = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ?
    localStorage.getItem("theme") : "light");

  const element = document.documentElement;
  useEffect(() => {
    if(theme==="dark"){
      element.classList.add("dark");
      localStorage.setItem("theme", "dark")
    } else {
      element.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [theme]);

  React.useEffect(() =>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  })

  return (
  <div>  
   <Navbar theme = { theme } setTheme = { setTheme } />
   <Hero theme = { theme }/>
   <About theme = { theme }/>
   <Diamond theme = { theme }/>
   <Services theme = { theme }/>
   <Prices theme = { theme } />
  </div>)
};

export default App;