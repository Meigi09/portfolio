import './About.css'
import profile from '../../assets/usr.jpg'

export default function About() {
    return(
        <section className="about-container">
            <div className="about-content">
                <div className="about-desc">
                    <h3 className="about_subtitle">
                        Junior Software Engineer</h3>
                    <p>Hey👋🏽, I am <b>Mahoro Nshuti Meigi</b>. I enjoy turning complex requirements into user-friendly applications and have a knack for working across both front-end and back-end development.</p>

                </div>
                <div className="about-profile">
                    <img src={profile} alt="" width="300px" height="300px" className="about-image"/>
                </div>
            </div>
        </section>
    )

}