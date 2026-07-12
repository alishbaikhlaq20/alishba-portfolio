import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiUsers } from 'react-icons/fi'

/** Deterministic gradient per-project so placeholder art still feels designed, not random. */
const GRADIENTS = [
  'from-primary via-secondary to-accent/30',
  'from-secondary via-primary to-accent/20',
  'from-accent/30 via-primary to-secondary',
  'from-primary/80 via-accent/20 to-secondary',
]

export default function ProjectCard({ project, index }) {
  const gradient = GRADIENTS[index % GRADIENTS.length]

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`group relative glass-card overflow-hidden flex flex-col ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      {project.featured && (
        <span className="absolute top-4 right-4 z-10 badge bg-accent/90 text-white border-none">
          ★ Featured
        </span>
      )}

      {/* Placeholder screenshot area */}
      <div className={`relative h-44 md:h-52 bg-gradient-to-br ${gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-grid-pattern bg-[size:28px_28px] opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-4xl md:text-5xl font-bold text-ink/20 select-none">
            {project.name
              .split(' ')
              .map((w) => w[0])
              .join('')
              .slice(0, 3)}
          </span>
        </div>
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-semibold text-ink dark:text-ink-dark">{project.name}</h3>
          {project.team && (
            <span title="Team project" className="text-ink-light dark:text-ink-dark/50 mt-1">
              <FiUsers size={16} />
            </span>
          )}
        </div>

        <p className="text-sm text-ink-light dark:text-ink-dark/70 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="badge">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !px-4 !py-2 text-xs flex-1 justify-center"
          >
            <FiGithub size={14} /> GitHub
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-4 !py-2 text-xs flex-1 justify-center"
            >
              <FiExternalLink size={14} /> Live Demo
            </a>
          ) : (
            <button
              disabled
              title="Live demo not available"
              className="flex-1 inline-flex items-center gap-2 justify-center px-4 py-2 rounded-full text-xs font-medium border border-ink/10 dark:border-white/10 text-ink-light/50 dark:text-ink-dark/30 cursor-not-allowed"
            >
              <FiExternalLink size={14} /> No Demo
            </button>
          )}
        </div>
      </div>
    </motion.article>
  )
}
