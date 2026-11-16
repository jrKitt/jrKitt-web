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
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900/60">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Public Repositories</h2>
        <p className="mt-4 font-mono text-xs text-slate-500 dark:text-slate-400">Loading GitHub repositories...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900/60">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Public Repositories</h2>
        <p className="mt-4 font-mono text-xs text-rose-500">Error: {error}</p>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/60">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-sky-600 dark:border-slate-800 dark:bg-slate-800 dark:text-sky-400">
          <FiGithub className="h-4 w-4" />
        </div>
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Public Repositories</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Latest active repositories from GitHub</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-4 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 transition hover:border-slate-300 hover:bg-white dark:border-slate-800 dark:bg-slate-800/40 dark:hover:border-slate-700 dark:hover:bg-slate-800/80"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-mono text-sm font-semibold text-slate-900 transition group-hover:text-sky-600 dark:text-slate-200 dark:group-hover:text-sky-400">
                  {repo.name}
                </h3>
                <FiExternalLink className="h-3 w-3 text-slate-400 transition group-hover:text-sky-600 dark:text-slate-500 dark:group-hover:text-sky-400" />
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {repo.description || "No description provided"}
              </p>
              {repo.language && (
                <span className="mt-2.5 inline-block rounded-md border border-slate-200 bg-white px-2 py-0.5 font-mono text-[10px] text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  {repo.language}
                </span>
              )}
            </div>
            {repo.stargazers_count > 0 && (
              <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 font-mono text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                <FiStar className="h-3 w-3 text-amber-500" />
                <span>{repo.stargazers_count}</span>
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
