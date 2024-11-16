import './Contact.css'

export default function Contact() {
    return(
        <section className="contact-container">
            <h2>Contact</h2>
            <div className="contact-content">
                <div className="contact-name">
                    <label><b>Email: </b> </label>
                    <a href="mailto:nshumeigi@gmail.com">nshumeigi@gmail.com</a>
                </div>
                <div className="contact-socials">
                    <a href="https://github.com/Meigi09"><i className='bx bxl-github'></i></a>
                    <a href="https://www.linkedin.com/in/meigi-nshuti-mahoro/"><i className='bx bxl-linkedin-square'></i></a>
                </div>
            </div>
        </section>
    )
}