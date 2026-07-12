import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiMail } from 'react-icons/fi'
import FloatingBlobs from './FloatingBlobs.jsx'
import TerminalRoles from './TerminalRoles.jsx'
import { profile } from '../utils/data.js'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16">
      <FloatingBlobs />
      <div className="section-shell !py-0 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark animate-pulse" />
            Available for internships
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-6"
          >
            Hi, I'm{' '}
            <span className="relative inline-block">
              {profile.name}
              <svg
                className="absolute left-0 -bottom-1 w-full h-3 text-secondary dark:text-primary/60"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 9 C 80 2, 220 2, 298 9" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p variants={item} className="text-lg md:text-xl text-ink-light dark:text-ink-dark/70 max-w-xl mb-10">
            I design and build software end-to-end — from AI models to the interfaces people use them through —
            and I'm looking for an internship where I can do that with a real team.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <button onClick={() => scrollTo('projects')} className="btn-primary">
              View Projects
            </button>
            <button onClick={() => scrollTo('contact')} className="btn-secondary">
              <FiMail /> Contact Me
            </button>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-4 mt-10 text-ink-light dark:text-ink-dark/60">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border border-ink/10 dark:border-white/10 flex items-center justify-center hover:text-accent hover:border-accent transition-colors"
            >
              <FiGithub />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <div className="animate-float">
            <TerminalRoles />
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-light dark:text-ink-dark/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FiArrowDown size={20} />
      </motion.button>
    </section>
  )
}
