function SliderArrow ({ children, onClick }) {

    return (
        <div className="arrow-container" onClick={onClick}>
            { children }
        </div>
    )
}

export default SliderArrow;