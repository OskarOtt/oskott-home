import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

const BLUE = { r: 0x42, g: 0x72, b: 0xff }
const WHITE = { r: 0xff, g: 0xff, b: 0xff }

function lerp(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t)
}

function App() {
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

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

  return (
    <div className="page" style={{ backgroundColor: bg }}>
      <Header light={light} activeSection={activeSection} />
      <Home />
      <About />
      <Projects />
    </div>
  )
}

export default App
