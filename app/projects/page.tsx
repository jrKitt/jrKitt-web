"use client"
import Image from 'next/image';
import BlogList from '../../components/BlogList';

export default function Projects() {
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
      title: "COMSCIKKU",
      detail: "Community web platform for Computer Science developers at KKU.",
      href: "https://github.com/jrKitt/comscikku",
      live: "https://comscikku.dev",
    },
    {
      title: "MobiStock",
      detail: "DBMS-focused inventory and stock management web app.",
      href: "https://github.com/jrKitt/MobiStock",
      live: "https://mobistock.jrkitt.com",
    },
    {
      title: "SMOCP.COM",
      detail: "Student organization web platform for communication and operations.",
      href: "https://github.com/jrKitt/SMOCP.COM",
      live: "https://smocpcom.vercel.app",
    },
    {
      title: "SMOCP E-Ticket 2025",
      detail: "PWA e-ticket platform for university event workflows.",
      href: "https://github.com/jrKitt/e-ticket-smocp",
      live: "https://e-ticket.smocp.com",
    },
    {
      title: "JaiMaReawReawQrPayment",
      detail: "QR payment web app for streamlined transaction flow.",
      href: "https://github.com/jrKitt/JaiMaReawReawQrPayment",
      live: "https://jmrr.jrkitt.com",
    },
    {
      title: "SMOCP Order",
      detail: "Online ordering system for student organization operations.",
      href: "https://github.com/jrKitt/orders.smocp.com",
      live: "https://orders-tawny.vercel.app",
    },
    {
      title: "shorturls",
      detail: "URL shortener web app built for quick link sharing.",
      href: "https://github.com/jrKitt/shorturls",
      live: "https://short-rust.vercel.app",
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-20 text-gray-900">
      <main className="w-full">

        <div className="mx-auto w-full max-w-5xl px-6">
        

        <section id="projects" className="mt-24">
          <h2 className="text-3xl font-semibold text-blue-900 mb-8">Projects</h2>
           <div className="grid gap-6 md:grid-cols-2">
            <a
              key="labs"
              href="https://clouds.jrkitt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-gray-50  border border-gray-100 hover:border-blue-100 transition duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-medium text-blue-800">Labs</h3>
                  <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
                    ● online
                  </span>
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">jrKitt workspace</p>
            </a>
            <a
              key="monitoring"
              href="https://ssm.jrkitt.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-100 transition duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-medium text-blue-800">Monitoring</h3>
                  <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
                    ● online
                  </span>
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">System monitoring and analytics dashboard</p>
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="relative p-6 rounded-2xl bg-gray-50  border border-gray-100 hover:border-blue-100 transition duration-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-blue-800">{project.title}</h3>
                    {project.live && (
                      <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
                        ● online
                      </span>
                    )}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-white transition"
                    title="View on GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">{project.detail}</p>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium underline"
                  >
                    View Live →
                  </a>
                )}
              </div>
            ))}
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
