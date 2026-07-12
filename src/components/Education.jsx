import { FiBookOpen } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import { education } from '../utils/data.js'

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <Reveal>
        <p className="eyebrow">02 · Education</p>
        <h2 className="section-title">Where the foundations were laid.</h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="glass-card mt-12 p-8 md:p-10 grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start">
          <div className="w-14 h-14 rounded-2xl bg-primary/60 dark:bg-white/10 flex items-center justify-center text-ink dark:text-primary shrink-0">
            <FiBookOpen size={24} />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ink dark:text-ink-dark">{education.degree}</h3>
            <p className="text-ink-light dark:text-ink-dark/60 mb-5">{education.school}</p>

            <p className="text-xs font-mono uppercase tracking-widest text-ink-light dark:text-ink-dark/50 mb-3">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <span key={course} className="badge">
                  {course}
                </span>
              ))}
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-3xl font-display font-semibold text-accent dark:text-accent-dark">{education.gpa}</p>
            <p className="text-xs uppercase tracking-widest text-ink-light dark:text-ink-dark/50">GPA</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
