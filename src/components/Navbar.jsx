import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle.jsx'
import useActiveSection from '../hooks/useActiveSection.js'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(NAV_LINKS.map((l) => l.id))

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-4 md:mx-auto md:max-w-6xl mt-4">
        <nav className="glass-card flex items-center justify-between px-5 py-3">
          <button
            onClick={() => scrollTo('hero')}
            className="font-display font-semibold text-lg tracking-tight text-ink dark:text-ink-dark flex items-center gap-2"
          >
            <span className="font-mono text-accent dark:text-accent-dark">&lt;</span>
            Alishba
            <span className="font-mono text-accent dark:text-accent-dark">/&gt;</span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                  active === link.id
                    ? 'text-ink dark:text-ink-dark'
                    : 'text-ink-light dark:text-ink-dark/60 hover:text-ink dark:hover:text-ink-dark'
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary/60 dark:bg-white/10 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full bg-ink/5 dark:bg-white/10 text-ink dark:text-ink-dark"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="glass-card mt-2 overflow-hidden lg:hidden"
            >
              <div className="flex flex-col p-3 gap-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium ${
                      active === link.id
                        ? 'bg-primary/60 dark:bg-white/10 text-ink dark:text-ink-dark'
                        : 'text-ink-light dark:text-ink-dark/60'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
