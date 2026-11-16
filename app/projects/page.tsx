"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FiFolder, 
  FiExternalLink, 
  FiGithub, 
  FiSearch, 
  FiActivity, 
  FiServer, 
  FiArrowLeft,
  FiCode
} from "react-icons/fi";
import { Project } from "../../lib/projects";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data: Project[]) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load project.json", err);
        setLoading(false);
      });
  }, []);

  const rawCategories = Array.from(
    new Set(projects.map((p) => p.category).filter((c): c is string => Boolean(c)))
  );
  const categories: string[] = ["All", ...rawCategories];

  const getCategoryLabel = (cat: string) => {
    if (cat === "All") return "ทั้งหมด";
    return cat;
  };

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      query === "" ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some((t) => t.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-24 text-slate-800 transition-colors dark:bg-[#090b10] dark:text-slate-200">
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 font-mono text-xs text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white"
          >
            <FiArrowLeft className="h-3.5 w-3.5" />
            <span>ย้อนกลับหน้าแรก</span>
          </Link>
        </div>

        {/* Header Section */}
        <section className="mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-sky-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-sky-400">
              <FiFolder className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                ผลงานและระบบทั้งหมด
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                รวบรวมโปรเจกต์พัฒนาระบบ แพลตฟอร์มบนเว็บ และเครื่องมือที่เคยพัฒนา ({projects.length} รายการ)
              </p>
            </div>
          </div>
        </section>

        {/* Infrastructure & Live Nodes Cards */}
        <section className="mb-8">
          <h2 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            ระบบโครงสร้างพื้นฐาน &amp; คลาวด์ส่วนตัว
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="https://clouds.jrkitt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-slate-700"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-sky-600 dark:border-slate-800 dark:bg-slate-800/50 dark:text-sky-400">
                    <FiServer className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 transition group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
                      Labs Workspace
                    </h3>
                    <p className="font-mono text-xs text-slate-500 dark:text-slate-400">clouds.jrkitt.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 font-mono text-xs text-emerald-700 dark:border-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>ออนไลน์</span>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                สภาพแวดล้อมทดสอบและโฮสต์บริการส่วนตัวบนคลาวด์ (Cloud compute staging sandbox)
              </p>
            </a>

            <a
              href="https://ssm.jrkitt.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-slate-700"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-sky-600 dark:border-slate-800 dark:bg-slate-800/50 dark:text-sky-400">
                    <FiActivity className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 transition group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
                      System Monitoring
                    </h3>
                    <p className="font-mono text-xs text-slate-500 dark:text-slate-400">ssm.jrkitt.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 font-mono text-xs text-emerald-700 dark:border-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>ออนไลน์</span>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                ระบบติดตามสถานะเซิร์ฟเวอร์ เมตริกและ Uptime แบบเรียลไทม์ (Real-time telemetry cluster)
              </p>
            </a>
          </div>
        </section>

        {/* Search & Category Filter Pills */}
        <section className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="ค้นหาตามชื่อโปรเจกต์, เทคโนโลยี หรือคำสำคัญ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-slate-200 bg-white py-2 pl-10 pr-12 font-mono text-xs text-slate-800 placeholder-slate-400 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:placeholder-slate-500 dark:focus:border-sky-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 font-mono text-[11px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                ล้าง
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat as string)}
                className={`rounded-full px-3.5 py-1 font-mono text-xs font-medium transition ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white dark:bg-sky-400 dark:text-slate-950"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-white"
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>
        </section>

        {/* Project Grid */}
        {loading ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center font-mono text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400">
            กำลังโหลดข้อมูลโปรเจกต์...
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-900/50">
            <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
              ไม่พบโปรเจกต์ที่ตรงกับคำค้นหาหรือตัวกรองในขณะนี้
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-slate-900 bg-slate-900 px-4 py-1.5 font-mono text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:border-sky-400 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
            >
              รีเซ็ตตัวกรอง
            </button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
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
                  
                  {project.status && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/90 px-2.5 py-0.5 font-mono text-[11px] text-slate-700 shadow-sm backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/90 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{project.status}</span>
                    </div>
                  )}

                  {project.category && (
                    <div className="absolute top-3 left-3 rounded-md border border-slate-200/80 bg-white/90 px-2 py-0.5 font-mono text-[10px] text-slate-700 shadow-sm backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/90 dark:text-slate-300">
                      {project.category}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition dark:text-white dark:group-hover:text-sky-400">
                    {project.title}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>

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
        )}

        {/* Configuration Guide Box */}
        <section className="mt-16 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-sky-600 dark:border-slate-800 dark:bg-slate-800 dark:text-sky-400">
              <FiCode className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                การจัดการข้อมูลโปรเจกต์ผ่าน project.json
              </h4>
              <p className="mt-1 text-xs text-slate-500 leading-relaxed font-mono dark:text-slate-400">
                สามารถเพิ่มหรือแก้ไขข้อมูลโปรเจกต์ได้ที่ <code className="text-slate-800 bg-slate-100 dark:text-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">public/project.json</code> โดยกำหนด <code className="text-sky-600 dark:text-sky-400">title</code>, <code className="text-sky-600 dark:text-sky-400">description</code>, <code className="text-sky-600 dark:text-sky-400">link</code>, <code className="text-sky-600 dark:text-sky-400">github</code>, <code className="text-sky-600 dark:text-sky-400">image</code> และ <code className="text-sky-600 dark:text-sky-400">tags</code>
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className="mx-auto mt-16 w-full max-w-6xl px-4 text-center">
        <p className="font-mono text-xs text-slate-400 dark:text-slate-600">
          © 2026 • Kittichai Raksawong • jrkitt.com
        </p>
      </footer>
    </div>
  );
}
