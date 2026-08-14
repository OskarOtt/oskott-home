import profileImg from '../assets/profile.jpg'
import { CONTACT } from '../data/contact'
import { TECH_STACK } from '../data/education'

function Sidebar() {
  return (
    <aside className="about__sidebar">
      <div className="about__profile-img-wrap">
        <div>
          <img src={profileImg} alt={`${CONTACT.name} portrait`} className="about__profile-img" />
        </div>
      </div>

      <div className="about__sidebar-section">
        <h3 className="about__sidebar-heading">Info</h3>
        <ul className="about__info-list">
          <li><span className="about__info-label">Name</span> {CONTACT.name}</li>
          <li><span className="about__info-label">Role</span> {CONTACT.role}</li>
          <li><span className="about__info-label">Location</span> {CONTACT.location}</li>
          <li>
            <span className="about__info-label">Email</span>
            <a href={`mailto:${CONTACT.email}`} className="about__link">{CONTACT.email}</a>
          </li>
          <li>
            <span className="about__info-label">GitHub</span>
            <a href={CONTACT.github.url} className="about__link" target="_blank" rel="noopener noreferrer">{CONTACT.github.label}</a>
          </li>
          <li>
            <span className="about__info-label">LinkedIn</span>
            <a href={CONTACT.linkedin.url} className="about__link">{CONTACT.linkedin.label}</a>
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
  )
}

export default Sidebar
