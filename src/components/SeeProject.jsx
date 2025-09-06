import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SeeProject ({ link }) {

    return (
        <div className="link-container">
            <a href={link}>Voir sur GitHub</a>
            <FontAwesomeIcon icon={faGithub} className="icon"/>
        </div>
    )
}

export default SeeProject;