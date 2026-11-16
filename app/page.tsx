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
  FiLinkedin,
  FiCheckCircle
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

  const skillCategories = [
    { id: "all", label: "ทั้งหมด" },
    { id: "languages", label: "ภาษาโปรแกรม" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "ฐานข้อมูล" },
    { id: "devops", label: "DevOps & เครื่องมือ" },
  ];

  const filteredSkills = selectedSkillCategory === "all" 
    ? skills 
    : skills.filter(s => s.category === selectedSkillCategory);

  const experiences = [
    {
      num: "01",
      company: "Freelance Full-Stack Developer",
      role: "นักพัฒนาอิสระ (Full Stack)",
      period: "2025 — ปัจจุบัน",
      summary: "รับพัฒนาเว็บแพลตฟอร์มตามความต้องการ, แดชบอร์ดบริหารจัดการข้อมูล และระบบ REST API พร้อมดูแลการส่งมอบขึ้น Production บน Vercel และ Cloud Server",
      points: [
        "ออกแบบสคีมาฐานข้อมูลเชิงสัมพันธ์ ระบบยืนยันตัวตน JWT และโครงสร้าง REST API ที่รัดกุม",
        "พัฒนาเว็บแอปพลิเคชันที่ตอบสนองรวดเร็วและรองรับ Responsive ด้วย React, Next.js และ TypeScript",
        "บริหารจัดการความต้องการของลูกค้าตั้งแต่เริ่มวางโครงร่างจนถึงส่งมอบงานขึ้นระบบจริง"
      ]
    },
    {
      num: "02",
      company: "APSTH Company Limited",
      role: "Frontend & Backend Developer",
      period: "ก.ย. 2024 — ก.พ. 2026",
      summary: "ร่วมพัฒนาระบบบริหารจัดการคลินิกและแพลตฟอร์ม E-commerce โดยใช้ JavaScript Runtime ยุคใหม่",
      points: [
        "พัฒนา Backend API ความเร็วสูงด้วย Elysia.js บน Bun เชื่อมต่อฐานข้อมูล MySQL",
        "พัฒนาระบบยืนยันสิทธิ์ JWT และการควบคุมการเข้าถึงตามบทบาท (RBAC) ภายในระบบคลินิก",
        "สร้างหน้าเว็บสำหรับลูกค้าและแผงควบคุมสต็อกสินค้าด้วย React.js และ Tailwind CSS"
      ]
    },
    {
      num: "03",
      company: "Friendly Dev Co., Ltd.",
      role: "Mobile Developer",
      period: "ส.ค. 2024 — ก.พ. 2025",
      summary: "พัฒนาแอปพลิเคชันมือถือแบบข้ามแพลตฟอร์ม (Cross-platform) พร้อมระบบเชื่อมต่อข้อมูลบนคลาวด์",
      points: [
        "พัฒนาโมบายล์แอปพลิเคชันด้วย Flutter ตามข้อกำหนด UI/UX และแนวทาง Accessibility",
        "เชื่อมต่อระบบฐานข้อมูล Firebase Firestore, การยืนยันตัวตน และระบบ Push Notification",
        "จัดเตรียมและเผยแพร่แอปพลิเคชันสู่ Google Play Store และ Apple App Store"
      ]
    },
    {
      num: "04",
      company: "IT Network Computer Service",
      role: "IT Support & Web Intern",
      period: "ต.ค. 2023 — ก.พ. 2024",
      summary: "พัฒนาเว็บแอปพลิเคชันภายในองค์กรและดูแลบำรุงรักษาระบบโครงสร้างพื้นฐานเครือข่าย",
      points: [
        "พัฒนาเว็บแอปพลิเคชันสำหรับบันทึกเวลาเข้า-ออกงานและจัดทำข้อมูลเงินเดือนพนักงาน",
        "เดินสายสัญญาณ LAN ติดตั้งเครื่องเซิร์ฟเวอร์ และตรวจสอบแก้ไขปัญหาอุปกรณ์ฮาร์ดแวร์"
      ]
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const displayProjects = featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 transition-colors dark:bg-[#090b10] dark:text-slate-100">
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">

        {/* 1. HERO SECTION (Minimalist, Clean & Focused) */}
        <section id="home" className="relative mb-20 pt-6 pb-12 sm:pt-12 sm:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 font-mono text-xs text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>พร้อมรับงานพัฒนาระบบ &amp; ฟรีแลนซ์</span>
            </div>

            {/* Name & Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 dark:text-white leading-[1.1]">
              กิตติชัย รักษา​วงศ์
            </h1>
            <p className="mt-3 font-mono text-base sm:text-lg font-medium text-sky-600 dark:text-sky-400">
              Full Stack Software Developer
            </p>

            {/* Subtitle / Bio */}
            <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              มุ่งเน้นการสร้างสรรค์เว็บแอปพลิเคชันและระบบ Backend ที่เสถียร สถาปัตยกรรมข้อมูลชัดเจน 
              และส่งมอบระบบที่ใช้งานได้จริงในระดับ Production นักศึกษาชั้นปีสุดท้าย สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น
            </p>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-900 px-6 py-2.5 font-mono text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:border-sky-400 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
              >
                <span>สำรวจผลงาน</span>
                <FiArrowRight className="h-4 w-4" />
              </a>

              <a
                href="/cv.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 font-mono text-xs sm:text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white"
              >
                <FiFileText className="h-4 w-4 text-sky-600 dark:text-sky-400" />
                <span>ดูประวัติย่อ / Resume</span>
                <FiArrowUpRight className="h-3.5 w-3.5 opacity-60" />
              </a>

              {/* Social Quick Icons */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  href="https://github.com/jrKitt"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub: jrKitt"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white"
                >
                  <FiGithub className="h-4 w-4" />
                </a>

                <a
                  href="https://linkedin.com/in/jrKitt"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn: jrKitt"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white"
                >
                  <FiLinkedin className="h-4 w-4" />
                </a>

                <a
                  href="mailto:kittichdev@gmail.com"
                  title="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white"
                >
                  <FiMail className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 2. ABOUT BENTO GRID SECTION (Minimalist Cards) */}
        <section id="about" className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Bento Card 1: Profile Main Card (Col span 2, Row span 2) */}
            <div className="sm:col-span-2 sm:row-span-2 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex flex-col justify-between dark:border-slate-800/80 dark:bg-slate-900/60">
              <div>
                <div className="flex items-start gap-4 sm:gap-5">
                  <img
                    src="https://github.com/jrKitt.png"
                    alt="Kittichai Raksawong"
                    className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl border border-slate-200 object-cover shrink-0 dark:border-slate-800"
                  />
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-sky-600 dark:text-sky-400 font-semibold">
                      Full Stack Developer
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mt-1 dark:text-white">
                      กิตติชัย รักษา​วงศ์
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                      พัฒนาระบบตั้งแต่หน้าบ้าน ส่วนหลังบ้าน ฐานข้อมูล ตลอดจนการขึ้นระบบบนคลาวด์
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-4 dark:border-slate-800 dark:text-slate-400 leading-relaxed">
                  <p>
                    กำลังศึกษาระดับปริญญาตรี สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น 
                    เน้นการพัฒนาซอฟต์แวร์แบบ End-to-End เพื่อให้ได้ระบบที่สอดคล้องกับความต้องการของผู้ใช้จริง และง่ายต่อการขยายต่อในอนาคต
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-mono text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                  <span>เปิดรับงานสัญญาจ้าง &amp; ฟรีแลนซ์</span>
                </div>
                <a 
                  href="/cv.html" 
                  target="_blank" 
                  className="text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  CV / Resume <FiArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Bento Card 2: Education */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm flex flex-col justify-between dark:border-slate-800/80 dark:bg-slate-900/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-sky-600 dark:border-slate-800 dark:bg-slate-800/50 dark:text-sky-400">
                <FiAward className="h-5 w-5" />
              </div>
              <div className="mt-6">
                <span className="font-mono text-[10px] uppercase text-slate-400 dark:text-slate-500">การศึกษา</span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5 dark:text-white">วิทยาการคอมพิวเตอร์</h4>
                <p className="text-xs text-slate-500 mt-1 dark:text-slate-400">วท.บ. • มหาวิทยาลัยขอนแก่น</p>
              </div>
            </div>

            {/* Bento Card 3: Projects Stat */}
            <Link 
              href="/projects" 
              className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm flex flex-col justify-between transition hover:border-slate-300 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-slate-700"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase text-slate-400 dark:text-slate-500">ผลงานทั้งหมด</span>
                <FiArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-sky-600 transition dark:group-hover:text-sky-400" />
              </div>
              <div className="mt-6">
                <div className="text-3xl sm:text-4xl font-bold text-slate-950 group-hover:text-sky-600 transition dark:text-white dark:group-hover:text-sky-400">
                  10+
                </div>
                <h4 className="text-sm font-semibold text-slate-700 mt-1 dark:text-slate-300">โปรเจกต์ที่ส่งมอบแล้ว</h4>
              </div>
            </Link>

            {/* Bento Card 4: Philosophy */}
            <div className="sm:col-span-2 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm flex flex-col justify-between dark:border-slate-800/80 dark:bg-slate-900/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-sky-600 dark:border-slate-800 dark:bg-slate-800/50 dark:text-sky-400">
                <FiTerminal className="h-5 w-5" />
              </div>
              <div className="mt-4">
                <span className="font-mono text-[10px] uppercase text-slate-400 dark:text-slate-500">แนวคิดการพัฒนา</span>
                <h4 className="text-base font-bold text-slate-900 mt-1 dark:text-white">คิดอย่างเป็นระบบ พัฒนาอย่างตรงจุด</h4>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed dark:text-slate-400">
                  ให้ความสำคัญกับสถาปัตยกรรมข้อมูลที่รัดกุม, API ที่คาดเดาได้ และโค้ดที่เป็นระเบียบ เพื่อให้ทีมงานร่วมพัฒนาและดูแลต่อได้ง่าย
                </p>
              </div>
            </div>

            {/* Bento Card 5: Core Stack Highlights */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/60">
              <span className="font-mono text-[10px] uppercase text-slate-400 dark:text-slate-500">เทคโนโลยีหลัก</span>
              <h4 className="text-base font-bold text-slate-900 mt-0.5 mb-2.5 dark:text-white">Core Stack</h4>
              <div className="flex flex-wrap gap-1 font-mono text-[11px]">
                {["Next.js", "React", "TypeScript", "Node.js", "Go", "PostgreSQL", "Docker"].map((tech) => (
                  <span 
                    key={tech}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-slate-700 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Card 6: Location */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm flex flex-col justify-between dark:border-slate-800/80 dark:bg-slate-900/60">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-sky-600 dark:border-slate-800 dark:bg-slate-800/50 dark:text-sky-400">
                  <FiMapPin className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500">ที่อยู่</span>
              </div>
              <div className="mt-4">
                <span className="font-mono text-[10px] uppercase text-slate-400 dark:text-slate-500">พำนักอยู่ที่</span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5 dark:text-white">ขอนแก่น, ประเทศไทย</h4>
                <a 
                  href="mailto:kittichdev@gmail.com" 
                  className="mt-1.5 inline-flex items-center gap-1 font-mono text-xs text-sky-600 hover:underline dark:text-sky-400"
                >
                  kittichdev@gmail.com
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 3. WORK EXPERIENCE SECTION */}
        <section id="experience" className="mb-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 font-mono text-xs text-sky-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-sky-400 uppercase tracking-wider mb-2">
              <FiBriefcase className="h-3.5 w-3.5" />
              <span>ประวัติการทำงาน</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
              ประสบการณ์ทำงาน
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              งานรับจ้างพัฒนาอิสระ, ประสบการณ์ทำงานร่วมกับบริษัท และการฝึกงานด้านไอที
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/60">
            <div className="space-y-8 divide-y divide-slate-100 dark:divide-slate-800">
              {experiences.map((exp, idx) => (
                <div key={exp.company} className={idx > 0 ? "pt-8" : ""}>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-xl sm:text-2xl font-bold text-sky-600 select-none dark:text-sky-400">
                        {exp.num}
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">{exp.company}</h3>
                        <p className="font-mono text-xs text-sky-600 font-medium mt-0.5 dark:text-sky-400">{exp.role}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400 sm:text-right shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-9 sm:pl-10 dark:text-slate-300">
                    {exp.summary}
                  </p>

                  <ul className="mt-3 space-y-1.5 pl-9 sm:pl-10">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="text-sky-600 dark:text-sky-400 mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SKILLS SECTION (Clean grid, no loud marquees) */}
        <section id="skills" className="mb-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 font-mono text-xs text-sky-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-sky-400 uppercase tracking-wider mb-2">
              <FiCpu className="h-3.5 w-3.5" />
              <span>เครื่องมือและเทคโนโลยี</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
              ทักษะความเชี่ยวชาญ
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              เทคโนโลยีที่นำมาใช้สร้างสรรค์และแก้ปัญหาในโปรเจกต์ต่างๆ
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedSkillCategory(cat.id)}
                className={`rounded-full px-4 py-1.5 font-mono text-xs font-medium transition ${
                  selectedSkillCategory === cat.id
                    ? "bg-slate-900 text-white dark:bg-sky-400 dark:text-slate-950"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Categorized Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="group flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm transition hover:border-slate-300 hover:shadow dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-slate-700"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 p-1.5 dark:border-slate-800 dark:bg-slate-800/50">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="truncate font-mono text-xs font-semibold text-slate-900 group-hover:text-sky-600 transition dark:text-white dark:group-hover:text-sky-400">
                    {skill.name}
                  </h4>
                  <p className="font-mono text-[10px] uppercase text-slate-400 dark:text-slate-500">{skill.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. FEATURED PROJECTS */}
        <section id="projects" className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 font-mono text-xs text-sky-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-sky-400 uppercase tracking-wider mb-2">
                <FiFolder className="h-3.5 w-3.5" />
                <span>ผลงานคัดสรร</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
                ผลงานที่โดดเด่น
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                คัดเลือกโปรเจกต์พัฒนาระบบที่มีการนำไปใช้งานจริงและมีตัวอย่างให้ทดสอบ
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 font-mono text-xs font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white self-start sm:self-auto"
            >
              <span>ดูผลงานทั้งหมด</span>
              <FiArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {displayProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:border-slate-300 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-slate-700"
              >
                {/* Image Preview */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-200/80 dark:bg-slate-950 dark:border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-102"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  
                  {/* Status Pill */}
                  {project.status && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/90 px-2.5 py-0.5 font-mono text-[11px] text-slate-700 shadow-sm backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/90 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{project.status}</span>
                    </div>
                  )}

                  {/* Category Pill */}
                  {project.category && (
                    <div className="absolute top-3 left-3 rounded-md border border-slate-200/80 bg-white/90 px-2 py-0.5 font-mono text-[10px] text-slate-700 shadow-sm backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/90 dark:text-slate-300">
                      {project.category}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition dark:text-white dark:group-hover:text-sky-400">
                    {project.title}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-slate-600 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-900 bg-slate-900 px-3.5 py-1.5 font-mono text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:border-sky-400 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
                      >
                        <span>ทดลองใช้งานจริง</span>
                        <FiExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 font-mono text-xs font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white"
                      >
                        <FiGithub className="h-3.5 w-3.5" />
                        <span>ซอร์สโค้ด</span>
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
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 font-mono text-xs font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white"
            >
              <span>ดูผลงานและระบบทั้งหมด ({projects.length} รายการ)</span>
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* 6. BLOG & EXPERIENCE NOTES */}
        <div id="blog" className="mb-20">
          <BlogList />
        </div>

        {/* 7. CONTACT CTA SECTION */}
        <section id="contact" className="mb-20 rounded-2xl border border-slate-200/80 bg-white p-8 sm:p-14 text-center shadow-sm dark:border-slate-800/80 dark:bg-slate-900/60">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 font-mono text-xs text-sky-600 dark:border-slate-800 dark:bg-slate-800 dark:text-sky-400 uppercase tracking-wider mb-4">
            <FiMail className="h-3.5 w-3.5" />
            <span>มีโปรเจกต์ที่สนใจพัฒนาไหม?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 dark:text-white">
            มาร่วมสร้างสรรค์ผลงานด้วยกัน
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-400">
            หากคุณมีข้อเสนอตำแหน่งงาน, โปรเจกต์ฟรีแลนซ์ หรืองานพัฒนาระบบที่ต้องการพูดคุย 
            ผมยินดีรับฟังและร่วมงานเสมอครับ
          </p>

          <div className="mt-8">
            <a
              href="mailto:kittichdev@gmail.com"
              className="inline-flex items-center gap-2.5 rounded-full border border-slate-900 bg-slate-900 px-8 py-3.5 font-mono text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:border-sky-400 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
            >
              <span>ส่งอีเมลถึงผม</span>
              <FiArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 font-mono text-xs text-slate-500 dark:text-slate-400">
            <a href="mailto:kittichdev@gmail.com" className="flex items-center gap-1.5 hover:text-slate-900 transition dark:hover:text-white">
              <FiMail className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
              <span>kittichdev@gmail.com</span>
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a href="https://github.com/jrKitt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-slate-900 transition dark:hover:text-white">
              <FiGithub className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
              <span>github.com/jrKitt</span>
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a href="https://linkedin.com/in/jrKitt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-slate-900 transition dark:hover:text-white">
              <FiLinkedin className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
              <span>linkedin.com/in/jrKitt</span>
            </a>
          </div>
        </section>

      </main>

      {/* 8. FOOTER */}
      <footer className="w-full px-4 pb-8 pt-2 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:px-8 sm:py-6 dark:border-slate-800/80 dark:bg-slate-900/60">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                <span className="font-bold text-slate-900 text-sm dark:text-white">กิตติชัย รักษา​วงศ์ (Kittichai Raksawong)</span>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-[10px] text-emerald-700 dark:border-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>พร้อมรับงาน</span>
                </div>
              </div>
              <p className="mt-1 font-mono text-[11px] text-slate-400 dark:text-slate-500">
                © 2026 • ออกแบบและพัฒนาเพื่อนำเสนอผลงาน • ขอนแก่น, ประเทศไทย
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/jrKitt"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-white"
              >
                <FiGithub className="h-4 w-4" />
              </a>

              <a
                href="mailto:kittichdev@gmail.com"
                title="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-white"
              >
                <FiMail className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 font-mono text-xs text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-white"
              >
                <span>กลับสู่ด้านบน</span>
                <FiArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
