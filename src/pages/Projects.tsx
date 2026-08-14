import '../styles/projects.css'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="projects__inner">
        <h2 className="projects__title">Personal projects</h2>
        <p className="projects__ingress">
          A place where I link things I've built on my own time. Projects may come and go —
          some are polished, some are experiments.
        </p>
        <div className="projects__grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
