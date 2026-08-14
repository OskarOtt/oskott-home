import '../styles/about.css'
import EducationItem from '../components/EducationItem'
import Sidebar from '../components/Sidebar'
import { EDUCATION } from '../data/education'

function About() {
  return (
    <section id="about" className="section about">
      <div className="about__layout">

        {/* ── Left sidebar ── */}
        <Sidebar />

        {/* ── Right body ── */}
        <div className="about__body">
          <h2 className="about__title">About Me</h2>

          <div className="about__body-section">
            <p className="about__text">
              I am a consultant and full-stack developer working for Bouvet, with experience from both client-facing and internal projects. I have worked on developing solutions across a range of technologies and have strong expertise in both frontend and backend development. With a Bachelor's degree in Computer Engineering and a vocational certification in Data Electronics, I have a solid technical foundation and am comfortable working throughout the entire software development lifecycle—from concept and architecture to implementation and maintenance.
            </p>
            <p className="about__text">
            </p>
          </div>

          <div className="about__body-section">
            <h3 className="about__section-heading">Background</h3>
            <p className="about__text">
              One of my key projects involved developing a new system for the Norwegian Public Roads Administration, where I played a central role in building a solution for the approval of heavy vehicles. I was involved in all aspects of the development process, from the user interface to business logic and data persistence in the underlying systems, requiring a comprehensive understanding of both technical and functional requirements.
            </p>
          </div>

          <div className="about__body-section">
            <h3 className="about__section-heading">Education and certifications</h3>

            {EDUCATION.map((entry) => (
              <EducationItem key={entry.title} title={entry.title} meta={entry.meta} />
            ))}
          </div>

          <div className="about__body-section">
            <h3 className="about__section-heading">Interests</h3>
            <p className="about__text">
              In my free time, I enjoy staying active through working out, hiking, and camping, especially when I can share the experience with friends. I also have a strong interest in gaming and programming, both as hobbies and creative outlets. I enjoy trying new activities and stepping outside my comfort zone—I’ve gone skydiving and have bungee jumping next on my list.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
