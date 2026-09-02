import { FiBriefcase } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import { experience } from '../utils/data.js'

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <Reveal>
        <p className="eyebrow">03 · Experience</p>
        <h2 className="section-title">Time spent building &amp; learning.</h2>
      </Reveal>

      <div className="relative mt-14 pl-8 md:pl-10">
        <div className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-secondary via-accent/40 to-transparent" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.1}>
              <div className="relative">
                <span
                  className={`absolute -left-8 md:-left-10 top-1.5 w-[22px] h-[22px] rounded-full bg-surface dark:bg-surface-dark border-2 flex items-center justify-center ${
                    job.current
                      ? 'border-secondary-dark dark:border-primary'
                      : 'border-accent dark:border-accent-dark'
                  } ${job.current ? 'animate-pulse' : ''}`}
                >
                  <FiBriefcase
                    size={11}
                    className={job.current ? 'text-secondary-dark dark:text-primary' : 'text-accent dark:text-accent-dark'}
                  />
                </span>

                <div
                  className={`glass-card p-6 md:p-7 hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-300 ${
                    job.current ? 'ring-2 ring-secondary-dark/60 dark:ring-primary/60' : ''
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-ink dark:text-ink-dark">
                      {job.role} <span className="text-ink-light dark:text-ink-dark/50 font-normal">@ {job.company}</span>
                    </h3>
                    <span className="flex items-center gap-2">
                      {job.current && (
                        <span className="badge bg-secondary-dark/90 dark:bg-primary/90 text-white dark:text-ink border-none">
                          ● Current
                        </span>
                      )}
                      <span className="badge">{job.period}</span>
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {job.points.map((point, idx) => (
                      <li key={idx} className="flex gap-2 text-ink-light dark:text-ink-dark/70 text-[15px] leading-relaxed">
                        <span className="text-secondary-dark dark:text-primary mt-1.5">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
