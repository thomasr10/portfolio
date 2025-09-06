function SocialsButton({ children, link}) {

    return (
        <div className="socials-container">
            <a href={link} target='blank'>
                { children }
            </a>
        </div>
    )
}

export default SocialsButton;