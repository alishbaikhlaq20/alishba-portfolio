import { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import { profile } from '../utils/data.js'

const CONTACT_ITEMS = [
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: FiMapPin, label: 'Location', value: profile.location, href: null },
  { icon: FiGithub, label: 'GitHub', value: 'alishbaikhlaq20', href: profile.github },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: profile.linkedin ? 'View profile' : 'Coming soon',
    href: profile.linkedin || null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section-shell">
      <Reveal>
        <p className="eyebrow">07 · Contact</p>
        <h2 className="section-title">Let's build something.</h2>
        <p className="text-ink-light dark:text-ink-dark/70 max-w-2xl text-lg">
          Open to internship opportunities — reach out however's easiest for you.
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-8 mt-12">
        <Reveal delay={0.1}>
          <div className="glass-card p-6 md:p-8 h-full">
            <div className="space-y-4">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/30 dark:hover:bg-white/5 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-primary/60 dark:bg-white/10 flex items-center justify-center text-ink dark:text-primary shrink-0">
                      <Icon size={17} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-ink-light dark:text-ink-dark/50">{label}</p>
                      <p className="text-ink dark:text-ink-dark font-medium">{value}</p>
                    </div>
                  </div>
                )
                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                )
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 h-full flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-ink-light dark:text-ink-dark/50">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-1.5 w-full bg-white/60 dark:bg-white/5 border border-ink/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs uppercase tracking-widest text-ink-light dark:text-ink-dark/50">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1.5 w-full bg-white/60 dark:bg-white/5 border border-ink/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-ink-light dark:text-ink-dark/50">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="mt-1.5 w-full bg-white/60 dark:bg-white/5 border border-ink/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell me a bit about the opportunity..."
              />
            </div>
            <button type="submit" className="btn-primary justify-center">
              <FiSend size={14} /> Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
