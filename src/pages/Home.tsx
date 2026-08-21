import portrait from '../assets/pngPortrait.png'
import '../styles/home.css'
import SocialLinks from '../components/SocialLinks'
import useTypewriter from '../hooks/useTypewriter'

const TITLE_WORDS: { text: string; strong?: boolean }[] = [
  { text: 'Hello👋' },
  { text: "I'm" },
  { text: 'Oskar!', strong: true },
]

// Flatten the title words into individual characters (emoji-safe) so they can
// be typed out one letter at a time, keeping track of bold styling and the
// spaces between words.
const TITLE_CHARS: { char: string; strong?: boolean }[] = TITLE_WORDS.flatMap((word, index) => {
  const chars = Array.from(word.text).map((char) => ({ char, strong: word.strong }))
  return index < TITLE_WORDS.length - 1 ? [...chars, { char: ' ' }] : chars
})

const SUBTITLE_TEXT =
  "I'm a developer who loves building clean, thoughtful software. This website showcases some of the projects I've worked on."
const SUBTITLE_WORDS = SUBTITLE_TEXT.split(' ')

const TITLE_MS_PER_CHAR = 70
const TITLE_PAUSE_MS = 1000
const SUBTITLE_MS_PER_WORD = 120
const TITLE_START_DELAY = 1600

// Indices (into TITLE_CHARS) after which to pause: right after the hand
// emoji, and right after the final "!" in "Oskar!".
const TITLE_PAUSE_AFTER_INDICES = new Set(
  TITLE_CHARS.reduce<number[]>((indices, item, index) => {
    if (item.char === '👋' || (item.strong && index === TITLE_CHARS.length - 1)) indices.push(index)
    return indices
  }, []),
)

const titleDelay = (revealedIndex: number) =>
  TITLE_PAUSE_AFTER_INDICES.has(revealedIndex) ? TITLE_PAUSE_MS : TITLE_MS_PER_CHAR

function Home() {
  const title = useTypewriter(TITLE_CHARS.length, titleDelay, true, TITLE_START_DELAY)
  const subtitle = useTypewriter(SUBTITLE_WORDS.length, SUBTITLE_MS_PER_WORD, title.isDone, TITLE_PAUSE_MS)

  return (
    <section id="home" className="section hero">
      <div className="hero__text">
        <h1 className="hero__title">
          {title.visibleCount === 0 && <span className="caret" aria-hidden="true" />}
          {TITLE_CHARS.map((item, index) => {
            const isVisible = index < title.visibleCount
            const isCaretHere = index === title.visibleCount - 1 && !title.isDone
            const content = item.strong ? <strong>{item.char}</strong> : item.char
            return (
              <span key={index} className={isVisible ? 'letter' : 'letter letter--hidden'}>
                {content}
                {isCaretHere && <span className="caret" aria-hidden="true" />}
              </span>
            )
          })}
        </h1>
        <p className="hero__subtitle">
          {title.isDone && subtitle.visibleCount === 0 && <span className="caret" aria-hidden="true" />}
          {SUBTITLE_WORDS.map((word, index) => {
            const isVisible = title.isDone && index < subtitle.visibleCount
            const isCaretHere = title.isDone && index === subtitle.visibleCount - 1 && !subtitle.isDone
            return (
              <span key={index} className={isVisible ? 'word' : 'word word--hidden'}>
                {word}
                {isCaretHere && <span className="caret" aria-hidden="true" />}{' '}
              </span>
            )
          })}
        </p>
        <SocialLinks className={subtitle.isDone ? 'socials--visible' : 'socials--hidden'} />
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
