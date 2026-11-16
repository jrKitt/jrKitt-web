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
      <section className="space-y-4">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <FiBookOpen className="h-4 w-4" />
          <span>บทความและบันทึก</span>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-500 font-mono text-xs dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400">
          กำลังโหลดบทความ...
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
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-sky-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-sky-400">
            <FiBookOpen className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              บทความและบันทึกประสบการณ์
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              เรื่องเล่าจากการแข่งขัน Hackathon, การพัฒนาระบบจริง และเกร็ดความรู้ทางเทคนิค
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:border-slate-300 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-slate-700"
          >
            {post.image && (
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 border-b border-slate-200/80 dark:bg-slate-950 dark:border-slate-800">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-102"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-2 font-mono text-xs text-sky-600 dark:text-sky-400 mb-2">
                <FiCalendar className="h-3.5 w-3.5" />
                <span>{post.date}</span>
              </div>
              
              <h3 className="line-clamp-2 text-base font-bold text-slate-900 group-hover:text-sky-600 transition dark:text-white dark:group-hover:text-sky-400">
                {post.title}
              </h3>
              
              <p className="mt-2 line-clamp-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {post.excerpt}
              </p>

              <div className="mt-auto pt-5 flex items-center gap-1.5 font-mono text-xs font-semibold text-sky-600 dark:text-sky-400">
                <span>อ่านเรื่องเล่าฉบับเต็ม</span>
                <FiArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
