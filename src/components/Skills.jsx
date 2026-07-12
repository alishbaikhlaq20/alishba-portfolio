import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { skills } from '../utils/data.js'

const badgeContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
}
const badgeItem = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35 } },
}

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <Reveal>
        <p className="eyebrow">05 · Skills</p>
        <h2 className="section-title">The toolbox.</h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {Object.entries(skills).map(([category, items], i) => (
          <Reveal key={category} delay={i * 0.06}>
            <div className="glass-card p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent dark:text-accent-dark mb-4">
                {category}
              </h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={badgeContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={badgeItem}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="badge cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
