import MainButton from "./components/MainButton"
import SocialsButton from "./components/SocialsButton"
import StackTag from "./components/StackTag"
import StackLabel from "./components/StackLabel"
import SliderArrow from "./components/SliderArrow"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import SeeProject from "./components/SeeProject"
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
