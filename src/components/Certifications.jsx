import { FiAward } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import { certifications } from '../utils/data.js'

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <Reveal>
        <p className="eyebrow">06 · Certifications</p>
        <h2 className="section-title">Proof of the reps put in.</h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {certifications.map((cert, i) => (
          <Reveal key={cert.id} delay={i * 0.05}>
            <div className="glass-card p-6 h-full flex flex-col gap-4 hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-primary/60 dark:bg-white/10 flex items-center justify-center text-ink dark:text-primary">
                <FiAward size={18} />
              </div>
              <div>
                <h3 className="font-medium text-ink dark:text-ink-dark leading-snug">{cert.title}</h3>
                <p className="text-sm text-ink-light dark:text-ink-dark/60 mt-1">{cert.issuer}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
