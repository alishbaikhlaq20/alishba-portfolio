export default function FloatingBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10" aria-hidden="true">
      <div className="absolute top-[-10%] left-[-5%] w-[420px] h-[420px] rounded-full bg-primary/60 dark:bg-primary/10 blur-3xl animate-blob" />
      <div className="absolute top-[10%] right-[-10%] w-[380px] h-[380px] rounded-full bg-secondary/50 dark:bg-secondary/10 blur-3xl animate-blob-slow" />
      <div className="absolute bottom-[-15%] left-[20%] w-[460px] h-[460px] rounded-full bg-accent/20 dark:bg-accent/10 blur-3xl animate-blob" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_70%)]" />
    </div>
  )
}
