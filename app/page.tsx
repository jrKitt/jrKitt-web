import GitHubRepos from './components/GitHubRepos';

export default function Home() {
  const techStack = [
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  ];

  const projects = [
    {
      title: "E-Ticket SMOCP",
      detail:
        "Event ticketing system with QR code check-in and real-time dashboard for event management teams",
      href: "https://github.com/jrKitt/e-ticket-smocp",
    },
    {
      title: "Clubs Check-in System",
      detail:
        "Club attendance system with leaderboard, location validation, and peer verification features",
      href: "https://github.com/jrKitt/clubs-checkin",
    },
    {
      title: "BlindHelp UI",
      detail:
        "App designed for visually impaired users, focused on voice access and gesture-based interactions",
      href: "https://github.com/jrKitt/BlindHelpUI",
    },
  ];

  return (
    <div className="site-shell px-5 py-8 sm:px-8 sm:py-12">
      <main className="mx-auto grid w-full max-w-6xl gap-6 items-start lg:grid-cols-[1.15fr_0.85fr]">
        <section className="card-surface enter-rise relative rounded-3xl p-6 shadow-[0_18px_50px_rgba(12,18,14,0.08)] sm:p-9">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
            Khon Kaen, Thailand
          </p>

          <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight sm:text-6xl">
            Kittichai Raksawong
            <span className="block text-muted">Junior Full Stack Developer</span>
          </h1>

          <p className="text-muted mt-6 max-w-2xl text-base leading-8 sm:text-lg">
            Thailand-based Full Stack Developer focused on building reliable web applications from product idea to production deployment. My day-to-day work spans frontend architecture, backend API development, database design, and cloud delivery.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:contact@jrkitt.dev"
              className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/jrKitt"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            >
              View GitHub
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {techStack.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  width="16"
                  height="16"
                  className="h-4 w-4"
                />
                <span className="font-mono text-xs">{item.name}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col gap-6">
          <section className="card-surface enter-rise-delay rounded-3xl p-6 sm:p-9">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-2xl font-semibold">Experience</h2>
                <p className="text-muted mt-2 text-sm">Background & Work History</p>
              </div>
              <a
                href="https://webring.wonderful.software#jrkitt.com"
                title="Webring"
                className="ring-rotate inline-flex h-12 w-12 items-center justify-center rounded-full"
              >
                <img
                  alt="Webring"
                  width="32"
                  height="32"
                  src="https://webring.wonderful.software/webring.white.svg"
                  className="invert-0 dark:invert"
                />
              </a>
            </div>

            <div className="mt-6 space-y-3">
              <div className="text-sm leading-relaxed">
                <p className="font-semibold text-foreground">Junior Full Stack Developer (Part-time)</p>
                <p className="text-muted text-xs">at APSTH</p>
              </div>
              <div className="text-sm leading-relaxed">
                <p className="font-semibold text-foreground">Web Developer & IT Support (Internship)</p>
                <p className="text-muted text-xs">at IT NETWORK</p>
              </div>
              <div className="text-sm leading-relaxed">
                <p className="font-semibold text-foreground">Web Developer</p>
                <p className="text-muted text-xs">at Student Union, College of Computing, KKU</p>
              </div>
              <div className="text-sm leading-relaxed">
                <p className="font-semibold text-foreground">Freelance Developer</p>
                <p className="text-muted text-xs">for startup and organization web systems</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <GitHubRepos />
            </div>
          </section>

        </div>
      </main>

      <footer className="mx-auto mt-6 w-full max-w-6xl px-2 pb-3">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Built for jrkitt.com · Next.js + Tailwind
        </p>
      </footer>
    </div>
  );
}
