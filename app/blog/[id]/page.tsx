"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiCalendar } from "react-icons/fi";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
}

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data: BlogPost[]) => {
        const found = data.find((p) => p.id === params.id);
        if (found) {
          setPost(found);
        }
      })
      .catch((err) => console.error("Failed to load blog posts", err))
      .finally(() => setLoading(false));
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#090b10] text-slate-500 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-ping rounded-full bg-sky-500" />
          <span>Loading article...</span>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-[#090b10] px-6 text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Post not found</h1>
        <p className="mt-2 text-slate-500 font-mono text-xs">The requested article could not be located.</p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-900 px-5 py-2 font-mono text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:border-sky-400 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
        >
          <FiArrowLeft className="h-4 w-4" />
          <span>Return to Home</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-24 text-slate-800 dark:bg-[#090b10] dark:text-slate-200">
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 font-mono text-xs text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white mb-8"
        >
          <FiArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Home</span>
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-600 dark:text-sky-400 mb-2.5">
            <FiCalendar className="h-3.5 w-3.5" />
            <span>{post.date}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
            {post.title}
          </h1>
        </header>

        {post.image && (
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="space-y-4 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 text-sm sm:text-base leading-relaxed text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
          {post.content.split("\n").map((paragraph, idx) => {
            if (paragraph.startsWith("**") && paragraph.includes("**", 2)) {
              const parts = paragraph.split("**");
              return (
                <p key={idx} className="leading-relaxed">
                  <strong className="text-sky-600 dark:text-sky-400 font-semibold">{parts[1]}</strong>
                  {parts[2]}
                </p>
              );
            }
            return paragraph ? (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ) : (
              <div key={idx} className="h-2" />
            );
          })}
        </div>
      </main>
    </div>
  );
}
