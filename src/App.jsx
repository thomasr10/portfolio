import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ProjectSection from "./components/ProjectSection"
import ContactSection from "./components/ContactSection"
import { useRef } from "react";

function App() {

  const contactRef = useRef(null);

  function goToContact() {
    contactRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <>
        <HeroSection btnFunction={goToContact}/>
        <AboutSection/>
        <ProjectSection/>
        <ContactSection ref={contactRef}/>
    </>
  )
}

export default App
