"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FiFileText, 
  FiGithub, 
  FiMail, 
  FiExternalLink, 
  FiFolder, 
  FiCpu, 
  FiBriefcase, 
  FiArrowUpRight, 
  FiArrowRight,
  FiMapPin,
  FiAward,
  FiTerminal,
  FiLinkedin
} from "react-icons/fi";
import BlogList from "../components/BlogList";
import { Project } from "../lib/projects";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>("all");

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data: Project[]) => setProjects(data))
      .catch((err) => console.error("Failed to load projects", err));
  }, []);

  const skills = [
    // Languages
    { name: "TypeScript", category: "languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", category: "languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Go", category: "languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
    { name: "PHP", category: "languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "Python", category: "languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "HTML5", category: "languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", category: "languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    
    // Frontend
    { name: "React.js", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Flutter", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
    
    // Backend
    { name: "Node.js", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "Bun", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg" },
    
    // Databases
    { name: "PostgreSQL", category: "database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", category: "database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", category: "database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", category: "database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
    { name: "Redis", category: "database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
    
    // DevOps & Tools
    { name: "Docker", category: "devops", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Git", category: "devops", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Linux", category: "devops", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    { name: "Vercel", category: "devops", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  ];

  const filteredSkills = selectedSkillCategory === "all" 
    ? skills 
    : skills.filter(s => s.category === selectedSkillCategory);

  const experiences = [
    {
      num: "01",
      company: "Freelance Full-Stack Developer",
      role: "Self-employed",
      period: "2025 — Present",
      summary: "Delivering client-centric web platforms, custom dashboards, and REST backend systems with production deployment on Vercel and DigitalOcean.",
      points: [
        "Architecting clean relational schemas, JWT authentication, and structured REST APIs.",
        "Developing high-performance responsive web user interfaces with React, Next.js, and TypeScript.",
        "Managing client requirements end-to-end from specification to cloud production delivery."
      ]
    },
    {
      num: "02",
      company: "APSTH Company Limited",
      role: "Frontend & Backend Developer",
      period: "Sep 2024 — Feb 2026",
      summary: "Developed integrated clinic management systems and e-commerce platforms using modern JavaScript runtimes.",
      points: [
        "Engineered high-throughput backend APIs using Elysia.js on Bun with MySQL as the primary database.",
        "Implemented secure JWT authorization and role-based access control (RBAC) across clinic portals.",
        "Built responsive client storefronts and inventory panels using React.js and Tailwind CSS."
      ]
    },
    {
      num: "03",
      company: "Friendly Dev Co., Ltd.",
      role: "Mobile Developer",
      period: "Aug 2024 — Feb 2025",
      summary: "Engineered cross-platform mobile application workflows with cloud synchronization.",
      points: [
        "Built Flutter mobile applications following strict UI/UX specifications and accessibility guidelines.",
        "Integrated Firebase Firestore, authentication, and push notification pipelines.",
        "Published mobile software free to the public on Google Play Store and Apple App Store."
      ]
    },
    {
      num: "04",
      company: "IT Network Computer Service",
      role: "IT Support & Web Intern",
      period: "Oct 2023 — Feb 2024",
      summary: "Constructed internal company tools and maintained physical infrastructure networks.",
      points: [
        "Created an internal web application for employee attendance logging and salary records.",
        "Configured LAN network cables, server installation, and hardware diagnostic procedures."
      ]
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const displayProjects = featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#06070a] text-slate-100">
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">

        {/* 1. HERO SECTION (Worachat-inspired Stacked Typographic Hero) */}
        <section id="home" className="relative mb-24 pt-8 pb-16 text-center sm:pt-16 sm:pb-24">
          
          {/* Top Left Monospace Meta (Worachat style) */}
          <div className="hidden lg:block absolute left-0 top-12 max-w-[260px] text-left font-mono text-[11px] leading-relaxed text-slate-400 select-none">
            KITTICHAI RAKSAWONG • FULL STACK DEV<br />
            BUILDING DEPENDABLE SYSTEMS, BACKENDS<br />
            &amp; MODERN PRODUCTION APPLICATIONS.
          </div>

          {/* Top Right Monospace Meta (Worachat style) */}
          <div className="hidden lg:block absolute right-0 top-12 max-w-[260px] text-right font-mono text-[11px] leading-relaxed text-slate-400 select-none">
            BSC COMPUTER SCIENCE @ KKU<br />
            KHON KAEN, THAILAND<br />
            REACT • NEXT.JS • GOLANG • NODE • CLOUD
          </div>

          {/* Giant Stacked Title (Worachat Hero Layout) */}
          <h1 className="flex flex-col items-center justify-center font-black tracking-tighter text-white select-none leading-[0.92] text-5xl sm:text-7xl md:text-8xl lg:text-[105px]">
            <div className="flex items-center gap-3 sm:gap-6">
              <span>FULL STACK</span>
              <a 
                href="https://github.com/jrKitt"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="hidden sm:inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-[#1a2233] bg-[#0d1017] text-slate-400 hover:border-[#00f0ff] hover:text-[#00f0ff] transition"
              >
                <FiGithub className="h-6 w-6 sm:h-8 sm:w-8" />
              </a>
            </div>

            <div className="flex items-center gap-3 sm:gap-6 mt-1 sm:mt-2 text-[#00f0ff]">
              <a 
                href="https://linkedin.com/in/jrKitt"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="hidden sm:inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-[#1a2233] bg-[#0d1017] text-slate-400 hover:border-[#00f0ff] hover:text-[#00f0ff] transition"
              >
                <FiLinkedin className="h-6 w-6 sm:h-8 sm:w-8" />
              </a>
              <span>SOFTWARE</span>
            </div>

            <div className="flex items-center gap-3 sm:gap-6 mt-1 sm:mt-2">
              <span>DEVELOPER</span>
              <a 
                href="mailto:kittichdev@gmail.com"
                title="Email"
                className="hidden sm:inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-[#1a2233] bg-[#0d1017] text-slate-400 hover:border-[#00f0ff] hover:text-[#00f0ff] transition"
              >
                <FiMail className="h-6 w-6 sm:h-8 sm:w-8" />
              </a>
            </div>
          </h1>

          {/* Subtitle & Tagline */}
          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300">
            Crafting dependable web applications, high-performance backends, and practical digital products. 
            Final-year Computer Science student at Khon Kaen University.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff] bg-[#00f0ff] px-6 py-3 font-mono text-xs sm:text-sm font-bold text-black transition hover:bg-[#38bdf8] hover:border-[#38bdf8]"
            >
              <span>Explore Projects</span>
              <FiArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/cv.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#1a2233] bg-[#0d1017] px-6 py-3 font-mono text-xs sm:text-sm font-semibold text-white transition hover:border-[#00f0ff] hover:text-[#00f0ff]"
            >
              <FiFileText className="h-4 w-4 text-[#00f0ff]" />
              <span>View Resume</span>
              <FiArrowUpRight className="h-3.5 w-3.5 opacity-60" />
            </a>
          </div>
        </section>

        {/* 2. ABOUT BENTO GRID SECTION (Worachat-style Bento) */}
        <section id="about" className="mb-24">
          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Bento Card 1: Profile Main Card (Col span 2, Row span 2) */}
            <div className="sm:col-span-2 sm:row-span-2 rounded-2xl border border-[#1a2233] bg-[#0d1017] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-5">
                  <img
                    src="https://github.com/jrKitt.png"
                    alt="Kittichai Raksawong"
                    className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl border-2 border-[#1a2233] object-cover shrink-0"
                  />
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#00f0ff]">
                      FULL STACK DEVELOPER
                    </span>
                    <h3 className="text-2xl font-black text-white mt-1">
                      Kittichai<br />Raksawong<span className="text-[#00f0ff]">.</span>
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      Building dependable web applications, backend APIs, and distributed architectures.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 font-mono text-xs text-slate-300 border-t border-[#1a2233] pt-4">
                  <p className="text-slate-400">
                    Currently pursuing a BSc in Computer Science at Khon Kaen University. 
                    I focus on end-to-end delivery: clear data models, maintainable backend services, and snappy user interfaces.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-[#1a2233] pt-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#00f0ff]" />
                  <span>Open to freelance &amp; contracts</span>
                </div>
                <a 
                  href="/cv.html"
                  target="_blank"
                  className="text-[#00f0ff] hover:underline flex items-center gap-1"
                >
                  CV <FiArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Bento Card 2: Education */}
            <div className="rounded-2xl border border-[#1a2233] bg-[#0d1017] p-5 flex flex-col justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1a2233] bg-[#06070a] text-[#00f0ff]">
                <FiAward className="h-5 w-5" />
              </div>
              <div className="mt-6">
                <span className="font-mono text-[10px] uppercase text-slate-400">EDUCATION</span>
                <h4 className="text-base font-bold text-white mt-0.5">Computer Science</h4>
                <p className="text-xs text-slate-400 mt-1 font-mono">BSc Candidate • Khon Kaen University</p>
              </div>
            </div>

            {/* Bento Card 3: Projects Stat */}
            <Link 
              href="/projects" 
              className="group rounded-2xl border border-[#1a2233] bg-[#0d1017] p-5 flex flex-col justify-between hover:border-[#00f0ff] transition"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase text-slate-400">SELECTED WORK</span>
                <FiArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-[#00f0ff] transition" />
              </div>
              <div className="mt-6">
                <div className="text-4xl font-black text-white group-hover:text-[#00f0ff] transition">
                  10+
                </div>
                <h4 className="text-base font-bold text-slate-200 mt-1">Shipped Projects</h4>
              </div>
            </Link>

            {/* Bento Card 4: Running Ticker Strip (Col span 2) */}
            <div className="sm:col-span-2 overflow-hidden rounded-2xl border border-[#1a2233] bg-[#0d1017] py-3.5">
              <div className="flex gap-4 animate-marquee-left whitespace-nowrap font-mono text-xs font-semibold text-slate-300">
                {[
                  "FULL STACK DEVELOPMENT",
                  "BACKEND SYSTEMS",
                  "DATABASE ARCHITECTURE",
                  "REST & WEBSOCKET APIS",
                  "COMPUTER SCIENCE @ KKU",
                  "PRODUCTION DEPLOYMENT",
                  "FULL STACK DEVELOPMENT",
                  "BACKEND SYSTEMS",
                  "DATABASE ARCHITECTURE",
                  "REST & WEBSOCKET APIS",
                  "COMPUTER SCIENCE @ KKU",
                  "PRODUCTION DEPLOYMENT"
                ].map((item, idx) => (
                  <span key={idx} className="flex items-center gap-3">
                    <span className="text-[#00f0ff]">◆</span>
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Card 5: Core Stack Mini Badges */}
            <div className="rounded-2xl border border-[#1a2233] bg-[#0d1017] p-5">
              <span className="font-mono text-[10px] uppercase text-slate-400">CORE EXPERTISE</span>
              <h4 className="text-base font-bold text-white mt-0.5 mb-3">My Stack</h4>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                {["Next.js", "React", "TypeScript", "Node.js", "Go", "PostgreSQL", "Docker"].map((tech) => (
                  <span 
                    key={tech}
                    className="rounded-md border border-[#1a2233] bg-[#06070a] px-2 py-0.5 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Card 6: Philosophy (Wide span 2) */}
            <div className="sm:col-span-2 rounded-2xl border border-[#1a2233] bg-[#0d1017] p-5 flex flex-col justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1a2233] bg-[#06070a] text-[#00f0ff]">
                <FiTerminal className="h-5 w-5" />
              </div>
              <div className="mt-4">
                <span className="font-mono text-[10px] uppercase text-slate-400">FROM INTERFACE TO INFRASTRUCTURE</span>
                <h4 className="text-lg font-bold text-white mt-1">Think in systems. Build end to end.</h4>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  Focusing on explicit data structures, predictable APIs, and reliable software that teammates can easily maintain.
                </p>
              </div>
            </div>

            {/* Bento Card 7: Location */}
            <div className="rounded-2xl border border-[#1a2233] bg-[#0d1017] p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1a2233] bg-[#06070a] text-[#00f0ff]">
                  <FiMapPin className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10px] text-slate-400">LOCATION</span>
              </div>
              <div className="mt-4">
                <span className="font-mono text-[10px] uppercase text-slate-400">BASED IN</span>
                <h4 className="text-base font-bold text-white mt-0.5">Khon Kaen, Thailand</h4>
                <a 
                  href="mailto:kittichdev@gmail.com" 
                  className="mt-2 inline-flex items-center gap-1 font-mono text-xs text-[#00f0ff] hover:underline"
                >
                  kittichdev@gmail.com
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 3. WORK EXPERIENCE SECTION (Worachat-style Detailed Timeline) */}
        <section id="experience" className="mb-24">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1a2233] bg-[#0d1017] px-3.5 py-1 font-mono text-xs text-[#00f0ff] uppercase tracking-wider mb-3">
              <FiBriefcase className="h-3.5 w-3.5" />
              <span>Career &amp; Practical Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Work experience.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-slate-400">
              Contract development, agency client work, and engineering internships.
            </p>
          </div>

          <div className="rounded-2xl border border-[#1a2233] bg-[#0d1017] p-6 sm:p-8">
            <div className="space-y-8 divide-y divide-[#1a2233]">
              {experiences.map((exp, idx) => (
                <div key={exp.company} className={idx > 0 ? "pt-8" : ""}>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-2xl font-black text-[#00f0ff] select-none">
                        {exp.num}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                        <p className="font-mono text-xs text-[#00f0ff] font-medium mt-0.5">{exp.role}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-slate-400 sm:text-right shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed pl-10">
                    {exp.summary}
                  </p>

                  <ul className="mt-3 space-y-1.5 pl-10">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-[#00f0ff] mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SKILLS SECTION (Worachat-style: Filter pills + dual marquee + official colored brand icons) */}
        <section id="skills" className="mb-24">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1a2233] bg-[#0d1017] px-3.5 py-1 font-mono text-xs text-[#00f0ff] uppercase tracking-wider mb-3">
              <FiCpu className="h-3.5 w-3.5" />
              <span>The Tools Behind The Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              The stack I <span className="text-[#00f0ff]">build with.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-slate-400">
              From the first line of code to a complete working production system.
            </p>
          </div>

          {/* Category Filter Pills (Worachat style) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {[
              { id: "all", label: "All" },
              { id: "languages", label: "Languages" },
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "database", label: "Databases" },
              { id: "devops", label: "DevOps & Tools" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedSkillCategory(cat.id)}
                className={`rounded-full px-4 py-1.5 font-mono text-xs font-medium transition ${
                  selectedSkillCategory === cat.id
                    ? "bg-[#00f0ff] text-black font-bold border border-[#00f0ff]"
                    : "border border-[#1a2233] bg-[#0d1017] text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dual Marquee Strips (Scrolling Left & Right with Official Colored Brand Logos) */}
          <div className="mb-6 space-y-3 overflow-hidden rounded-2xl border border-[#1a2233] bg-[#0d1017] py-4">
            {/* Top row - left scroll */}
            <div className="flex gap-4 animate-marquee-left whitespace-nowrap">
              {[...skills, ...skills].map((s, i) => (
                <div
                  key={`m1-${s.name}-${i}`}
                  className="flex shrink-0 items-center gap-2.5 rounded-xl border border-[#1a2233] bg-[#06070a] px-3.5 py-2"
                >
                  <img src={s.icon} alt={s.name} className="h-5 w-5 object-contain" />
                  <span className="font-mono text-xs font-medium text-slate-200">{s.name}</span>
                </div>
              ))}
            </div>

            {/* Bottom row - right scroll */}
            <div className="flex gap-4 animate-marquee-right whitespace-nowrap">
              {[...skills.slice().reverse(), ...skills.slice().reverse()].map((s, i) => (
                <div
                  key={`m2-${s.name}-${i}`}
                  className="flex shrink-0 items-center gap-2.5 rounded-xl border border-[#1a2233] bg-[#06070a] px-3.5 py-2"
                >
                  <img src={s.icon} alt={s.name} className="h-5 w-5 object-contain" />
                  <span className="font-mono text-xs font-medium text-slate-200">{s.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Categorized Skills Grid with Colored Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="group flex items-center gap-3 rounded-xl border border-[#1a2233] bg-[#0d1017] p-3 transition hover:border-[#00f0ff] hover:bg-[#121620]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#1a2233] bg-[#06070a] p-1.5">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="truncate font-mono text-xs font-bold text-white group-hover:text-[#00f0ff] transition">
                    {skill.name}
                  </h4>
                  <p className="font-mono text-[10px] uppercase text-slate-400">{skill.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. FEATURED PROJECTS (Loaded from project.json with Screenshots & Links) */}
        <section id="projects" className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1a2233] bg-[#0d1017] px-3.5 py-1 font-mono text-xs text-[#00f0ff] uppercase tracking-wider mb-3">
                <FiFolder className="h-3.5 w-3.5" />
                <span>Selected Work</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                Featured projects<span className="text-[#00f0ff]">.</span>
              </h2>
              <p className="mt-2 text-sm text-slate-400 font-mono">
                Dynamically read from <span className="text-[#00f0ff] font-semibold">project.json</span> with live links &amp; previews
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-[#1a2233] bg-[#0d1017] px-4 py-2 font-mono text-xs font-medium text-slate-300 hover:border-[#00f0ff] hover:text-[#00f0ff] transition self-start sm:self-auto"
            >
              <span>View All Projects</span>
              <FiArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {displayProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#1a2233] bg-[#0d1017] transition hover:border-[#00f0ff]"
              >
                {/* Image Preview */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#06070a] border-b border-[#1a2233]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  
                  {/* Status Pill on Image */}
                  {project.status && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-[#1a2233] bg-[#06070a] px-2.5 py-1 font-mono text-[11px] text-[#00f0ff]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff]" />
                      <span>{project.status}</span>
                    </div>
                  )}

                  {/* Category Pill */}
                  {project.category && (
                    <div className="absolute top-3 left-3 rounded-md border border-[#1a2233] bg-[#06070a] px-2.5 py-1 font-mono text-[10px] text-slate-300">
                      {project.category}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00f0ff] transition">
                    {project.title}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-xs sm:text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-[#1a2233] bg-[#06070a] px-2 py-0.5 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#1a2233] pt-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#00f0ff] bg-[#00f0ff] px-3.5 py-1.5 font-mono text-xs font-bold text-black hover:bg-[#38bdf8] transition"
                      >
                        <span>Live Demo</span>
                        <FiExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#1a2233] bg-[#06070a] px-3.5 py-1.5 font-mono text-xs font-medium text-slate-300 hover:border-slate-600 hover:text-white transition"
                      >
                        <FiGithub className="h-3.5 w-3.5" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-[#1a2233] bg-[#0d1017] px-6 py-2.5 font-mono text-xs font-medium text-slate-300 hover:border-[#00f0ff] hover:text-[#00f0ff] transition"
            >
              <span>Explore All Shipped Projects ({projects.length})</span>
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* 6. MARQUEE BANNER STRIP (Worachat style angled ribbon) */}
        <section className="mb-24 overflow-hidden rounded-2xl border border-[#1a2233] bg-[#0d1017] py-6 select-none">
          <div className="flex gap-6 animate-marquee-left whitespace-nowrap font-mono text-sm sm:text-base font-bold text-slate-200">
            {[
              "FULL STACK DEVELOPER",
              "KHON KAEN UNIVERSITY",
              "COMPUTER SCIENCE",
              "PROBLEM SOLVER",
              "WEB SYSTEMS & APIS",
              "CLEAN CODE",
              "TYPESCRIPT",
              "NEXT.JS",
              "GOLANG",
              "PRODUCTION READY",
              "FULL STACK DEVELOPER",
              "KHON KAEN UNIVERSITY",
              "COMPUTER SCIENCE",
              "PROBLEM SOLVER",
              "WEB SYSTEMS & APIS",
              "CLEAN CODE",
              "TYPESCRIPT",
              "NEXT.JS",
              "GOLANG",
              "PRODUCTION READY"
            ].map((text, i) => (
              <span key={i} className="flex items-center gap-4">
                <span className="text-[#00f0ff]">◆</span>
                <span>{text}</span>
              </span>
            ))}
          </div>
        </section>

        {/* 7. BLOG & EXPERIENCE RECATIVE NOTES */}
        <div id="blog" className="mb-24">
          <BlogList />
        </div>

        {/* 8. CONTACT CTA SECTION (Worachat style) */}
        <section id="contact" className="mb-24 rounded-2xl border border-[#1a2233] bg-[#0d1017] p-8 sm:p-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1a2233] bg-[#06070a] px-3.5 py-1 font-mono text-xs text-[#00f0ff] uppercase tracking-wider mb-4">
            <FiMail className="h-3.5 w-3.5" />
            <span>Have Something in Mind?</span>
          </div>

          <h2 className="text-3xl sm:text-6xl font-black tracking-tight text-white">
            Let&apos;s build something <span className="text-[#00f0ff]">great.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm sm:text-base text-slate-400 leading-relaxed">
            Have an internship opportunity, freelance project, or system architecture challenge? 
            I&apos;d love to hear what you are working on.
          </p>

          <div className="mt-8">
            <a
              href="mailto:kittichdev@gmail.com"
              className="inline-flex items-center gap-2.5 rounded-full border border-[#00f0ff] bg-[#00f0ff] px-8 py-3.5 font-mono text-sm font-bold text-black transition hover:bg-[#38bdf8] hover:border-[#38bdf8]"
            >
              <span>Get in touch</span>
              <FiArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 font-mono text-xs text-slate-400">
            <a href="mailto:kittichdev@gmail.com" className="flex items-center gap-1.5 hover:text-white transition">
              <FiMail className="h-3.5 w-3.5 text-[#00f0ff]" />
              <span>kittichdev@gmail.com</span>
            </a>
            <span className="text-slate-600">•</span>
            <a href="https://github.com/jrKitt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition">
              <FiGithub className="h-3.5 w-3.5 text-[#00f0ff]" />
              <span>github.com/jrKitt</span>
            </a>
            <span className="text-slate-600">•</span>
            <a href="https://linkedin.com/in/jrKitt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition">
              <FiLinkedin className="h-3.5 w-3.5 text-[#00f0ff]" />
              <span>linkedin.com/in/jrKitt</span>
            </a>
          </div>
        </section>

      </main>

      {/* 9. FLOATING DOCK FOOTER (Worachat Style with Solid Colors) */}
      <footer className="w-full px-4 pb-8 pt-2 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#1a2233] bg-[#0d1017] p-6 sm:px-10 sm:py-7">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                <span className="font-bold text-white text-base">Kittichai Raksawong</span>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#1a2233] bg-[#06070a] px-2.5 py-0.5 font-mono text-[10px] text-[#00f0ff]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff]" />
                  <span>Active Developer</span>
                </div>
              </div>
              <p className="mt-1 font-mono text-[11px] text-slate-500">
                © 2026 • Designed &amp; Engineered for jrkitt.com • Khon Kaen, Thailand
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/jrKitt"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1a2233] bg-[#06070a] text-slate-400 hover:border-[#00f0ff] hover:text-[#00f0ff] transition"
              >
                <FiGithub className="h-4 w-4" />
              </a>

              <a
                href="mailto:kittichdev@gmail.com"
                title="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1a2233] bg-[#06070a] text-slate-400 hover:border-[#00f0ff] hover:text-[#00f0ff] transition"
              >
                <FiMail className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-1.5 rounded-full border border-[#1a2233] bg-[#06070a] px-3.5 py-1.5 font-mono text-xs text-slate-400 hover:text-white hover:border-slate-600 transition"
              >
                <span>Back to Top</span>
                <FiArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
