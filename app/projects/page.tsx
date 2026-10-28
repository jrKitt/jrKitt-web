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

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))];

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
    <div className="min-h-screen bg-[#06070a] pb-24 text-slate-100">
      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#1a2233] bg-[#0d1017] px-4 py-1.5 font-mono text-xs text-slate-300 transition hover:border-[#00f0ff] hover:text-[#00f0ff]"
          >
            <FiArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header Section */}
        <section className="mb-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1a2233] bg-[#0d1017] text-[#00f0ff]">
              <FiFolder className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">
                Projects &amp; Systems<span className="text-[#00f0ff]">.</span>
              </h1>
              <p className="mt-1 font-mono text-xs text-slate-400">
                Loaded dynamically from <code className="text-[#00f0ff] font-bold">project.json</code> • Production platforms, utilities, and developer tools
              </p>
            </div>
          </div>
        </section>

        {/* Infrastructure & Live Nodes Cards */}
        <section className="mb-10">
          <h2 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
            Active Infrastructure &amp; Workspaces
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="https://clouds.jrkitt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-[#1a2233] bg-[#0d1017] p-5 transition hover:border-[#00f0ff]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1a2233] bg-[#06070a] text-[#00f0ff]">
                    <FiServer className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white transition group-hover:text-[#00f0ff]">
                      Labs Workspace
                    </h3>
                    <p className="font-mono text-xs text-slate-400">clouds.jrkitt.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-[#1a2233] bg-[#06070a] px-2.5 py-1 font-mono text-xs text-[#00f0ff]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff]" />
                  <span>online</span>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Personal cloud compute instance and staging sandbox environment.
              </p>
            </a>

            <a
              href="https://ssm.jrkitt.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-[#1a2233] bg-[#0d1017] p-5 transition hover:border-[#00f0ff]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1a2233] bg-[#06070a] text-[#00f0ff]">
                    <FiActivity className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white transition group-hover:text-[#00f0ff]">
                      System Monitoring
                    </h3>
                    <p className="font-mono text-xs text-slate-400">ssm.jrkitt.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-[#1a2233] bg-[#06070a] px-2.5 py-1 font-mono text-xs text-[#00f0ff]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff]" />
                  <span>online</span>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Real-time server analytics, telemetry metrics, and uptime monitoring cluster.
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
              placeholder="Search by title, stack, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-[#1a2233] bg-[#0d1017] py-2.5 pl-10 pr-4 font-mono text-xs text-slate-200 placeholder-slate-500 focus:border-[#00f0ff] focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 font-mono text-[10px] text-slate-400 hover:text-white"
              >
                Clear
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
                    ? "bg-[#00f0ff] text-black font-bold border border-[#00f0ff]"
                    : "border border-[#1a2233] bg-[#0d1017] text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Project Grid */}
        {loading ? (
          <div className="rounded-2xl border border-[#1a2233] bg-[#0d1017] p-12 text-center font-mono text-xs text-slate-500">
            Loading projects from project.json...
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="rounded-2xl border border-[#1a2233] bg-[#0d1017] p-12 text-center">
            <p className="font-mono text-xs text-slate-400">No projects match the current search or filter.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#00f0ff] bg-[#00f0ff] px-4 py-1.5 font-mono text-xs font-bold text-black"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
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
                  
                  {project.status && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-[#1a2233] bg-[#06070a] px-2.5 py-1 font-mono text-[11px] text-[#00f0ff]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff]" />
                      <span>{project.status}</span>
                    </div>
                  )}

                  {project.category && (
                    <div className="absolute top-3 left-3 rounded-md border border-[#1a2233] bg-[#06070a] px-2.5 py-1 font-mono text-[10px] text-slate-300">
                      {project.category}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00f0ff] transition">
                    {project.title}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-xs sm:text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

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

                  <div className="mt-6 flex items-center gap-3 border-t border-[#1a2233] pt-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#00f0ff] bg-[#00f0ff] px-3.5 py-1.5 font-mono text-xs font-bold text-black hover:bg-[#38bdf8] transition"
                      >
                        <span>View Live</span>
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
        )}

        {/* Configuration Guide Box */}
        <section className="mt-16 rounded-2xl border border-[#1a2233] bg-[#0d1017] p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#1a2233] bg-[#06070a] text-[#00f0ff]">
              <FiCode className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold text-[#00f0ff] uppercase tracking-wider">
                Managing Projects via project.json
              </h4>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed font-mono">
                Easily add or update projects in <code className="text-white bg-[#06070a] px-1.5 py-0.5 rounded border border-[#1a2233]">public/project.json</code>. 
                Configure <code className="text-[#00f0ff]">title</code>, <code className="text-[#00f0ff]">description</code>, <code className="text-[#00f0ff]">link</code>, <code className="text-[#00f0ff]">github</code>, <code className="text-[#00f0ff]">image</code>, and <code className="text-[#00f0ff]">tags</code>.
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className="mx-auto mt-20 w-full max-w-6xl px-4 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-slate-600">
          Built for jrkitt.com
        </p>
      </footer>
    </div>
  );
}
