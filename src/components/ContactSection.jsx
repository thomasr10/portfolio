import { useEffect, useState } from "react";
import MainButton from "./MainButton";
import Loader from "./Loader";

function ContactSection() {

    const [name, setName] = useState('');
    const [emailFrom, setEmailFrom] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [emailConfirmation, setEmailConfirmation] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        emailjs.init({
            publicKey: "d0AyWLJ347Xr-qivJ",
        });
    }, []);

    function sendEmail(e) {
        e.preventDefault();
        setIsLoading(true);
        const params = {
            name: name,
            subject: subject,
            message: message,
            emailFrom: emailFrom
        }

        emailjs.send("service_wk090tv", "template_1t7f6n1", params).
            then(() => {
                setEmailConfirmation('Email envoyé avec succès');
                setName('');
                setEmailFrom('');
                setSubject('');
                setMessage('');
                setIsLoading(false);
            })
            .catch(() => {
                setEmailConfirmation('Problème survenue à l\'envoie de l\'email');
            });
    }
    return (
        <>

            <section className="contact-section">
                <div className="raw-limit-size center">
                    <div>
                        <h2>Me contacter</h2>
                        <p>Email : <a href="mailto:t.rivoire01@gmail.com">t.rivoire01@gmail.com</a></p>
                        <p className="mt-16">Pour plus d'informations : <a href="/CV/RIVOIRE_Thomas - CV.pdf" target="blank">Mon CV</a></p>
                    </div>
                    <div className="form-container">
                        <form onSubmit={sendEmail}>
                            {
                                (emailConfirmation !== '') && (
                                    <div className="msg-container">{emailConfirmation}</div>
                                )
                            }
                            <div className="input-container mt-32">
                                <label htmlFor="name">Prénom et Nom</label>
                                <input type="text" name="name" id="name" required placeholder="Prénom et Nom" value={name} onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <div className="input-container mt-24">
                                <label htmlFor="mail">Adresse email</label>
                                <input type="mail" name="mail" id="mail" required placeholder="Adresse email" value={emailFrom} onChange={(e) => { setEmailFrom(e.target.value) }} />
                            </div>
                            <div className="input-container mt-24">
                                <label htmlFor="subject">Sujet</label>
                                <input type="text" name="subject" id="subject" required placeholder="Sujet" value={subject} onChange={(e) => { setSubject(e.target.value) }} />
                            </div>
                            <div className="input-container mt-24">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" required placeholder="Message" value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                            </div>
                            <MainButton children={"Envoyer"} type={'submit'} />
                        </form>
                    </div>
                </div>
            </section>
            {
                isLoading === true && (
                    <Loader />
                )
            }

        </>
    )
}

export default ContactSection;