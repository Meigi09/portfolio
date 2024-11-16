import './Experience.css'
import web from '../../assets/web.svg'
import mobile from '../../assets/mobile.svg'
import backend from '../../assets/backend.svg'

export default function Experience() {
    return (
        <section className="experience-container">
            <h2>Experience(Projects)</h2>
            <div className="experience-content">

                <div className="experience-div">
                    <div className="experience-card">
                        <div className="experience-web">
                            <img src={web} alt="" className="image"/>
                        </div>
                        <h4>Web Design</h4>
                    </div>
                    <div className="experience-card">
                        <div className="experience-web">
                            <img src={backend} alt="" className="image"/>
                        </div>
                        <h4>Backend</h4>
                    </div>
                    <div className="experience-card">
                        <div className="experience-web">
                            <img src={mobile} alt="" className="image"/>
                        </div>
                        <h4>Mobile Projects</h4>
                    </div>

                </div>
            </div>
        </section>
    )
}

{/*<div className="experience-card">*/
}
{/*    <div className="experience-soft">*/
}
{/*    </div>*/
}
{/*    <h4>Web Design</h4>*/}
                    {/*    <div/>*/}
                    {/*    <div className="experience-card">*/}
                    {/*        <div className="experience-mobi"></div>*/}
                    {/*        <h4>Web Design</h4>*/}
                    {/*    </div>*/}