type HeaderProps = {
  light: boolean
  activeSection: string
}

function Header({ light, activeSection }: HeaderProps) {
  return (
    <header className={`header${light ? ' header--light' : ''}`}>
      <a className="logo" href="#home" aria-label="Home">
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" />
      </a>
      <nav className="nav">
        <a
          href="#home"
          className={activeSection === 'home' ? 'nav__link is-active' : 'nav__link'}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeSection === 'about' ? 'nav__link is-active' : 'nav__link'}
        >
          About
        </a>
        <a
          href="#projects"
          className={activeSection === 'projects' ? 'nav__link is-active' : 'nav__link'}
        >
          Projects
        </a>
      </nav>
    </header>
  )
}

export default Header
