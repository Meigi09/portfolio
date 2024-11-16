import About from "./components/About/About.tsx";
import './App.css'
import Education from "./components/Education/Education.tsx";
import Experience from "./components/Experience/Experience.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Certificates from "./components/Cetrificates/Certificates.tsx";
import Contact from "./components/Contact/Contact.tsx";

export default function App() {
    return(
        <>
            <About/>
            <Education/>
            <Experience/>
            <Skills/>
            <Certificates/>
            <Contact/>
        </>
    )
}