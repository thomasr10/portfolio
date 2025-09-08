import { useState } from "react";
import OneProject from "./OneProject";
import SliderArrow from "./SliderArrow";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Slider({ projects }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    function goToLeft() {
        if (currentIndex > 0) {
            setCurrentIndex(prev => (prev - 1));
        } else {
            setCurrentIndex((projects.length - 1));
        }

    }

    function goToRight() {
        if (currentIndex < (projects.length - 1)) {
            setCurrentIndex(prev => (prev + 1));
        } else {
            setCurrentIndex(0);
        }

    }

    function goToSlide(index) {
        setCurrentIndex(index);
    }

    return (
        <div className="slider raw-limit-size center">
            <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
                {
                    projects.map((project) => (
                        <OneProject
                            key={project.id}
                            imgPath={project.imgPath}
                            title={project.title}
                            description={project.description}
                            features={project.features}
                            role={project.role}
                            stacks={project.stacks}
                            link={project.link}
                        />
                    ))
                }
            </div>
            <div className="change-slide-container">
                <SliderArrow onClick={goToLeft}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </SliderArrow>
                <div className="dot-container">

                    {
                        projects.map((project, index) => (
                            <div key={project.id}
                                className={currentIndex === index ? 'dot is-active' : 'dot is-not-active'} 
                                onClick={() => goToSlide(index)}>
                            </div>
                        ))
                    }
                </div>
                <SliderArrow onClick={goToRight}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </SliderArrow>

            </div>
        </div>
    )
}

export default Slider;