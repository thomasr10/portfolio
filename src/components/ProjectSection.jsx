import OneProject from "./OneProject";

import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSymfony } from "@fortawesome/free-brands-svg-icons/faSymfony";
import { faSass } from "@fortawesome/free-brands-svg-icons/faSass";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faReact, faHtml5, faJs, faLinkedinIn, faVuejs, faPhp } from "@fortawesome/free-brands-svg-icons"

import Slider from "./Slider";

function ProjectSection() {
    return (
        <section className="project-section">
            <h2>Mes projets</h2>
            <Slider
                projects={[
                    {
                        id: 1,
                        imgPath: "/img/Mockup UrbanPlay.png",
                        title: "Urban Play - Application d'activité sportives",
                        description: "Urban Play est une application web qui permet aux utilisateurs de créer ou de rejoindre des activités sportives près de chez eux",
                        features: ['Authentification sécurisée par JWT', 'Intégration d\'une carte intéractive avec Leaflet', 'Récupération de données via une API', 'Messagerie de groupe instantanée via WebSocket'],
                        role: 'Full-Stack Developer',
                        stacks: [
                            { id: 'symfony', icon: faSymfony },
                            { id: 'react', icon: faReact },
                            { id: 'node', icon: faNodeJs },
                            { id: 'sass', icon: faSass }
                        ],
                        link: 'https://github.com/thomasr10/Urban-Play'
                    },
                    {
                        id: 2,
                        imgPath: "/img/Mockup Infantia.png",
                        title: "Infantia - Application de gestion de crèche",
                        description: "Infantia est une application web destinée à la gestion d’une crèche, avec une interface dédiée aux utilisateurs et une partie admin. ",
                        features: ['Système d’authentification avec vérification par mail', 'Génération automatique d’un planning annuel à l’inscription', 'Développement d’un espace administrateur'],
                        role: 'Full-Stack Developer',
                        stacks: [
                            { id: 'symfony', icon: faSymfony },
                            { id: 'sass', icon: faSass }
                        ],
                        link: 'https://github.com/thomasr10/Infantia'
                    },
                    {
                        id: 3,
                        imgPath: "/img/Mockup Lutopia.png",
                        title: "Lutopia - Application de gestion de librairie pour enfants",
                        description: "Réalisé en groupe, ce projet m’a permis d’occuper le rôle de lead developer et de contribuer activement à la partie back-end avec PHP, JavaScript et MySQL.",
                        features: ['Système d’authentification avec vérification par mail', 'Emprunt de livres', 'Interface admin pour la gestion des utilisateurs et du catalogue de livres'],
                        role: 'Lead Developer & Back-End Developer',
                        stacks: [
                            { id: 'symfony', icon: faPhp },
                            { id: 'javascript', icon: faJs },
                            { id: 'sass', icon: faSass }
                        ],
                        link: 'https://github.com/thomasr10/ECF-3-Lutopia'
                    },
                    {
                        id: 4,
                        imgPath: "/img/Mockup TaskHive.png",
                        title: "TaskHive - Application de to-do list partagé",
                        description: "TaskHive est une application web collaborative permettant aux utilisateurs de créer des listes de tâches et de les partager avec leurs proches.",
                        features: ['Système d’authentification : inscription et connexion', 'Création de listes de tâches : ajout, organisation et gestion des éléments', 'Partage collaboratif : partage de listes avec des utilisateurs'],
                        role: 'Full-Stack Developer',
                        stacks: [
                            { id: 'symfony', icon: faPhp },
                            { id: 'javascript', icon: faJs },
                            { id: 'html', icon: faHtml5 },
                            { id: 'css', icon: faCss3Alt }
                        ],
                        link: 'https://github.com/thomasr10/ECF-2'
                    },
                    {
                        id: 5,
                        imgPath: "/img/Mockup Comet Fall Game.png",
                        title: "Développement de Comet Fall Game - Jeu Vidéo en Python",
                        description: "Comet Fall est un projet réalisé pour apprendre Python à travers la création d’un petit jeu. Le joueur doit esquiver des comètes qui tombent du ciel.",
                        features: ['Déplacement du joueur.', 'Gestion des collisions avec les comètes.', 'Gestion des dégâts et des points de vie'],
                        role: 'Full-Stack Developer',
                        stacks: [
                            { id: 'python', icon: faPython },
                        ],
                        link: 'https://github.com/thomasr10/Python-Game'
                    },
                    {
                        id: 6,
                        imgPath: "/img/Mockup Pokemon.png",
                        title: "PokéBooster - Jeu d'ouverture de boosters Pokémon",
                        description: "Poke Booster est un projet personnel en cours de développement permettant de simuler l’ouverture de boosters Pokémon en s’appuyant sur la Pokemon TCG API.",
                        features: ['Récupération des cartes via l’API Pokemon TCG', 'Gestion de la progression et du niveau du joueur', 'Simulation d’ouverture de boosters avec affichage des cartes'],
                        role: 'Full-Stack Developer',
                        stacks: [
                            { id: 'react', icon: faReact },
                            { id: 'node', icon: faNodeJs },
                            { id: 'sass', icon: faSass }
                        ],
                        link: 'https://github.com/thomasr10/pokeapi'
                    },
                    {
                        id: 7,
                        imgPath: "/img/Mockup Bong.png",
                        title: "Développement d’un portfolio l’artiste 2D Bông",
                        description: "Développement d’un portfolio en ligne dédié à Bông, une artiste 2D vietnamienne.",
                        features: ['Design responsive : interface adaptée aux différents supports', 'Mise en page d’images : galerie fluide pour présenter les illustrations', 'Navigation simple et claire : hiérarchisation du contenu'],
                        role: 'Front-End Developer',
                        stacks: [
                            { id: 'html', icon: faHtml5 },
                            { id: 'css', icon: faCss3Alt },
                            { id: 'javascript', icon: faJs }
                        ],
                        link: 'https://github.com/thomasr10/ECF-1'
                    },
                    {
                        id: 8,
                        imgPath: "/img/Mockup HypnoSys.png",
                        title: "HypnoSys - Développement d'une landing page fictive",
                        description: "Développement d’une landing page pour HypnoSys, un produit fictif imaginant un casque capable de contrôler les rêves.",
                        features: ['Design responsive : interface adaptée aux différents supports', ' Intégration d’une mise en page claire et épurée', 'Présentation du produit, Call to action'],
                        role: 'Front-End Developer',
                        stacks: [
                            { id: 'html', icon: faHtml5 },
                            { id: 'css', icon: faCss3Alt },
                            { id: 'javascript', icon: faJs }
                        ],
                        link: 'https://github.com/thomasr10/ECF-1'
                    },
                ]
                }
            />
        </section>
    )
}

export default ProjectSection;