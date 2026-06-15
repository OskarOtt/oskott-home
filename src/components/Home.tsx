import portrait from '../assets/pngPortrait.png'

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
        <div className="socials">
          <a
            className="social"
            href="https://www.linkedin.com/in/oskar-lynum-ottesen-497b45228/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg>
              <use href={`${import.meta.env.BASE_URL}icons.svg#linkedin-icon`} />
            </svg>
          </a>
          <a
            className="social"
            href="https://www.instagram.com/oskar_l_ottesen/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg>
              <use href={`${import.meta.env.BASE_URL}icons.svg#instagram-icon`} />
            </svg>
          </a>
          <a className="social" href="mailto:ottskar@gmail.com" aria-label="Email">
            <svg>
              <use href={`${import.meta.env.BASE_URL}icons.svg#mail-icon`} />
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
