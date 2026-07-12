import { FiCpu, FiLayers, FiShield, FiCloud } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import { about } from '../utils/data.js'

const INTEREST_ICONS = {
  'Artificial Intelligence': FiCpu,
  'Full Stack Development': FiLayers,
  Cybersecurity: FiShield,
  'Cloud Computing': FiCloud,
}

export default function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="eyebrow">01 · About</p>
        <h2 className="section-title">A little about how I think.</h2>
      </Reveal>

      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-14 mt-12">
        <Reveal delay={0.1}>
          <div className="space-y-5 text-lg text-ink-light dark:text-ink-dark/75 leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 gap-4">
            {about.interests.map((interest) => {
              const Icon = INTEREST_ICONS[interest] ?? FiCpu
              return (
                <div
                  key={interest}
                  className="glass-card p-5 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/60 dark:bg-white/10 flex items-center justify-center text-ink dark:text-primary">
                    <Icon size={18} />
                  </div>
                  <p className="text-sm font-medium text-ink dark:text-ink-dark">{interest}</p>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
