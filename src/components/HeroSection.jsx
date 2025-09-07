import MainButton from "./MainButton";
import SocialsButton from "./SocialsButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faHtml5, faJs, faLinkedinIn, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'
import StackTag from "./StackTag";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons/faCss3Alt";
import { faSymfony } from "@fortawesome/free-brands-svg-icons/faSymfony";
import { faSass } from "@fortawesome/free-brands-svg-icons/faSass";

function HeroSection() {
    return (
        <section className="hero">
            <div className="raw-limit-size center">
                <div className="presentation">
                    <div className="txt-container">
                        <h1>Hello, I am Thomas Rivoire</h1>
                        <p>Développeur web & mobile en formation, je recherche une alternance pour mettre mes compétences au service de projets concrets</p>
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
                            <StackTag>
                                <FontAwesomeIcon icon={faHtml5} />
                            </StackTag>
                            <StackTag>
                                <FontAwesomeIcon icon={faCss3Alt} />
                            </StackTag>
                            <StackTag>
                                <FontAwesomeIcon icon={faJs} />
                            </StackTag>
                            <StackTag>
                                <FontAwesomeIcon icon={faReact} />
                            </StackTag>
                        </div>
                        <div className="stack-container mt-10">
                            <StackTag>
                                <FontAwesomeIcon icon={faSymfony} />
                            </StackTag>
                            <StackTag>
                                <FontAwesomeIcon icon={faVuejs} />
                            </StackTag>
                            <StackTag>
                                <FontAwesomeIcon icon={faSass} />
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