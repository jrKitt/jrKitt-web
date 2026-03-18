"use client";

import { useEffect, useState } from "react";
import projectsData from "../data/projects.json";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string | null;
  fallbackIcon: string;
  gradient: string;
  badge: {
    text: string;
    color: string;
    textColor?: string;
  };
  github: string;
  liveUrl: string | null;
};

const projects = projectsData as Project[];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const stackItems = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Vercel",
  "Git",
];

export default function Home() {
  const [now, setNow] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f7f8f3] text-[#0f172a]">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(14,165,233,0.2),transparent_35%),radial-gradient(circle_at_85%_85%,rgba(245,158,11,0.2),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <nav className="sticky top-0 z-40 border-b border-[#0f172a]/10 bg-[#f7f8f3]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="font-display text-xl font-bold tracking-tight">
            jrKitt<span className="text-[#0284c7]">.com</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[#334155] transition hover:text-[#0284c7]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/service"
              className="rounded-full border border-[#0f172a]/20 px-4 py-2 text-sm font-semibold transition hover:border-[#0284c7] hover:text-[#0284c7]"
            >
              Services
            </a>
          </div>

          <button
            className="rounded-lg border border-[#0f172a]/15 px-3 py-2 text-sm font-semibold md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-[#0f172a]/10 bg-[#f7f8f3] px-5 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-semibold text-[#334155]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/service"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-semibold text-[#334155]"
              >
                Services
              </a>
            </div>
          </div>
        )}
      </nav>

      <main id="top">
        <section id="about" className="mx-auto max-w-6xl px-5 pb-14 pt-14 md:px-8 md:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0f172a]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0369a1]">
                Khon Kaen, Thailand
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Open to opportunities
              </div>

              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-[#0b1324] sm:text-5xl lg:text-7xl">
                Kittichai
                <span className="block text-[#0284c7]">Raksawong</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#334155] md:text-lg">
                Junior Full Stack Developer at APSTH and Web Developer at Student
                Union KKU. I build practical products that feel simple, fast, and
                kind to users.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:contact@kittichdev@gmail.com"
                  className="rounded-full bg-[#0f172a] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0369a1]"
                >
                  Let&apos;s talk
                </a>
                <a
                  href="https://github.com/jrKitt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#0f172a]/20 bg-white px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:border-[#0369a1] hover:text-[#0369a1]"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jrKitt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#0f172a]/20 bg-white px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:border-[#0369a1] hover:text-[#0369a1]"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="card-tilt relative overflow-hidden rounded-[2rem] border border-[#0f172a]/15 bg-[#0b1324] p-4 shadow-[0_24px_60px_-30px_rgba(2,132,199,0.6)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
                  <img
                    src="/img.JPG"
                    alt="Kittichai Raksawong"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute left-8 top-8 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0f172a]">
                  jrKitt 😸
                </div>
                <div className="absolute bottom-8 right-8 rounded-xl border border-white/30 bg-white/10 px-4 py-3 font-mono text-xs text-white backdrop-blur-sm">
                  UTC+7 {" "}
                  {now.toLocaleString("th-TH", {
                    timeZone: "Asia/Bangkok",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#0f172a]/10 bg-white/70 py-4">
          <div className="marquee mx-auto max-w-6xl px-5 md:px-8">
            <div className="marquee-track font-mono text-xs uppercase tracking-[0.2em] text-[#334155]">
              {[...stackItems, ...stackItems].map((item, idx) => (
                <span key={`${item}-${idx}`}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0b1324] md:text-4xl">
              Tech Stack
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-3xl border border-[#0f172a]/10 bg-white p-6">
              <h3 className="mb-4 font-display text-xl font-bold">Frontend</h3>
              <ul className="space-y-2 text-sm text-[#334155]">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Astro.js</li>
              </ul>
            </article>
            <article className="rounded-3xl border border-[#0f172a]/10 bg-white p-6">
              <h3 className="mb-4 font-display text-xl font-bold">Backend</h3>
              <ul className="space-y-2 text-sm text-[#334155]">
                <li>Node.js / Express.js</li>
                <li>Python / Django</li>
                <li>GraphQL</li>
                <li>REST API Design</li>
              </ul>
            </article>
            <article className="rounded-3xl border border-[#0f172a]/10 bg-white p-6">
              <h3 className="mb-4 font-display text-xl font-bold">Database</h3>
              <ul className="space-y-2 text-sm text-[#334155]">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Firebase</li>
              </ul>
            </article>
            <article className="rounded-3xl border border-[#0f172a]/10 bg-white p-6">
              <h3 className="mb-4 font-display text-xl font-bold">Tooling</h3>
              <ul className="space-y-2 text-sm text-[#334155]">
                <li>Docker</li>
                <li>AWS</li>
                <li>Vercel</li>
                <li>Git & GitHub</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0b1324] md:text-4xl">
              Featured Projects
            </h2>
            <a
              href="https://github.com/jrKitt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#0369a1] hover:text-[#0c4a6e]"
            >
              See all on GitHub
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-3xl border border-[#0f172a]/10 bg-white"
              >
                <div className="relative aspect-video overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`flex h-full items-center justify-center bg-gradient-to-br ${project.gradient}`}
                    >
                      <span className="text-5xl">{project.fallbackIcon}</span>
                    </div>
                  )}
                  <div
                    className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${project.badge.color} ${
                      project.badge.textColor || "text-white"
                    }`}
                  >
                    {project.badge.text}
                  </div>
                </div>

                <div className="p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#64748b]">
                    {project.subtitle}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0b1324]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-[#0f172a]/10 bg-[#f8fafc] px-3 py-1 text-xs font-semibold text-[#334155]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-4 text-sm font-bold">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0369a1] hover:text-[#0c4a6e]"
                    >
                      Source
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-900"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="blog" className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
          <div className="rounded-[2rem] border border-[#0f172a]/10 bg-white p-7 md:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#64748b]">
              Blog Highlight
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0b1324] md:text-4xl">
              สร้างเว็บ SMOCP ใน 3 วัน
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[#475569]">
              ตอนแรกกะจะไม่ได้ทำ แต่พอเห็นพี่ๆ ในห้องนั่งวาด flow กันก็สนใจ
              เลยได้โอกาสเข้าร่วมทำเว็บ e-commerce สำหรับสโมวิทยาลัยคอมพิวเตอร์ภายใน 3 วัน
              พร้อมเรียนรู้เครื่องมือใหม่ๆ อย่าง Google Script และการทำงานเป็นทีมแบบเข้มข้น.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
              <span className="rounded-full bg-[#f1f5f9] px-3 py-1 font-semibold text-[#334155]">
                14 มิถุนายน 2025
              </span>
              <span className="rounded-full bg-[#f1f5f9] px-3 py-1 font-semibold text-[#334155]">
                อ่าน 5 นาที
              </span>
              <a
                href="/blog/smocp-3-days"
                className="rounded-full bg-[#0f172a] px-5 py-2 font-bold text-white transition hover:bg-[#0369a1]"
              >
                อ่านบทความ
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-[#0f172a]/10 bg-[#0b1324] px-5 py-16 text-white md:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
                Let&apos;s build something useful.
              </h2>
              
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-white/90">
                <a href="mailto:contact@kittichdev@gmail.com" className="underline-offset-4 hover:underline">
                  kittichdev@gmail.com
                </a>
                <span>•</span>
                <span>Khon Kaen, Thailand</span>
                <span>•</span>
                <span>
                  {now.toLocaleString("th-TH", {
                    timeZone: "Asia/Bangkok",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href="https://webring.wonderful.software#profile.jrkitt.com"
                title="วงแหวนเว็บ"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10"
              >
                <img
                  alt="วงแหวนเว็บ"
                  width="28"
                  height="28"
                  src="https://webring.wonderful.software/webring.black.svg"
                />
              </a>
              <a
                href="https://github.com/jrKitt"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-bold"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jrKitt"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-bold"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#0f172a]/10 bg-[#f7f8f3] px-5 py-6 text-center text-sm text-[#64748b] md:px-8">
        © 2026 Kittichai Raksawong (jrKitt) • Built with care
      </footer>

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap");

        .font-display {
          font-family: "Space Grotesk", "Noto Sans Thai", sans-serif;
        }

        .font-mono {
          font-family: "Chakra Petch", monospace;
        }

        .card-tilt {
          transform: perspective(1200px) rotateY(-8deg) rotateX(2deg);
          transition: transform 0.35s ease;
        }

        .card-tilt:hover {
          transform: perspective(1200px) rotateY(-2deg) rotateX(1deg);
        }

        .marquee {
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          gap: 2.2rem;
          animation: marquee 22s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
