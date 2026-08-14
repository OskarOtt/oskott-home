import '../styles/project-card.css'
import type { Project } from '../data/projects'

function ProjectCard({ title, description, link }: Project) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>
      {link ?
        <span className="project-card__link">Visit →</span>
        :
        <span className="project-card__link project-card__link--disabled">Coming soon</span>
      }
    </a>
  )
}

export default ProjectCard
