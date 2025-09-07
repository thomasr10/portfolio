function MainButton ({ children, onClick, type }) {

    return (
        <button className="btn" onClick={onClick} type={type}>
            { children }
            <div className="dot"></div>
        </button>
    )
}

export default MainButton;