import Reveal from './Reveal.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../utils/data.js'

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <Reveal>
        <p className="eyebrow">04 · Projects</p>
        <h2 className="section-title">Things I've shipped.</h2>
        <p className="text-ink-light dark:text-ink-dark/70 max-w-2xl text-lg">
          A mix of solo builds and team projects — spanning AI, full-stack apps, and accessibility tooling.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6 mt-14">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 2) * 0.08}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
