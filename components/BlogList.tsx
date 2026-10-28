"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiBookOpen, FiArrowRight, FiCalendar } from "react-icons/fi";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
}

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Failed to load blog posts", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="space-y-6">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#00f0ff]">
          <FiBookOpen className="h-4 w-4" />
          <span>Articles &amp; Notes</span>
        </div>
        <div className="rounded-2xl border border-[#1a2233] bg-[#0d1017] p-8 text-center text-slate-500 font-mono text-xs">
          Loading articles...
        </div>
      </section>
    );
  }

  if (!posts.length) {
    return null;
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1a2233] bg-[#0d1017] text-[#00f0ff]">
            <FiBookOpen className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-white">Articles &amp; Experience</h2>
            <p className="font-mono text-xs text-slate-400">Technical insights, hackathon recaps, and engineering logs</p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-[#1a2233] bg-[#0d1017] transition hover:border-[#00f0ff]"
          >
            {post.image && (
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#06070a] border-b border-[#1a2233]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-2 font-mono text-xs text-[#00f0ff] mb-2">
                <FiCalendar className="h-3.5 w-3.5" />
                <span>{post.date}</span>
              </div>
              
              <h3 className="line-clamp-2 text-base font-bold text-white group-hover:text-[#00f0ff] transition">
                {post.title}
              </h3>
              
              <p className="mt-2 line-clamp-3 text-xs sm:text-sm leading-relaxed text-slate-400">
                {post.excerpt}
              </p>

              <div className="mt-auto pt-5 flex items-center gap-1.5 font-mono text-xs font-bold text-[#00f0ff]">
                <span>Read Story</span>
                <FiArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
