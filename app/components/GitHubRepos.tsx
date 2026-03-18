'use client';

import { useEffect, useState } from 'react';

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
        const response = await fetch('https://api.github.com/users/jrKitt/repos?sort=stars&per_page=6');
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data = await response.json();
        setRepos(data as Repo[]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <section className="card-surface enter-rise-delay rounded-3xl p-6 sm:p-9">
        <h2 className="text-2xl font-semibold">Public Repositories</h2>
        <p className="text-muted mt-4">Loading repositories...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="card-surface enter-rise-delay rounded-3xl p-6 sm:p-9">
        <h2 className="text-2xl font-semibold">Public Repositories</h2>
        <p className="text-muted mt-4">Error: {error}</p>
      </section>
    );
  }

  return (
    <section className="card-surface enter-rise-delay rounded-3xl p-6 sm:p-9">
      <h2 className="text-2xl font-semibold">Public Repositories</h2>
      <p className="text-muted mt-2 text-sm">Latest projects from GitHub</p>

      <div className="mt-6 space-y-4">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-[var(--line)] p-4 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{repo.name}</h3>
                <p className="text-muted mt-1 text-sm leading-6">
                  {repo.description || 'No description provided'}
                </p>
              </div>
              {repo.stargazers_count > 0 && (
                <div className="flex items-center gap-1 rounded-full bg-black/5 px-3 py-1 text-xs font-semibold dark:bg-white/10">
                  <span>⭐</span>
                  <span>{repo.stargazers_count}</span>
                </div>
              )}
            </div>
            {repo.language && (
              <p className="text-muted mt-3 text-xs font-mono">{repo.language}</p>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
