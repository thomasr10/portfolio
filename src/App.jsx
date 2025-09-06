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

function App() {


  return (
    <>
      {/* <div className="btn-container">

        <MainButton children={'Me contacter'} />

        <SocialsButton link={'https://www.linkedin.com/in/thomas-rivoire-843916192/'}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </SocialsButton>

        <StackTag stackName={"React"}>
          <FontAwesomeIcon icon={faReact} />
        </StackTag>

        <StackLabel children={"HTML"}/>
      </div> */}

        {/* <SliderArrow>
          <FontAwesomeIcon icon={faArrowRight}/>
        </SliderArrow>
        <SliderArrow>
          <FontAwesomeIcon icon={faArrowLeft}/>
        </SliderArrow> */}

        {/* <SeeProject link={"#"}/> */}
        <HeroSection />
        <AboutSection/>
        <ProjectSection/>
    </>
  )
}

export default App
