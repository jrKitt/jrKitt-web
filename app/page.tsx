"use client"
import { HiBookOpen, HiCog, HiBriefcase, HiViewGrid, HiDocumentText } from 'react-icons/hi';
import BlogList from '../components/BlogList';

export default function Home() {
  const skills = [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  ];

  const works = [
    {
      company: "Freelance Full-Stack Developer",
      role: "Self-employed",
      period: "2025 - Present",
    },
    {
      company: "APSTH Company Limited",
      role: "Frontend Developer",
      period: "Sep 2024 - Feb 2026",
    },
    {
      company: "Friendly Dev Co., Ltd.",
      role: "Mobile Developer",
      period: "Aug 2024 - Feb 2025",
    },
    {
      company: "IT Network Computer Service",
      role: "IT Support & Web Intern",
      period: "Oct 2023 - Feb 2024",
    },
  ];

  const projects = [
    {
      title: "SMOCP.COM",
      description: "Student union website — project manager & infrastructure lead. Managing day-to-day operations, coordinating the team, and handling deployment and hosting.",
      tags: ["Next.js", "React", "MongoDB", "Vercel"],
      href: "https://github.com/jrKitt/SMOCP.COM",
    },
    {
      title: "DLT Khon Kaen Queue System",
      description: "End-to-end queue management platform for Department of Land Transport — online booking, QR check-in, real-time updates with Socket.io, and admin dashboards.",
      tags: ["Next.js", "TypeScript", "Express", "MySQL"],
      href: "https://github.com/jrKitt/preview-dlt-khonkaen",
    },
    {
      title: "EDS — Education System",
      description: "Full school management system for Udonthani Technical College — admins, teachers, and students modules with attendance, grades, and schedules.",
      tags: ["PHP", "MySQL", "Laravel"],
      href: "#",
    },
    {
      title: "ignite",
      description: "Lightweight Go live-reload tool that reruns programs automatically on source changes.",
      tags: ["Go", "Open Source"],
      href: "https://github.com/jrKitt/ignite",
    },
    {
      title: "COMSCIKKU",
      description: "Community web platform for Computer Science developers at KKU.",
      tags: ["Next.js", "TypeScript", "MongoDB"],
      href: "https://github.com/jrKitt/comscikku",
    },
    {
      title: "MobiStock",
      description: "DBMS-focused inventory and stock management web application.",
      tags: ["Node.js", "PostgreSQL", "Express"],
      href: "https://github.com/jrKitt/MobiStock",
    },
  ];

  return (
    <div className="min-h-screen bg-black pb-20 text-slate-100">
      <main className="mx-auto max-w-4xl px-6 py-16">

        {/* Hero Section */}
        <section className="mb-16 flex items-start gap-6">
          <img
            src="https://github.com/jrKitt.png"
            alt="Kittichai Raksawong"
            className="h-32 w-32 rounded-full border-2 border-slate-800"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-slate-50">
              Hello, I'm Kittichai Raksawong
            </h1>
            <p className="mt-2 text-slate-400">
              Full-Stack Developer
            </p>
            <p className="text-sm text-slate-500">
              Khon Kaen, Thailand • BSc Computer Science @ KKU
            </p>
            <div className="mt-3 flex gap-2">
              <a
                href="/cv.html"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm font-medium text-slate-200 transition hover:border-sky-400 hover:bg-slate-800 hover:text-sky-400"
              >
                <HiDocumentText size={16} />
                View Resume
              </a>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="mb-12">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-200">
            <HiBookOpen className="text-sky-400" size={20} /> About me
          </h2>
          <div className="space-y-4 rounded-lg border border-slate-800 bg-slate-900/30 p-6 text-slate-400">
            <p>
              Full-stack developer based in Khon Kaen, Thailand, building web and mobile applications from idea to production. I work across the stack — React and Next.js on the frontend, Node.js, Elysia.js, PHP and Go on the backend, and Flutter for mobile.
            </p>
            <p>
              Currently completing a BSc in Computer Science at Khon Kaen University while taking on freelance and product work. I care about shipping clean, maintainable software and enjoy owning features end to end.
            </p>
          </div>
        </section>

        {/* Skills and Tools */}
        <section className="mb-12">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-200">
            <HiCog className="text-sky-400" size={20} /> Skills and Tools
          </h2>
          <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900/30 py-4">
            <div className="flex gap-3 animate-scroll">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex shrink-0 items-center gap-2 rounded-md border border-slate-800 bg-black/60 px-3 py-2 transition hover:border-sky-400/30 hover:bg-slate-900"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-5 w-5"
                  />
                  <span className="font-mono text-sm text-slate-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Works */}
        <section className="mb-12">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-200">
            <HiBriefcase className="text-sky-400" size={20} /> Works
          </h2>
          <div className="space-y-3">
            {works.map((work) => (
              <div
                key={work.company}
                className="flex items-start justify-between rounded-lg border border-slate-800 bg-slate-900/30 p-4 transition hover:border-slate-700 hover:bg-slate-900/50"
              >
                <div>
                  <h3 className="font-semibold text-slate-200">{work.company}</h3>
                  <p className="text-sm text-slate-400">{work.role}</p>
                </div>
                <span className="font-mono text-sm text-slate-500">{work.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-200">
            <HiViewGrid className="text-sky-400" size={20} /> Projects
          </h2>
          <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-6">
            <ul className="space-y-3">
              {projects.map((project) => (
                <li key={project.title}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 transition"
                  >
                    <span className="mt-1.5 text-slate-600">•</span>
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-200 transition group-hover:text-sky-400">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">{project.description}</p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded border border-slate-800 bg-slate-900/50 px-2 py-0.5 font-mono text-xs text-slate-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div id="blog" className="mb-16">
          <BlogList />
        </div>

      </main>

      <footer className="mx-auto mt-20 w-full max-w-4xl px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-slate-600">
          Built for jrkitt.com
        </p>
      </footer>
    </div>
  );
}
