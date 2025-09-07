import { useState } from "react";
import MainButton from "./MainButton";

function ContactSection () {

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    
    function sendEmail () {
        alert(`${name}, ${mail}, ${subject}, ${message}`)
    }

    return (
        <section className="contact-section">
            <div className="raw-limit-size center">
                <div>
                    <h2>Me contacter</h2>
                    <p>Email : <a href="mailto:t.rivoire01@gmail.com">t.rivoire01@gmail.com</a></p>
                    <p className="mt-16">Pour plus d'informations : <a href="/CV/RIVOIRE_Thomas - CV.pdf" target="blank">Mon CV</a></p>
                </div>
                <div className="form-container">
                    <form onSubmit={sendEmail}>
                        <div className="input-container mt-32">
                            <label htmlFor="name">Prénom et Nom</label>
                            <input type="text" name="name" id="name" required placeholder="Prénom et Nom" onChange={(e) => { setName(e.target.value)}}/>
                        </div>
                        <div className="input-container mt-24">
                            <label htmlFor="mail">Adresse email</label>
                            <input type="mail" name="mail" id="mail" required placeholder="Adresse email" onChange={(e) => { setMail(e.target.value)}}/>
                        </div>
                        <div className="input-container mt-24">
                            <label htmlFor="subject">Sujet</label>
                            <input type="text" name="subject" id="subject" required placeholder="Sujet" onChange={(e) => { setSubject(e.target.value)}}/>
                        </div>
                        <div className="input-container mt-24">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" required placeholder="Message" onChange={(e) => { setMessage(e.target.value)}}></textarea>
                        </div>
                        <MainButton children={"Envoyer"} type={'submit'}/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;