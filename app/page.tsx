"use client"
import Image from 'next/image';
import BlogList from '../components/BlogList';

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
    <div className="min-h-screen bg-white pb-20 text-gray-900">
      <main className="w-full">

        <section className="relative isolate mb-20 w-full overflow-hidden bg-white py-10 sm:py-14 lg:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(17,24,39,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,0.05)_1px,transparent_1px)] bg-size-[36px_36px] opacity-70" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_55%),radial-gradient(circle_at_top_left,rgba(15,23,42,0.04),transparent_45%)]" />

          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14">
          <div className="relative grid items-stretch gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-blue-900 sm:text-7xl">
                Kittichai <br /> Raksawong
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
                Thailand-based Full Stack Developer focused on building reliable web applications from product idea to production deployment. My day-to-day work spans frontend architecture, backend API development, database design, and cloud delivery.
              </p>


              <div className="mt-12 flex flex-wrap gap-3 opacity-80">
                {techStack.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      width="18"
                      height="18"
                      className="h-4.5 w-4.5"
                    />
                    <span className="font-mono text-xs font-medium text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-5xl px-6">
        <div id="blog">
          <BlogList />
        </div>

        <section id="projects" className="mt-24">
          <h2 className="text-3xl font-semibold text-blue-900 mb-8">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-100 transition duration-300"
              >
                <h3 className="text-xl font-medium text-blue-800">{project.title}</h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{project.detail}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-blue-900">Experience</h2>
            <div className="mt-6 space-y-4">
              <div>
                <p className="font-semibold text-gray-800">Junior Full Stack Developer (Part-time)</p>
                <p className="text-gray-500 text-sm">at APSTH</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Web Developer & IT Support (Internship)</p>
                <p className="text-gray-500 text-sm">at IT NETWORK</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Web Developer</p>
                <p className="text-gray-500 text-sm">at Student Union, College of Computing, KKU</p>
              </div>
            </div>
          </div>
        </section>
        </div>

      </main>

      <footer className="mx-auto mt-20 w-full max-w-5xl px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-gray-400">
          Built for jrkitt.com
        </p>
      </footer>
    </div>
  );
}
