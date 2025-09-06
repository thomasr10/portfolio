function MainButton ({ children, onClick }) {

    return (
        <button className="btn" onClick={onClick}>
            { children }
            <div className="dot"></div>
        </button>
    )
}

export default MainButton;