import portrait from '../assets/pngPortrait.png'
import '../styles/home.css'
import SocialLinks from '../components/SocialLinks'

function Home() {
  return (
    <section id="home" className="section hero">
      <div className="hero__text">
        <h1 className="hero__title">
          Hello👋 I&apos;m <strong>Oskar!</strong>
        </h1>
        <p className="hero__subtitle">
          I&apos;m a developer who loves building clean, thoughtful software. This website showcases some of the projects I&apos;ve worked on.
        </p>
        <SocialLinks />
      </div>

      <div className="hero__image">
        <img src={portrait} alt="Portrait of Oskar Ottesen" />
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  )
}

export default Home
