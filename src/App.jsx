import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgressBar from './components/ScrollProgressBar.jsx'
import BackToTop from './components/BackToTop.jsx'
import Loader from './components/Loader.jsx'
import Home from './pages/Home.jsx'
import useTheme from './hooks/useTheme.js'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <ScrollProgressBar />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
