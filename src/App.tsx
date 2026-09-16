import { useEffect, useState, type ComponentType } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import FlinkPrivacyPolicy from './pages/FlinkPrivacyPolicy'
import type { Section } from './types'

const BLUE = { r: 0x42, g: 0x72, b: 0xff }
const WHITE = { r: 0xff, g: 0xff, b: 0xff }

function lerp(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t)
}

// Hidden pages reachable only via direct link, not linked from the nav/sitemap.
const HIDDEN_ROUTES: Record<string, ComponentType> = {
  '/flink/privacypolicy': FlinkPrivacyPolicy,
}

function App() {
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState<Section>('home')

  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const HiddenPage = HIDDEN_ROUTES[path]

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight
      // 0 while on Home, 1 once fully scrolled into About.
      const p = Math.min(Math.max(window.scrollY / (vh * 0.83), 0), 1)
      setProgress(p)
      setActiveSection(
        window.scrollY >= vh * 1.5 ? 'projects'
        : window.scrollY >= vh * 0.5 ? 'about'
        : 'home'
      )
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const bg = `rgb(${lerp(BLUE.r, WHITE.r, progress)}, ${lerp(
    BLUE.g,
    WHITE.g,
    progress,
  )}, ${lerp(BLUE.b, WHITE.b, progress)})`

  const light = progress > 0.5

  if (HiddenPage) {
    return <HiddenPage />
  }

  return (
    <div className="page" style={{ backgroundColor: bg }}>
      <Header light={light} activeSection={activeSection} />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
    </div>
  )
}

export default App
