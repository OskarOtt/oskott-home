const PROJECTS = [
  {
    title: 'Dopamine Checklist',
    description:
      'A small app for adding daily and one-time goals and checking them off. Designed for larger touchscreens. Uses local storage for persistence.',
    link: 'https://oskarott.github.io/dopamine-calender/',
  },
  {
    title: 'Shop App',
    description:
        'A complete webshop template, with jwt token user auth, product listing, shopping cart, stripe payment and order management. Built with React TypeScript, and java backend.',
    link: undefined,
  },
]

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
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.description}</p>
              {p.link ?
                  <span className="project-card__link">Visit →</span>
                  :
                  <span className="project-card__link project-card__link--disabled">Coming soon</span>
              }
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
