import './Certificates.css'
import cert1 from '../../assets/cert1.png'
import cert2 from '../../assets/cert2.png'

export default function Certificates(){
    return (
        <section className="certificates-container">
            <h2>Certificates</h2>
            <div className="certificates-list">
                <img src={cert1} alt="" className="certificate-image"/>
                <img src={cert2} alt="" className="certificate-image"/>
            </div>
        </section>
    )
}