import { profile } from '../utils/data.js'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-ink-light dark:text-ink-dark/60">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="font-mono text-xs">Built with React + Tailwind</p>
      </div>
    </footer>
  )
}
