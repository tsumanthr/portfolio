import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { useEffect } from "react";



function App() {
  useEffect(() => {
    
    const handleVisibilityChange = () => {
      document.title = document.hidden ? "Come back :( " : "Sumanth Reddy";
      
    };
  
    document.addEventListener("visibilitychange", handleVisibilityChange);
  
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Experience/>
      <Education/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
