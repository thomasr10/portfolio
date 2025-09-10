import MainButton from "./MainButton";
import SocialsButton from "./SocialsButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faHtml5, faJs, faLinkedinIn, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'
import StackTag from "./StackTag";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons/faCss3Alt";
import { faSymfony } from "@fortawesome/free-brands-svg-icons/faSymfony";
import { faSass } from "@fortawesome/free-brands-svg-icons/faSass";
import { useEffect } from "react";

function HeroSection() {

    const h1 = "Hello, I am Thomas Rivoire";

    useEffect(() => {
        
        for(let i = 0; i > h1.length; i++) {
            setTimeout(() => {
                h1[i].style.color = '#7050ff';
            }, 1000)
        }
        
    }, [h1])

    return (
        <section className="hero">
            <div className="raw-limit-size center">
                <div className="presentation">
                    <div className="txt-container">
                        <h1>{ h1 }</h1>
                        <p>Développeur Web & Web Mobile en formation, je recherche une alternance pour mettre mes compétences au service de projets concrets</p>
                    </div>
                    <div className="btn-container">
                        <MainButton children={"Me contacter"} type={'button'}/>
                        <SocialsButton link={'https://github.com/thomasr10'}>
                            <FontAwesomeIcon icon={faGithub} />
                        </SocialsButton>
                        <SocialsButton link={'https://www.linkedin.com/in/thomas-rivoire-843916192/'}>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </SocialsButton>
                    </div>
                    <div className="stack-section">
                        <div className="stack-container">
                            <StackTag >
                                <FontAwesomeIcon icon={faHtml5} className="html"/>
                            </StackTag>
                            <StackTag>
                                <FontAwesomeIcon icon={faCss3Alt} className="css"/>
                            </StackTag>
                            <StackTag>
                                <FontAwesomeIcon icon={faJs} className="js"/>
                            </StackTag>
                            <StackTag>
                                <FontAwesomeIcon icon={faReact} className="react"/>
                            </StackTag>
                        </div>
                        <div className="stack-container mt-10">
                            <StackTag>
                                <FontAwesomeIcon icon={faSymfony} className="symfony"/>
                            </StackTag>
                            <StackTag>
                                <FontAwesomeIcon icon={faVuejs} className="vue"/>
                            </StackTag>
                            <StackTag>
                                <FontAwesomeIcon icon={faSass} className="sass"/>
                            </StackTag>
                        </div>
                    </div>
                </div>
            </div>
            <span className="glare"></span>
        </section>

    )
}

export default HeroSection;