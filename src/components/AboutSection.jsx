import MainButton from "./MainButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import SocialsButton from "./SocialsButton";
import StackLabel from "./StackLabel";

function AboutSection() {

    function downloadResume() {
        window.open('/CV/RIVOIRE_Thomas - CV.pdf', '_blank')
    }

    return (
        <section className="about-section">
            <div className="raw-limit-size center about-section-container">
                <div className="about-me">
                    <h2>À propos de moi</h2>
                    <p className="white-txt-medium">Développeur Web & Web Mobile en formation, je recherche une alternance pour mettre mes compétences au service de projets concrets</p>
                    <p className="white-txt-regular">Je m’appelle Thomas Rivoire, étudiant en développement web et mobile. Après avoir acquis les bases du développement front-end et back-end, je poursuis mon parcours en intégrant un Bachelor 3 Développement afin de consolider mes compétences et d’élargir mes connaissances.</p>
                    <p className="white-txt-regular">Cette formation me permettra de travailler sur des projets concrets en développement web, mobile, desktop et même jeux vidéo 2D/3D, mais aussi d’approfondir mes compétences en bases de données (SQL/NoSQL) et en gestion de systèmes d’information (DevOps, management de projet, travail en équipe).</p>
                    <p className="white-txt-regular-low">Curieux et motivé, je recherche activement une alternance qui me permettra de mettre en pratique mes compétences techniques, de contribuer à des projets réels et de continuer à progresser aux côtés de professionnels expérimentés.</p>
                    <div className="btn-container">
                        <MainButton type={'button'} children={"Télécharger mon CV"} onClick={downloadResume} />
                        <SocialsButton link={'https://github.com/thomasr10'}>
                            <FontAwesomeIcon icon={faGithub} />
                        </SocialsButton>
                        <SocialsButton link={'https://www.linkedin.com/in/thomas-rivoire-843916192/'}>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </SocialsButton>
                    </div>
                </div>
                <div className="competences">
                    <h2>Mes compétences</h2>
                    <div className="container">
                        <div className="labels-container">
                            <StackLabel children={"HTML"} />
                            <StackLabel children={"SCSS"} />
                            <StackLabel children={"JAVASCRIPT"} />
                        </div>
                        <div className="labels-container mt-16">
                            <StackLabel children={"PHP"} />
                            <StackLabel children={"REACT"} />
                            <StackLabel children={"SYMFONY"} />
                        </div>
                        <div className="labels-container mt-16">
                            <StackLabel children={"NODE.JS"} />
                            <StackLabel children={"VUE.JS"} />
                            <StackLabel children={"SQL"} />
                        </div>
                        <div className="labels-container mt-16">
                            <StackLabel children={"MONGODB"} />
                            <StackLabel children={"PYTHON"} />
                        </div>
                        <div className="labels-container mt-16">
                            <StackLabel children={"GIT"} />
                            <StackLabel children={"FIGMA"} />
                            <StackLabel children={"WORDPRESS"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;