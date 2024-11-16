import './Skills.css'

export default function Skills(){
    return(
        <section className="skills-container">
            <h2>Skills</h2>
            <div className="skills-table">
            <table>
                <tbody>
                <tr>
                    <th>Languages</th>
                    <td>Java</td>
                    <td>Javascript</td>
                    <td>Dart</td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <th>APIs</th>
                    <td>Rest</td>
                    <td>Microservices</td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <th>Frameworks</th>
                    <td>Flutter</td>
                    <td>Hibernate</td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <th>Testing</th>
                    <td>JUnit</td>
                    <td>Mockito</td>
                </tr>
                </tbody>
            </table>
            </div>
        </section>
    )
}