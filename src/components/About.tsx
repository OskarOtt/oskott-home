const TECH_STACK = [
  'React', 'TypeScript', "Java", "Kotlin",
  'SQL', 'Kybernetes', 'Git', 'REST APIs',
]

function About() {
  return (
    <section id="about" className="section about">
      <div className="about__layout">

        {/* ── Left sidebar ── */}
        <aside className="about__sidebar">
          <div className="about__sidebar-section">
            <h3 className="about__sidebar-heading">Info</h3>
            <ul className="about__info-list">
              <li><span className="about__info-label">Name</span> Oskar Ottesen</li>
              <li><span className="about__info-label">Role</span> Software Developer</li>
              <li><span className="about__info-label">Location</span> Norway</li>
              <li>
                <span className="about__info-label">Email</span>
                <a href="mailto:ottskar@gmail.com" className="about__link">ottskar@gmail.com</a>
              </li>
              <li>
                <span className="about__info-label">GitHub</span>
                <a href="https://github.com/OskarOtt" className="about__link" target="_blank" rel="noopener noreferrer">OskarOtt</a>
              </li>
              <li>
                <span className="about__info-label">LinkedIn</span>
                <a href="https://www.linkedin.com/in/oskar-lynum-ottesen-497b45228/" className="about__link">linkedin.com/in/...</a>
              </li>
            </ul>
          </div>

          <div className="about__sidebar-section">
            <h3 className="about__sidebar-heading">Main Tech Stack</h3>
            <div className="about__tags">
              {TECH_STACK.map(tech => (
                <span key={tech} className="about__tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="about__sidebar-section">
            <h3 className="about__sidebar-heading">Languages</h3>
            <ul className="about__info-list">
              <li><span className="about__info-label">Norwegian</span> Native</li>
              <li><span className="about__info-label">English</span> Fluent</li>
            </ul>
          </div>
        </aside>

        {/* ── Right body ── */}
        <div className="about__body">
          <h2 className="about__title">About Me</h2>

          <div className="about__body-section">
            <p className="about__text">
              I am a consultant and full-stack developer currently working for Bouvet, with experience from both client-facing and internal projects. I have worked on developing solutions across a range of technologies and have strong expertise in both frontend and backend development. With a Bachelor's degree in Computer Engineering and a vocational certification in Data Electronics, I have a solid technical foundation and am comfortable working throughout the entire software development lifecycle—from concept and architecture to implementation and maintenance.
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

            <div className="about__education-item">
              <p className="about__education-title"><strong>Bachelor of Science in Computer Engineering</strong></p>
              <p className="about__education-meta">Høgskolen i Østfold (HiØ)</p>
            </div>

            <div className="about__education-item">
              <p className="about__education-title"><strong>Vocational Certificate in Data Electronics</strong></p>
              <p className="about__education-meta">Thor Heyerdahl VGS / EMSolutions AS</p>
            </div>

            <div className="about__education-item">
              <p className="about__education-title"><strong>Professional Scrum Developer I (PSD I)</strong></p>
              <p className="about__education-meta">Scrum.org</p>
            </div>

            <div className="about__education-item">
              <p className="about__education-title"><strong>Kotlin for Java Developers</strong></p>
              <p className="about__education-meta">JetBrains</p>
            </div>

            <div className="about__education-item">
              <p className="about__education-title"><strong>React JS: From the Beginning (with Redux and React Router)</strong></p>
              <p className="about__education-meta">Udemy</p>
            </div>
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
