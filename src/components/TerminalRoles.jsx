import { useEffect, useState } from 'react'
import { profile } from '../utils/data.js'

const TYPE_SPEED = 55
const DELETE_SPEED = 30
const HOLD_MS = 1400

/**
 * Terminal-styled rotating role display — the hero's signature element.
 * Renders each role as though it were typed at a `whoami --role` prompt,
 * a nod to the visitor's own audience: software engineers.
 */
export default function TerminalRoles() {
  const roles = profile.roles
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing') // typing | holding | deleting

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (phase === 'typing') {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_SPEED)
      } else {
        timeout = setTimeout(() => setPhase('holding'), HOLD_MS)
      }
    } else if (phase === 'holding') {
      timeout = setTimeout(() => setPhase('deleting'), HOLD_MS)
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), DELETE_SPEED)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [text, phase, roleIndex, roles])

  return (
    <div className="glass-card font-mono text-sm md:text-base w-full max-w-md overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-ink/5 dark:border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-ink-light dark:text-ink-dark/50">whoami.sh</span>
      </div>
      <div className="px-4 py-4 space-y-1">
        <p className="text-ink-light dark:text-ink-dark/60">
          <span className="text-accent dark:text-accent-dark">alishba@dev</span>
          <span className="text-ink-light dark:text-ink-dark/40">:~$</span> ./whoami --role
        </p>
        <p className="min-h-[1.5em] text-ink dark:text-ink-dark">
          <span className="text-secondary-dark dark:text-primary">&gt;</span> {text}
          <span className="inline-block w-2 h-4 -mb-0.5 ml-0.5 bg-ink dark:bg-primary animate-blink" />
        </p>
      </div>
    </div>
  )
}
