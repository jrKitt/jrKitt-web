"use client";

import { useEffect, useState } from "react";
import { FiGithub, FiStar, FiExternalLink } from "react-icons/fi";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
}

export default function GitHubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/jrKitt/repos?sort=stars&per_page=6");
        if (!response.ok) throw new Error("Failed to fetch repositories");
        const data = await response.json();
        setRepos(data as Repo[]);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <section className="rounded-2xl border border-slate-800/80 bg-[#070b16]/70 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white">Public Repositories</h2>
        <p className="mt-4 font-mono text-xs text-slate-500">Loading GitHub repositories...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="rounded-2xl border border-slate-800/80 bg-[#070b16]/70 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white">Public Repositories</h2>
        <p className="mt-4 font-mono text-xs text-red-400">Error: {error}</p>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-slate-800/80 bg-[#070b16]/70 p-6 sm:p-8">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-950/40 text-cyan-400">
          <FiGithub className="h-4 w-4" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Public Repositories</h2>
          <p className="font-mono text-xs text-slate-400">Latest active repositories from GitHub</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-4 rounded-xl border border-slate-800/80 bg-[#040712] p-4 transition hover:border-cyan-500/40 hover:bg-[#070e20]"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-mono text-sm font-semibold text-slate-200 transition group-hover:text-cyan-300">
                  {repo.name}
                </h3>
                <FiExternalLink className="h-3 w-3 text-slate-500 transition group-hover:text-cyan-400" />
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                {repo.description || "No description provided"}
              </p>
              {repo.language && (
                <span className="mt-2.5 inline-block rounded border border-cyan-950/80 bg-cyan-950/20 px-2 py-0.5 font-mono text-[10px] text-cyan-400">
                  {repo.language}
                </span>
              )}
            </div>
            {repo.stargazers_count > 0 && (
              <div className="flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900 px-2.5 py-1 font-mono text-xs text-slate-300">
                <FiStar className="h-3 w-3 text-cyan-400" />
                <span>{repo.stargazers_count}</span>
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
