"use client"
import { HiViewGrid } from 'react-icons/hi';

export default function Projects() {
  const projects = [
    {
      title: "COMSCIKKU",
      detail: "Community web platform for Computer Science developers at KKU.",
      href: "https://github.com/jrKitt/comscikku",
      live: "https://comscikku.dev",
      tags: ["Next.js", "TypeScript", "MongoDB"],
    },
    {
      title: "MobiStock",
      detail: "DBMS-focused inventory and stock management web app.",
      href: "https://github.com/jrKitt/MobiStock",
      live: "https://mobistock.jrkitt.com",
      tags: ["Node.js", "PostgreSQL", "Express"],
    },
    {
      title: "SMOCP.COM",
      detail: "Student organization web platform for communication and operations.",
      href: "https://github.com/jrKitt/SMOCP.COM",
      live: "https://smocpcom.vercel.app",
      tags: ["Next.js", "React", "MongoDB"],
    },
    {
      title: "SMOCP E-Ticket 2025",
      detail: "PWA e-ticket platform for university event workflows.",
      href: "https://github.com/jrKitt/e-ticket-smocp",
      live: "https://e-ticket.smocp.com",
      tags: ["Next.js", "PostgreSQL", "PWA"],
    },
    {
      title: "JaiMaReawReawQrPayment",
      detail: "QR payment web app for streamlined transaction flow.",
      href: "https://github.com/jrKitt/JaiMaReawReawQrPayment",
      live: "https://jmrr.jrkitt.com",
      tags: ["React", "Node.js", "Express"],
    },
    {
      title: "SMOCP Order",
      detail: "Online ordering system for student organization operations.",
      href: "https://github.com/jrKitt/orders.smocp.com",
      live: "https://orders-tawny.vercel.app",
      tags: ["Next.js", "MongoDB", "Vercel"],
    },
    {
      title: "shorturls",
      detail: "URL shortener web app built for quick link sharing.",
      href: "https://github.com/jrKitt/shorturls",
      live: "https://short-rust.vercel.app",
      tags: ["Next.js", "MongoDB"],
    },
  ];

  return (
    <div className="min-h-screen bg-black pb-20 text-slate-100">
      <main className="mx-auto w-full max-w-4xl px-6 py-12">
        <section id="projects">
          <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold text-slate-200">
            <HiViewGrid className="text-sky-400" size={20} /> Projects
          </h2>

          <div className="mb-6 grid gap-4 md:grid-cols-2">
            <a
              href="https://clouds.jrkitt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-slate-800 bg-slate-900/30 p-6 transition hover:border-slate-700 hover:bg-slate-900/50"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-200 transition group-hover:text-sky-400">Labs</h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 font-mono text-xs text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    online
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">jrKitt workspace</p>
            </a>

            <a
              href="https://ssm.jrkitt.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-slate-800 bg-slate-900/30 p-6 transition hover:border-slate-700 hover:bg-slate-900/50"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-200 transition group-hover:text-sky-400">Monitoring</h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 font-mono text-xs text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    online
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">System monitoring and analytics dashboard</p>
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-lg border border-slate-800 bg-slate-900/30 p-4 transition hover:border-slate-700 hover:bg-slate-900/50"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-200 transition group-hover:text-sky-400">{project.title}</h3>
                    {project.live && (
                      <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 font-mono text-xs text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        online
                      </span>
                    )}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-slate-800 bg-black transition hover:border-slate-700 hover:bg-slate-900"
                    title="View on GitHub"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="h-4 w-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{project.detail}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-slate-800 bg-slate-900/50 px-2 py-0.5 font-mono text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-mono text-xs font-medium text-sky-400 transition hover:text-sky-300"
                  >
                    View Live →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-20 w-full max-w-4xl px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-slate-600">
          Built for jrkitt.com
        </p>
      </footer>
    </div>
  );
}
