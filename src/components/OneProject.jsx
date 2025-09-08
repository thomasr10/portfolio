import StackTag from "./StackTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faJs, faLinkedinIn, faVuejs } from "@fortawesome/free-brands-svg-icons"
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSymfony } from "@fortawesome/free-brands-svg-icons/faSymfony";
import { faSass } from "@fortawesome/free-brands-svg-icons/faSass";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import SeeProject from "./SeeProject";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";

function OneProject({ id, imgPath, title, description, features, role, stacks, link }) {
    return (
        <div className="one-project-container">
            <div className="img-section">
                <div className="img-container">
                    <figure>
                        <img src={imgPath} alt="Image du projet" />
                    </figure>
                </div>
            </div>
            <div className="txt-section">
                <div className="about-project">
                    <h3>{title}</h3>
                    <p className="description">{description}</p>
                </div>
                <div className="informations">
                    <h4>Informations</h4>
                    <hr />
                    <div className="features">
                        <span className="subtitle">Fonctionnalités principales</span>
                        <ul>
                            {
                                features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <hr />
                    <div className="role">
                        <span className="subtitle">Rôle</span>
                        <span className="span">{role}</span>
                    </div>
                    <hr />
                    <div className="stack">
                        <span className="subtitle">Stack</span>
                        <div className="stack-list">
                            {
                                stacks.map((stack) => (
                                    <StackTag key={stack.id}>
                                        <FontAwesomeIcon icon={stack.icon} />
                                    </StackTag>
                                ))
                            }
                        </div>
                    </div>
                    <SeeProject link={link} className="link" />
                </div>
            </div>
        </div>
    )
}

export default OneProject;