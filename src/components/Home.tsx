import portrait from '../assets/pngPortrait.png'

function Home() {
  return (
    <section id="home" className="section hero">
      <div className="hero__text">
        <h1 className="hero__title">
          Hello👋 I&apos;m <strong>Oskar!</strong>
        </h1>
        <p className="hero__subtitle">
          I&apos;m a developer who loves building clean, thoughtful software and
          bringing ideas to life on the web.
        </p>
        <div className="socials">
          <a
            className="social"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg>
              <use href="/icons.svg#linkedin-icon" />
            </svg>
          </a>
          <a
            className="social"
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg>
              <use href="/icons.svg#instagram-icon" />
            </svg>
          </a>
          <a className="social" href="mailto:hello@example.com" aria-label="Email">
            <svg>
              <use href="/icons.svg#mail-icon" />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero__image">
        <img src={portrait} alt="Oskar" />
      </div>
    </section>
  )
}

export default Home
