import { motion } from 'framer-motion'
import useScrollProgress from '../hooks/useScrollProgress'

export default function ScrollProgressBar() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-secondary via-accent to-ink dark:to-primary origin-left"
        style={{ scaleX: progress }}
      />
    </div>
  )
}
