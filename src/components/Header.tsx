import '../styles/header.css'
import type { Section } from '../types'

type HeaderProps = {
  light: boolean
  activeSection: Section
}

function Header({ light, activeSection }: HeaderProps) {
  return (
    <header className={`header${light ? ' header--light' : ''}`}>
      <a className="logo" href="#home" aria-label="Home">
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" />
      </a>
      <nav className="nav" aria-label="Primary">
        <a
          href="#home"
          className={activeSection === 'home' ? 'nav__link is-active' : 'nav__link'}
          aria-current={activeSection === 'home' ? 'page' : undefined}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeSection === 'about' ? 'nav__link is-active' : 'nav__link'}
          aria-current={activeSection === 'about' ? 'page' : undefined}
        >
          About
        </a>
        <a
          href="#projects"
          className={activeSection === 'projects' ? 'nav__link is-active' : 'nav__link'}
          aria-current={activeSection === 'projects' ? 'page' : undefined}
        >
          Projects
        </a>
      </nav>
    </header>
  )
}

export default Header
